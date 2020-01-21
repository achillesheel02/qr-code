import { Injectable } from '@angular/core';
import {Guest} from './guest';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  constructor(private http: HttpClient) { }

  private guests: Guest [];
  private guestsUpdated = new Subject<any []>();

  addGuest(guest: Guest) {
    const url = 'http://localhost:3000/signup';
    console.log(guest);
    this.http.post<{message: string}>(url, guest)
      .subscribe((res) => {
        console.log(res);
      });

  }

  deleteGuest(id) {

  }
  editGuest(id) {

  }
  viewGuest(id) {

  }
  viewallGuests() {
    const url = 'http://localhost:3000/all-guests';
    this.http.get<{message: string , guests: any []}>(url)
      .pipe(map((postData) => {
      return postData.guests.map(post => {
        return {
          fullname: post.fullname,
          gender: post.gender,
          idnumber: post.idnumber,
          phoneno: post.phoneno,
          email: post.email,
          barcode: post.barcode,
          id: post._id
        };
      });
    }))
      .subscribe((guestData) => {
        this.guests = guestData ;
        this.guestsUpdated.next([...this.guests]);
      });
  }

  getGuestsUpdatedListener() {
    return this.guestsUpdated.asObservable();
  }
}
