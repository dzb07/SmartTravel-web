/*MY FUNCTIONS FOR ADDING ROOMS*/
var x=document.getElementById("edit-form");
var firebaseRef = firebase.database().ref();
var database = firebase.database();
var ref = new Firebase("https://smjestise-106ea.firebaseio.com/");
var bathroom_val;
var kitchen_val;
var pets_val;
var wifi_val;
var breakfast_val;
var parking_val;
/*checking radiobutton values*/

var radios_bathroom =document.getElementsByName("bathroom");
var len=radios_bathroom.length;
    

var radios_kitchen =document.getElementsByName("kitchen");
var len1=radios_kitchen.length;


var radios_wifi =document.getElementsByName("wifi");
var len2=radios_wifi.length;


var radios_parking =document.getElementsByName("parking");
var len3=radios_parking.length;


var radios_breakfast =document.getElementsByName("breakfast");
var len4=radios_breakfast.length;   

var radios_pets =document.getElementsByName("pets");
var len5=radios_pets.length;  

function submitClick(){
window.alert(x.elements[0].value);

 for (var i=0; i<len; i++) {
        if ( radios_bathroom[i].checked ) { // radio checked?
            bathroom_val=radios_bathroom[i].value;
        }
 }
for (var i=0; i<len1; i++) {
        if ( radios_kitchen[i].checked ) { // radio checked?
            kitchen_val=radios_kitchen[i].value;
        }
 }
 for (var i=0; i<len2; i++) {
        if ( radios_parking[i].checked ) { // radio checked?
            parking_val=radios_parking[i].value;
        }
 }
 for (var i=0; i<len3; i++) {
        if ( radios_wifi[i].checked ) { // radio checked?
            wifi_val=radios_wifi[i].value;
        }
 }
 for (var i=0; i<len4; i++) {
        if ( radios_pets[i].checked ) { // radio checked?
            pets_val=radios_pets[i].value;
        }
 }
 for (var i=0; i<len5; i++) {
        if ( radios_breakfast[i].checked ) { // radio checked?
            breakfast_val=radios_breakfast[i].value;
        }
 }

var usersRef = ref.child(x.elements[0].value);
var newPostRef = usersRef.push();

newPostRef.set({
    prop_name:x.elements[1].value,
    ap_code: x.elements[2].value,
    host_city: x.elements[3].value,
    host_street: x.elements[4].value,
    num_of_rooms: x.elements[5].value,
    max_num_of_people: x.elements[6].value,
    type_of_beds: x.elements[7].value,
    arr_time: x.elements[8].value,
    bathroom:bathroom_val,
	kitchen: kitchen_val,
    wifi:wifi_val,
    parking:parking_val,
    pets:pets_val,
    breakfast:breakfast_val,
    price:x.elements[21].value,
    urlImage1:x.elements[22].value,
    urlImage2:x.elements[23].value,
    urlImage3:x.elements[24].value
   
}); //end set



} //end submitClick
