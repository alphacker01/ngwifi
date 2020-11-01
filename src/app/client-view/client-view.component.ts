import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service'
@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss']
})
export class ClientViewComponent implements OnInit {

  public Clients: any[];

  constructor( private clientService: ClientService ) {}

  ngOnInit(): void {
    this.Clients = this.clientService.clients;
  }

  onSwitch(clientIndex: number , clientStatus: string){

  let clientName: string = this.clientService.getClientByIndex(clientIndex).nom;
  let action: string = clientStatus === 'On' ? "Desactiver" : "Activer";


  let choice = confirm("Voulez vous "+action+ " le compte du client " +clientName+ "?");

  if(choice){

    this.clientService.switchClient(clientIndex , clientStatus);
  }

}

public confirmAction(){
  
}

deleteClient(indexClient: number){ 

  let clientName: string = this.clientService.getClientByIndex(indexClient).nom;
  let action: string = "Supprimer";


  let choice = confirm("Voulez vous "+action+ " le compte du client " +clientName+ "?");

  if(choice){

    this.clientService.deleteClient(indexClient);
  }

}

}
