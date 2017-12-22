class Phone {
	constructor(n){
		this.number = n;
	}
	call(){
		console.log("Phone is making a call!",this.number);
	}
}

var iPhone = class extends Phone{
	email(contents){
		console.log("I am sending an email!");
	}
	call(){
		console.log("Making digital call!");
		super.call();
	}
}

var c = new Phone("555-6234");
//console.log(c);
//c.call();
//c.email();

var iPhone = new iPhone("+446454535");
iPhone.call();
iPhone.email();
