import { Component, TemplateRef, OnInit, NgModule, Directive } from '@angular/core';
import { RoleService } from './role.service'
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.less'],
  providers: [RoleService]
})
export class RoleComponent implements OnInit {

  public data: Object;
  public modalRef: BsModalRef;
  public keywords:String = ''
  public params: any = {
    pageNo: 1,
    pageSize: 2
  };
  constructor(private RoleService: RoleService, private modalService: BsModalService) {
  }
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  public ngOnInit(): void {
    this.getList(this.params);
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
  // 添加权限
  public addRole(obj: Object): void {
    this.RoleService.add(obj)
      .subscribe(data => {
        console.log(data)
        this.modalRef.hide();
      })
  }
  // 编辑
  public edit(id: String, obj: Object): void {
    this.RoleService.edit(id, obj)
      .subscribe(data => {
        console.log(data)
        this.modalRef.hide();
      })
  }
  // 删除
  public delete(id: String): void {
    this.RoleService.delete(id)
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
