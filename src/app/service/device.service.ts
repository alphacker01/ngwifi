import { Subject } from 'rxjs'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'


@Injectable()
export class DeviceService{


    public isAllDeviceOn: boolean = false;
    public isAllDeviceOff: boolean = false;
    public deviceOn: number =0;
    public deviceOff: number =0;

    deviceSubject = new Subject<any>();

    devices = [];

      constructor(private httpClient: HttpClient){

      }


    public emitDeviceSubject(){

      this.deviceSubject.next(this.devices.slice());
    }
    
    public saveDeviceToServer(){
      this.httpClient.put('https://wifi-49bb1.firebaseio.com/devices.json',this.devices).subscribe(

      (next)=>{
        console.log("Save Success !" + next);
      },
      (error)=>{
        console.log("erreur "+error);
      }
      );
    }

    getDeviceFromServer(){

      this.httpClient.get<any[]>('https://wifi-49bb1.firebaseio.com/devices.json').subscribe(

        (response)=>{

          this.devices = response;
          this.emitDeviceSubject();
        },
        (error)=>{
          console.log('Erreur !: ' + error);
        }
      );
    }
    
    public getDeviceById(id: number){

      const device = this.devices.find(

        (e) => {
          return e.id === id;
        }

      );

      return device;
    }

    public setNumberDevice(){

      let countOn = 0;
      let countOff = 0;

      for(let device of this.devices){

        if(device.status == 'On'){

          countOn += 1;
        }else{

          countOff += 1;
        }
      }

      this.deviceOn = countOn;
      this.deviceOff = countOff;
    }

    getNumberDeviceOff(){

      return this.deviceOff;
    }
    
    getNumberDeviceOn(){
    
      return this.deviceOn;
    }

    updateNumberOnDevice(){
      
      if(this.deviceOff != 0){

        this.deviceOff -= 1;
      }

        this.deviceOn += 1;
    }

    updateNumberOffDevice(){

      if(this.deviceOn != 0){

        this.deviceOn -= 1;
      }

        this.deviceOff += 1;
    }
    
    resetNumberOnDevice(){

      this.deviceOn = 0;
    }

    resetNumberOffDevice(){
      
      this.deviceOff = 0;
    }

    switchOnAll(){
    
        for(let device of this.devices){
          device.status = 'On';
          
          this.emitDeviceSubject();
        }
    
        this.isAllDeviceOn = true;
        this.isAllDeviceOff = false;

        this.resetNumberOnDevice();

        this.saveDeviceToServer();
      }
    
    switchOffAll(){
    
        for(let device of this.devices){
          device.status = 'Off';
        }
    
        this.isAllDeviceOff = true;
        this.isAllDeviceOn = false;

        this.resetNumberOffDevice();

        this.saveDeviceToServer();
      }


    switchDevice(index: number , status: string){

      if(status == 'On'){

        this.devices[index].status = 'Off';
        this.updateNumberOffDevice();
      }else{

        this.devices[index].status = 'On';
        this.updateNumberOnDevice();
      }

      this.saveDeviceToServer();
    }
}