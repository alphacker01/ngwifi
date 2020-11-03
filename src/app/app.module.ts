import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';

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
import { NewUserComponent } from './new-user/new-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const appRoutes: Routes = [

  { path: 'devices', component: AppareilViewComponent },
  { path: 'devices/:id', component: SingleDeviceComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'users', component: UserlistComponent},
  { path: 'new-user' , component: NewUserComponent },
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
    UserlistComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [
    DeviceService,
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
