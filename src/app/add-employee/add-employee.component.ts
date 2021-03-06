import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  @Output() employeeAdded = new EventEmitter();
  constructor(private fb:FormBuilder) {
    this.employeeForm = fb.group({
      firstName: ['',
        [ Validators.required,
        Validators.minLength(2)]],
      lastName: ['',
        [Validators.required,
        Validators.minLength(2)]],
      dateOfBirth: ['',
        [Validators.required,
        Validators.minLength(6)]],
      position: ['', Validators.minLength(4)],
      salary: ''
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.employeeAdded.emit(this.employeeForm.value);
    this.employeeForm.reset()
  }
}
