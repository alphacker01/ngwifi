import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { DeviceComponent } from './device/device.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { DeviceService } from './service/device.service';
import { AuthComponent } from './auth/auth.component';

import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './service/auth.service';
import { SingleDeviceComponent } from './single-device/single-device.component';

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
    SingleDeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DeviceService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
