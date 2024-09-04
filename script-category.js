var catDiv = 0;
showCat(catDiv);

function plusCat(n){
		 showCat(catDiv = n)}

function showCat(n){
		 var cat = document.getElementsByClassName("sections");
		 var topic = document.getElementsByClassName("cat");
		 for(i=0; i<cat.length; i++)
		 		  {cat[i].style.display = "none";
				   topic[i].className = "cat";}
				  
		 cat[catDiv-1].style.display = "block";
		 topic[catDiv-1].className += " actived";
		  }