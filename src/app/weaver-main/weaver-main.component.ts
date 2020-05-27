import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-weaver-main',
  templateUrl: './weaver-main.component.html',
  styleUrls: ['./weaver-main.component.css']
})
export class WeaverMainComponent {
  displayedColumns = ['id', 'weaverName', 'phone', 'address', 'joinedDate', 'nickName'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {

    console.log("weaver comp opening!!!")
    // Create 100 users
    const weavers: UserData[] = [];
    for (let i = 1; i <= 100; i++) { weavers.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    console.log(weavers)
    this.dataSource = new MatTableDataSource(weavers);
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  

  return {
    id: id.toString(),
    weaverName: "mothi",
    phone: "8939145189",
    address: "elampillai",
    joinedDate: "10-10-2020",
    nickName: "msampath"
  };
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  weaverName: string;
  phone: string;
  address: string;
  joinedDate: string;
  nickName: string;
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */