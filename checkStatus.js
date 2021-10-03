const api_url = "https://covid-slot-alert.herokuapp.com/";
const api_del = "https://covid-slot-alert.herokuapp.com/delete/";
const phoneNumber = document.getElementById("validation");
phoneNumber.addEventListener("submit", phoneValidation);
function phoneValidation(e) {
  e.preventDefault();
  const forPhoneRegx = /[6-9]\d{9}/;
  const phone = document.getElementById("ph_num").value;
  if (phone == "") {
    document.getElementById("phoneNumError").innerHTML =
      "**please enter your registered phone number";
    return false;
  } else {
    document.getElementById("phoneNumError").innerHTML = "";
  }
  if (isNaN(phone)) {
    document.getElementById("phoneNumError").innerHTML =
      "**please enter your valid phone number,characters are not allowed";
    return false;
  }
  if (phone.length > 10 || phone.length < 10) {
    document.getElementById("phoneNumError").innerHTML =
      "**please enter your valid phone number";
    return false;
  }
  if (phone.match(forPhoneRegx)) {
    document.getElementById("phoneNumError").innerHTML = "";
  } else {
    document.getElementById("phoneNumError").innerHTML =
      "**please enter your valid phone number";
    return false;
  }
  phoneCheck(phone);
}
function phoneCheck(phone) {
  let getData = "";
  fetch(api_url + `search/${phone}`)
    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.data.length == 0) {
        document.getElementById("error").innerHTML =
          "the number you have entered is not registered, <br> wait a while and  check another registered number <br> thankyou... ";
          setTimeout(function(){ 
            window.reload();
           }, 6000);


        
      } else {
        let elements = data.data[0];
        let populateData = `<div class="dataBox" >
        <table>
          <tr>
            <th>name</th>
            <th>phone</th>
            <th>pin</th>
            <th>date</th>
          </tr>
          <tr class="data">
             <td>${elements.name}</td>
             <td>${elements.phone}</td>
             <td>${elements.pin}</td>
             <td>${elements.date}</td>
            </tr>
        </table>
        <br><br>
        <input class="btn2" type="button" name="reload id="reload" value="check another" onclick="reload()"  />
         <input class="btn2" type="button" name="delete" id="del" value="Delete Record"  onclick="confermDeleteData()"  />
        </div> 
</div>`;
        getData = getData + populateData;
        document.getElementById("renderField").innerHTML = getData;
      }
    });
}
function reload() {
  window.location.reload();
}
function confermDeleteData() {
  var showDiv = document.getElementById("conButton");
  showDiv.classList.remove("conferm");
}
function deleteData() {
  const ph = document.getElementById("ph_num").value;
  fetch(api_del + `${ph}`)
    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.msg.includes("deleted")) {
        window.location.replace("/deleteMsg.html");
      }
    });
}
function noDeleteData() {
  var showDiv = document.getElementById("conButton");
  showDiv.classList.add("conferm");
}
