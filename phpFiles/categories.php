<?php
 header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
 header('Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT');
 header('Access-Control-Allow-Origin: *');
 header("Content-Type: application/json; charset=UTF-8");
 
 require_once('./connection.php');


    $checkingEmail = "SELECT * FROM categories";
    $result = mysqli_query($connection,$checkingEmail);
    
    $data = array();
    if(mysqli_num_rows($result) > 0){
     while( $row = mysqli_fetch_assoc($result)){  
        $data [] = $row;
       }
     $json['categories'] = json_encode($data);
     $json['status'] = http_response_code(200);
     $json['success']=1;
     $json['message']="Found";
     echo json_encode($json);
    }

      else{
         $json['status']=http_response_code(200);
         $json['success']=0;
         $json['message']="No Data Found";
         echo json_encode($json);
        }

     ?>