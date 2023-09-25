import { Injectable } from '@angular/core';
import { ProfileDTO } from '../models/ProfileDTO';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  constructor() { }

  getProfiles() : ProfileDTO[] {
    return localStorage.getItem('profiles') ? JSON.parse(localStorage.getItem('profiles') ?? "") : [];
  }

  addProfile(profile: ProfileDTO) {
    let profiles = this.getProfiles();
    profiles.push(profile);
    localStorage.setItem('profiles', JSON.stringify(profiles));
  }
}
