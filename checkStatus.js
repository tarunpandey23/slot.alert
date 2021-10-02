const api_url = "https://covid-slot-alert.herokuapp.com/";
const api_del="https://covid-slot-alert.herokuapp.com/delete/";


const phoneNumber = document.getElementById("validation");
phoneNumber.addEventListener("submit", phoneValidation);


function phoneValidation(e) {
  e.preventDefault();
  const phone = document.getElementById("ph_num").value;
  // console.log(phone);
  phoneCheck(phone);
}

function phoneCheck(phone) {
  let getData = "";
  fetch(api_url + `search/${phone}`)
    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      let elements = data.data[0];
      // console.log(data.data[0].name);
      // console.log(elements);
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
        
        </div> 
</div>`;


          
      getData = getData + populateData;
      document.getElementById("renderField").innerHTML = getData;
         
      
    });
//  var ele=  document.getElementById("button");
//  ele.classList.remove("hide");
 setTimeout(function(){ 
   
  var ele=  document.getElementById("button");
 ele.classList.remove("hide"); 
}, 5000);
}

function reload() {
  window.location.reload();
  
}
function confermDeleteData(){
  var showDiv=document.getElementById('conButton');
  showDiv.classList.remove("conferm");

}
function deleteData(){
  const ph=document.getElementById("ph_num").value;
  fetch(api_del+`${ph}`).then((Response)=>{
        return Response.json();
      }).then((data)=>{
        // console.log(data);
        if (data.msg.includes("deleted")){
          window.location.replace("/deleteMsg.html");
        }
      })

}
 

