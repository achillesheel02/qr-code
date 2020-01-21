import { Injectable } from '@angular/core';
import {Guest} from './guest';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/signup';

  addGuest(guest: Guest){
    console.log(guest);
    this.http.post<{message: string}>(this.url, guest)
      .subscribe((res) => {
        console.log(res);
      });
  }

  deleteGuest(id){

  }
  editGuest(id) {

  }
  viewGuest(id){

  }
  viewallGuests(){

  }
}
