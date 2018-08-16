import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule,RouterLink,Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }


  ngOnInit() {
   
  }
 
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
 closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
click()
{
  this.router.navigate(['/not-found']);
}
}
