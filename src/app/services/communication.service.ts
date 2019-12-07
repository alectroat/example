import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CommunicationService {
  private firstSubject = new Subject<string>();
  private secondSubject = new Subject<string>();

  firstObservable$ = this.firstSubject.asObservable();
  secondObservable$ = this.secondSubject.asObservable();

  firstEmit(str: string) {
    this.firstSubject.next(str);
  }
  secondEmit(str: string) {
    this.secondSubject.next(str);
  }
}
