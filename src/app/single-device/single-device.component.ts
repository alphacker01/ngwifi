import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../service/device.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-device',
  templateUrl: './single-device.component.html',
  styleUrls: ['./single-device.component.scss']
})
export class SingleDeviceComponent implements OnInit {

  name: string;
  status: string;
  Description: string;

  constructor(private deviceService: DeviceService , private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.params['id'];
    
    this.name = this.deviceService.getDeviceById(+id).name;
    this.status = this.deviceService.getDeviceById(+id).status;
    this.Description = this.deviceService.getDeviceById(+id).Description;

  }

}
