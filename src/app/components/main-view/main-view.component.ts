import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { ThanksComponentComponent } from '../thanks-component/thanks-component.component';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  newLesterForm!: FormGroup
  isEmailIncvalid: boolean = false
  isMobilSize: boolean = false
  isModeRegister: boolean = true

  constructor(
    private _fb:FormBuilder,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.createNewLesterForm()
    this.detectarNavegadorMovil()
  }

  createNewLesterForm() {
    this.newLesterForm = this._fb.group({
      email: [null, [Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$"), Validators.required ]],
    })
  }

  detectarNavegadorMovil() {
    const isMobileUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    this.isMobilSize = isMobileUserAgent;
  }

  susbcribeNewlester() {
    if(this.newLesterForm.invalid) {
      this.newLesterForm.markAsTouched()
      this.isEmailIncvalid = true
      return
    }
    else {
      this.isEmailIncvalid = false
      this.openSuccessModal()
    }
  }

  openSuccessModal() {

    if(this.isMobilSize) {
      this.isModeRegister = false
      return
    }
    else {
      this.isModeRegister = true
      const ref = this.dialogService.open(ThanksComponentComponent, {
        width: '30rem',
        data: {
          email: this.newLesterForm.get('email')?.value
        }
      })
      ref.onClose.subscribe(()=> {
        this.newLesterForm.reset()
      })
    }
  }

  scapeSuccess() {
    this.isModeRegister = true
    this.newLesterForm.reset()
  }

}
