console.log("connected")

let holdTimer = 0;

class Tomagotchi {
	constructor () {				//make sure stats cannot exceeed min/max thresholds
		this.name = "Tami Gatchi";
		this.happiness = 4;
		this.hunger = 0;		
		this.sick = false;
		this.sleepiness = 0;
		this.sleep =  false;
		this.boredom = 0;
		this.light = true;
		this.dead = false;
	}

	day () {		

		$("#event")[0].play();

		//hunger incrementor			working
		const hungerInc = () => {
			let timer = 0;
			let seconds = setInterval(() =>{
				if (timer === 180 || this.dead === true){
					clearInterval(seconds);
					// console.log(timer)
				} else if (timer%9 === 0 && timer !== 0){
					this.hunger += Math.floor(Math.random()*2);
					$("#event")[0].play();
					timer ++;
					// console.log(timer)
					$("#hunger").text(`HUNGER: \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ${this.hunger}`);
				} else {
					timer ++;
					// console.log(timer)
				}
			}, 1000
			)
		}
		hungerInc();

		// sleepiness incrementor			working
		const sleepInc = () => {
			let timer = 0;
			let seconds = setInterval(() =>{
				if (timer === 180 || this.dead === true) {
					clearInterval(seconds);
					// console.log(timer)
				} else if (timer === 90){
					this.sleepiness += Math.floor(Math.random()*5);
					$("#event")[0].play();
					timer ++
					// console.log(timer)
					$("#sleepiness").text(`SLEEPINESS: \u00A0\u00A0 ${this.sleepiness}`);
				} else if (timer%14 === 0 && timer !== 0){
					this.sleepiness += Math.floor(Math.random()*2);
					$("#event")[0].play();
					timer ++
					// console.log(timer)
					$("#sleepiness").text(`SLEEPINESS: \u00A0\u00A0 ${this.sleepiness}`);
				} else {
					timer ++;
					// console.log(timer)
				}
				}, 1000
			);
		};
		sleepInc();

		//boredom incrementor			working
		const boredInc = () => {
			let timer = 0;
			let seconds = setInterval(() =>{
				if (timer === 180 || this.dead === true){
					clearInterval(seconds);
				} else if (timer%9 === 0 && timer !== 0){
					this.boredom += Math.floor(Math.random()*2);
					$("#event")[0].play();
					timer ++;
					$("#boredom").text(`BOREDOM: \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ${this.boredom}`);
				} else {;
					timer ++;
				}
			}, 1000
			);
		};
		boredInc();
		
	};

	feed () {		//working
		if (this.hunger >= 1){
		this.hunger -= 1;
		}
		$("#happiness").text(`HAPPINESS: \u00A0\u00A0 ${this.happiness}`);
		$("#hunger").text(`HUNGER: \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ${this.hunger}`);

	}
	lightSwitch() {	//working

			if (this.light ===  true){
				this.light = false;

				if (this.sleep === true) {
					$("#tami").attr("src", "images/sleepDark.png");
				} else if (this.sleep === false) {
					$("#tami").attr("src", "images/tamiDark.png");
				}
			} else {															
				this.light = true

				if (this.sleep === false) {
					$("#tami").attr("src", "images/tami.png")
				} else if (this.sleep === true){
					$("#tami").attr("src", "images/sleepLight.png");
				}
			}
	};

	nap() {

		let timer = 0;

		$("#sleepiness").text(`SLEEPINESS: \u00A0\u00A0 ${this.sleepiness}`);
		
		this.sleep = true;

		let seconds = setInterval(() => {
			if (timer === 10) {
				clearInterval(seconds);
				this.sleep = false;
				this.light = true;
				$("#event")[0].play();
				$("#tami").attr("src", "images/tami.png");
				$("#sleepiness").text(`SLEEPINESS: \u00A0\u00A0 ${this.sleepiness}`);
			} else if (timer%2 === 0 && timer !== 0) {
					if (this.sleep === true && this.light === true) {
						$("#tami").attr("src", "images/sleepLight.png");
						if (this.happiness >= 1){
							this.happiness --;
							$("#event")[0].play();
						}
						timer++;
						$("#sleepiness").text(`SLEEPINESS: \u00A0\u00A0 ${this.sleepiness}`);
					} else if (this.sleep === true && this.light === false) {
						$("#tami").attr("src", "images/sleepDark.png");
						if (this.sleepiness >= 1){
							this.sleepiness -= Math.floor(Math.random()*2);
							$("#event")[0].play();
						}
						$("#sleepiness").text(`SLEEPINESS: \u00A0\u00A0 ${this.sleepiness}`);
					}
					timer ++;
			}	else {
					if (this.light === true) {
						$("#tami").attr("src", "images/sleepLight.png");
					} else {
						$("#tami").attr("src", "images/sleepDark.png");
					}
					timer ++;
			}
		}, 1000)
	}
	
	play() { //working
		if (this.boredom >= 1){
		this.boredom -= Math.floor(Math.random()*2);
		}
		if (this.happiness <= 9){
		this.happiness += Math.floor(Math.random()*2);
		}
		$("#tami").attr("src", "images/play.png")
		$("#happiness").text(`HAPPINESS: \u00A0\u00A0 ${this.happiness}`);
		$("#boredom").text(`BOREDOM: \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${this.boredom}`);

	}

	medicine() {	// working
		if (this.happiness <= 3) {
		this.happiness += Math.floor(Math.random()*5);
		}
		$("#happiness").text(`HAPPINESS: \u00A0\u00A0 ${this.happiness}`);
	}

	illness() {
		let timer = 0;
		$("#ill")[0].play();
		let seconds = setInterval(() =>{
				if (timer === 15 || happiness === 0  || this.dead === true){
					clearInterval(seconds);
					tami.death();
				} else if (timer%4 === 0) {
					$("#ill")[0].play();
					if (this.happiness <= 3 || this.hunger >= 7 || this.boredom >= 8 || this.sleepiness === 9) {
						$("#tami").attr("src", "images/sick.png");
						if (this.happiness >=1){
							this.happiness --;
						}
						$("#happiness").text(`HAPPINESS: \u00A0\u00A0 ${this.happiness}`);
						console.log(this.happiness);
						timer ++
					} else if (this.happiness >= 5 && this.hunger <= 7 && this.boredom <= 8 && this.sleepiness !== 10){
						holdTimer += timer;
						clearInterval(seconds);
						healthCheck(tami);
						$("#tami").attr("src", "images/tami.png");
					}
				} else {
					$("#tami").attr("src", "images/sick.png");
					timer++;
				}

		}, 1000)
	};

	death() {
		$("#tami").attr("src", "images/dead.png");
		this.dead = true;
		$("#ill")[0].play();
	}

}

const tami = new Tomagotchi();

const healthCheck = (nameTom) => {
		let timer = holdTimer;
		let seconds = setInterval(() =>  {

			if (timer === 180 || this.dead === true){
				clearInterval(seconds);
			} else if (timer%1 === 0) {
					if (nameTom.happiness <= 3 || nameTom.hunger >= 7 || nameTom.boredom >= 8 || nameTom.sleepiness === 9){
						holdTimer = timer;
						clearInterval(seconds);
						tami.illness();
					} else {
						timer ++;
					}
			} 
		}, 1000)
	};

const sprite = (nameTom) => {
		
		let timer = 0;
		let seconds = setInterval(() =>  {

			if (timer === 180){
				clearInterval(seconds);
				$("#tami").attr("src", "images/sleepDark.png");
			} else if (this.dead === true) {
				clearInterval(seconds);
				$("#tami").attr("src", "images/dead.png");
			}else if (timer%1 === 0) {
					if (nameTom.happiness >= 7 && nameTom.sleep === false && nameTom.light === true && nameTom.sick === false){
						$("#tami").attr("src", "images/happy.png");
						timer ++;
					} else if (nameTom.happiness <= 4 && nameTom.sleep === false && nameTom.light === true && nameTom.sick === false){
						$("#tami").attr("src", "images/sad.png");
						timer++;
					} else if (nameTom.sleep === false && nameTom.light === true && nameTom.sick === false){
						$("#tami").attr("src", "images/tami.png");
						timer++;
					}
			} 
		}, 1000)
	};


$("#onButton").click(() => {
	tami.day(tami);
	sprite(tami);
	healthCheck(tami);
	$("#event")[0].play();
})

$("#feed").click(() => {
	tami.feed();
	$("#eat")[0].play();
})

$("#light").click(() => {
	tami.lightSwitch();
	$("#event")[0].play();
})

$("#play").click(() => {
	tami.play();
	$("#fun")[0].play();
})

$("#sleep").click(() => {
	tami.nap();
	$("#snore")[0].play();
})

$("#medicine").click(() => {
	tami.medicine();
	$("#meds")[0].play();
})









