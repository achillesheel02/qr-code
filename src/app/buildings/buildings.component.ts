import { Component, OnInit } from '@angular/core';
import {BuildingsService} from '../buildings.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {
  events: any[] = [];

  constructor(private buildiingService: BuildingsService) { }

  ngOnInit() {
  }}
