var index=1;
showslid(index);
function scrroll(id){
  var idd;
  if(id==1)
   idd = "";
   else if(id==2)
   idd = "edu"
   else if(id == 3)
    idd = "kill";
    else
    idd = "project"
  var c=document.getElementById(idd);
  c.scrollIntoView();
}
function show(){
   var a= document.getElementById("show").innerHTML;
   if(a=="Show More"){
     var b=document.getElementsByClassName("papp");
    var n=b.length;
    for(i=0;i<n;i++){
      b[i].style.display="block"; 
    }
   var c=document.getElementById("project");
   c.scrollIntoView();
  document.getElementById("show").innerHTML="Show Less";
}
else{
    var b=document.getElementsByClassName("papp");
    var n=b.length;
    for(i=0;i<n;i++){
      b[i].style.display="none"; 
    }
   var c=document.getElementById("project");
   c.scrollIntoView();
   document.getElementById("show").innerHTML="Show More";
}
}
function plus(n){
   showslid(index+=n);
}
function showslid(n){
  var a=document.getElementsByClassName("o");
  for( var i=0;i<a.length;i++){
     a[i].style.display="none";
  }
  if(n>a.length)
     index=1;
  if(n<1)
    index=a.length;

  a[index-1].style.display="block";   
}
var ii=1;
showslidd(ii);
function pluss(n){
  showslidd(ii+=n);
}
function showslidd(n){
 var a=document.getElementsByClassName("oo");
 for( var i=0;i<a.length;i++){
    a[i].style.display="none";
 }
 if(n>a.length)
    ii=1;
 if(n<1)
   ii=a.length;
 a[ii-1].style.display="block";   
}
var iii=1;
showsliddd(iii);
function plusss(n){
  showsliddd(iii+=n);
}
function showsliddd(n){
 var a=document.getElementsByClassName("ooo");
 for( var i=0;i<a.length;i++){
    a[i].style.display="none";
 }
 if(n>a.length)
    iii=1;
 if(n<1)
   iii=a.length;

 a[iii-1].style.display="block";   
}
function pro(){
  var d = document.getElementById('progre');
  var width = 0;
  var id = setInterval(frame, 10);
  var x = 100;
  function frame() {
    if (width == 100) {
      d.style.float= 'right';
      x--;
      d.style.width = x + '%';
      if(x==0){
        x=100;
        width=0;
      }
    } else {
      d.style.float = 'left';
      width++; 
      d.style.width = width + '%'; 
      
    }
  }
  
}
function proo(){
  var d = document.getElementById('prog');
  d.style.display='none';
  document.getElementById('mm').style.display='block';
}
