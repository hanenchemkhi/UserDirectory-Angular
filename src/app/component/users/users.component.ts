import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/interface/response.interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  response: Response;// added "strictPropertyInitialization": false, to tsconfig.json 
  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.getUsers(5).subscribe(
      (results: Response) => {
        console.log(results);
        this.response = results;
      }
    );
  }

}
