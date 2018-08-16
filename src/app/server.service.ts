import { Injectable } from '@angular/core';
import {Http,Response } from '@angular/http';
import 'rxjs/RX';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http:Http) { }
  storeProduct(product:any[]){
      return this.http.post('https://http-example-2258b.firebaseio.com/ecommerce.json',product);
  }
  getProduct(){
    return this.http.get('https://http-example-2258b.firebaseio.com/ecommerce.json')
    .map(
      (response:Response)=>{
        const data=response.json();
        return data;
      }

    )
  }
}
