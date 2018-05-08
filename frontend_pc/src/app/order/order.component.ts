import { Component, OnInit, NgModule } from '@angular/core';
import { ChatService } from './socket.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.less'],
  providers: [ChatService]
})
export class OrderComponent implements OnInit {
  msg: string;

    constructor(private chatService : ChatService) {}

    ngOnInit() {
      this.chatService
          .getMessage()
          .subscribe(msg => {
            this.msg = "1st "+msg;
          });
    }

    sendMsg(msg){
       this.chatService.sendMessage(msg);
    }

}
