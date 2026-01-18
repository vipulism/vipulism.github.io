<?php

$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$message=$_REQUEST['message'];
$ip=$_SERVER['REMOTE_ADDR'];
$url=$_SERVER['HTTP_REFERER'];
 	
$sub="Enquiry Mail from : ".$_POST['email'];
	 $from=$_POST['email'];
	 $msg ="From Page  :$url\n\n";
	 $msg.="Name:$name\n";
	 $msg.="Email:$email\n";
	 $msg.="Message:$message\n";
	 $msg.="Ref Url:$url\n\n";
	 $msg.="IP   :$ip\n";
      

   $headers = "From: ${email}\nReply-To: ${email}";
		
       
	mail("vipul0809@gmail.in ", "Enquiry Mail from :vipulism.github.io", "$msg", "From:$email");
         
		
    echo "<script language=\"JavaScript\">\n";
    echo "<!-- hide from old browser\n\n";
    
    echo "function redirect() {\n";
    echo "window.location = \"" . "http://www.vipulism.github.io/" . "\";\n";
    echo "}\n\n";

    echo "timer = setTimeout('redirect()', '" . ($seconds*1000) . "');\n\n";

    echo "-->\n";
    echo "</script>\n"; 


?>