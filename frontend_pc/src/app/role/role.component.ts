import { Component, TemplateRef, OnInit, NgModule, Directive } from '@angular/core';
import { RoleService } from './role.service'
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ModalContentComponent } from './modal/dialogModal/index'
import { ConfirmWindowComponent } from '../common/modal/confirm-modal'
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.less'],
  providers: [RoleService]
})
export class RoleComponent implements OnInit {
  permissList: Object;

  public data: any;
  public bsModalRef: BsModalRef;
  public keywords:String = ''
  public params: any = {
    pageNo: 1,
    pageSize: 10
  };
  constructor(
    private RoleService: RoleService,
    private modalService: BsModalService
  ) {
  }

  public ngOnInit(): void {
    this.getList(this.params);
  }
  // 弹窗
  public openModal(id:any) {
    const initialState = {
      id: id
    };
    this.bsModalRef = this.modalService.show(ModalContentComponent, {initialState});
    this.bsModalRef.content.onClose = (myData) => {
      if(myData){
         this.bsModalRef.hide();
         this.getList(this.params);
      }
    };
  }
  public openComfirmModal(id:String){
    this.bsModalRef = this.modalService.show(ConfirmWindowComponent,{});
    this.bsModalRef.content.onClose = (myData) => {
      if(myData){
         this.removeItem(id)
      }
      this.bsModalRef.hide();
    }
  }
  // 获取列表
  public getList(params: Object): void {
    this.RoleService.getList(params)
      .subscribe(data => {
        this.data = data
      })
  }
  // 搜索
  public search(name: String): void {
    this.params.keyword = name;
    this.getList(this.params)
  }
  // 编辑
  public edit(id: String, obj: Object): void {
    this.openModal(id);
  }
  // 确认删除
  public delete(id: String): void {
    this.openComfirmModal(id)
  }
  // 删除
  private removeItem(id:String){
    this.RoleService.delete(id)
      .subscribe(data => {
        this.getList(this.params);
      })
  }
  // 切换页码
  public pageChanged(event: any): void {
    this.params.pageNo = event.page;
    this.getList(this.params);
  }

}
