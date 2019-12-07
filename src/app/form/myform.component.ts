import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { myService } from '../services/my.service';

//import { AlertService, EventService, AuthenticationService } from '@/_services';

@Component({
  selector:"form-app",
  templateUrl: 'myform.component.html'
})
export class myformComponent implements OnInit {
  eventForm: FormGroup;
  submitted = false;
  data: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _service: myService
  ) {
    _service.getData().subscribe(
      data => {
        this.data = data.slice(0, 10);
      },
      error => {

      });
  }

  ngOnInit() {
    this.eventForm = this.formBuilder.group({
      Title: ['', Validators.required]
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.eventForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.eventForm.invalid) {
      return;
    }
  }
}
