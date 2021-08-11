function lw(){
var i = document.getElementById("i1").value
var xhr = new XMLHttpRequest();
//Open URL
xhr.open("GET","http://192.168.1.202/cgi-bin/trial.py?x=" + i, true);
//Send request to the URL
xhr.send();
//get output from above URL
xhr.onload = function(){
var output = xhr.responseText;
document.getElementById("demo").innerHTML = output;
}
}
