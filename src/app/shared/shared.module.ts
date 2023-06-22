import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { ProductsModule } from '../products/products.module';
  


@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent 
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent 
  ]
})
export class SharedModule { }
