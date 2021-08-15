<?php
 header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
 header('Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT');
 header('Access-Control-Allow-Origin: *');
 header("Content-Type: application/json; charset=UTF-8");
 
 require_once('./connection.php');

 $rest_json = file_get_contents("php://input");
 $_POST = json_decode($rest_json, TRUE); // 

 function sanitizeFromPassword($inputText){
    $inputText = strip_tags($inputText);
    return $inputText;
 }

 function sanitizeFromString($inputText){
    $inputText = strip_tags($inputText);
    $inputText = str_replace(" ","", $inputText);
    $inputText = strtolower($inputText);
    return $inputText;
 }


 $password  = $_POST['password'];
 $email     = $_POST['email'];


 if (!empty($password) && !empty($email )) {
   $checkingDetails = "SELECT * FROM user WHERE user_email = '$email' and user_password = '$password'";
   $result = mysqli_query($connection,$checkingDetails);
    
    if(mysqli_num_rows($result) == 1){
      $row = mysqli_fetch_assoc($result);
      $json['status']=http_response_code(200);
      $json['success']=1;
      $json['message']="Successfully done";
      $json['user']['info'] = $row;
      echo json_encode($json);
     }
     else{
     $json['status'] = http_response_code(200);
     $json['success']=0;
     $json['message']="Invalid Username or Password";
     echo json_encode($json);
    }
   }
      else{
         $json['status']=http_response_code(200);
         $json['success']=0;
         $json['message']="Something went wrong!!!!";
         echo json_encode($json);
        }

     ?>
     