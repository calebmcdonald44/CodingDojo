package com.caleb.zookeeper;

public class Bat extends Mammal {
//	private int energy = 300;
//	use super() somehow?
	
	public String fly() {
		int newEnergy = this.getEnergy() - 50;
		setEnergy(newEnergy);
		return ("The bat has taken flight!");
	}
	
	public String eatHumans() {
		int newEnergy = getEnergy() + 25;
		setEnergy(newEnergy);
		return ("The bat eats 5 people and looks happy about it!");
	}
	
	public String attackTown() {
		int newEnergy = getEnergy() - 100;
		setEnergy(newEnergy);
		return ("The bat attacks town! There goes City Hall again!");
	}
}
