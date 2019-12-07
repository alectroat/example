import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service'

@Component({
  selector: 'first-component',
  templateUrl: 'firstComponent.html'
})
export class firstComponent implements OnInit {
  data = {};
  constructor(private _service: CommunicationService) {

  }

  ngOnInit() {
    this._service.secondObservable$.subscribe(p => {
      this.data = p;
      console.log(this.data);
    });
    console.log(this.data);
  }

  clickFromFirst() {
    this._service.firstEmit("first");
  }
  
}
