import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import {Guest} from './guest';
import {GuestService} from './guest.service';


/*declare var fs: any;*/
@Component({
  selector: 'app-guest-signup',
  templateUrl: './guest-signup.component.html',
  styleUrls: ['./guest-signup.component.css']
})
export class GuestSignupComponent implements OnInit {
  guest: Guest;
  sexes = ['male', 'female'];

  constructor(private guestService: GuestService) { }
  submitted = false;

  onSubmit(form: NgForm) {
    console.log(form.value.gender);
    this.submitted = true;
    this.guest = {
      idnumber: form.value.idnumber,
      phoneno : form.value.phoneno,
      email : form.value.email,
      fullname : form.value.fullname,
      gender: form.value.gender
    };
  }

  private getBarcodeURL() {
    const canvas = document.getElementsByTagName('qr-code')[0].getElementsByTagName('canvas')[0];
    return canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
  }

  onDownload() {
    const imageurl = this.getBarcodeURL();
    const link = document.getElementById('link');
    const namesave = '';
    link.setAttribute('download', namesave.concat(this.guest.fullname, this.guest.idnumber.toString(), '.jpg'));
    link.setAttribute('href', imageurl);
    link.click();
    console.log(imageurl);

}
  saveGuest(){
    this.guest.barcode=this.getBarcodeURL();
    this.guestService.addGuest(this.guest);
  }
  /*sendToATAPI(){
    const no = this.phoneno.toString();
    const ext = '+254';
    const fullno = ext.concat(no);
    sendMessage(fullno, this.imageurl.toString());
    console.log("done!");

  }
*/


  ngOnInit() {
  }

}
