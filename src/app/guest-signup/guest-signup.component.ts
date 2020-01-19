import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
//import {sendMessage} from 'src/assets/send_message.js'

/*declare var fs: any;*/
@Component({
  selector: 'app-guest-signup',
  templateUrl: './guest-signup.component.html',
  styleUrls: ['./guest-signup.component.css']
})
export class GuestSignupComponent implements OnInit {

  constructor() { }
  submitted = false;
  canvas: any
  imageurl: any;
  link: any;
  id: string;
  name: string;
  phoneno: number;
  namesave = '';


  onSubmit(form: NgForm) {
    this.id = form.value.id.toString();
    this.name = form.value.name;
    this.phoneno = form.value.phoneno;
    this.submitted = true;

  }

  onDownload(){
    this.canvas = document.getElementsByTagName('qr-code')[0].getElementsByTagName("canvas")[0];
    this.imageurl = this.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    this.link = document.getElementById('link');
    this.link.setAttribute('download', this.namesave.concat(this.name, this.id, '.jpg'));
    this.link.setAttribute('href', this.imageurl);
    this.link.click();
    console.log(this.imageurl);

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
