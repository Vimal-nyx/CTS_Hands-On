import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
  constructor() {
    console.log('NotificationService instance created');
  }
  
  notify(msg: string) {
    console.log('Notification:', msg);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  providers: [NotificationService],
  template: `<button (click)="send()">Send Local Notification</button>`
})
export class NotificationComponent {
  // Providing NotificationService here creates a new, separate instance scoped to this component
  // and its children. It won't share state with the root injector instance.
  constructor(private notificationService: NotificationService) {}
  
  send() {
    this.notificationService.notify('Hello from component-level provider!');
  }
}
