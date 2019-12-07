import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'second-component',
  templateUrl: 'secondComponent.html'
})
export class secondComponent implements OnInit {
  data = {};
  constructor(private _service: CommunicationService) {

  }

  ngOnInit() {
    this._service.firstObservable$.subscribe(p => {
      this.data = p;
      console.log(this.data);
    });    
  }

  clickFromSecond() {
    this._service.secondEmit("second");
  }

}
