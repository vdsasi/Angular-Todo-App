import { Component } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  // tasks: string[] = [];
  // task: string = '';
  users: User[] = [];
  name: string = '';
  email:string = '';
  editOption: boolean = false;
  HandleAdd() {
    this.users.push({name: this.name, email: this.email});
    this.email = '';
    this.name = '';
    // this.tasks.push(this.task);
    // this.task = "";
  }
  HandleUpdate() { 
    this.editOption = true;
  }
  HandleConfirm(user: User) {
    this.users.forEach((i)=> {
      if(i.name === user.name) {
        i.email = user.email;
      }
    })
    this.editOption = false;
    this.email = '';
  }
  HandleDelete(_user: User){
    this.users = this.users.filter((user)=>user.name !== _user.name);
  }

}

