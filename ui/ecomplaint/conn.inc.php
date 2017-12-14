<?php
$mysql_host='127.0.0.1';
$mysql_user='root';
$mysql_pass='';
$db='ecomplaint';
$con=mysqli_connect($mysql_host,$mysql_user,$mysql_pass) or die("died");
mysqli_select_db($con,$db) or die("died1");
//echo "great";
?>
