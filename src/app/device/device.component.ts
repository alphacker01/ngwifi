import { Component, Input ,OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { DeviceService } from '../service/device.service';
import { AppareilViewComponent } from '../appareil-view/appareil-view.component';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})


export class DeviceComponent implements OnInit {
  value = 'Clear me'
  @Input() deviceName: string;
  @Input() deviceStatus: string;
  @Input() deviceIndex: number;
  @Input() id: number;

  constructor(private DeviceService: DeviceService , private AppView: AppareilViewComponent) { }

  ngOnInit(): void {
  }

  

  getStatus(){
    return this.deviceStatus;
  }

  getDeviceName(){
    return this.deviceName;
  }

  getColor(){

    if(this.deviceStatus === 'On'){
      return 'green';
    }else if(this.deviceStatus === 'Off'){
      return 'red';
    }
  }

  onSwitch(){

      this.DeviceService.switchDevice(this.deviceIndex, this.deviceStatus);
    
      this.AppView.deviceOn = this.DeviceService.deviceOn;
      this.AppView.deviceOff = this.DeviceService.deviceOff;
  }


}
