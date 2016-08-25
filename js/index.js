	$(document).ready(function(){
		var quoteSource=[
		{
			quote: "Quote: My fake plants died because I did not pretend to water them.",
			name:"Mitch Hedberg, American stand-up comedian"
	    },
	    {
	    	quote:"Quote: Thousands have lived without love, not one without water.",
	    	name:"W. H. Auden, English poet"
	    },
	    {
	    	quote:"Fun Fact: Water is the leading cause of drowning!",
	    	name:"<a href='http://anintrospectiveworld.blogspot.de/2012/08/the-deadly-facts-about-water.html' target='_blank'>Deadly Facts about Water</a>"
	    },
	     {
	    	quote:"Fun Fact: 100% of all people exposed to water will die!",
	    	name:"<a href='http://anintrospectiveworld.blogspot.de/2012/08/the-deadly-facts-about-water.html' target='_blank'>Deadly Facts about Water</a>"
	    },
	     {
	    	quote:"Fun Fact: 100% of all serial killerst have admitted to drinking water!",
	    	name:"<a href='http://anintrospectiveworld.blogspot.de/2012/08/the-deadly-facts-about-water.html' target='_blank'>Deadly Facts about Water</a>"
	    },
	       {
	    	quote:"Fun Fact: Over consumption can cause excessive sweating, urination and even death!",
	    	name:"<a href='http://anintrospectiveworld.blogspot.de/2012/08/the-deadly-facts-about-water.html' target='_blank'>Deadly Facts about Water</a>"
	    },	
	        {
	    	quote:"Fact: Roughly 70% of an adults body is made up of water. When we are born it's 80%. ",
	    	name:"<a href='http://www.healthalkaline.com/drinking-water-before-you-get-thirsty/' target='_blank'>healthalkaline.com</a>"
	    },	 
	        {
	    	quote:"Awesome Advice: You should drink before you get thirsty. Seriously. ",
	    	name:"<a href='http://www.healthalkaline.com/drinking-water-before-you-get-thirsty/' target='_blank'>healthalkaline.com</a>"
	    },	
	      {
	    	quote:"Fact: A beer takes about 20 gallons of water to create, while soft drinks can be close to 50, depending on packaging and what sugars are used. ",
	    	name:"<a href='http://www.ecowatch.com/8-shocking-facts-about-water-consumption-1881989567.html' target='_blank'>EcoWatch</a>"
	    },	
	    {
	    	quote:"Awesome Advice: Think about what you drink. Tell people you're passing on the soft drink and going for a beer because its water footprint is lower.",
	    	name:"<a href='http://www.ecowatch.com/8-shocking-facts-about-water-consumption-1881989567.html' target='_blank'>EcoWatch</a>"
	    },
	      {
	    	quote:"Fact: Coffee consumes about 37 gallons of water in the production process, tea takes only 9 gallons.",
	    	name:"<a href='http://www.ecowatch.com/8-shocking-facts-about-water-consumption-1881989567.html' target='_blank'>EcoWatch</a>"
	    },	
	    {
	    	quote:"Fact: To manufacture a smartphone requires 240 gallons of water. ",
	    	name:"<a href='http://www.ecowatch.com/8-shocking-facts-about-water-consumption-1881989567.html' target='_blank'>EcoWatch</a>"
	    }, 
	     {
	    	quote:"Fact: While a pound of lettuce costs about 15 gallons of freshwater and a slice of bread only 10 gallons, chocolate can cost an astronomical 2,847 gallons a pound and beef can run us 2,500 gallons.",
	    	name:"<a href='http://www.ecowatch.com/8-shocking-facts-about-water-consumption-1881989567.html' target='_blank'>EcoWatch</a>"
	    },
	    {
	    	quote:"Awesome Advice: Drinking more can energize you!",
	    	name:"<a href='http://www.healthalkaline.com/drinking-water-before-you-get-thirsty/' target='_blank'>healthalkaline.com</a>"
	    }, 
	    {
	    	quote:"Quote: Drinking water is like washing out your insides. The water will cleanse the system, fill you up, decrease your caloric load & improve the function of all your tissues.",
	    	name:"Kevin R. Stone, famous physician"
	    },  
	     {
	    	quote:"Quote: 飲水思源 - Don’t just be thankful for the water: be thankful for all the elements and processes (both past and present) that allowed you to enjoy that humble cup of water.",
	    	name:"Chinese Proverb"
	    },        
	    {
	    	quote:"Quote: To me, working out is literally like eating a meal or drinking water or breathing.",
	    	name:"Hillary Swank, American actress"
	    }
	   

	];
		

		$('#quoteButton').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].name;
			var image = Math.floor((Math.random() * 5) + 1);
			//console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p><img src="img/'+image+'.png" style="height:40px; weight:40px;"><br>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');
        
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	});//end quoteButton function
		
		
});//end document ready