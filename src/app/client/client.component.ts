import { Component, OnInit , Input } from '@angular/core';
import { ClientViewComponent } from '../client-view/client-view.component';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  public clients: any[];

  @Input() idClient:  number;
  @Input() nomClient: string;
  @Input() prenomClient: string;
  @Input() telClient: string;
  @Input() emailClient: string;
  @Input() statusClient: string;
  @Input() mensualiteClient: number;

  constructor(private client: ClientService) {

    this.clients = this.client.clients;
   }

  ngOnInit(): void {
  }

}
