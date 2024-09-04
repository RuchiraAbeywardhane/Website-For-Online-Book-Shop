
		 
function getPostage(){
		var y = document.getElementById("quantity01").value;
		var pro = document.getElementById("No").value;
		var totalPost = 300; 
		
		var no = parseInt(pro);
		var price;	
		
		switch (no)
		{
		case 01:
		  price = 350;
		  break;
		case 02:
		  price = 350;
		  break;
		case 03:
		  price = 350;
		  break;
		case 04:
		  price = 350;
		  break;
		case 05:
		  price = 350;
		  break;
		
		default:
		 price = "350";
		 break;
		}
		
		
		var totalPrice = totalPost + (price*y);
        
		
		 	
		document.getElementById("total-postage").innerHTML = totalPost;
		document.getElementById("total-price").innerHTML = totalPrice;}
		
		
		
function clearField(){
		 document.getElementById("total-postage").innerHTML = "";
		document.getElementById("total-price").innerHTML = "";
}
		
		 