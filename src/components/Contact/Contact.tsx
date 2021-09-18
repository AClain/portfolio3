import { FC } from "react";
import {
	Box,
	Button,
	Divider,
	FormControl,
	FormHelperText,
	Input,
	InputAdornment,
	InputLabel,
	TextField,
} from "@material-ui/core";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { useStyles } from "./Contact.styles";
import { HiCursorClick, HiMail, HiOutlineChat, HiUserCircle } from "react-icons/hi";
import { RiMailSendLine } from "react-icons/ri";

type Inputs = {
	name: string;
	email: string;
	text: string;
};

const Contact: FC<{}> = () => {
	const classes = useStyles();

	const {
		control,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();

	console.log(watch("name"));

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data, errors);

	const hasErrors = (name: string): boolean => {
		console.log(errors);
		return errors.hasOwnProperty(name);
	};

	return (
		<Box className={classes.container}>
			<h1 className='title'>Contact</h1>
			<Box className={classes.globalContainer}>
				<Box className={classes.linkContainer}>
					<a className={classes.link} href='https://github.com/AClain' rel='noreferrer' target='_blank'>
						<img className='icon' src='/images/svgs/github.svg' alt='github' />
					</a>
					<a className={classes.link} href='mailto:alexandre.clain11@gmail.com'>
						alexandre.clain11@gmail.com <HiCursorClick className={classes.clickIcon} />
					</a>
					<a
						className={classes.link}
						href='https://www.linkedin.com/in/alexandre-clain/'
						rel='noreferrer'
						target='_blank'
					>
						<img className='icon' src='/images/svgs/linkedin.svg' alt='linkedin' />
					</a>
				</Box>
				<Divider style={{ width: "100%", margin: "50px 0px" }} />
				<form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
					<Controller
						name='name'
						control={control}
						rules={{ required: true }}
						render={({ field }) => (
							<FormControl error={hasErrors("email")} {...field} className={classes.input}>
								<InputLabel style={{ color: "var(--text)" }} htmlFor='name'>
									Name
								</InputLabel>
								<Input
									id='name'
									style={{ color: "var(--text)" }}
									startAdornment={
										<InputAdornment position='start'>
											<HiUserCircle color={hasErrors("email") ? "#d32f2f" : "var(--text)"} />
										</InputAdornment>
									}
								/>

								{errors.name?.type === "required" && <FormHelperText>Your name is required</FormHelperText>}
							</FormControl>
						)}
					/>
					<Controller
						name='email'
						control={control}
						rules={{ required: true }}
						render={({ field }) => (
							<FormControl error={hasErrors("email")} {...field} className={classes.input}>
								<InputLabel style={{ color: "var(--text)" }} htmlFor='email'>
									Email adress
								</InputLabel>
								<Input
									id='email'
									style={{ color: "var(--text)" }}
									startAdornment={
										<InputAdornment position='start'>
											<HiMail color={hasErrors("email") ? "#d32f2f" : "var(--text)"} />
										</InputAdornment>
									}
								/>
								{errors.email?.type === "required" && <FormHelperText>Your email adress is required</FormHelperText>}
							</FormControl>
						)}
					/>
					<Controller
						name='text'
						control={control}
						rules={{ required: true, minLength: 15 }}
						render={({ field }) => (
							<TextField
								{...field}
								id='text'
								label='Text'
								multiline
								error={hasErrors("email")}
								helperText={errors.text?.type === "required" && "A text is required"}
								className={classes.input}
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>
											<HiOutlineChat color={hasErrors("email") ? "#d32f2f" : "var(--text)"} />
										</InputAdornment>
									),
									style: { color: "var(--text)" },
								}}
								InputLabelProps={{
									style: { color: "var(--text)" },
								}}
							/>
						)}
					/>

					<Box textAlign='right'>
						<Button style={{ color: "var(--text)" }} type='submit' endIcon={<RiMailSendLine />}>
							Send
						</Button>
					</Box>
				</form>
			</Box>
		</Box>
	);
};

export { Contact };
