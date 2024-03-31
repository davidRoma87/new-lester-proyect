import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-thanks-component',
  templateUrl: './thanks-component.component.html',
  styleUrls: ['./thanks-component.component.scss']
})
export class ThanksComponentComponent implements OnInit {

  email: string = ''

  constructor(
    private _dialogRef: DynamicDialogRef,
    private _config: DynamicDialogConfig
  ) { }

  ngOnInit() {
    this.email = this._config.data.email
  }

  closeModal() {
    this._dialogRef.close()
  }

}
