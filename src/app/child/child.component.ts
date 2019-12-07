import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: "child-app",
  templateUrl: "child.component.html"
})
export class childComponent {
  @Input() childName: string;
  @Output() childEvent: EventEmitter<string> = new EventEmitter<string>();

  public FireEvent(): void {
    this.childEvent.emit(this.childName);
  }
}
