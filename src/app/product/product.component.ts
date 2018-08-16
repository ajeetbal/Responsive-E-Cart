import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {Observable} from 'rxjs/Observable'; 
import 'rxjs/RX';
import {Observer} from 'rxjs/Observer'; 
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
