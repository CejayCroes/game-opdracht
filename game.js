alert("Dit is een game")	
alert("Je zit in  een doolhof")


var keuze = prompt("Wil je naar links of naar rechts?")
	if(keuze =="links") {
		alert("je hebt gekozen om naar links te gaan")
		var keuze = prompt("wil je rechtdoor of naar rechts")
		
		if(keuze =="rechts"){
			alert("je zit vast en hebt gefaald")
		}else {alert("Je hebt gekozen om rechtdoor te gaan")
				var keuze = prompt("wil je naar links of naar rechts")
				if (keuze == "rechts")
					alert("je hebt gefaald")
									
					else {
						var keuze = prompt ("ga je naar rechts of ga je rechtdoor")					}
					 if (keuze == "rechts")
					alert("je hebt gefaald")
				else {
					alert("je hebt gefaald")
				}
				}
	 }  
	    else
 	 {  alert("Je hebt gekozen om naar rechts te gaan ")
        var keuze = prompt("wil je nu naar links of wil je rechtdoor gaan")
        if (keuze =="links")
        alert("je zit vast en hebt gefaald")
        else {
        
        	var keuze = prompt("wil je naar links of wil je naar rechts?")
        	if(keuze == "rechts")
        		alert("je hebt gefaald")
        	else {
        		alert("je bent er bijna :)")
        		var keuze = prompt ("kies je om naar links te gaan of neem je de keuze om naar rechts te gaan?")
        		 if (keuze == "links")
        		 	alert("je hebt gefaald, je was zo super dichtbij")

        		 else {
        		 	alert("het is je gelukt om door dit doolhof te komen, hopelijk vond je het een leuk spel")
        		 }
        	}
        }
    } 
    
    document.write("Als je het nog een keer wil proberen refresh dan even de pagina ;)")
    
