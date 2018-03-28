import { Component,TemplateRef , OnInit, NgModule, Directive  } from '@angular/core';
import { PermissService} from './permiss.service'
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-permiss',
  templateUrl: './permiss.component.html',
  styleUrls: ['./permiss.component.less'],
  providers: [ PermissService ]
})

export class PermissComponent implements OnInit {
  list: ArrayBuffer;
  modalRef: BsModalRef;
  constructor(private PermissService: PermissService,private modalService: BsModalService) {
  }
  public  openModal(template: TemplateRef<any>) {
    console.log(this);
    this.modalRef = this.modalService.show(template);
  }
  public  ngOnInit() {
    let params ={};
    this.PermissService.getList(params)
    .subscribe(data => {
      this.list = data;
      console.log(this.list )
    })
  }
  public  search(name:String){
    // let name = name.trim();
    console.log(name);
  }
  public addPermiss(data:Object){
    console.log(data);
    this.PermissService.addPermiss(data)
    .subscribe(data => {
      console.log(data)
    })
  }
}

