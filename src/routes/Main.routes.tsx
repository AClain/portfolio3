import { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "components/Home/Home";
import { Intro } from "components/Intro/Intro";
import { Skills } from "components/Skills/Skills";
import { Projects } from "components/Projects/Projects";
import { Contact } from "components/Contact/Contact";

import { BackHome } from "components/Global/BackHome";

const Main: FC<{}> = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/intro'>
					<BackHome />
					<Intro />
				</Route>
				<Route exact path='/skills'>
					<BackHome />
					<Skills />
				</Route>
				<Route exact path='/projects'>
					<BackHome />
					<Projects />
				</Route>
				<Route exact path='/contact'>
					<BackHome />
					<Contact />
				</Route>
			</Switch>
		</Router>
	);
};

export { Main };
