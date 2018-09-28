var h=document.getElementById('hours');
var m=document.getElementById('minutes');
var s=document.getElementById('seconds');
tic();
setInterval(tic,1000);
function tic() {
  var d=new Date();
  var nh=23-d.getHours();
  var nm=59-d.getMinutes();
  var ns=59-d.getSeconds();
  if(nh<10)
    nh="0"+nh;
  if(nm<10)
    nm="0"+nm;
  if(ns<10)
    ns="0"+ns;
  h.innerHTML=nh+" :";
  m.innerHTML=nm+" :";
  s.innerHTML=ns+"";
}
