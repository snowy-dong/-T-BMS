import { Component, TemplateRef, OnInit, NgModule, Directive   } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AccountService } from './account.service'
import { RoleService } from '../role/role.service'
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ModalContentComponent } from './modal/dialogModal/index'
import { ConfirmWindowComponent } from '../common/modal/confirm-modal'
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less'],
  providers: [AccountService, RoleService, DatePipe]
})
export class AccountComponent implements OnInit {
  bsModalRef: BsModalRef;
  items: string[];
  public keywords:String = ''
  public data: Object;
  public modalRef: BsModalRef;
  public params: any = {
    pageNo: 1,
    pageSize: 10
  };

  constructor(
    private AccountService: AccountService,
    private modalService: BsModalService,
    private RoleService:RoleService,
    private datePipe: DatePipe
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
    this.AccountService.getList(params)
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
    this.AccountService.delete(id)
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
