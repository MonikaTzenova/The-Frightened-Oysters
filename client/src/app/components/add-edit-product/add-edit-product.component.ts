import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from './../../services/products.service';
import { Router } from '@angular/router';

import { IProduct } from './../../models/IProduct';
import { ICookie } from './../../models/ICookie';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {
  public size: FormControl;
  public name: FormControl;
  public price: FormControl;
  public display: FormControl;
  public storage: FormControl;
  public memory: FormControl;
  public photoUrl: FormControl;
  public camera: FormControl;
  public battery: FormControl;

  public addProductForm: FormGroup;


  constructor(private router: Router, private productsService: ProductsService) { }

  ngOnInit() {
    this.buildAddProductFormData();
  }

  buildAddProductFormData() {
    this.size = new FormControl('', [
      Validators.required
    ]);

    this.name  = new FormControl('', [
      Validators.required
    ]);

    this.price  = new FormControl('', [
      Validators.required
    ]);

    this.display  = new FormControl('', [
      Validators.required
    ]);

    this.storage  = new FormControl('', [
      Validators.required
    ]);

    this.memory  = new FormControl('', [
      Validators.required
    ]);

    this.camera  = new FormControl('', [
      Validators.required
    ]);

    this.battery  = new FormControl('', [
      Validators.required
    ]);

    this.photoUrl  = new FormControl('', [
      Validators.required,
      Validators.pattern('https?://.+')
    ]);

    this.addProductForm = new FormGroup({
      size: this.size,
      name: this.name,
      price: this.price,
      display: this.display,
      storage: this.storage,
      memory: this.memory,
      photoUrl: this.photoUrl,
      camera: this.camera,
      battery: this.battery
    });
  }

  addProduct(productData: IProduct) {
    const handleSuccessResponse = (cookie: ICookie) => {
      this.router.navigate(['products'], { queryParams: { 'refresh': 1 } });
    };

    this.productsService.add(productData);

  }
}
