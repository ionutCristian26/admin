import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {NbDialogService} from "@nebular/theme";
import {AlertService} from "ngx-alerts";
import {SupplierService} from "../../services/supplier.service";

@Component({
    selector: 'ngx-edit-supplier',
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
                                <input type="text" nbInput fullWidth id="address" placeholder="Address"
                                       [(ngModel)]="update.address">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="companyName" class="label">Company Name</label>
                                <input type="text" nbInput fullWidth id="companyName" [value]="rowData.companyName"
                                       placeholder="Company Name" [(ngModel)]="update.companyName">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="email" class="label">Email</label>
                                <input type="email" nbInput fullWidth id="email" placeholder="Email"
                                       [value]="rowData.email"
                                       [(ngModel)]="update.email">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="website" class="label">Website</label>
                                <input type="text" nbInput fullWidth id="website" placeholder="Website"
                                       [value]="rowData.website"
                                       [(ngModel)]="update.website">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="county" class="label">Country</label>
                                <input type="text" nbInput fullWidth id="country" placeholder="Country"
                                       [value]="rowData.country"
                                       [(ngModel)]="update.country">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="phone" class="label">Phone</label>
                                <input type="text" nbInput fullWidth id="phone" placeholder="phone"
                                       [value]="rowData.phone"
                                       [(ngModel)]="update.phone">
                            </div>
                        </div>
                    </div>

                </nb-card-body>
                <nb-card-footer class="mt-3">
                    <button type="submit" nbButton status="success" style="float: right; margin-right: 10px"
                            (click)="send()">Send
                    </button>
                    <button nbButton status="danger" (click)="ref.close()" style="float: left; margin-left: 10px"
                            id="close">Close
                    </button>
                </nb-card-footer>
            </nb-card>
        </ng-template>
    `,
    styles: []
})
export class EditSupplierComponent implements OnInit {
    @Input() value: any;    // This hold the cell value
    @Input() rowData: any;

    @Output() refresh: EventEmitter<any> = new EventEmitter<any>();
    public update = {
        id: '',
        address: '',
        companyName: '',
        email: '',
        website: '',
        country: '',
        phone: '',
        type: 'supplier',
        tradeRoles: 'company',
    };

    constructor(private dialogService: NbDialogService,
                private supplierService: SupplierService,
                private alertService: AlertService) {
    }

    ngOnInit() {
    }

    open(dialog: TemplateRef<any>) {
        this.dialogService.open(dialog);
        this.update.id = this.rowData.id;
        this.update.address = this.rowData.address;
        this.update.companyName = this.rowData.companyName;
        this.update.email = this.rowData.email;
        this.update.website = this.rowData.website;
        if (this.rowData.country !== null) {
          this.update.country = this.rowData.country.code;
        }
        this.update.phone = this.rowData.phone;
    }

    send() {
        this.supplierService.update(this.update).subscribe(res => {
            this.alertService.success('Update with success');
            this.refresh.emit();
            document.getElementById('close').click();
        }, err => {
            this.alertService.danger(err.message);
        });
    }
}
