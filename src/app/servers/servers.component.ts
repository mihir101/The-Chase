import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverId: number;
  serverStatus: string;
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created";
  serverName="Test Server";
  getServerStatus(){
    this.serverStatus = 'Ready';
  }
  constructor() {
    this.serverId = 10;
    this.getServerStatus();
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = " Server was created!";
  }
}
