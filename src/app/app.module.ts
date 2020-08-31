import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { DeviceComponent } from './device/device.component';
import { FactureComponent } from './facture/facture.component';

@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    DeviceComponent,
    FactureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
