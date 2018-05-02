import { Component, TemplateRef, OnInit, NgModule, Directive,  } from '@angular/core';
import { AccountService } from './account.service'
import { RoleService } from '../role/role.service'
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less'],
  providers: [AccountService, RoleService]
})
export class AccountComponent implements OnInit {
  roleList: Object;
  items: string[];
  public keywords:String = ''
  public data: Object;
  public modalRef: BsModalRef;
  public params: any = {
    pageNo: 1,
    pageSize: 2
  };
  name="account name"
  initialCount:number =5
  changeMsg: string;
  username: string = '';
  constructor(
    private AccountService: AccountService,
    private modalService: BsModalService,
    private RoleService:RoleService
  ) {
    this.items = ['111', '222']
  }
  countChange(event: number){
    this.changeMsg = `子组件change事件已触发，当前值是: ${event}`;
  }
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.getRole();
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
  // 获取角色
  public getRole(): void {
    this.RoleService.getList({})
      .subscribe(data => {
        this.roleList = data
        console.log(data)
        this.modalRef.hide();
      })
  }
  // 添加账户
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
