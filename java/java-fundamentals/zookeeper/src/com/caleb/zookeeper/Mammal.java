package com.caleb.zookeeper;

public class Mammal {
	private int energy = 100;
	
	public String displayEnergy() {
		return ("Energy level: " + energy);
	}

	public int getEnergy() {
		return energy;
	}

	public void setEnergy(int energy) {
		this.energy = energy;
	}
	// need to make constructor for bat that updates energy level
}
