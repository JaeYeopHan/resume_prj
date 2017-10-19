import Component from "../Component";
import DefaultTemplate from "./DefaultTemplate.hbs";
import "./DefaultStyleCommon.css";
import "./DefaultStyleMobile.css";
import "./DefaultStyleDesktop.css";

class Default extends Component {
	constructor(root, {
		profile = {},
		work = {},
		blog = {},
		projects = {},
		education = {},
		activity = {},
	} = {}) {
		super(root, [
			{profile, isNeedImage: true},
			{work, isNeedImage: true},
			{blog, isNeedImage: false},
			{projects, isNeedImage: false},
			{education, isNeedImage: true},
			{activity, isNeedImage: true},
		]);
		super.render(DefaultTemplate);

		Default.attachEvent();
	}

	/**
	 * @static
	 * @description Attach events to variables
	 */
	static attachEvent() {
		document.querySelector("#totopbtn").addEventListener("click", e => {
			e.preventDefault();
			window.scrollTo(0, 0);
		});
	}
}

export default Default;
