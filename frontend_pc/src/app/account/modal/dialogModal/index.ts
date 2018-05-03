import { ChangeDetectorRef, Component, TemplateRef, OnInit, NgModule, Directive, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AccountService} from '../../account.service'
import { RoleService } from '../../../role/role.service'
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
@Component({
  selector: 'modal-content',
  templateUrl: './index.html',
  providers: [AccountService, RoleService,DatePipe]
})
export class ModalContentComponent implements OnInit {
  roleList: Object;
  id:any;
  permissList: any;
  public params:any = {
    name:null,
    email:null,
    cellphone:null,
    joinDate:null,
    gender:null,
    role:[]

  }
  public onClose: any;
  constructor(
    public bsModalRef: BsModalRef,
    private AccountService: AccountService,
    private RoleService:RoleService,
    private datePipe:DatePipe
    ) {}

  ngOnInit() {
    console.log('ngOnInit')
    this.getRole()
    if(this.id){
      this.getDetail(this.id)
    }
  }
  // 获取角色
  public getRole(): void {
    this.RoleService.getList({})
      .subscribe(data => {
        this.roleList = data
        console.log(data)
      })
  }
  // 保存
  public saveModal(item){
    if(item.id){
      this.edit(item.id,item)
    }else{
      this.add(item)
    }
  }
  // 获取用户详情
  getDetail(id: String){
    this.AccountService.getDetail(id)
    .subscribe(data => {
      this.params = data.data[0]
      console.log(data)
    })
  }
  // 编辑
  public edit(id: String, obj: Object): void {
    this.AccountService.edit(id, obj)
      .subscribe(data => {
        console.log(data)
        this.onClose('yes')
      })
  }
  // 添加用户
  // 添加账户
  public add(item:any): void {
    item.joinDate = this.datePipe.transform(item.joinDate, 'yyyy-MM-dd');
    this.AccountService.add(item)
      .subscribe(data => {
        console.log(data)
        this.onClose('yes')
      })
  }
}
