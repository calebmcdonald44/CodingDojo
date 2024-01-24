package com.codingdojo.relationships.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codingdojo.relationships.models.License;
import com.codingdojo.relationships.models.Person;
import com.codingdojo.relationships.repositories.LicenseRepository;
import com.codingdojo.relationships.repositories.PersonRepository;

@Service
public class RelationshipService {
	public RelationshipService(PersonRepository personRepository, LicenseRepository licenseRepository) {
		super();
		this.personRepository = personRepository;
		this.licenseRepository = licenseRepository;
	}
	private final PersonRepository personRepository;
	private final LicenseRepository licenseRepository;
	

	// Person 
	public List<Person> allPersons() {
		return personRepository.findAll();
	}
	
	public Person createPerson(Person person) {
		return personRepository.save(person);
	}
	
	public Person findPerson(Long id) {
		Optional<Person> optionalPerson = personRepository.findById(id);
		if(optionalPerson.isPresent()) {
			return optionalPerson.get();
		} else {
			return null;
		}
	}
	public Person updatePerson(Person person) {
		return personRepository.save(person);
	}
	public void deletePerson(Long id) {
		Optional<Person> optionalPerson = personRepository.findById(id);
		if(optionalPerson.isPresent()) {
			personRepository.deleteById(id);
		}
	}
	// License
	public List<License> allLicenses() {
		return licenseRepository.findAll();
	}
	
	public License createLicense(License license) {
		return licenseRepository.save(license);
	}
	
	public License findLicense(Long id) {
		Optional<License> optionalLicense = licenseRepository.findById(id);
		if(optionalLicense.isPresent()) {
			return optionalLicense.get();
		} else {
			return null;
		}
	}
	public License updateLicense(License license) {
		return licenseRepository.save(license);
	}
	public void deleteLicense(Long id) {
		Optional<License> optionalLicense = licenseRepository.findById(id);
		if(optionalLicense.isPresent()) {
			licenseRepository.deleteById(id);
		}
	}
}
