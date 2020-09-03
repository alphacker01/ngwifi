import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { DeviceComponent } from './device/device.component';
import { FactureComponent } from './facture/facture.component';
import { DeviceOnComponent } from './device-on/device-on.component';

@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    DeviceComponent,
    FactureComponent,
    DeviceOnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
