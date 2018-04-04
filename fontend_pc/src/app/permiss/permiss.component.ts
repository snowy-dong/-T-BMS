import { Component, TemplateRef, OnInit, NgModule, Directive } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { PermissService } from './permiss.service'
import { BsModalService, BsModalRef } from 'ngx-bootstrap';


@Component({
  selector: 'app-permiss',
  templateUrl: './permiss.component.html',
  styleUrls: ['./permiss.component.less'],
  providers: [PermissService]
})

export class PermissComponent implements OnInit {
  public data: Object;
  public modalRef: BsModalRef;
  public hero$:any; //test Data
  public params: any = {
    pageNo: 1,
    pageSize: 10
  };
  public username:String;
  constructor(
     private route: ActivatedRoute,
     private router: Router,
     private PermissService: PermissService,
     private modalService: BsModalService
    ) {
  }
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  public ngOnInit(): void {
    this.route.params.subscribe((params) => this.username = params.username);
    this.getList(this.params);
  }
  public goRouter(){
    setTimeout(() => {
      this.router.navigate(['/settings']);
    }, 5000)
  }
  // 获取列表
  public getList(params: Object): void {
    this.PermissService.getList(params)
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
    this.PermissService.add(obj)
      .subscribe(data => {
        console.log(data)
        this.modalRef.hide();
      })
  }
  // 编辑
  public edit(id: String, obj: Object): void {
    this.PermissService.edit(id, obj)
      .subscribe(data => {
        console.log(data)
        this.modalRef.hide();
      })
  }
  // 删除
  public delete(id: String): void {
    this.PermissService.delete(id)
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

