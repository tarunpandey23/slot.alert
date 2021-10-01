function dateHandler() {
  document.getElementById("datediv").style.display = "block";
}
function withOutDateHandler() {
  document.getElementById("datediv").style.display = "none";
}
function formValidation() {
  const forNameRegx = /^[a-zA-Z ]{2,30}$/;
  const forPhoneRegx = /[6-9]\d{9}/;
  const name = document.getElementById("name").value;
  const phoneNum = document.getElementById("ph_num").value;
  const pinCode = document.getElementById("pin_code").value;
  const date = document.getElementById("dates").value;

    const formattedDate = date.split("-")[2] + '-' + date.split("-")[1] + '-' + date.split("-")[0];
    console.log(formattedDate);
  


  if (name == "") {
    document.getElementById("namingError").innerHTML =
      "**please enter valid name";
    return false;
  } else {
    document.getElementById("namingError").innerHTML = "";
  }
  if (name.match(forNameRegx)) {
    document.getElementById("namingError").innerHTML = "";
  } else {
    document.getElementById("namingError").innerHTML =
      "**please enter a valid name";
    return false;
  }
  if (phoneNum == "") {
    document.getElementById("phoneNumError").innerHTML =
      "**please enter your valid phone number";

    return false;
  } else {
    document.getElementById("phoneNumError").innerHTML = "";
  }

  if (isNaN(phoneNum)) {
    document.getElementById("phoneNumError").innerHTML =
      "**please enter your valid phone number,characters are not allowed";
    return false;
  }
  if (phoneNum.length > 10 || phoneNum.length < 10) {
    document.getElementById("phoneNumError").innerHTML =
      "**please enter your valid phone number";
    return false;
  }
  if (phoneNum.match(forPhoneRegx)) {
    document.getElementById("phoneNumError").innerHTML = "";
  } else {
    document.getElementById("phoneNumError").innerHTML =
      "**please enter your valid phone number";
    return false;
  }
  if (pinCode == "") {
    document.getElementById("pinCodeError").innerHTML =
      "**please enter your valid pincode number";
    return false;
  } else {
    document.getElementById("pinCodeError").innerHTML = "";
  }

  if (pinCode.length > 6 || pinCode.length < 6) {
    document.getElementById("pinCodeError").innerHTML =
      "**please enter your valid pincode number";
    return false;
  }
  if (isNaN(pinCode)) {
    document.getElementById("pinCodeError").innerHTML =
      "**please enter your valid pincode number,characters are not allowed";
    return false;
  }
  
}

