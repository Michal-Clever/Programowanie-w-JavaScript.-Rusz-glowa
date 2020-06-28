
var chevy = {
	make: "Chevy",
	model: "Bel Air",
	year: 1957,
	color: "czerwony",
	passengers: 2,
	convertible: false,
	mileage: 1021
};

var cadi = {
	make: "Cadi",
	model: "Cadillac GM",
	year: 1955,
	color: "jasnobrązowy",
	passengers: 5,
	convertible: false,
	mileage: 12892
};	

var fiat = {
	make: "Fiat",
	model: "500",
	year: 1957,
	color: "szaroniebieski",
	passengers: 2,
	convertible: false,
	mileage: 88000,
	started: false,
	start: function(){
		this.started=true;
	},
	stop: function(){
		this.started=false;
	},
	drive: function(){
		if (this.started) {
		alert("Brum wzium!!");
	}else{
		alert("Pierw włącz silnik");
		}
	}
};	

var taxi = {
	make: "SieMoCorp",
	model: "Taxi",
	year: 1955,
	color: "żółty",
	passengers: 4,
	convertible: false,
	mileage: 281341
};


function prequal(car){
	if ( car.mileage > 10000){
		return false;
	}else if( car.year>1960){
		return false;
	}
		return true;
}
//fiat.drive();
//fiat.start();
//fiat.drive();
//fiat.stop();
















var worthALook = prequal ( taxi );

if (worthALook){
	console.log("Powinieneś zainteresować się tym "+ taxi.make + " " + taxi.model);
	} else {
	console.log ("Ten " + taxi.make + " " + taxi.model + " możesz sobie podarować");
}






var eightBall = { index : 0,
				advice: [ "tak","nie","może","nie ma szans"],
				shake: function(){
					this.index = this.index+1;
					if(this.index >= this.advice.length){
						this.index=0;
					}
				},
				look: function(){
					
					return this.advice[this.index];
				}
};
eightBall.shake();
console.log(eightBall.look());
eightBall.shake();
console.log(eightBall.look());

eightBall.shake();
console.log(eightBall.look());

eightBall.shake();
console.log(eightBall.look());

eightBall.shake();
console.log(eightBall.look());

eightBall.shake();
console.log(eightBall.look());



for ( var prop in chevy ) {
	console.log(prop + ": " + chevy [prop]);
}

















