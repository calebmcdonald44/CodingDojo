package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;

public class Physician extends User implements HIPAACompliantUser {
	private ArrayList<String> patientNotes;
	private Integer IDcopy;
	
	// TO DO: Constructor that takes an IDcopy
	public Physician(Integer IDcopy) {
		super();
		this.IDcopy = IDcopy;
	}
//     TO DO: Implement HIPAACompliantUser!
	@Override
	public boolean assignPin(int pin) {
		if (String.valueOf(pin).length() == 4) {
			this.pin = pin;
			return true;
		}
		return false;
	}
	
	
	@Override
	public boolean accessAuthorized(Integer confirmedAuthID) {
		if(confirmedAuthID == this.IDcopy) {
			return true;
		}
		return false;
	}
	
	public void newPatientNotes(String notes, String patientName, Date date) {
        String report = String.format(
            "Datetime Submitted: %s \n", date);
        report += String.format("Reported By ID: %s\n", this.id);
        report += String.format("Patient Name: %s\n", patientName);
        report += String.format("Notes: %s \n", notes);
        this.patientNotes.add(report);
    }
	// TO DO: Setters & Getters

	public ArrayList<String> getPatientNotes() {
		return patientNotes;
	}

	public void setPatientNotes(ArrayList<String> patientNotes) {
		this.patientNotes = patientNotes;
	}

	public Integer getIDcopy() {
		return IDcopy;
	}

	public void setIDcopy(Integer iDcopy) {
		IDcopy = iDcopy;
	}
	
	
}
