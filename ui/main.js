var submit_btn=document.getElementById('submit_btn');
submit_btn.onclick=function (){


var coment=document.getElementById('comment').value;
var req=new XMLHttpRequest();
req.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       list="";
       var cmnt_=JSON.parse(req.responseText);
       for(var i=0;i<cmnt_.length;i++){
       list +="<li>"+cmnt_[i]+"</li>";}
    }
    console.log(list);
    var cmnt_list=document.getElementById("ist_cmnt");
    cmnt_list.innerHtml=list;
};
req.open("GET", "/submit/"+coment, true);

req.send();
};