import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private subject = new BehaviorSubject('Soccer');
  currentMessage = this.subject.asObservable();
  constructor() { }

  changeMessage(message: string) {
    console.log('3 from all sports => ' + message);
    this.subject.next(message)
  }
}

export class DataDetailService {
  private subjectDetail = new BehaviorSubject('4328');
  currentMessage = this.subjectDetail.asObservable();
  constructor() { }

  changeMessage(message: any) {
    this.subjectDetail.next(message)
  }

}
