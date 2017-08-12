var firebaseRef = firebase.database().ref();
var database = firebase.database();
var ref = new Firebase("https://smjestise-106ea.firebaseio.com/");

//my variables
var label="Destination";
const ulList=document.getElementById('data');
const dbRefObject = firebase.database().ref().child('Apartmani Dzana');

dbRefObject.on('child_added', snap => {
 const ap_code=snap.child("ap_code").val();
 const arr_time=snap.child("arr_time").val();
 const bathroom=snap.child("bathroom").val();
 const breakfast=snap.child("breakfast").val();
 const host_city=snap.child("host_city").val();
 const host_street=snap.child("host_street").val();
 const num_of_rooms=snap.child("num_of_rooms").val();
 const max_num_of_people=snap.child("max_num_of_people").val();
 const parking=snap.child("parking").val();
 const pets=snap.child("pets").val();
 const price=snap.child("price").val();
 const type_of_beds=snap.child("type_of_beds").val();
 const wifi=snap.child("wifi").val();
 const urlImage1=snap.child("urlImage1").val();
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
 img.setAttribute("src", urlImage1);
 img.setAttribute("height", "250");
 img.setAttribute("width", "300");
 img.setAttribute("alt", "Apartmani Basic");
 img.setAttribute("title", "Apartmani Basic");
 form.appendChild(img);
 img.style.margin="30px";

    //document.getElementById("data").style.display = "inline-block";


  
form.appendChild(br);


 const imgUrl01=document.createElement('input');
 imgUrl01.setAttribute("type", "text");
 imgUrl01.setAttribute("value", urlImage1);
 form.appendChild(imgUrl01);
 imgUrl01.id="imageurl";
 imgUrl01.style.width="200px";
 imgUrl01.style.margin="10px";
 const label01=document.createElement("LABEL");
 label01.innerHTML="URL:";
 label01.setAttribute("for", "imageurl");
 document.getElementById(snap.key).insertBefore(label01,imgUrl01);


 form.appendChild(br1);
 
 const host_city01=document.createElement('input');
 host_city01.setAttribute("type", "text");
 host_city01.setAttribute("value", host_city);
 form.appendChild(host_city01);
 host_city01.style.width="200px";
 host_city01.style.margin="10px";
 host_city01.id="host_city01";
 const label02=document.createElement("LABEL");
 label02.innerHTML="Host city:"
 label02.setAttribute("for", "host_city01");
 document.getElementById(snap.key).insertBefore(label02,host_city01);


 form.appendChild(br2);

 const host_street01=document.createElement('input');
 host_street01.setAttribute("type", "text");
 host_street01.setAttribute("value", host_street);
 form.appendChild(host_street01);
 host_street01.style.width="200px";
 host_street01.style.margin="10px";
 host_street01.id="host_street";
 const label03=document.createElement("LABEL");
 label03.innerHTML="Host street:"
 label03.setAttribute("for", "host_street");
 document.getElementById(snap.key).insertBefore(label03,host_street01);

 form.appendChild(br3);
 const num_of_rooms01=document.createElement('input');
 num_of_rooms01.setAttribute("type", "number");
 num_of_rooms01.setAttribute("value", num_of_rooms);
 form.appendChild(num_of_rooms01);
 num_of_rooms01.style.width="200px";
 num_of_rooms01.style.margin="10px";
 num_of_rooms01.id="num_of_rooms01";
 const label04=document.createElement("LABEL");
 label04.innerHTML="Number of rooms:"
 label04.setAttribute("for", "num_of_rooms01");
 document.getElementById(snap.key).insertBefore(label04,num_of_rooms01);


 form.appendChild(br4);
/*

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


*/
});
 