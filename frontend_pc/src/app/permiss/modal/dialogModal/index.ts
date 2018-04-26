import { ChangeDetectorRef, Component, TemplateRef, OnInit, NgModule, Directive, ViewChild } from '@angular/core';
import { PermissService } from '../../permiss.service'
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
@Component({
  selector: 'modal-content',
  templateUrl: './index.html',
  providers: [PermissService]
})
export class ModalContentComponent implements OnInit {
  public item={
    permiss_name:'',
    permiss_code:''
  };
  public onClose: any;
  constructor(public bsModalRef: BsModalRef, private PermissService: PermissService) {}

  ngOnInit() {
    console.log('ngOnInit')
  }
  // 保存
  public saveModal(item){
    if(item.id){
      this.edit(item.id,item)
    }else{
      this.add(item)
    }
  }
  // 编辑
  public edit(id: String, obj: Object): void {
    this.PermissService.edit(id, obj)
      .subscribe(data => {
        console.log(data)
        this.onClose('yes')
      })
  }
  // 添加权限
  public add(obj: Object): void {
    this.PermissService.add(obj)
      .subscribe(data => {
        console.log(data)
        this.onClose('yes')
        // this.bsModalRef.hide();
      })
  }
}
