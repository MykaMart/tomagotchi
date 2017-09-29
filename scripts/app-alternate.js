console.log("connected")

class tomagotchi {
	constructor () {
		this.name = "Tami Gatchi"
		this.lifeStage = "baby"
		this.lifeCycle = ["baby", "child", "teen", "adult"]
		this.happy = 0
		this.hunger = 0
		// this.bathroom = false
		this.sick = false
		// this.discipline = 5
		this.sleepiness = 
		this.sleep =  false
		// this.bored = false
	}
	day () {
		//day is three miniutes
		//50% chance to eat 6 times a day
		//random sleep once a day
		//tomogatchi is bored after 
	}
	feed () {
		this.hunger ++ Math.floor(Math.random(0,1))
		//feed your tomagotchi
		//decrease hunger and increse happiness
	}
	light () {
		//create button to turn light on and off
		//if tomagotch is asleep and light is on deduct
		//if tomagotchi is asleep and is off add to happiness
	}
	// clean() {
	// 	//create button to clean up tomagotchi's mess
	// 	//add to happiness
	}
	play() {
		//play with tomagotchi
		//subtract bordom, add to happiness
	}
	medicine() {
	//only if sick
	}
	illness() {
		if (happiness <= 4 || slepiness === 10) {
			this.sick = true;
			alert(this.name + " is sick!!!")
			if 	(this.sick = true)
		}
	}
	// attention() {
	// 	//tomaotchi demands attention
	// }
	// discipline(){
	// 	//discipline tomagotchi, if tomagotchi was not misbehaving hungry, sick etc deduct hapiness
	// }
}