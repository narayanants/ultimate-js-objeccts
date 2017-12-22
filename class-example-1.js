class Phone {
	constructor(n){
		this.number = n;
	}
	call(){
		console.log("Phone is making a call!",this.number);
	}
}

var c = new Phone("555-6234");
console.log(c);
c.call();
