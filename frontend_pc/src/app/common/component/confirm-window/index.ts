import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'confirm-window',
  templateUrl: './confirm-window.html'
})
export class ConfirmComponent {
  modalRef: BsModalRef;
  message: string="确认执行此操作";

  constructor() {}
  confirm(): void {
  }

  decline(): void {

  }
}
