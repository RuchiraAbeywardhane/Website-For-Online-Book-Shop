var slideNo = 0 ;
autoSlide();

function autoSlide(){
 		 var i;
		 var slides = document.getElementsByClassName("mySlides");
		 var dots   = document.getElementsByClassName("dots");
			 
		
		 slideNo++;
		 if(slideNo>slides.length){slideNo = 1}
		 for(i=0; i<slides.length; i++)
		 		  {slides[i].style.display = "none";}
		 for(i=0; i<dots.length; i++)
		 		  {dots[i].className = "dots";}
				  
		slides[slideNo - 1].style.display = "block";
		dots[slideNo -1].className += " active";
		setTimeout(autoSlide,6000);		 
			 
		 }

		
		  