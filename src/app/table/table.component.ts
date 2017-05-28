import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['table.component.scss']
})
export class TableComponent implements OnInit {
  rows = [];
  search: string = "";
  field: string = "id";
  direction: string = "asc";

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(response => {
      this.rows = response.json();
    });
  }

  onSort(name: string) {
    this.field = name;
    this.direction = this.direction == "asc" ? "desc" : "asc";
  }
}
