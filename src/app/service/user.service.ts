import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../interface/user.interface';
import { Response } from '../interface/response.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl: string = 'https://randomuser.me/api';

  constructor(private http : HttpClient) { }

  //fetch all users
  getUsers(size: number = 10): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?results=${size}`).pipe(
      map(response => this.processResponse(response))
    );
  }

  //fetch one user using the user UUID
  getUser(uuid: string): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/?uuid=${uuid}`).pipe(
      map(response => this.processResponse(response))
    );
  }

  private processResponse (response: Response): Response{
    return { 
      info : { ...response.info }, //map everything from response.info to info object
      results : response.results.map((user: any)=> (<User>{

        uuid: user.login.uuid,
        firstName: user.name.first,
        lastName: user.name.last,
        email: user.email,
        username: user.login.username,
        gender: user.gender, 
        address: `${user.location.street.number} ${user.location.street.name} ${user.location.street.number} ${user.location.city}, ${user.location.state}, ${user.location.country} ${user.location.postcode}  `,
        dateOfBirth: user.dob.date,
        phone: user.phone,
        imageUrl: user.picture.medium,
        coordinate: {
          latitude : +user.location.coordinates.latitude, // to change a string to a number add + sign in front of the variable
          longitude : +user.location.coordinates.longitude,
        }
      }))
    }
  }
}
