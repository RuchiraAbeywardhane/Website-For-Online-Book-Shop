	
function extractFunction(n){
var card = document.getElementById("myCard01");
var card2 = document.getElementById("myCard02");
var card3 = document.getElementById("myCard03");

	switch (n){
	   	   case 1:
					   	if(card.className === "card")
										  {card.className += " extract-one";}
						else 			  
										  {card.className = "card";
										  card.tabIndex="-1";
										  card.focus();
										 }
						break;
		  case 2:
					   	if(card2.className === "card")
										  {card2.className += " extract-two";}
						else 			  
										  {card2.className = "card";
										  card2.tabIndex="-1";
										  card2.focus();}
						break;
		 case 3:
					   	if(card3.className === "card")
										  {card3.className += " extract-three";}
						else 			  
										  {card3.className = "card";
										  card3.tabIndex="-1";
										  card3.focus();}
						break;
						}
						}