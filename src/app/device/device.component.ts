import { Component, Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})


export class DeviceComponent implements OnInit {

  @Input() deviceName: string;
  @Input() deviceStatut: string;

  constructor() { }

  ngOnInit(): void {
  }

  getStatus(){
    return this.deviceStatut;
  }

  getDeviceName(){
    return this.deviceName;
  }
}
