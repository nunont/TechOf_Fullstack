import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ProfileDTO } from 'src/app/models/ProfileDTO';
import { ProfileServiceService } from 'src/app/services/profile-service.service';

@Component({
  selector: 'app-profile-edition',
  templateUrl: './profile-edition.component.html',
  styleUrls: ['./profile-edition.component.css']
})

export class ProfileEditionComponent {

  profileForm = this.fb.group({
    profession: [''],
    firstName: [''],
    lastName: [''],
    dateOfBirth: [''],
    gender: [''],
    email: [''],
    phone : [''],
    academicEducations: this.fb.array([]),
    professionalExperiences: this.fb.array([]),
  });


  constructor(private fb : FormBuilder, private profileService : ProfileServiceService) { }
  
  onSubmit() {
    let profile = this.profileForm.value;
    let profileDTO = profile as ProfileDTO;

    this.profileService.addProfile(profileDTO);
  }

  get academicEducations() {
    return this.profileForm.get('academicEducations') as FormArray;
  }

  get professionalExperiences() {
    return this.profileForm.get('professionalExperiences') as FormArray;
  }

  addAcademicEducation() {
    this.academicEducations.push(this.fb.group({
      degree: [''],
      school: [''],
      description: ['']
    }));
  }

  addProfessionalExperience() {
    this.professionalExperiences.push(this.fb.group({
      company: [''],
      position: [''],
      description: ['']
    }));
  }

}


