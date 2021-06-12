function validateField() 
{
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password1 = document.getElementById("password").value;
 
  var txt = "";
  if (name.validity.patternMismatch) 
  {
	txt = name.validationMessage;
	alert(txt);
	name.value = "";
  } 
  else if(email.validity.patternMismatch)
  {
	txt = email.validationMessage;
	console.log(txt);
	alert(txt);
	email.value = "";
  }
  else if(password1.validity.patternMismatch)
  {
	txt = password1.validationMessage;
	console.log(txt);
	alert(txt);
	password1.value = "";
  }
  else{
	  return false;
  }
}