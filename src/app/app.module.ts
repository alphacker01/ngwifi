import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { DeviceComponent } from './device/device.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';
import { SingleDeviceComponent } from './single-device/single-device.component';

import { DeviceService } from './service/device.service';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';
import { UserlistComponent } from './userlist/userlist.component';


const appRoutes: Routes = [

  { path: 'devices', component: AppareilViewComponent },
  { path: 'devices/:id', component: SingleDeviceComponent},
  { path: 'auth', component: AuthComponent},
  { path: '', component: AppareilViewComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    DeviceComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleDeviceComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DeviceService,
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
