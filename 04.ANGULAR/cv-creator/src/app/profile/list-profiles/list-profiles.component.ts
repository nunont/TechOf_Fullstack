import { Component } from '@angular/core';
import { ProfileDTO } from 'src/app/models/ProfileDTO';
import { ProfileServiceService } from 'src/app/services/profile-service.service';

@Component({
  selector: 'app-list-profiles',
  templateUrl: './list-profiles.component.html',
  styleUrls: ['./list-profiles.component.css']
})
export class ListProfilesComponent {

  profiles : ProfileDTO[] = [];
  
  constructor(private profileService : ProfileServiceService) {
    this.profiles = profileService.getProfiles();
   }
}
