import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../User';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() users: User[] = [];
  @Input() editOption: boolean = false;
  email: string = '';
  @Output() UpdateEmitter = new EventEmitter();
  @Output() ConfirmEmitter = new EventEmitter<User>();
  @Output() DeleteEmitter = new EventEmitter<User>();
  UpdateHandler() {
    this.UpdateEmitter.emit();
  }
  DeleteHandler(user: User) {
    this.DeleteEmitter.emit(user);
  }
  ConfirmHandler(user: User) {
    const newuser: User = new User();
    newuser.name = user.name;
    newuser.email = this.email;
    this.ConfirmEmitter.emit(newuser);
  }
}
