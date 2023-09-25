import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-group-for-control-builder',
  templateUrl: './group-for-control-builder.component.html',
  styleUrls: ['./group-for-control-builder.component.css']
})
export class GroupForControlBuilderComponent {
  
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['',Validators.required],
    address: this.fb.group({
      street: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      zip: ['',Validators.required]
    }),
    aliases: this.fb.array([])
  });

  constructor(private fb : FormBuilder) { }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}
