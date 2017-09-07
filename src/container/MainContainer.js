import {
	Profile,
	Work,
	Project,
	Education,
} from "../components";

import Dom from "../utils/DOM";

class MainContainer {
	constructor({
		profile,
		work,
		project,
		technique,
		education,
	}) {
		this._profile = new Profile(Dom.elm("#root"), profile);
		this._work = new Work(this._profile.subRoot, work);
		this._project = new Project(this._work.subRoot, project);
		this._education = new Education(this._project.subRoot, education);
	}
}

export default MainContainer;
