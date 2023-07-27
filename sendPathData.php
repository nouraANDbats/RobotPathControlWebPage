<?php

$paths=json_decode($_POST['element']);//a variable that contains the elements of TotalPaths array


$servername = "localhost";
$username = "root";
$password = "";
$dbname="robotpath_db";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

foreach($paths as $item){

  $sql="INSERT INTO robotpath(PathNumber,PathDirection,PathLength)
  VALUES(?,?,?)";
  
$stmt=mysqli_stmt_init($conn);

  if( ! mysqli_stmt_prepare($stmt,$sql) ){

 die(mysqli_error($conn));
}

mysqli_stmt_bind_param($stmt,"isi",$item->Pnumber,$item->Pdirection,$item->Plength);

mysqli_stmt_execute($stmt);



} 

?>