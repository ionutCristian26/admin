import { Component, OnInit } from '@angular/core';
import { EditBuyersComponent } from '../../custom/edit-buyers/edit-buyers.component';
import { HttpClient } from '@angular/common/http';
import { ServerDataSource } from 'ng2-smart-table';
import { environment } from '../../../environments/environment';
import {EditSupplierComponent} from "../../custom/edit-supplier/edit-supplier.component";

@Component({
  selector: 'ngx-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent implements OnInit {

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
        },
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
        renderComponent: EditSupplierComponent,
        onComponentInitFunction: (instance) => {
          instance.refresh.subscribe(event => {
            this.refresh();
          });
        },
      }
    },
  };

  baseUrl = 'https://api-shipping.osc-fr1.scalingo.io';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.source = new ServerDataSource(this.http, {
      endPoint: `${this.baseUrl}/manage/supplier`,
      totalKey: '_total',
      dataKey: '_embedded.Source',
      pagerPageKey: 'page',
    });
  }

  private refresh() {
    this.source.refresh();
  }
}
