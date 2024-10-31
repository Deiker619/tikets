// angular import
import { Component, inject, OnInit } from '@angular/core';
import { UserServiceService } from './Services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // public props
  title = 'mantis-free-version';

  private UserService = inject(UserServiceService);

  ngOnInit():void{
    this.UserService.getUsers().subscribe(r => console.log(r))
  }

}
