export class ClientService{


    clients = [
        {
            id: 1,
            nom: 'Asmaou',
            prenom: 'Ndiale',
            email: 'asmaou@gmail.com',
            tel: '77 493 69 63',
            status: 'Off',
            mensualite: 2000

        },

        {
            id: 2,
            nom: 'Alpha',
            prenom: 'Ndiale',
            email: 'asmaou@gmail.com',
            tel: '77 493 69 63',
            status: 'On',
            mensualite: 2000

        },

        {
            id: 3,
            nom: 'Diallo',
            prenom: 'Ndiale',
            email: 'asmaou@gmail.com',
            tel: '77 493 69 63',
            status: 'Off',
            mensualite: 2000

        },

        {
            id: 4,
            nom: 'Bah',
            prenom: 'Ndiale',
            email: 'asmaou@gmail.com',
            tel: '77 493 69 63',
            status: 'On',
            mensualite: 2000

        },

        {
            id: 5,
            nom: 'Modou',
            prenom: 'Ndiale',
            email: 'asmaou@gmail.com',
            tel: '77 493 69 63',
            status: 'Off',
            mensualite: 2000

        },
    ];

    public getClientById(id: number){

        const client = this.clients.find(

            (e)=>{

                return e.id === id
            }
        );

        return client;

    }

    public getClientByIndex(index: number){

        return this.clients[index];
    }

    public switchClient(index: number , status: string){

        if(status == 'On'){
            
          this.clients[index].status = 'Off';
          
        }else{
  
          this.clients[index].status = 'On';
        }
      }

    public deleteClient(indexClient: number){

        this.clients.splice(indexClient,1);
    }
}