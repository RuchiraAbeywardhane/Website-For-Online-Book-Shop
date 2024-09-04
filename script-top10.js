var divIndex = 1;
showDiv(divIndex);

function plusDiv(n){
		 showDiv(divIndex += n);}
		 
function showDiv(n){
		 var i;
		 var divs = document.getElementsByClassName("row");
		 
		 if(n>divs.length){divIndex = 1}
		 if(n<1){divIndex = divs.length}
		 
		 for(i=0; i<divs.length; i++)
		 		  {divs[i].style.display = "none";}
				  
				  
		 divs[divIndex - 1].style.display = "block";
		 
		 
		 
		 }