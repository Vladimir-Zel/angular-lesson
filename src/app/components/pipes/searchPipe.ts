import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
name: 'searchByName'
})

export class SearchPipe implements PipeTransform{
  transform(users: any[], value: any) {
    return users.filter(user =>{
      return user.name.includes(value)
    })
  }
}
