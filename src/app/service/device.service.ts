export class DeviceService{

    public isAllDeviceOn: boolean = false;
    public isAllDeviceOff: boolean = false;
    public deviceOn: number =0;
    public deviceOff: number =0;

    devices = [
        {
          id: 1,
          name: 'Computer',
          status: 'On',
          Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, architecto laboriosam pariatur dignissimos in accusamus quaerat, molestiae nemo natus, libero quam tempore. Reprehenderit eaque sint saepe reiciendis recusandae amet placeat.'
        },
        { id: 2,
          name: 'Television',
          status: 'Off',
          Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, architecto laboriosam pariatur dignissimos in accusamus quaerat, molestiae nemo natus, libero quam tempore. Reprehenderit eaque sint saepe reiciendis recusandae amet placeat.'
        },
        {
          id: 3,
          name: 'Micro Onde',
          status: 'On',
          Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, architecto laboriosam pariatur dignissimos in accusamus quaerat, molestiae nemo natus, libero quam tempore. Reprehenderit eaque sint saepe reiciendis recusandae amet placeat.'
        },
        {
          id: 4,
          name: 'Radio',
          status: 'Off',
          Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, architecto laboriosam pariatur dignissimos in accusamus quaerat, molestiae nemo natus, libero quam tempore. Reprehenderit eaque sint saepe reiciendis recusandae amet placeat.'
        }
      ];

    
    
    public getDeviceById(id: number){

      const device = this.devices.find(
        (s) => {
          return s.id === id;
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
        }
    
        this.isAllDeviceOn = true;
        this.isAllDeviceOff = false;

        this.resetNumberOnDevice();
      }
    
    switchOffAll(){
    
        for(let device of this.devices){
          device.status = 'Off';
        }
    
        this.isAllDeviceOff = true;
        this.isAllDeviceOn = false;

        this.resetNumberOffDevice();
      }


    switchDevice(index: number , status: string){

      if(status == 'On'){

        this.devices[index].status = 'Off';
        this.updateNumberOffDevice();
      }else{

        this.devices[index].status = 'On';
        this.updateNumberOnDevice();
      }
    }
}