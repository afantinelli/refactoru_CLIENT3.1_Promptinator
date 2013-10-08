/*Disaster Victim Relief */

var victims = prompt("Please enter the name of a disaster victim in need of assistance");
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