function validateFields(){
	var name = document.forms["testForm"]["name"].value;
	
	var email = document.forms["testForm"]["email"].value;
	var atLocation = email.indexOf("@");
    var dotLocation = email.lastIndexOf(".");
	
	var zipcode = document.forms["testForm"]["zipcode"].value;
	
	if ( name == null || name == "" ) {
    	alert( "Name is mandatory !!!" );
    	return false;
    }
	if ( email == null || email == "" ) {
    	alert( "Email is mandatory !!!" );
    	return false;
    }
	if(isNaN(zipcode) || zipcode.length != 6 ) {
		alert( "Please provide a 6 digit zipcode." );
		document.testForm.zipcode.focus() ;
		return false;
    }
	if(atLocation < 1 || (dotLocation - atLocation < 2 )){
	   alert ( "Email format not valid !!!" );
		document.testForm.email.focus();
		return false;
    }
}