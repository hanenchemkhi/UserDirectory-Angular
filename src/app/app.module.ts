import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './component/users/users.component';
import { UserdetailComponent } from './component/userdetail/userdetail.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LocationComponent } from './component/userdetail/location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserdetailComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
