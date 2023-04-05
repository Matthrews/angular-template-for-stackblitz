import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class PopupService {

  private popupDialog = new ReplaySubject<{popupEvent: string, component?, options?: {}}>();

  public popupDialog$ = this.popupDialog.asObservable();

  open(component, options?: {}) {
    this.popupDialog.next({popupEvent: 'open', component: component, options: options});
  }

  close() {
    this.popupDialog.next({popupEvent: 'close'});
  }

}
