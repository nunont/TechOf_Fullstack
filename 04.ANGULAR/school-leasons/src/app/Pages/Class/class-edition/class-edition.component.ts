import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ClassDTO } from 'src/app/Interfaces/class-dto';

import AWN from 'awesome-notifications';

@Component({
  selector: 'app-class-edition',
  templateUrl: './class-edition.component.html',
  styleUrls: ['./class-edition.component.css'],
})
export class ClassEditionComponent {
  classForm = this.fb.group({
    name: [''],
    description: [''],
    students: this.fb.array([]),
  });

  constructor(private fb: FormBuilder) {}

  get students() {
    return this.classForm.get('students') as FormArray;
  }

  addStudent() {
    this.students.push(
      this.fb.group({
        name: [''],
        age: [''],
        email: [''],
        phone: [''],
        photo: [''],
      })
    );
  }

  onSubmit() {
    var _class = this.classForm.value as ClassDTO;
    console.log(_class);
    let globalOptions = {};
    // Initialize instance of AWN
    let notifier = new AWN(globalOptions);

    notifier.success('Your custom message', {})

  }
}
