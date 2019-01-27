var radios=["logos1","logqos2","logos3","logos4","kosmos1","kosmos2","kosmos3","kosmos4","eros1","eros2","eros3","eros4"]
var displayArray = []

var secondOrigin = function(name,description,originString,originVar,approaches,domains,roles,totalValues) {
  this.name = name;
  this.description = description;
  this.originString = originString;
  this.originVar = originVar;
  this.approaches = approaches;
  this.domains = domains;
  this.roles = roles;
  this.totalValues = totalValues;
};

var parameterCalculator = function(name,type,values) {
  this.name = name;
  this.type = type;
  this.values = values;

};

var adjective = function(name,values) {
  this.name = name;
  this.values = values;

};

var parametersArray = [

// Approaches
Careful = new parameterCalculator("Careful","Approach",[0,15,0]),
Clever = new parameterCalculator("Clever","Approach",[20,0,0]),
Flashy = new parameterCalculator("Flashy","Approach",[5,10,10]),
Forceful = new parameterCalculator("Forceful","Approach",[0,15,15]),
Quick = new parameterCalculator("Quick","Approach",[10,0,10]),
Sneaky = new parameterCalculator("Sneaky","Approach",[15,0,15]),

// Domains

War = new parameterCalculator("War Deity","Domain",[0,10,15]),
Wisdom = new parameterCalculator("Wisdom Deity","Domain",[20,20,0]),
Leader = new parameterCalculator("Leader of the Gods","Domain",[10,20,5]),
Father = new parameterCalculator("Progenitor of the Gods","Domain",[10,15,10]),
Fertility = new parameterCalculator("Fertility Deity","Domain",[0,5,15]),
Love = new parameterCalculator("Love Deity","Domain",[0,0,20]),
Travel = new parameterCalculator("Travel Deity","Domain",[5,0,5]),
Water = new parameterCalculator("Water Deity","Domain",[5,10,10]),
Sky = new parameterCalculator("Sky Deity","Domain",[15,15,0]),
Wit = new parameterCalculator("Wit Deity","Domain",[15,0,10]),
Death = new parameterCalculator("Death Deity","Domain",[0,10,10]),
Fire = new parameterCalculator("Fire Deity","Domain",[5,5,10]),
Earth = new parameterCalculator("Earth Deity","Domain",[0,15,20]),
Justice = new parameterCalculator("Justice Deity","Domain",[15,20,0]),
Moon = new parameterCalculator("Moon Deity","Domain",[0,15,15]),
Sun = new parameterCalculator("Sun Deity","Domain",[15,15,10]),
Knowledge = new parameterCalculator("Knowledge Deity","Domain",[20,0,0]),
Darkness = new parameterCalculator("Darkness Deity","Domain",[5,10,15]),
Crafting = new parameterCalculator("Crafting Deity","Domain",[15,5,5]),
Nature = new parameterCalculator("Nature Deity","Domain",[0,10,15]),
Order = new parameterCalculator("Order Deity","Domain",[5,20,0]),

// Roles

General = new parameterCalculator("General","Personality",[8,16,4]),
Politician = new parameterCalculator("Politician","Personality",[12,16,8]),
FreeSpirit = new parameterCalculator("Free Spirit","Personality",[12,0,12]),
King = new parameterCalculator("King","Personality",[8,16,12]),
Mother = new parameterCalculator("Mother","Personality",[0,8,16]),
Thinker = new parameterCalculator("Thinker","Personality",[20,0,0]),
Harmonizer = new parameterCalculator("Harmonizer","Personality",[4,8,16]),
Prince = new parameterCalculator("Prince","Personality",[12,8,12]),
Enforcer = new parameterCalculator("Enforcer","Personality",[4,16,8]),
Manipulator = new parameterCalculator("Manipulator","Personality",[12,4,12]),
Trickster = new parameterCalculator("Trickster","Personality",[8,0,12]),
Diplomat = new parameterCalculator("Diplomat","Personality",[12,12,8]),
Protector = new parameterCalculator("Protector","Personality",[4,16,4]),
Hunter = new parameterCalculator("Hunter","Personality",[4,8,16]),

// Pantheons

Greek = new parameterCalculator("Greek","God",[16,8,12]),
Chinese = new parameterCalculator("Chinese","God",[8,16,4]),
African = new parameterCalculator("African","God",[4,8,12]),
Egyptian = new parameterCalculator("Egyptian","God",[8,20,4]),
Norse = new parameterCalculator("Norse","God",[8,8,16]),
Maori = new parameterCalculator("Maori","God",[4,8,16]),
Japanese = new parameterCalculator("Japanese","God",[4,16,16]),
Aztec = new parameterCalculator("Aztec","God",[4,12,12]),
Indian = new parameterCalculator("Indian","God",[12,16,12]),
Celtic = new parameterCalculator("Celtic","God",[4,8,16]),
Inca = new parameterCalculator("Inca","God",[8,12,8])

]

var secondOriginArray = [
 Tūmatauenga= new secondOrigin("Tūmatauenga","God of War and Subdueing ",Maori.name,Maori,[Forceful,Flashy,Clever],[War,Leader],[King,General],[]), 
 TaneMahuta= new secondOrigin("Tane Mahuta","God of War and Subdueing ",Maori.name,Maori,[Clever,Forceful,Careful],[Nature,Wisdom],[Harmonizer,Thinker],[]),
 Tawhirimatea= new secondOrigin("Tawhirimatea","Renegade God of weather, lightning and clouds",Maori.name,Maori,[Forceful,Flashy,Sneaky],[Sky],[FreeSpirit,General],[]),
 Rehua= new secondOrigin("Rehua","God of Stars",Maori.name,Maori,[Careful,Clever,Sneaky],[Sky,Wisdom],[Thinker,FreeSpirit],[]),
 HineNuiTePo= new secondOrigin("Hine-nui-te-po","Goddess of Night and Death",Maori.name,Maori,[Clever,Sneaky,Careful],[Death,Moon],[Thinker,Politician],[]),
 Maui= new secondOrigin("Maui","Trickster Hero",Maori.name,Maori,[Clever,Sneaky,Careful],[Wit,War],[Trickster,Protector],[]),
 
 Horus= new secondOrigin("Horus","God of Justice",Egyptian.name,Egyptian,[Clever,Forceful,Quick],[Justice,Leader],[Prince,Politician],[]),
 Hathor= new secondOrigin("Hathor","Goddess of Love, Fertility and Motherhood",Egyptian.name,Egyptian,[Careful,Flashy,Clever],[Fertility ,Sun],[Mother,Diplomat],[]),
 Isis= new secondOrigin("Isis","Goddess of Magic, Inventor of Heku",Egyptian.name,Egyptian,[Clever,Sneaky,Careful],[Wisdom,Wit],[Politician,Thinker],[]),
 AtumRe= new secondOrigin("Atum Re","God of the Sun",Egyptian.name,Egyptian,[Clever,Flashy,Forceful],[Father,Sun],[King],[]),
 Set= new secondOrigin("Set","God of Sky and Guardian of the Desert",Egyptian.name,Egyptian,[Clever,Sneaky,Forceful],[Sky],[Manipulator,Protector],[]),
 Sekhmet= new secondOrigin("Sekhmet","Goddess of War",Egyptian.name,Egyptian,[Forceful,Quick,Flashy],[War],[General,Hunter],[]),
 Ptah= new secondOrigin("Ptah","God of Artistry",Egyptian.name,Egyptian,[Clever,Quick,Flashy],[Crafting],[Thinker,FreeSpirit],[]),
 Sobek= new secondOrigin("Sobek","God of Water and Retribution",Egyptian.name,Egyptian,[Careful,Forceful,Sneaky],[Water],[FreeSpirit,Hunter],[]),
 Thoth= new secondOrigin("Thoth","God of Knowledge",Egyptian.name,Egyptian,[Clever,Sneaky,Quick],[Wisdom],[Thinker],[]),
 
 Brahma= new secondOrigin("Brahma","Creator God",Indian.name,Indian,[Clever,Careful,Sneaky],[Knowledge,Father],[Thinker],[]),
 Ganesha= new secondOrigin("Ganesha","God of good luck and Wisdom",Indian.name,Indian,[Clever,Forceful,Sneaky],[Travel,Wisdom],[Harmonizer,Protector],[]),
 Indra= new secondOrigin("Indra","God of war and weather",Indian.name,Indian,[Forceful,Clever,Flashy],[Sky,Leader],[King],[]),
 Sarasvati= new secondOrigin("Sarasvati","Goddess of artists",Indian.name,Indian,[Flashy,Careful,Sneaky],[Crafting],[FreeSpirit],[]),
 Vishnu= new secondOrigin("Vishnu","The Preserver",Indian.name,Indian,[Careful,Forceful,Clever],[Wisdom,Order],[Protector,Harmonizer],[]),
  
 Aphrodite= new secondOrigin("Aphrodite","Goddess of love and beauty",Greek.name,Greek,[Flashy,Forceful,Careful],[Love],[Manipulator],[]),
 Apollo= new secondOrigin("Apollo","God of prophecy, the sun, and art",Greek.name,Greek,[Flashy,Careful,Clever],[Sun,Crafting],[Politician],[]),
 Artemis= new secondOrigin("Artemis","Goddess of chastity, the moon, and hunting",Greek.name,Greek,[Careful,Sneaky,Quick],[Moon,War],[FreeSpirit],[]),
 Athena= new secondOrigin("Athena","Goddess of strategy and wisdom",Greek.name,Greek,[Clever,Careful,Forceful],[War,Wisdom],[General],[]),
 Dionysus= new secondOrigin("Dionysus","God of Wine, Friendship and Liberty",Greek.name,Greek,[Flashy,Careful,Clever],[Wit],[FreeSpirit,Harmonizer],[]),
 Hades= new secondOrigin("Hades","Ruler of the Underworld",Greek.name,Greek,[Careful,Sneaky,Clever],[Death],[Politician,King],[]),
 Hephaestus= new secondOrigin("Hephaestus","God of the Forge and Invention",Greek.name,Greek,[Clever,Careful,Forceful],[Crafting,Fire],[Thinker],[]),
 Hera= new secondOrigin("Hera","Goddess of marriage and politics",Greek.name,Greek,[Forceful,Sneaky,Clever],[Leader,Fertility],[]),
 Herakles= new secondOrigin("Herakles","God of Strength",Greek.name,Greek,[Forceful,Flashy,Quick],[War],[Prince,Enforcer],[]),
 Hermes= new secondOrigin("Hermes","God of thieves, merchants, and tricksters",Greek.name,Greek,[Quick,Clever,Sneaky],[Travel,Wit],[FreeSpirit],[]),
 Poseidon= new secondOrigin("Poseidon","God of the sea",Greek.name,Greek,[Flashy,Forceful,Careful],[Water],[King,FreeSpirit],[]),
 Zeus= new secondOrigin("Zeus","God of Leadership, Thunder, Sky, and Power",Greek.name,Greek,[Flashy,Forceful,Clever],[Leader,Sky],[King,Politician],[]),

 Anansi= new secondOrigin("Anansi","Spider God of Tricks and Knowledge",African.name,African,[Clever,Flashy,Quick],[Knowledge,Wisdom],[Trickster,Harmonizer],[]),
BaronSamedi= new secondOrigin("Baron Samedi","God of Death, Keeper of Guinee",African.name,African,[Flashy,Clever,Sneaky],[Death],[FreeSpirit,Harmonizer],[]),
Kalfu= new secondOrigin("Kalfu","God of Darkness",African.name,African,[Clever,Sneaky,Quick],[Darkness,Travel],[Manipulator,Trickster],[]),
Legba= new secondOrigin("Legba","God of Crossroads, Psychopomp",African.name,African,[Careful,Clever,Quick],[Wisdom,Travel],[Protector,Thinker],[]),

Change= new secondOrigin("Chang'e","Goddess of the Moon",Chinese.name,Chinese,[Clever,Quick,Sneaky],[Moon],[Diplomat,Harmonizer],[]),
Erlang= new secondOrigin("Erlang","God of Truth",Chinese.name,Chinese,[Clever,Careful,Quick],[Leader,Justice],[General,Enforcer],[]),
GaoYao= new secondOrigin("Gao Yao","God of Law",Chinese.name,Chinese,[Forceful,Clever,Careful],[Knowledge,Justice],[Enforcer,Thinker],[]),
GuanYu= new secondOrigin("Guan Yu","18th Jade Emperor, God of Martial Power and Brotherhoods",Chinese.name,Chinese,[Forceful,Clever,Flashy],[Justice,War],[General,Enforcer],[]),
Shangdi= new secondOrigin("Shangdi","Yellow Emperor, Overseer of Tiàn",Chinese.name,Chinese,[Forceful,Clever,Careful],[Leader,Order],[King,Enforcer],[]),
SunWukong= new secondOrigin("Sun Wukong","Monkey King, God of Trickery and Strength",Chinese.name,Chinese,[Flashy,Quick,Clever],[Wit],[FreeSpirit,Trickster],[]),

Brigid= new secondOrigin("Brigid","Goddess of Spring, Fertility and Dawn",Celtic.name,Celtic,[Clever,Careful,Quick],[Fertility,Sky],[Diplomat,Thinker],[]),
Cernunnos= new secondOrigin("Cernunnos","God of Druidism and Nature",Celtic.name,Celtic,[Clever,Careful,Sneaky],[Nature],[Harmonizer,FreeSpirit],[]),
Dagda= new secondOrigin("Dagda","God of Masculinity and Magic, High King of Ireland",Celtic.name,Celtic,[Flashy,Forceful,Quick],[War,Nature],[General,King],[]),
Lugh= new secondOrigin("Lugh","God of Sky and Oaths",Celtic.name,Celtic,[Clever,Forceful,Quick],[Sky,Justice],[Enforcer,General],[]),
ManannanmacLir= new secondOrigin("Manannan mac Lir","God of the Sea and Psychopomp",Celtic.name,Celtic,[Careful,Clever,Sneaky],[Water,Travel],[FreeSpirit,Protector],[]),
Morrigan= new secondOrigin("The Morrigan","Goddess of War and Prophecy",Celtic.name,Celtic,[Forceful,Clever,Quick],[War,Death],[Thinker,Hunter],[]),

Inti= new secondOrigin("Inti","God of the Sun",Inca.name,Inca,[Flashy,Forceful,Quick],[Leader, Sun],[King,Enforcer],[]),

 Baldur= new secondOrigin("Baldur","God of Light, Beauty, Love and Happiness.",Norse.name,Norse,[Flashy,Careful,Quick],[Love,Fertility],[FreeSpirit,Prince],[]),
 Freya= new secondOrigin("Freya","Goddess of the Gold, and War.",Norse.name,Norse,[Clever,Forceful,Flashy],[War,Crafting],[Diplomat,Manipulator],[]),
 Freyr= new secondOrigin("Freyr","God of Farming, Weather and Fertility.",Norse.name,Norse,[Careful,Clever,Sneaky],[Fertility],[Harmonizer],[]),
 Heimdall= new secondOrigin("Heimdall","Protector of Asgard",Norse.name,Norse,[Sneaky,Careful,Clever],[Justice],[Protector,Manipulator],[]),
 Odin= new secondOrigin("Odin","King of Asgard, God of Magic, Wisdom, and Prophecy",Norse.name,Norse,[Clever,Sneaky,Forceful],[Leader,Father],[King,Manipulator],[]),
 Thor= new secondOrigin("Thor","God of Thunder and War",Norse.name,Norse,[Forceful,Flashy,Quick],[War,Sky],[FreeSpirit,Protector],[]),
 Vidar= new secondOrigin("Vidar","God of Vengeance",Norse.name,Norse,[Forceful,Clever,Sneaky],[Justice,Darkness],[Enforcer,Protector],[]),
 Loki= new secondOrigin("Loki","Trickster God",Norse.name,Norse,[Clever,Sneaky,Quick],[Wit],[Manipulator,Trickster],[]),
 Bragi= new secondOrigin("Bragi","God of Poets",Norse.name,Norse,[Clever,Flashy,Careful],[Wit],[FreeSpirit],[]),
 
 Amaterasu= new secondOrigin("Amaterasu","Goddess of the Sun",Japanese.name,Japanese,[Clever,Flashy,Careful],[Sun,Leader],[Politician,Mother],[]),
 Izanagi= new secondOrigin("Izanagi","Lord of the Sky",Japanese.name,Japanese,[Careful,Quick,Sneaky],[Father,Sky],[FreeSpirit,Thinker],[]),
 Raiden= new secondOrigin("Raiden","Lord of Thunder and Lightning",Japanese.name,Japanese,[Flashy,Forceful,Quick],[Sky],[FreeSpirit],[]),
 Izanami= new secondOrigin("Izanami","Queen of the Underworld",Japanese.name,Japanese,[Clever,Careful,Sneaky],[Death,Earth],[Enforcer,Manipulator],[]),
 Susanoo= new secondOrigin("Susano-o","Lord of Sea and Storms",Japanese.name,Japanese,[Flashy,Forceful,Clever],[Water,Travel],[FreeSpirit,Harmonizer],[]),
 Inari= new secondOrigin("Inari","Androgynous God/Goddess of Foxes and Prosperity",Japanese.name,Japanese,[Clever,Careful,Sneaky],[Wit,Fertility],[Trickster,Harmonizer],[]),

 Quetzalcoátl= new secondOrigin("Quetzalcoátl","God of Light, Civilization and Creation, Cardinal God of the West",Aztec.name,Aztec,[Clever,Careful,Flashy],[Leader,Wisdom],[Harmonizer,Politician],[]),
 Tezcatlipoca= new secondOrigin("Tezcatlipoca","God of Change, Night and Destruction, Cardinal God of the North",Aztec.name,Aztec,[Clever,Sneaky,Forceful],[Moon,Darkness],[King],[]),
]

function godPlacer(){

	for(e=0;e<secondOriginArray.length;e++){
		totalScore = [0,0,0]
		
		approachesScore = [0,0,0]
		for(g=0;g<secondOriginArray[e].approaches.length;g++){
			approachesScore[0] += secondOriginArray[e].approaches[g].values[0]/(g+1)
			approachesScore[1] += secondOriginArray[e].approaches[g].values[1]/(g+1)
			approachesScore[2] += secondOriginArray[e].approaches[g].values[2]/(g+1)
		}
		domainsScore = [0,0,0]
		for(g=0;g<secondOriginArray[e].domains.length;g++){
			domainsScore[0] += secondOriginArray[e].domains[g].values[0]
			domainsScore[1] += secondOriginArray[e].domains[g].values[1]
			domainsScore[2] += secondOriginArray[e].domains[g].values[2]
		}
		for(p=0;p<domainsScore.length;p++){domainsScore[p]/=g}

		rolesScore = [0,0,0]
		for(g=0;g<secondOriginArray[e].roles.length;g++){
			rolesScore[0] += secondOriginArray[e].roles[g].values[0]
			rolesScore[1] += secondOriginArray[e].roles[g].values[1]
			rolesScore[2] += secondOriginArray[e].roles[g].values[2]
		}
		for(p=0;p<rolesScore.length;p++){rolesScore[p]/=g}

		originVarScore = [0,0,0]
			originVarScore[0] += secondOriginArray[e].originVar.values[0]
			originVarScore[1] += secondOriginArray[e].originVar.values[1]
			originVarScore[2] += secondOriginArray[e].originVar.values[2]	

			
		for(p=0;p<originVarScore.length;p++){originVarScore[p]/=g}
		for(g=0;g<totalScore.length;g++){totalScore[g] = Math.round((approachesScore[g]*0.15 + domainsScore[g]*0.35 + rolesScore[g]*0.35 + originVarScore[g]*0.15)*10)/10}
		secondOriginArray[e].totalValues = totalScore
		
		//for(g=0;g<totalScore.length;g++){if(secondOriginArray[e].totalValues[g] <10){secondOriginArray[e].totalValues[g]/=4} else{secondOriginArray[e].totalValues[g] += (20-secondOriginArray[e].totalValues[g])/4}}
		
	logosScore = secondOriginArray[e].totalValues[0]
	kosmosScore = secondOriginArray[e].totalValues[1];
	erosScore = secondOriginArray[e].totalValues[2];
	
	/*
	logosScore = 10
	kosmosScore = 10
	erosScore = 20
	*/
	displayArray.push(secondOriginArray[e].name + ": " + (Math.round((logosScore-10)*10)/10) + "," + (Math.round((kosmosScore-10)*10)/10) + "," + (Math.round((erosScore-10)*10)/10) + "\n")
//	addPoint()
		}
//alert(displayArray)

}

function drawTriangle(){
var ax=300;
var ay=300;
var bx=0;
var by=300;
var cx=150;
var cy=300-Math.sqrt(3)*150;


var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();  
ctx.moveTo(ax,ay);  
ctx.lineTo(bx,by);  
ctx.lineTo(cx,cy);  
 ctx.fillStyle = "lightgrey";
ctx.fill(); 
}

function addPoint(){

	//	calculateScore2()

// calculateScore();
/*
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.arc(150,200,4,0,2*Math.PI);
ctx.stroke();
 ctx.fillStyle = "black";
ctx.fill()
*/

// Dragon to Logos is 300;300 to 75;300-Math.sqrt(3)*75 (or 170)
// Kaos to Kosmos is 0;300 to 225 / 300-Math.sqrt(3)*75 (or 170)
// Ananke to Eros is 150;300-Math.sqrt(3) *150 (or 40) to 150;300


var logosPoint = [300,300,75,170,225,130]
var kosmosPoint = [0,300,225,170,-225,130]
var erosPoint = [150,40,150,300,0,-260]

var finalLogosPoint = [logosPoint[0]-logosPoint[4]*(logosScore/20),logosPoint[1]-logosPoint[5]*(logosScore/20)]
var finalKosmosPoint = [kosmosPoint[0]-kosmosPoint[4]*(kosmosScore/20),kosmosPoint[1]-kosmosPoint[5]*(kosmosScore/20)]
var finalErosPoint = [erosPoint[0]-erosPoint[4]*(erosScore/20),erosPoint[1]-erosPoint[5]*(erosScore/20)]
var finalPoint = [(finalLogosPoint[0]+finalKosmosPoint[0]+finalErosPoint[0])/3,(finalLogosPoint[1]+finalKosmosPoint[1]+finalErosPoint[1])/3]

//finalPoint[0] is the length of the journey divided by the Logos Score. finalPoint[1] is the same for the height. This makes them coordinates.


// Forbidden Places
// 300/300 -> 150/40
// point is at 168,180
// Middle is at 150,213
// Difference is 18, -33
// 1.7333
	var basePoint = [finalPoint[0],finalPoint[1]]
	//basePoint is the final point, before exaggeration
/*	
	var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.arc(finalPoint[0],finalPoint[1],4,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill()
*/

for(i=0;i<100;i++){
	var difference = [finalPoint[0]-150,finalPoint[1]-213]
	//Difference is the final point coordinates minus the coordinates of the exact middle of the Triangle
	while((basePoint[0]-150)*1.7333 < (basePoint[1]-40) && ((basePoint[0]-150)*1.7333 > -(basePoint[1]-40)) && basePoint[1]<300)
	//as long as the length of the finalpoint has not reached an edge, it can be modified. basepoint becomes an exaggeration of finalpoint until either coordinate becomes out of bounds
		{
	basePoint[0]+= difference[0]/20
	basePoint[1]+= difference[1]/20
	//exaggerates the distance between basePoint and the center of the graph until one of the coordinates goes out of bounds
	}

}
middleDistance = [basePoint[0]-150,basePoint[1]-213]
	// distance between the edge and the center
	//now we have the distance between basePoint and the center, and finalPoint and the center

	// Difference is the distance between finalPoint and the center
	//MiddleDistance is the distance between basePoint and the center 
basicRatio = (basePoint[1]-213)/(difference[1]+0.1)
	//the lower the ratio the closest to the extreme the point is
finalToBasic = [basePoint[0]-finalPoint[0],basePoint[1]-finalPoint[1]]	

	//finalToBasic is the distance between the finalPoint and the basicPoint
	// now we set uberFinalPoint based on the ratio: the smaller the ratio, the more basePoint is heavy
//	var uberFinalPoint = [((finalPoint[0]*(basicRatio+5))+(basePoint[0]*(15-basicRatio)))/20,((finalPoint[1]*(basicRatio+5))+(basePoint[1]*(15-basicRatio)))/20]
	var uberFinalPoint = [finalPoint[0]+(finalToBasic[0]/(basicRatio/2+0.5)),finalPoint[1]+(finalToBasic[1]/(basicRatio/2)+0.5)]
	//the basicRatio can be used to set how the exagerration is made.

//	alert(Math.round(finalPoint[0]) + "," + Math.round(finalPoint[1]) + "   " + Math.round(uberFinalPoint[0]) + "," + Math.round(uberFinalPoint[1]) + "  " + secondOriginArray[e].name)
var c=document.getElementById("myCanvas");
var ctz=c.getContext("2d");
ctz.beginPath();
//ctz.arc(uberFinalPoint[0],uberFinalPoint[1],4,0,2*Math.PI);
ctz.arc(uberFinalPoint[0],uberFinalPoint[1],4,0,2*Math.PI);

ctz.stroke();
ctz.fillStyle = "black"
//console.log(colorChoice2[crt])
//console.log("rgb(" + [colorChoice1[b],colorChoice2[crt],255].join(',') + ')')
ctz.fill()



}

function calculateScore(){

	matchArray = []

for(p=0;p<secondOriginArray.length;p++){
//	console.log(secondOriginArray[p])
	matchArray.push([Math.abs(secondOriginArray[p].totalValues[0]-logosScore)+Math.abs(secondOriginArray[p].totalValues[1]-kosmosScore)+Math.abs(secondOriginArray[p].totalValues[2]-erosScore),secondOriginArray[p]])
	}
 matchArray.sort(function(a, b){return a[0] - b[0]}); 

addPoint()
		switchDivs("myCanvas")
	switchDivs("questionsDiv")
alert("The God you are closest to is " + matchArray[0][1].name + ", " +  matchArray[0][1].originString + " " + matchArray[0][1].description + "\nWiki Link: \nhttp://wyrdwalkers.wikidot.com/" + matchArray[0][1].name) 	
	personalityMatcher()
}


function calculateScore2(){
	logosScore = 0;
	kosmosScore = 0;
	erosScore = 0;

	
	for(n=0;n<radios.length;n++){
		
var rates = document.getElementsByName(radios[n]);
var rate_value;
for(var v = 0; v < rates.length; v++){
    if(rates[v].checked){
        rate_value = rates[v].value;
    }
}
	if(n<4){logosScore+=parseInt(rate_value)}
	else if(n<8){kosmosScore+=parseInt(rate_value)}
	else {erosScore+=parseInt(rate_value)} 
	}


calculateScore()
addPoint()
//		switchDivs("myCanvas")
//	switchDivs("questionsDiv")	
	}
	
	
function switchDivs(selectedDiv) {
  var x = document.getElementById(selectedDiv);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


//27 similar results, 37 unique ones
//37 final results (removing middle): 6 basic, 6 more advanced versions, then 6 mixes of those, then 6 final advanced and 6 mixes on each sides
/*How this will work: 
1 all neutral (4 neutral)
IF all numbers are the same
---
6 with neutral words except a mild version of the side (3 neutrals, one normal)
IF Two sides are the same and one is one level of difference
---
6 with neutral words except a strong version of the side (2 neutals, two normal)
IF Two sides are the same and one is two levels of difference
6 with mixes (2 neutrals, one strong from each common side)
IF There is one at 2.5, one at 7.5, one at 12.5
---
6 with very strong words (2 neutrals, two strong)
IF Two sides are the same and one is three levels of difference
12 with strong words and mixes (1 neutral, two strong, one strong of the relevant side)
*/

function personalityMatcher(){	

while(logosScore > 0 && kosmosScore > 0 && erosScore > 0){logosScore -= 1;kosmosScore -=1;erosScore -=1}

	matchArrayAdjectives = []

for(p=0;p<adjectiveArray.length;p++){
	matchArrayAdjectives.push([Math.abs(adjectiveArray[p].values[0]-logosScore)+Math.abs(adjectiveArray[p].values[1]-kosmosScore)+Math.abs(adjectiveArray[p].values[2]-erosScore),adjectiveArray[p]])
	}
 matchArrayAdjectives.sort(function(a, b){return a[0] - b[0]}); 
console.log(matchArrayAdjectives)

addPoint()
alert("-" + matchArrayAdjectives[0][1].name + "\n-" +  matchArrayAdjectives[1][1].name) 	
}




adjectiveArray = [

traditionalist = new adjective("Very Traditionalist",[0,20,0]),
traditionalist = new adjective("Conservative",[0,10,0]),
traditionalist = new adjective("Balanced",[0,0,0]),
traditionalist = new adjective("Introverted",[20,0,0]),
traditionalist = new adjective("Calm",[10,0,0]),
traditionalist = new adjective("Passionate",[0,0,20]),
traditionalist = new adjective("Emotional",[0,0,10]),
traditionalist = new adjective("Disorganised",[10,0,10]),
traditionalist = new adjective("Impulsive",[0,10,10]),
traditionalist = new adjective("Serious",[10,10,10]),
traditionalist = new adjective("Chaotic",[20,0,20]),
traditionalist = new adjective("Wild",[0,20,20]),
traditionalist = new adjective("Spiritual",[20,20,0])


]

/*Kosmos , Kaos*/kosmosKaos1 = [["traditionalist", "down-to-earth", "practical"],["traditionalist", "down-to-earth", "practical"],["imaginative", "open-minded", "experimental"],["imaginative", "open-minded", "experimental"]],
/*Kosmos , Kaos*/kosmosKaos2 = [["conscientious", "disciplined", "well organised"],["conscientious", "disciplined", "well organised"],["spontaneous", "disorganised"],["spontaneous", "disorganised"]]

/* Logos , Dragon*/logosDragon1 = [["reserved", "formal", "serious", "quiet"],["reserved", "formal", "serious", "quiet"],["impulsive","spontaneous","passionate"],["impulsive","spontaneous","passionate"]]
/* Logos , Dragon*/logosDragon2 = [["calm","reflective","collected"],["calm","reflective","collected"],["unfocused","easily distracted","wild"],["unfocused","easily distracted","wild"]]

/* Eros , Ananke*/ erosAnanke1 = [["emotional", "responsive"],["emotional", "responsive"],["composed", "inflexible","controlled"],["composed", "inflexible","controlled"]]
/* Eros , Ananke*/ erosAnanke2 = [["self-indulgent","fun-seeking","enjoying life"],["self-indulgent","fun-seeking","enjoying life"],["ethical", "principled", "dependable"],["ethical", "principled", "dependable"]]
