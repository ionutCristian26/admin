import {Component, OnInit, Input, EventEmitter, Output, TemplateRef} from '@angular/core';
import {NbDialogService} from '@nebular/theme';

@Component({
  selector: 'ngx-edit-buyers',
  template: `
    <div class="row" style="text-align: center">
      <div class="col col-xs-4 order-button">
        <button nbButton status="danger" size="small"
                nbTooltip="Shipping Address Details" (click)="open(dialog)">
          <nb-icon icon="edit"></nb-icon>
        </button>
      </div>
    </div>

    <ng-template #dialog let-data let-ref="dialogRef">
      <nb-card style="width: 50vw">
        <nb-card-header>Edit {{ rowData.companyName }} address</nb-card-header>
        <nb-card-body>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label for="address" class="label">Address</label>
                <input type="text" nbInput fullWidth id="address" [value]="rowData.address" placeholder="Address">
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="companyName" class="label">Company Name</label>
                <input type="text" nbInput fullWidth id="companyName" [value]="rowData.companyName"
                       placeholder="Company Name">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label for="email" class="label">Email</label>
                <input type="email" nbInput fullWidth id="email" placeholder="Email" [value]="rowData.email">
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="website" class="label">Website</label>
                <input type="text" nbInput fullWidth id="website" placeholder="Website" [value]="rowData.website">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label for="county" class="label">Country</label>
                <input type="text" nbInput fullWidth id="country" placeholder="Country" [value]="rowData.country">
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="phone" class="label">Phone</label>
                <input type="text" nbInput fullWidth id="phone" placeholder="phone" [value]="rowData.phone">
              </div>
            </div>
          </div>
        </nb-card-body>
        <nb-card-footer class="mt-3">
          <button type="submit" nbButton status="success" style="float: left; margin-right: 10px">Send</button>
          <button nbButton status="danger" (click)="ref.close()" style="float: right; margin-left: 10px"
                  id="close">Close
          </button>
        </nb-card-footer>
      </nb-card>
    </ng-template>
  `,
  styles: [],
})
export class EditBuyersComponent implements OnInit {
  @Input() value: any;    // This hold the cell value
  @Input() rowData: any;

  @Output() showEditModal: EventEmitter<any> = new EventEmitter<any>()

  constructor(private dialogService: NbDialogService) {
  }

  ngOnInit() {
  }

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
  }
}
