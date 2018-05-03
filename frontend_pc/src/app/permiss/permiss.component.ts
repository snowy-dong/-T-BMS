import { ChangeDetectorRef, Component, TemplateRef, OnInit, NgModule, Directive, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import { switchMap } from 'rxjs/operators';
// import { Subscription } from 'rxjs/Subscription';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/combineLatest';

import { PermissService } from './permiss.service'
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ModalContentComponent } from './modal/dialogModal/index'
import { ConfirmWindowComponent } from '../common/modal/confirm-modal'

@Component({
  selector: 'app-permiss',
  templateUrl: './permiss.component.html',
  styleUrls: ['./permiss.component.less'],
  providers: [PermissService]
})

export class PermissComponent implements OnInit {
  public name: any;
  public id: any;
  public code: any;
  public data: Object;
  public bsModalRef: BsModalRef;
  public keywords:String = ''
  public params: any = {
    pageNo: 1,
    pageSize: 10
  };
  username:String;
  constructor(
     private route: ActivatedRoute,
     private router: Router,
     private PermissService: PermissService,
     private modalService: BsModalService
    ) {
  }
  // @ViewChild('template')
  // template: TemplateRef<any>;

  // ngAfterViewInit() {
  //   console.dir(this.template);
  // }

  // 初始化
  public ngOnInit(): void {
    this.route.params.subscribe((params) => this.username = params.username);
    this.getList(this.params);
  }

  public openModal() {
    this.bsModalRef = this.modalService.show(ModalContentComponent,{});
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
  // 跳转
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
  // 展示编辑
  public showEdit( item: Object):void{
    this.openModal();
    this.bsModalRef.content.item = item;
  }
  // 确认删除
  public delete(id: String): void {
   this.openComfirmModal(id)
  }
  // 删除
  private removeItem(id:String){
    this.PermissService.delete(id)
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


