// Angular
import { Component, Inject } from '@angular/core';
// Material
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

// Email Dialog Component
@Component({
  selector: 'app-email-dialog',
  templateUrl: './email-dialog.component.html',
  styleUrls: ['./email-dialog.component.scss']
})
export class EmailDialogComponent {
  close: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.close = data.close;
  }
}