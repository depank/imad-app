
var qrcode = new QRCode("qrcode");

function makeCode(form){
    var elText="";
var a=document.querySelectorAll('input');
    
for(var i=0;i<12;i++){
elText=elText+"\n"+a[i].value;
}
   
if (!elText.value) {
        alert("Input a text");
        elText.focus();
        return;
    }
 qrcode.makeCode(elText);
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



