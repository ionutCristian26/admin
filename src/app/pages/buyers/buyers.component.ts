import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ServerDataSource} from 'ng2-smart-table';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {EditBuyersComponent} from '../../custom/edit-buyers/edit-buyers.component';
import {NbDialogService} from '@nebular/theme';

@Component({
    selector: 'ngx-buyers',
    templateUrl: './buyers.component.html',
    styleUrls: ['./buyers.component.scss'],
})
export class BuyersComponent implements OnInit {

    public source: ServerDataSource;

    settings = {
        actions: {
            add: false,
            edit: false,
            delete: false,
            columnTitle: '',
            position: 'right',
        },
        pager: {
            display: true,
            perPage: 10,
        },
        columns: {
            id: {
                title: 'Id',
                type: 'string',
                filter: false,
            },
            address: {
                title: 'Address',
                type: 'string',
                filter: false,
            },
            companyName: {
                title: 'Company Name',
                type: 'string',
                filter: false,
            },
            country: {
                title: 'Country',
                type: 'string',
                filter: false,
                valuePrepareFunction: (cell, row) => {
                    if (row.country !== null) {
                        return row.country.name;
                    } else {
                        return '';
                    }
                }
            },
            email: {
                title: 'Email',
                type: 'string',
                filter: false,
            },
            phone: {
                title: 'Phone',
                type: 'string',
                filter: false,
            },
            website: {
                title: 'Website',
                type: 'string',
                filter: false,
            },
            button: {
                title: '',
                type: 'custom',
                filter: false,
                renderComponent: EditBuyersComponent,
                onComponentInitFunction: (instance) => {
                    instance.refresh.subscribe(event => {
                        this.refresh();
                    });
                },
            },
        }
    };

    baseUrl = 'https://api-shipping.osc-fr1.scalingo.io';

    constructor(private http: HttpClient, private dialogService: NbDialogService) {
    }

    ngOnInit() {
        this.loadData();
    }

    private loadData() {
        this.source = new ServerDataSource(this.http, {
            endPoint: `${this.baseUrl}/manage/buyer`,
            totalKey: '_total',
            dataKey: '_embedded.Source',
            pagerPageKey: 'page',
        });
    }

    private refresh() {
        this.source.refresh();
    }
}
