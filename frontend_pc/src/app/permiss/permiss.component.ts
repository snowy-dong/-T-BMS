import { ChangeDetectorRef, Component, TemplateRef, OnInit, NgModule, Directive, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

import { PermissService } from './permiss.service'
import { BsModalService, BsModalRef } from 'ngx-bootstrap';


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
  public openModal() {
    this.bsModalRef = this.modalService.show(ModalContentComponent,{});
    this.bsModalRef.content.onClose = (myData) => {
      if(myData){
         this.bsModalRef.hide();
         this.getList(this.params);
      }
    };
  }
  // 初始化
  public ngOnInit(): void {
    this.route.params.subscribe((params) => this.username = params.username);
    this.getList(this.params);
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

  // 删除
  public delete(id: String): void {
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

@Component({
  selector: 'modal-content',
  templateUrl: './modal/showModal.html',
  providers: [PermissService]
})
export class ModalContentComponent implements OnInit {
  public item: Object={
    permiss_name:'',
    permiss_code:''
  };
  public onClose: any;
  constructor(private bsModalRef: BsModalRef, private PermissService: PermissService) {}

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
