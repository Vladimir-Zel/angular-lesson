import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";


@Injectable()
export class UsersService {
  size: number = 8;

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=' + this.size + '&nat=lego')
      .pipe(map(response => {
        // @ts-ignore
        let users = response["results"];
        return users.map(function (user: any) {
          return {
            name: user.name.first + ' ' + user.name.last,
            image: user.picture.large,
            geo: user.location.country + ' ' +
              user.location.city + ' ' +
              user.location.state + ' ' +
              user.location.street.name
          };
        })
      }))
  }

  setSize(size: number) {
    this.size = size;
  }

}
