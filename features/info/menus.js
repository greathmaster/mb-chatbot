const resume = require("./resume.js");
module.exports = function() {	
	return Object.values(resume).map((el) => {
		return { title: el["title"], payload: el["slug"] };
	});
};
