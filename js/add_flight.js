var company = document.getElementsByClassName("company");
var dep_place = document.getElementById("dep_place");
var dest_place = document.getElementById("dest_place");
var dep_date = document.getElementById("dep_date");
var arr_date = document.getElementById("arr_date");
var dodaj = document.getElementById("dodaj");

var x=document.getElementById("edit-form");

var firebaseRef = firebase.database().ref();
var database = firebase.database();
var ref = new Firebase("https://smarttravel-ba2e5.firebaseio.com/");


var checkedValue = null;
var inputElements = document.getElementsByClassName('company');

function submitClick(){
window.alert(x.elements[16].value);
for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
var usersRef = ref.child(checkedValue);
var newPostRef = usersRef.push();

newPostRef.set({
    dep_place: x.elements[8].value,
    dest_place: x.elements[9].value,
    dep_date: x.elements[10].value,
    arr_date: x.elements[11].value,
    dep_time: x.elements[12].value,
    arr_time: x.elements[13].value,
    ec_seats_num: x.elements[14].value,
    fc_seats_num: x.elements[15].value,
	bc_seats_num: x.elements[16].value,
    imgUrl:x.elements[17].value,
	price:x.elements[18].value

}); //end set
}//end if
}//end for


} //end submitClick
