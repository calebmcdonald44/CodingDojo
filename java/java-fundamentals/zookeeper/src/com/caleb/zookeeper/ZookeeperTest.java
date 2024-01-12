package com.caleb.zookeeper;

public class ZookeeperTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Gorilla gorilla = new Gorilla();
		System.out.println(gorilla.throwSomething());
		System.out.println(gorilla.throwSomething());
		System.out.println(gorilla.throwSomething());
		System.out.println(gorilla.eatBananas());
		System.out.println(gorilla.eatBananas());
		System.out.println(gorilla.displayEnergy());

		Bat bat = new Bat();
		System.out.println(bat.attackTown());
		System.out.println(bat.attackTown());
		System.out.println(bat.attackTown());
		System.out.println(bat.eatHumans());
		System.out.println(bat.eatHumans());
		System.out.println(bat.fly());
		System.out.println(bat.fly());
		System.out.println(bat.displayEnergy());
	}

}
