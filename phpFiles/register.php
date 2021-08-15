<?php
 header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
 header('Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT');
 header('Access-Control-Allow-Origin: *');
 header("Content-Type: application/json; charset=UTF-8");
 
 require_once('./connection.php');

 $rest_json = file_get_contents("php://input");
 $_POST = json_decode($rest_json, TRUE);

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


 $password  = sanitizeFromPassword($_POST['password']);
 $email     = sanitizeFromString($_POST['email']);
 $phonenum  = $_POST['phonenum'];
 $pin       = $_POST['pin'];


 if (!empty($password) && !empty($email ) && !empty($phonenum ) && !empty($pin )) {
    $checkingEmail = "SELECT * FROM user WHERE user_email = '$email'";
    $result = mysqli_query($connection,$checkingEmail);
    
    if(mysqli_num_rows($result) > 0){
     $json['status'] = http_response_code(200);
     $json['success']=0;
     $json['message']="Already exists";
     echo json_encode($json);
    }

    else{
        $insertData = "INSERT INTO user VALUES(0,'','','','','$pin','$email','','$phonenum','','$password',0)";
        $result = mysqli_query($connection,$insertData);
        if($result){
         $json['status']=http_response_code(200);
         $json['success']=1;
         $json['message']="Successfully done";
         echo json_encode($json);
        }
        else{
         $json['status']=http_response_code(200);
         $json['success']=0;
         $json['message']="Failed try again!";
         echo json_encode($json);
        }
       }
      }
      else{
         $json['status']=http_response_code(200);
         $json['success']=0;
         $json['message']="Something went wrong!!!!";
         echo json_encode($json);
        }

     ?>