import { Component } from '@angular/core';

@Component({
  selector: 'parent-app',
  templateUrl: 'parent.component.html'
})
export class parentComponent {
  message: string;
  controls: string[] = ['first','second','third'];
}
