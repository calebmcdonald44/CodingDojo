package com.caleb.zookeeper;

public class Gorilla extends Mammal {
	public String throwSomething() {
		int newEnergy = getEnergy() - 5;
		setEnergy(newEnergy);
		return "The gorilla throws a banana at you!";
	}
	
	public String eatBananas() {
		int newEnergy = getEnergy() + 10;
		setEnergy(newEnergy);
		return ("The gorilla eats 5 bananas, peel and all! He looks full.");
	}
	
	public String climb() {
		int newEnergy = getEnergy() - 10;
		setEnergy(newEnergy);
		return ("The gorilla climbs a tree! He's hiding in the leaves.");
	}
}
