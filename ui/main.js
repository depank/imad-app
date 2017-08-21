var submit_btn=document.getElementById('submit_btn')e;
submit_btn.onclick=function (){


var coment=document.getElementById('comment').value;
var req=new XmlHttpRequest();
req.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       var cmnt_=JSON.parse(req.responseText);
       for(int i=0;i<cmnt_.length;i++){
       document.getElementById("list_cmnt").innerHTML +="<li>"+cmnt_[i]+"</li>";}
    }
};
req.open("GET", "/submit/'"+coment+"'", true);
req.send();
};