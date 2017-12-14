<?php

require 'conn.inc.php';
/*$comp=$_POST["complaint_id"];
$feedback=$_POST["feedback"];
echo "$comp";*/
if(isset($_POST["complaint_id"]) && isset($_POST["feedback"])){
	if(empty($_POST["complaint_id"])) {echo "fill complaint id"; }
	else if(empty($_POST["feedback"])) {echo "could not submit empty feedback";}
	else {
		$c_id=mysqli_real_escape_string($con,$_POST['complaint_id']);
		$feedback=mysqli_real_escape_string($con,$_POST['feedback']);
		$query="insert  feedback_tab values($c_id,'$feedback')";
		if($my_query=mysqli_query($con,$query)){

}
         else echo "there is some error".mysqli_error($con);

		
	}
		
	
}



?>


<!doctype>
<html>



    <head>
	          <title> feedback</title>
			  <style>
			 
			  .main,html{
                  height:100%;
                   width:100%;
                      }

            #frm{
               float:left;
               padding-left:10%;
               padding-top:10%;
               margin-left:20%;
               height:50%;
               width:50%;
               font-size:1.5em;
               color:darkgoldenrod;
               background-color:lightgrey;
}

input{
   height:10%;
   margin-left:10%;
   
}

#feed{
   height:30%;
   width:50%;
   margin-left:10%;
   
}
  
			  
			  </style>
	
	</head>

    <body>   
	<div class="main">
	      <div id="frm">
             <form action="feedback.php" method="POST">
			            <label><div>COMPLAINT ID</div></label>
                        <input name="complaint_id" type="text">	<br>
                          <label><div>FEEDBACK</div></label>
                        <TEXTAREA name="feedback" type="text" ROW="20" col="20" id="feed"></TEXTAREA>	<br>
                        <input	type="submit" value="submit">				
			 </form>
          </div>
		  </div>
    </body>




 </html>
