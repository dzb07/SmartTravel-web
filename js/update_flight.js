var firebaseRef = firebase.database().ref();
var database = firebase.database();
var ref = new Firebase("https://smarttravel-ba2e5.firebaseio.com/");

//my variables
var label="Destination";
const ulList=document.getElementById('data');
const dbRefObject = firebase.database().ref().child('Austrian Airlines');

dbRefObject.on('child_added', snap => {
 const dep_place=snap.child("dep_place").val();
 const dest_place=snap.child("dest_place").val();
 const dep_date=snap.child("dep_date").val();
 const arr_date=snap.child("arr_date").val();
 const dep_time=snap.child("dep_time").val();
 const arr_time=snap.child("arr_time").val();
 const ec_seats_num=snap.child("ec_seats_num").val();
 const fc_seats_num=snap.child("fc_seats_num").val();
 const bc_seats_num=snap.child("bc_seats_num").val();
 const imgUrl=snap.child("imgUrl").val();
 const price=snap.child("price").val();
 const br=document.createElement('br');
 const br1=document.createElement('br');
 const br2=document.createElement('br');
 const br3=document.createElement('br');
 const br4=document.createElement('br');
 const br5=document.createElement('br');
 const br6=document.createElement('br');
 const br7=document.createElement('br');
 const br8=document.createElement('br');
 const br9=document.createElement('br');
 const br10=document.createElement('br');
 const br11=document.createElement('br');

 const form=document.createElement('form');
 form.id=snap.key;
 ulList.appendChild(form);

 const img=document.createElement('img');
 img.setAttribute("src", imgUrl);
 img.setAttribute("height", "250");
 img.setAttribute("width", "300");
 img.setAttribute("alt", dest_place);
 img.setAttribute("title", dest_place);
 form.appendChild(img);
 img.style.margin="30px";

    //document.getElementById("data").style.display = "inline-block";


  
form.appendChild(br);


 const imgUrl01=document.createElement('input');
 imgUrl01.setAttribute("type", "text");
 imgUrl01.setAttribute("value", imgUrl);
 form.appendChild(imgUrl01);
 imgUrl01.id="imageurl";
 imgUrl01.style.width="200px";
 imgUrl01.style.margin="10px";
 const label01=document.createElement("LABEL");
 label01.innerHTML="URL:";
 label01.setAttribute("for", "imageurl");
 document.getElementById(snap.key).insertBefore(label01,imgUrl01);


 form.appendChild(br1);
 
 const departure_place=document.createElement('input');
 departure_place.setAttribute("type", "text");
 departure_place.setAttribute("value", dep_place);
 form.appendChild(departure_place);
 departure_place.style.width="200px";
 departure_place.style.margin="10px";
 departure_place.id="departure_place";
 const label02=document.createElement("LABEL");
 label02.innerHTML="Departure place:"
 label02.setAttribute("for", "departure_place");
 document.getElementById(snap.key).insertBefore(label02,departure_place);


 form.appendChild(br2);

 const destination_place=document.createElement('input');
 destination_place.setAttribute("type", "text");
 destination_place.setAttribute("value", dest_place);
 form.appendChild(destination_place);
 destination_place.style.width="200px";
 destination_place.style.margin="10px";
 destination_place.id="destination_place";
 const label03=document.createElement("LABEL");
 label03.innerHTML="Destination place:"
 label03.setAttribute("for", "destination_place");
 document.getElementById(snap.key).insertBefore(label03,destination_place);

 form.appendChild(br3);

 const departure_date=document.createElement('input');
 departure_date.setAttribute("type", "date");
 departure_date.setAttribute("value", dep_date);
 form.appendChild(departure_date);
 departure_date.style.width="200px";
 departure_date.style.margin="10px";
 departure_date.id="departure_date";
 const label04=document.createElement("LABEL");
 label04.innerHTML="Departure date:"
 label04.setAttribute("for", "departure_date");
 document.getElementById(snap.key).insertBefore(label04,departure_date);


 form.appendChild(br4);

 const arrival_date=document.createElement('input');
 arrival_date.setAttribute("type", "date");
 arrival_date.setAttribute("value", arr_date);
 form.appendChild(arrival_date);
 arrival_date.style.width="200px";
 arrival_date.style.margin="10px";
 arrival_date.id="arrival_date";
 const label05=document.createElement("LABEL");
 label05.innerHTML="Arrival date:"
 label05.setAttribute("for", "arrival_date");
 document.getElementById(snap.key).insertBefore(label05,arrival_date);

 form.appendChild(br5);

 const departure_time=document.createElement('input');
 departure_time.setAttribute("type", "time");
 departure_time.setAttribute("value", dep_time);
 form.appendChild(departure_time);
 departure_time.style.width="200px";
 departure_time.style.margin="10px";
 departure_time.id="departure_time";
 const label06=document.createElement("LABEL");
 label06.innerHTML="Departure time:"
 label06.setAttribute("for", "departure_time");
 document.getElementById(snap.key).insertBefore(label06,departure_time);

 form.appendChild(br6);

 const arrival_time=document.createElement('input');
 arrival_time.setAttribute("type", "time");
 arrival_time.setAttribute("value", arr_time);
 form.appendChild(arrival_time);
 arrival_time.style.width="200px";
 arrival_time.style.margin="10px";
 arrival_time.id="arrival_time";
 const label07=document.createElement("LABEL");
 label07.innerHTML="Arrival time:"
 label07.setAttribute("for", "arrival_time");
 document.getElementById(snap.key).insertBefore(label07,arrival_time);

 form.appendChild(br7);

 const economy_seats=document.createElement('input');
 economy_seats.setAttribute("type", "number");
 economy_seats.setAttribute("value", ec_seats_num);
 form.appendChild(economy_seats);
 economy_seats.style.width="200px";
 economy_seats.style.margin="10px";
 economy_seats.id="economy_seats";
 const label08=document.createElement("LABEL");
 label08.innerHTML="Economy class seats:"
 label08.setAttribute("for", "economy_seats");
 document.getElementById(snap.key).insertBefore(label08,economy_seats);

 form.appendChild(br8);

 const firstclass_seats=document.createElement('input');
 firstclass_seats.setAttribute("type", "number");
 firstclass_seats.setAttribute("value", fc_seats_num);
 form.appendChild(firstclass_seats);
 firstclass_seats.style.width="200px";
 firstclass_seats.style.margin="10px";
 firstclass_seats.id="firstclass_seats";
 const label09=document.createElement("LABEL");
 label09.innerHTML="First class seats:"
 label09.setAttribute("for", "firstclass_seats");
 document.getElementById(snap.key).insertBefore(label09,firstclass_seats);

 form.appendChild(br9);

 const businessclass_seats=document.createElement('input');
 businessclass_seats.setAttribute("type", "number");
 businessclass_seats.setAttribute("value", bc_seats_num);
 form.appendChild(businessclass_seats);
 businessclass_seats.style.width="200px";
 businessclass_seats.style.margin="10px";
 businessclass_seats.id="businessclass_seats";
 const label10=document.createElement("LABEL");
 label10.innerHTML="Business class seats:"
 label10.setAttribute("for", "businessclass_seats");
 document.getElementById(snap.key).insertBefore(label10,businessclass_seats);

 form.appendChild(br10);

 const b_price=document.createElement('input');
 b_price.setAttribute("type", "number");
 b_price.setAttribute("value",price);
 form.appendChild(b_price);
 b_price.style.width="200px";
 b_price.style.margin="10px";
 b_price.id="b_price";
 const label11=document.createElement("LABEL");
 label11.innerHTML="Basic price of a seat:"
 label11.setAttribute("for", "b_price");
 document.getElementById(snap.key).insertBefore(label11,b_price);

 form.appendChild(br11);
 
 const button1=document.createElement('button');
 button1.id = 'newbtn';
 button1.innerHTML=("Izmijeni");
 form.appendChild(button1);
 button1.style.backgroundColor=" #0066ff";
 button1.style.color="white";
 button1.style.width="120px";
 button1.style.height="40px";

 var x=document.getElementById(snap.key);


 button1.addEventListener("mouseover", mouseOver);
 button1.addEventListener("mouseout", mouseOut);

 function mouseOver() {
     button1.style.backgroundColor = "white";
     button1.style.color="#0066ff";
 }

 function mouseOut() {
     button1.style.backgroundColor = "#0066ff";
     button1.style.color="white";
 }

 const button2=document.createElement('button');
 button2.id = 'newbtn2';
 button2.innerHTML=("Izbrisi");
 form.appendChild(button2);
 button2.style.backgroundColor="#ff471a";
 button2.style.color="white";
 button2.style.width="100px";
 button2.style.height="40px";

 button2.addEventListener("mouseover", mouseOver2);
 button2.addEventListener("mouseout", mouseOut2);

  function mouseOver2() {
      button2.style.backgroundColor = "white";
      button2.style.color="#ff471a";
  }

  function mouseOut2() {
      button2.style.backgroundColor = "#ff471a";
      button2.style.color="white";
  }

button1.onclick = function EditEntry() {
       window.alert(x.elements[1].value);
       var postData = {
             imgUrl:x.elements[0].value,
             dep_place: x.elements[1].value,
             dest_place: x.elements[2].value,
             dep_date: x.elements[3].value,
             arr_date: x.elements[4].value,
             dep_time: x.elements[5].value,
             arr_time: x.elements[6].value,
             ec_seats_num: x.elements[7].value,
             fc_seats_num: x.elements[8].value,
             bc_seats_num: x.elements[9].value,
             price: x.elements[10].value


         };

         // Get a key for a new entry
           var newPostKey = dbRefObject.push().key;
           var updates = {};
           updates['/Austrian Airlines/' + snap.key] = postData;
           return firebase.database().ref().update(updates);
    }

    button2.onclick = function RemoveEntry() {
      window.alert(x.elements[1].value);
      var postData = {
             imgUrl:null,
             dep_place: null,
             dest_place: null,
             dep_date: null,
             arr_date: null,
             dep_time: null,
             arr_time: null,
             ec_seats_num: null,
             fc_seats_num: null,
             bc_seats_num: null,
             price: null
            };

            // Get a key for a new entry
            //  var newPostKey = dbRefObject.push().key;
              var updates = {};
             // updates['/TestImages/' + newPostKey] = postData;
             updates['/Austrian Airlines/' + snap.key] = postData;
             return firebase.database().ref().update(updates);
       }



});
 