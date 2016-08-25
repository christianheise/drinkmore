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
	    	quote:"Quote: Don’t just be thankful for the water: be thankful for all the elements and processes (both past and present) that allowed you to enjoy that humble cup of water.",
	    	name:"Chinese Proverb"
	    },
			{
			 quote:"Awesome Advice: The average pool takes 22,000 gallons of water to fill, and if you don't cover it, hundreds of gallons of water per month can be lost due to evaporation.",
			 name:"<a href='http://environment.nationalgeographic.com/environment/freshwater/water-conservation-tips/' target='_blank'>National Geographic</a>"
		 },
		 {
			quote:"Awesome Advice: That quarter pounder is worth more than 30 average American showers. One of the easiest ways to slim your water footprint is to eat less meat and dairy. Another way is to choose grass-fed, rather than grain-fed, since it can take a lot of water to grow corn and other feed crops.",
			name:"<a href='http://environment.nationalgeographic.com/environment/freshwater/water-conservation-tips/' target='_blank'>National Geographic</a>"
		},
		{
		 quote:"Fact: Traveling from Chicago to Istanbul is just about 10,000 miles round trip, costing enough water to run electricity in the average American home for one person for more than five years.",
		 name:"<a href='http://environment.nationalgeographic.com/environment/freshwater/water-conservation-tips/' target='_blank'>National Geographic</a>"
	 },
	 {
		quote:"Fact: The water required to create your laptop could wash nearly 70 loads of laundry in a standard machine.",
		name:"<a href='http://environment.nationalgeographic.com/environment/freshwater/water-conservation-tips/' target='_blank'>National Geographic</a>"
	},
	{
	 quote:"Fact: Your T-Shirt can make a difference! #wastelesswater",
	 name:"<a href='https://www.youtube.com/watch?v=xEExMcjSkwA' target='_blank'>Video by National Geographic</a>"
 },
 {
	quote:"Fact: A mere 2.5% of Earth's water is freshwater and only 0.3% of it is readily accessible to humans. This is equivalent to 0.01% of all water on Earth. Of this fraction, 8% goes towards domestic use, 22% is used by industry, and 70% for irrigation. If the research is correct, humanity's water footprint will reach a level 40% above reliable, accessible water supplies by 2030.",
	name:"<a href='https://www.theguardian.com/sustainable-business/water-scarcity-fashion-industry' target='_blank'>The Guardian</a>"
 },
 {
 quote:"Quote: In wine there is wisdom, in beer there is Freedom, in water there is bacteria.",
 name:"Benjamin Franklin ,one of the Founding Fathers of the United States"
 },
 {
 quote:"Fact: Jellyfish are 98% water, so they evaporate in the sun.",
 name:"<a href='https://www.reddit.com/r/todayilearned/comments/2b9wpp/til_that_since_jellyfish_are_98_water_they/' target='_blank'>reddit</a>"
 },
 {
 quote:"All the water on Earth arrived in comets and asteroids. It happened between 4.5bn and 3.8bn years ago, a period called the Late Heavy Bombardment.",
 name:"<a href='https://www.buzzfeed.com/tomchivers/fascinating-and-strange-facts-about-water?utm_term=.ejp033JGG' target='_blank'>buzzfeed</a>"
 },
  {
 quote:"Fact: A jellyfish and a cucumber are each 95% water.",
 name:"<a href='http://www.seametrics.com/blog/water-facts/' target='_blank'>Seametrics</a>"
 },
 {
quote:"Quote: We never know the worth of water till the well is dry.",
name:"Thomas Fuller, English churchman and historian"
},
{
quote:"Quote: I believe that water is the only drink for a wise man.",
name:"Henry David Thoreau, American essayist, poet, philosopher, abolitionist, naturalist, tax resister, development critic, surveyor, and historian"
},
{
quote:"Quote: Ocean - longest longdrink",
name:"Erhard Horst Bellermann, engineer, poet and Aphoristiker"
},
{
quote:"Quote: Water is a friendly element for the one who is accustomed to it and know how to treat it.",
name:"Johann Wolfgang von Goethe, german poet"
},
{
quote:"Quote: We must treat water as if it were the most precious thing in the world, the most valuable natural resource. Be economical with water! Don't waste it! We still have time to do something about this problem before it is too late.",
name:"Mikhail Gorbachev"
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
