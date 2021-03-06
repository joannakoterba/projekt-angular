import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';
import { DataService } from "./data.service";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { DataSearchPipe } from "./table/data-search.pipe";
import { DataSortPipe } from "./table/data-sort.pipe";
import { SortComponent } from './sort/sort.component';
import { NgxPaginationModule } from "ngx-pagination";
import { AddEmployeeComponent } from './add-employee/add-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TableComponent,
    SortComponent,
    DataSearchPipe,
    DataSortPipe,
    SortComponent,
    AddEmployeeComponent
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
