var radios=["logos1","logqos2","logos3","logos4","kosmos1","kosmos2","kosmos3","kosmos4","eros1","eros2","eros3","eros4"]


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

// Dragon to Logos is 300 / 300 to 75 / 300-Math.sqrt(3)*75 (or 170)
// Kaos to Kosmos is 0 / 300 to 225 / 300-Math.sqrt(3)*75 (or 170)
// Ananke to Eros is 150 / 300-Math.sqrt(3) *150 (or 40) to 150 / 300


var logosPoint = [300,300,75,170,225,130]
var kosmosPoint = [0,300,225,170,-225,130]
var erosPoint = [150,40,150,300,0,-260]

var finalLogosPoint = [logosPoint[0]-logosPoint[4]*(logosScore/20),logosPoint[1]-logosPoint[5]*(logosScore/20)]
var finalKosmosPoint = [kosmosPoint[0]-kosmosPoint[4]*(kosmosScore/20),kosmosPoint[1]-kosmosPoint[5]*(kosmosScore/20)]
var finalErosPoint = [erosPoint[0]-erosPoint[4]*(erosScore/20),erosPoint[1]-erosPoint[5]*(erosScore/20)]
var finalPoint = [(finalLogosPoint[0]+finalKosmosPoint[0]+finalErosPoint[0])/3,(finalLogosPoint[1]+finalKosmosPoint[1]+finalErosPoint[1])/3]
// Draws the Final Point as an average of the 3 conflictual points
/*
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.arc(finalPoint[0],finalPoint[1],4,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill()
*/

//Draws the Middle Point of the Triangle
/*
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.arc(150,213,4,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill()
*/

// Forbidden Places
// 300/300 -> 150/40
// point is at 168,180
// Middle is at 150,213
// Difference is 18, -33
// 1.7333
	var basePoint = [finalPoint[0],finalPoint[1]]

	var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.arc(finalPoint[0],finalPoint[1],4,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill()
	/*
for(i=0;i<100;i++){

	var difference = [finalPoint[0]-150,finalPoint[1]-213]
	if((basePoint[0]-150)*1.7333 < (basePoint[1]-40) && ((basePoint[0]-150)*1.7333 > -(basePoint[1]-40)) && basePoint[1]<300)
	{

	basePoint[0]+= difference[0]/20
	basePoint[1]+= difference[1]/20
console.log(basePoint[0])
	}

	else{

	var uberFinalPoint = [(finalPoint[0]+basePoint[0])/2,(finalPoint[1]+basePoint[1])/2]
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.arc(uberFinalPoint[0],uberFinalPoint[1],4,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill()

}}*/

}

function calculateScore(){


var parameterCalculator = function(name,type,logos,kosmos,eros) {
  this.name = name;
  this.type = type;
  this.logos = logos;
  this.kosmos = kosmos;
  this.eros = eros;
};

var personalityArray = [
DutyFulfillerVishnu = new parameterCalculator("Vishnu","ISTJ",12,18,4),
MechanicHephaestus = new parameterCalculator("Hephaestus","ISTP",16,6,12),
NurturerHathor = new parameterCalculator("Hathor","ISFJ",6,16,12),
ArtistPtah = new parameterCalculator("Ptah","ISFP",16,8,16),
ProtectorArtemis = new parameterCalculator("Artemis","INFJ",6,12,16),
IdealistGanesha = new parameterCalculator("Ganesha","INFP",16,8,8),
ScientistAthena = new parameterCalculator("Athena","ISTJ",16,12,6),
ThinkerOrunmila = new parameterCalculator("Orunmila","INTP",20,0,0),
DoerSunWukong = new parameterCalculator("Sun Wukong","ESTP",12,6,16),
GuardianSobek = new parameterCalculator("Sobek","ESTJ",8,16,8),
PerformerAphrodite = new parameterCalculator("Aphrodite","ESFP",0,4,20),
CaregiverHestia = new parameterCalculator("Hestia","ESFJ",8,16,16),
InspirerApollo = new parameterCalculator("Apollo","ENFP",12,4,16),
GiverParvati = new parameterCalculator("Parvati","ISTJ",6,4,12),
VisionaryIsis = new parameterCalculator("Isis","ENTP",16,12,10),
ExecutiveZeus = new parameterCalculator("Zeus","ENTJ",16,16,8)
]


	matchArray = []

for(p=0;p<personalityArray.length;p++){
	matchArray.push([Math.abs(personalityArray[p].logos-logosScore)+Math.abs(personalityArray[p].kosmos-kosmosScore)+Math.abs(personalityArray[p].eros-erosScore),personalityArray[p].name])
	}
 matchArray.sort(function(a, b){return a[0] - b[0]}); 

alert("The God you are closest to is " + matchArray[0][1] + "!") 
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

switchDivs("myCanvas")
switchDivs("questionsDiv")
calculateScore()
addPoint()
	}
	
	
function switchDivs(selectedDiv) {
  var x = document.getElementById(selectedDiv);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
