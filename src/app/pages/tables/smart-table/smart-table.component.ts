import { Component } from '@angular/core';
import { LocalDataSource, ServerDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { environment } from '../../../../environments/environment';

import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
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
    },
  };

  source: ServerDataSource;

  constructor(private service: SmartTableData, private http: HttpClient) {
    const data = this.service.getData();
    this.source.load(data);
  }

  private loadData() {
    this.source = new ServerDataSource(this.http, {
      endPoint: `${environment.baseUrl}/manage/buyer`,
      totalKey: '_total_items',
      dataKey: '_embedded.Source',
      pagerPageKey: 'page',
    });
    // this.source.setPaging(1,10,);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
