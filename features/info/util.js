module.exports = {
	//returns true if any of the strArr strings are found inside str
	matchesStrings: function (mainString, setOfStrings) {
		//Taken from: https://stackoverflow.com/questions/18294419/check-if-any-of-multiple-strings-exist-in-a-string
		var stringExists = false;

		for (var i = 0; i < setOfStrings.length; i++) {
			if (mainString.indexOf(setOfStrings[i]) != -1) stringExists = true;
		}
		return stringExists;
	},
};
