import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  products: any[] = [];
  categories: [] = [];
  @Input() data: any ={}
  @Output() item = new EventEmitter()
  constructor(private services: ProductsService) { }
  ngOnInit(): void {
    this.getProducts();
    this.getCategories()
  }

  getProducts() {
    this.services.getAllProducts().subscribe((res: any) => {
      this.products = res
    }, error => {
      alert("error")
    })
  }

  getCategories() {
    this.services.getAllCategories().subscribe((res: any) => {
      this.categories = res
    }, error => {
      alert("error")
    })
  }
  filterCategory(event: any) {
    let value = event.target.value;
    (value == 'all') ? this.getProducts() : this.getProductsCategory(value)
  }

  getProductsCategory(keyword: string) {
    this.services.getProductsByCategory(keyword).subscribe((res: any) => {
      this.products = res
    })
  }

  
}
