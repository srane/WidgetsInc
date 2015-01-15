var countryStateList = {};
countryStateList['USA'] = ['Alabama'
	,'Alaska'
	,'Arizona'
	,'Arkansas'
	,'California'
	,'Colorado'
	,'Connecticut'
	,'Delaware'
	,'Florida'
	,'Georgia'
	,'Hawaii'
	,'Idaho'
	,'Illinois'
	,'Indiana'
	,'Iowa'
	,'Kansas'
	,'Kentucky'
	,'Louisiana'
	,'Maine'
	,'Maryland'
	,'Massachusetts'
	,'Michigan'
	,'Minnesota'
	,'Mississippi'
	,'Missouri'
	,'Montana'
	,'Nebraska'
	,'Nevada'
	,'New Hampshire'
	,'New Jersey'
	,'New Mexico'
	,'New York'
	,'North Carolina'
	,'North Dakota'
	,'Ohio'
	,'Oklahoma'
	,'Oregon'
	,'Pennsylvania'
	,'Rhode Island'
	,'South Carolina'
	,'South Dakota'
	,'Tennessee'
	,'Texas'
	,'Utah'
	,'Vermont'
	,'Virginia'
	,'Washington'
	,'West Virginia'
	,'Wisconsin'
	,'Wyoming'];
countryStateList['Canada'] = ['Alberta'
	,'British Columbia'
	,'Manitoba'
	,'New Brunswick'
	,'Newfoundland and Labrador'
	,'Nova Scotia'
	,'Ontario'
	,'Prince Edward Island'
	,'Quebec'
	,'Saskatchewan'
	,'Northwest Territories'
	,'Nunavut'
	,'Yukon'];
var fieldsList = ["firstName", "lastName", "country", "state"];

function onCountryChanged() {
	var countrySelection = document.getElementById("country");
	var selectedCountry = countrySelection.options[countrySelection.selectedIndex].value;
	var statesList = countryStateList[selectedCountry];
	var stateSelection = document.getElementById("state");
	
	while(stateSelection.options.length) {
		stateSelection.remove(0);
	}
	if(statesList) {
		for(var i = 0; i < statesList.length; i++) {
		stateSelection.options.add(new Option(statesList[i],statesList[i]));
		}
	}			
}

function resetForm() {
	var stateSelection = document.getElementById("state");
	
	while(stateSelection.options.length) {
		stateSelection.remove(0);
	}
	for(var i = 0; i < fieldsList.length; i++) {
		document.getElementById(fieldsList[i] + "Label").style.color = "#000000";
	}
	document.getElementById("blankFields").style.display = 'none';
}

function validate() {			
	var isValid = true;
	for(var i = 0; i < fieldsList.length; i++) {
		var fieldValue = document.forms["form"][fieldsList[i]].value;
		if(fieldValue == null || fieldValue == "") {
			document.getElementById(fieldsList[i] + "Label").style.color = "#FF0000";
			isValid = false;
			document.getElementById("blankFields").style.display = 'block';
		}
		else {
			document.getElementById(fieldsList[i] + "Label").style.color = "#000000";
		}
	}
	if(isValid) {
		document.getElementById("blankFields").style.display = 'none';
	}
	return isValid;
}

function printFooter() {
	var date = new Date();
	document.write("Copyright &copy " + date.getFullYear() + " Siddhant Rane");
}