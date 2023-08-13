import { core } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Map } from 'leaflet';
import { Coordinate } from 'src/app/interface/coordinate.interface';
//import { Response } from 'src/app/interface/response.interface';
import { User } from 'src/app/interface/user.interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  //response: Response;
  user: User;
  public userLocation: Coordinate;
  mode :'edit' | 'locked'='locked';
  buttonText: 'Edit' | 'Save' = 'Edit';
 

  constructor(private activatedRoute: ActivatedRoute,private userService: UserService){}

  ngOnInit(): void {

    this.user = (<User>(this.activatedRoute.snapshot.data['resolvedResponse'].results[0]));
    this.userLocation = this.user.coordinate;
    console.log(this.user)

    // this.activatedRoute.paramMap.subscribe((params: ParamMap)=>{
    //   console.log('User ID: ', params.get('uuid')!);
    //   this.userService.getUser(params.get('uuid')!).subscribe(
    //     (data:any)=>{
    //       console.log(data);
    //       this.response = data;
    //     }
    //   )
    // })
  }

  changeMode(mode?:'edit'|'locked'):void{
    this.mode = this.mode === 'edit' ? 'locked' : 'edit';
    this.buttonText = this.buttonText === 'Edit' ? 'Save' : 'Edit';
  }
  
  receiveMap(map: Map){}
  receiveZoom(zoom: number){}

}
