import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../components/service/users.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  users = [];

  searchByName = '';

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    })
  }

}
