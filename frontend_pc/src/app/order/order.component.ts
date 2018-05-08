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

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    console.log(this.chatService.getMessage())
    this.chatService
    .getMessage()
    .subscribe(data => {
      this.msg = data.data;
      console.log(this.msg)

    });
  }
  sendMsg(){
    this.chatService.sendMessage(this.msg);
 }
}
