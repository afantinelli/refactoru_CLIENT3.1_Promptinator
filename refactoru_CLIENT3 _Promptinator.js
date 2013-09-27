/*Disaster Victim Relief */

var victims = prompt("How many disaster victims are there?" +
	" \n Please enter the number of disaster victims");
	var victimNameArray = new Array();
	var victimPhoneNumberArray = new Array();
	var victimStreetArray = new Array();
	
	
	for (var i=0;i<victims;i++){
		var VictimName = prompt("Victims Name");
		var VictimPhoneNumber = prompt("Victims Phone Number");
		var VictimStreet = prompt("Victims Street Address");

		victimNameArray.push(VictimName);
		victimPhoneNumberArray.push(VictimPhoneNumber);
		victimStreetArray.push(VictimStreet);
}
	/*
	alert("Name: " + victimNameArray)
	alert("Phone Number: " + victimPhoneNumberArray)
	alert("Street: " + victimStreetArray)
	*/

	console.log("Name: " + victimNameArray)
	console.log("Phone Number: " + victimPhoneNumberArray)
	console.log("Street: " + victimStreetArray)

	confirmVictims = confirm("Please press 'OK' if the information you have entered is correct \n" +
		"Name(s): " + victimNameArray + "\n" +
		"Phone Number(s): " + victimPhoneNumberArray + "\n" +
		"Street Address(es): " + victimStreetArray);
	if(confirmVictims === true){
		alert("Thank you for your submission, you will be contacted shortly");
	}else{
		alert("You pressed 'Cancel'. Please enter the correct information again");
	}


/*Disaster Victim Relief Volunteers */

var volunteers = prompt("How many disaster relief volunteers are there?" +
	" \n Please enter the number of disaster relief volunteers");

	var volunteerNameArray = new Array();
	var volunteerPhoneNumberArray = new Array();
	var volunteerStreetArray = new Array();
	
	
	for (var i=0;i<volunteers;i++){
		var VolunteerName = prompt("Volunteers Name");
		var VolunteerPhoneNumber = prompt("Volunteers Phone Number");
		var VolunteerStreet = prompt("Volunteers Street Address");

		volunteerNameArray.push(VolunteerName);
		volunteerPhoneNumberArray.push(VolunteerPhoneNumber);
		volunteerStreetArray.push(VolunteerStreet);
	}
		/*
	alert("Name: " + volunteerNameArray)
	alert("Phone Number: " + volunteerPhoneNumberArray)
	alert("Street: " + volunteerStreetArray)
	*/

	console.log("Name: " + volunteerNameArray)
	console.log("Phone Number: " + volunteerPhoneNumberArray)
	console.log("Street: " + volunteerStreetArray)

	confirmVolunteers = confirm("Please press 'OK' if the information you have entered is correct \n" +
		"Name(s): " + volunteerNameArray + "\n" +
		"Phone Number(s): " + volunteerPhoneNumberArray + "\n" +
		"Street Address(es): " + volunteerStreetArray);
	if(confirmVolunteers === true){
		alert("Thank you for your submission, you will be contacted shortly");
	}else{
		alert("You pressed 'Cancel'. Please enter the correct information again");
	}
