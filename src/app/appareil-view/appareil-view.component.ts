import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DeviceService } from '../service/device.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  public isAuth: boolean = false;
  public devices: any[];
  public deviceOn: number=0;
  public deviceOff: number=0;

  deviceSubscription: Subscription;

  
  constructor (private DeviceService: DeviceService){

    this.devices = this.DeviceService.devices;

    this.updateNumberDevice();

  }

  ngOnInit(){

    this.deviceSubscription = this.DeviceService.deviceSubject.subscribe(

      (devices: any[]) => {
        this.devices = devices;
      }
    );

    this.DeviceService.emitDeviceSubject();
    this.fetch();

  }

  save(){

    this.DeviceService.saveDeviceToServer();
  }

  fetch(){

    this.DeviceService.getDeviceFromServer();
  }

  updateNumberDevice(){

    this.DeviceService.setNumberDevice();

    this.deviceOn = this.DeviceService.deviceOn;
    this.deviceOff = this.DeviceService.deviceOff;
  }

  isAllDeviceOn(){
   return this.DeviceService.isAllDeviceOn;
  }

  isAllDeviceOff(){
    return this.DeviceService.isAllDeviceOff;
  }

  switchOnAll(){
    this.DeviceService.switchOnAll();
    this.updateNumberDevice();
  }

  switchOffAll(){
    this.DeviceService.switchOffAll();
    this.updateNumberDevice();
  }

  onSubmit(form: NgForm){
    
    console.log(form.value);
  }

}
