
function validateField() {
    var element = document.getElementById("num");
    var txt = "";
    if (element.checkValidity() == false) {
      txt = element.validationMessage;
    } else {
      txt = "It's Valid !!!";
    }
    
    document.getElementById("content1").innerHTML = txt;
    element.value = "";
}

function validatePattern() {
  var element = document.getElementById("nameId");
  var txt = "";
  if (element.validity.patternMismatch) {
    txt = element.validationMessage;
  } else {
      txt = "It's Valid !!!";
  }

  document.getElementById("content2").innerHTML = txt;
  element.value = "";
}

// customError - Returns true if a custom validity message is set
// rangeOverflow - Returns true if value is greater than max attribute
// rangeUnderflow - Returns true if value is less than min attribute
// typeMismatch - Returns true if value is invalid per its type attribute
// valueMissing - Returns true if a required element has no value
// valid - Returns true if value is valid