import { Component, OnInit, Inject } from '@angular/core';
import { ProductsService } from '../../services//products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor( @Inject(ProductsService) private productsService) { }
  details;
  ngOnInit() {
    this.details = this.productsService.getAll();
  }
}
