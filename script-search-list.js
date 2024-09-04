function searchFunction(){
var a, i;
var ul = document.getElementById("mySearch");
var input = document.getElementById("myInput");
var filter = input.value.toUpperCase();
var li = ul.getElementsByTagName("li");


		 for(i=0; i<li.length; i++)
		 {
		 a = li[i].getElementsByTagName("a")[0];
		  if(a.innerHTML.toUpperCase().indexOf(filter) > -1)
		     {li[i].style.display="";}
		else
			{li[i].style.display="none";}
			}
			}
			
			
			
		
 