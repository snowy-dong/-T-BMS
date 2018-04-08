import { Component, TemplateRef, OnInit, NgModule, Directive } from '@angular/core';
import { AccountService } from './account.service'
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less'],
  providers: [AccountService]
})
export class AccountComponent implements OnInit {

  public data: Object;
  public modalRef: BsModalRef;
  public params: any = {
    pageNo: 1,
    pageSize: 2
  };
  constructor(private AccountService: AccountService, private modalService: BsModalService) {
  }
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  public ngOnInit(): void {
    this.getList(this.params);
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
  // 添加权限
  public add(obj: Object): void {
    this.AccountService.add(obj)
      .subscribe(data => {
        console.log(data)
        this.modalRef.hide();
      })
  }
  // 编辑
  public edit(id: String, obj: Object): void {
    this.AccountService.edit(id, obj)
      .subscribe(data => {
        console.log(data)
        this.modalRef.hide();
      })
  }
  // 删除
  public delete(id: String): void {
    this.AccountService.delete(id)
      .subscribe(data => {
        console.log(data)
        this.modalRef.hide();
      })
  }
  // 切换页码
  public pageChanged(event: any): void {
    this.params.pageNo = event.page;
    this.getList(this.params);
  }

}
