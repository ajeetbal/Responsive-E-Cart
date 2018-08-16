import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductComponent } from './product/product.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Routes, RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { ServerService} from './server.service';
const appRoute:Routes=[
  { path: '', component:ProductComponent },
  { path: 'not-found', component: PagenotfoundComponent },
  { path: '**', redirectTo:'/not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,ProductComponent,PagenotfoundComponent
  ],
  imports: [
    BrowserModule,RouterModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
