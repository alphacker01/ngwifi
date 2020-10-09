import { Component, OnInit } from '@angular/core';
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

  
  constructor (private DeviceService: DeviceService){

    this.devices = this.DeviceService.devices;

    this.updateNumberDevice();

    setTimeout(
      ()=>{
        this.isAuth = true;
      },4000
    );
  }

    
  lastupdate = new Promise((resolve , reject)=>{
    const date = new Date();
    setTimeout(
      ()=>{
        resolve(date);
      },2000
    );
  });

  
  ngOnInit(){

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

}
