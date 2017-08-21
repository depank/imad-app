    console.log("hjbvhj");
var submit_btn=document.getElementById('submit_btn');
submit_btn.onclick=function (){
console.log("hjbvhjjk1");

var coment=document.getElementById('comment').value;
var req=new XMLHttpRequest();
req.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       var  list="";
       var cmnt_=JSON.parse(req.responseText);
       console.log(cmnt_);
       for(var i=0;i<cmnt_.length;i++){
       list +="<li>"+cmnt_[i]+"</li>";}
    }
    console.log(list);
    var cmnt_list=document.getElementById("list_cmnt");
    cmnt_list.innerHTML=list;
};
req.open("GET", "/submit/"+coment, true);

req.send();
};