class Stark{
	constructor(a){
		console.log("Constructing",a);
		this.name = `${a} Stark`;
	}
}


var Eddard = new Stark("Eddard");
console.log(Eddard);
