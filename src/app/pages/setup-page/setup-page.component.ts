import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../components/service/users.service";

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.scss']
})
export class SetupPageComponent implements OnInit {

  size: any;

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
    this.size = this.userService.size
  }

  onChange() {
   this.userService.setSize(+this.size)
  }

}
