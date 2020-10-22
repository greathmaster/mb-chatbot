const { jobHistory } = require("./info/resume.js");
const menus = require("./info/menus");
const { matchesStrings } = require("./info/util.js");

module.exports = function (controller) {
	// use a function to match a condition in the message
	controller.hears(
		async (message) => {
			return (
				(message.text &&
					message.text.toLowerCase() === jobHistory.slug) ||
				matchesStrings(message.text.toLowerCase(), [
					"experience",
					"history",
					"work",
					"career",
					"employee",
					"employment",
					"job",
				])
			);
		},

		["message"],
		async (bot, message) => {
			let htmlString = '<h3>My Job History...</h3>'

			jobHistory.listOfCompanies.map((company) => {
				return `<p><strong>Company:</strong> ${company.companyName} from ${company.startDate} to ${company.endDate}</p><p><strong>Title: </strong>${company.jobTitle}</p><p><strong>Description: </strong>${company.jobDescription}</p>`
			}).forEach((info) => {
				htmlString = htmlString + info + '<br />'
			})
			
			await bot.reply(message, {
				text: htmlString,
				quick_replies: menus(),
			});
		}
	);
};