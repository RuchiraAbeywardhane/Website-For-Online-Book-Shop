
			
<?php

            if(isset($_POST['submit']))
            {
            $name = $_POST["name"];
			$quantity = $_POST['quantity']; 
			$email = $_POST['email'];
			$phone = $_POST['phone']; 
			$address = $_POST['address'];
			$product = $_POST['product'];
		 
			
			$to = "lalithpublications@gmail.com";
			$subject = "Order";
			$message = "Name: ".$name."\n"."Phone:. ".$phone."\n"."Address: ".$address."\n"."quantity: ".$quantity."email: ".$email."\n"."Product: ".$product;
			$headers = "From ".$email;
			
	    	if(mail($to,$subject,$message,$headers)){
			echo "<h1> Sent Succesfully! Thank you".$name. "We will contact you</h1>";
			echo '<a href = "order2.html">Click Here for more information about ordering our products</a>';
			}
			else
			{
		    echo "<h1>There seems to be a problem..Please try again</h1>";
			}
		  
			    
			}
			?>