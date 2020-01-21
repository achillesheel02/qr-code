import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {GuestService} from '../guest-signup/guest.service';
import {Guest} from '../guest-signup/guest';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
  displayedColumns: string[] = ['fullname', 'gender', 'idnumber', 'phoneno', 'email', 'actions'];
  allguests: Guest [];
  private guestSub: Subscription;
  dataSource: MatTableDataSource<Guest>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(public guestService: GuestService) {
  }

  ngOnInit() {
    this.guestService.viewallGuests();
    this.guestSub = this.guestService.getGuestsUpdatedListener()
      .subscribe((guests: Guest []) => {
        this.allguests = guests;
      });
    this.dataSource = new MatTableDataSource(this.getGuests());
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;


  }
  getGuests(){
    return this.allguests;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

