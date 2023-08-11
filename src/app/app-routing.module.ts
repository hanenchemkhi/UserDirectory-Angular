import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './component/users/users.component';
import { UserdetailComponent } from './component/userdetail/userdetail.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'user/:uuid', component: UserdetailComponent},
   //similar to { path: '**', component: UsersComponent}, '**' means if the user enter a path other than users or user
  { path: '**', redirectTo: 'users'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
