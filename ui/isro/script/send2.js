var map,geocoder,infowindow;
var loc=[];
      function initMap() {
          var e = new google.maps.LatLng(28.1, 77.1), 
            t=  {
          zoom: 8,
          center: e,
            //draggableCursor: 'default',
            scrollwheel: false

        }
        
        
         map = new google.maps.Map(document.getElementById('map'),t),
          
          
          marker = new google.maps.Marker({position: e, map: map}),
              
         geocoder = new google.maps.Geocoder() , map.streetViewControl = !1, infowindow = new google.maps.InfoWindow({content: "(28.10, 77.10)"}),google.maps.event.addListener(map,'click',function(e){
             marker.setPosition(e.latLng);
             var t = e.latLng, o = t.lat().toFixed(6) + ", " + t.lng().toFixed(6);
             console.log(o);
infowindow.setContent(o);
            document.getElementById('address').value=o;
             var sub=document.getElementById('submit');
             sub.click();
             
         });

        document.getElementById('submit').addEventListener('click', function() {
          geocodeAddress(geocoder, map);
        });
       } 

      function geocodeAddress(geocoder, resultsMap) {
        var address = document.getElementById('address').value;

        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
             document.getElementById('clicked_addr').value=results[0].formatted_address;
             console.log(results[0].formatted_address); resultsMap.setCenter(results[0].geometry.location);
             var d=document.getElementById('address'); if(isNaN(parseFloat(d.value)))
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });
              
              
loc[0]=results[0].geometry.location.lat();
        loc[1]=results[0].geometry.location.lng();
loc[2]=results[0].formatted_address;
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      } 

var fsub=document.getElementById("fsubmit");
fsub.addEventListener('click',fun);
var tsub=document.getElementById("tsubmit");
tsub.addEventListener('click',fun1);

function fun(){
var lat=document.getElementById("lat1");
var long=document.getElementById("long1");
var addr=document.getElementById("addr1");
    
lat.value=loc[0].toFixed(5);
long.value=loc[1].toFixed(5);
addr.value=loc[2];
     document.getElementById("zip1").value=zipToCode(lat.value)+zipToCode(long.value);
}

function fun1(){
var lat1=document.getElementById("lat2");
var long1=document.getElementById("long2");
var addr1=document.getElementById("addr2");
    
    
lat1.value=loc[0].toFixed(5);
long1.value=loc[1].toFixed(5);
addr1.value=loc[2];
    document.getElementById("zip2").value=zipToCode(lat1.value)+zipToCode(long1.value);
}

window.onload=reset;
function reset(){
var a=document.querySelectorAll('input');
for(var i=0;i<12;i++){
a[i].value="";
}
}

var verify=document.getElementById("verify");
verify.addEventListener('click',alert1);

function alert1(){
var fault=alert2();
if(fault>0){

var proc_n=document.getElementById("proceed_n");
var proc_y=document.getElementById("proceed_y");
var p=document.getElementById('proceed-msg');
proc_n.setAttribute('hidden',"");
proc_y.setAttribute('hidden',"");
p.setAttribute('hidden',"");
return;}
var p=document.getElementById('proceed-msg');
document.getElementById('extra').removeAttribute('hidden');
document.getElementById('extra1').removeAttribute('hidden');
p.textContent="r u sure to procced if sure then click yes otherwise no.";
var proc_n=document.getElementById("proceed_n");
var proc_y=document.getElementById("proceed_y");
proc_n.removeAttribute('hidden');
proc_y.removeAttribute('hidden');
p.removeAttribute('hidden');
}

function alert2(){
var count=0;
var a=document.querySelectorAll('input');
for(var i=0;i<12;i++){
if(a[i].value === "" && (a[i].placeholder !=="zip")){
alert("oops  "+a[i].placeholder+" is empty"); count++;}
}

   var mob1=document.getElementById("mob1");
    var mob2=document.getElementById("mob2");
    if(isNaN(mob1.value)||mob1.value<6999999999||mob1.value>9999999999){alert("sender's number is incorrect");count++;}
       if(isNaN(mob2.value)||mob2.value<6999999999||mob2.value>9999999999){alert("reciever's number is incorrect");count++;}
    return count;
}

var proc_y=document.getElementById("proceed_y");
proc_y.addEventListener('click',getDistanceFromLatLonInKm);

function getDistanceFromLatLonInKm() {
    if(confirm("r u sure to proceed"))
nochange();
    else return;
    
    var reset_=document.getElementById("set_it");
    reset_.removeAttribute('hidden');
    document.getElementById("QRR").removeAttribute('hidden');
var lat1=  document.getElementById("lat1").value;
var lon1=  document.getElementById("long1").value;
var lat2=  document.getElementById("lat2").value;
var lon2=  document.getElementById("long2").value;
var R = 6371; /*Radius of the earth in km*/
  var dLat = deg2rad(lat2-lat1);  /* deg2rad below*/
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; /*Distance in km*/
  var p2=  document.getElementById("dist");
  p2.textContent="distance in km: " + d.toFixed(6);
  var p3=  document.getElementById("cost");
 p3.textContent="cost in Rs- " + postfee(d).toFixed(6);

}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

function postfee(y){
var p=document.getElementById("wt");
var x=Math.random()*500;
p.textContent="weight: "+x .toFixed(2)+"(in gms)";
	/*var x=document.getElementsByName(weight)[0].value;  //weight of things
	var y=document.getElementsByName(distance)[0].value;  // distance  between from and to*/
	var mc=50;
	if(x<=50)
	{
		if(y<=mc)
			return(15);
		else
			return(35);
	}	
	
    else if (x<=200)
	{ 
	   if(y<=mc)
		   return(25);
	   else if(y<=200)
		   return(35);
	   else if(y<=1000)
		   return(40);
	   else if(y<=2000)
		   return(60);
	   else
		   return(70);
	}   
    else if (x<=500)
	{ 
	   if(y<=mc)
		   return(30);
	   else if(y<=200)
		   return(50);
	   else if(y<=1000)
		   return(60);
	   else if(y<=2000)
		   return(80);
	   else
		   return(90);
	}
    else if (x>200)
	{ 
	   if(y<=mc)
		   return(10);
	   else if(y<=200)
		   return(15);
	   else if(y<=1000)
		   return(30);
	   else if(y<=2000)
		   return(40);
	   else
		   return(50);	
	}
	
}


function nochange(){
var a=document.querySelectorAll('input');
for(var i=0;i<12;i++){
a[i].setAttribute('disabled',"");
}
    document.getElementById("set_itQR").removeAttribute('hidden',"");
    
    var proc_n=document.getElementById("proceed_n");
var proc_y=document.getElementById("proceed_y");
var p=document.getElementById('proceed-msg');
    var verify=document.getElementById("verify");
    var v_msg=document.getElementById("v_msg");
proc_n.setAttribute('hidden',"");
proc_y.setAttribute('hidden',"");
p.setAttribute('hidden',"");
    verify.setAttribute('hidden',"");
    v_msg.setAttribute('hidden',"");
}

var reset_=document.getElementById("set_it");
reset_.addEventListener('click',doit1);
var QR_=document.getElementById("set_itQR");
QR_.addEventListener('click',makeCode);










 function doit1(){
     reset();
     document.getElementById("qrcode").textContent="";
     
     document.getElementById("qrcode1").textContent="";
     
    var a=document.querySelectorAll('input');
for(var i=0;i<12;i++){
a[i].removeAttribute('disabled');
} 
     
     
      var    v_msg=document.getElementById("v_msg");
var verify=document.getElementById("verify");
  
    verify.removeAttribute('hidden',"");
    v_msg.removeAttribute('hidden',"");
    var p=document.getElementById("wt");
    p.textContent="";
     var p1=document.getElementById("cost");
    p1.textContent="";
    var p2=document.getElementById("dist");
    p2.textContent="";
     document.getElementById("QRR").setAttribute('hidden',"");
     document.getElementById('extra').setAttribute('hidden',"");
document.getElementById('extra1').setAttribute('hidden',"");
 }
 /* 
var  proc_n=document.getElementById("proceed_n");
var proc_y=document.getElementById("proceed_y");
var p=document.getElementById('proceed-msg');
 
proc_n.setAttribute('hidden',"");
proc_y.setAttribute('hidden',"");
p.setAttribute('hidden',"");

   
}  */










var qrcode1 = new QRCode("qrcode1");
    var qrcode = new QRCode("qrcode");

function makeCode(form){
    document.getElementById("set_itQR").setAttribute("hidden","");
    var elText="";
    var elText1="";
    
var a=document.querySelectorAll('input');
    
for(var i=0;i<6;i++){
elText=elText+"\n"+a[i].value;
}
   for(var i=6;i<12;i++){
elText1=elText1+"\n"+a[i].value;
} 
   console.log(form);
if (!elText ) {
        alert("Input a text");
        elText.focus();
   
        return;
    }
    var qrcode1 = new QRCode("qrcode1");
    var qrcode = new QRCode("qrcode");
 qrcode.makeCode(elText);
   qrcode1.makeCode(elText1); 
    document.getElementById('qrcode').removeAttribute('title');
    document.getElementById('qrcode1').removeAttribute('title');
}

/*makeCode();
var sub=document.querySelector('button');
sub.addEventListener('click',makeCode)
*/
$("#text").
    on("blur", function () {
        makeCode();
     
    
    }).
    on("keydown", function (e) {
        if (e.keyCode == 13) {
            makeCode();
           
            
        }
    });











function zipToCode(x){
    var arr=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','3','4','5','6','7','9'];
    
  if(x<40){
    x=x-6;
  }
  else x=x-68;
    var code="";
  var deg=parseInt(x);
   var min=parseInt((x-parseInt(x))*60);
 var  sec=parseFloat(((x-parseInt(x))*60-min)*60).toFixed(2);
 //console.log(deg,min,sec);
  
  code=code+arr[deg]+arr[parseInt(min/2)];
  
  var code1="";
   var minleft=min-parseInt(min/2)*2;
 // console.log("minleft",minleft);
  var Seconds=parseFloat(sec)+parseFloat(minleft*60);
  //console.log("Seconds",Seconds);
  var Remainder;
  var SecondScaled = Seconds / 119.99 * 900;
  while(SecondScaled>0){
   Remainder = parseInt(SecondScaled - 30 * parseInt(SecondScaled / 30));
    SecondScaled = parseInt(SecondScaled / 30);
    code1=arr[Remainder]+code1;
    
  }
  code=code+code1;
  return code;
  
 
  
}





