import { Component, OnInit, Inject, Input } from '@angular/core';
import { ProductsService } from '../../../services//products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor( @Inject(ProductsService) private productsService,  private activatedRoute: ActivatedRoute) {

  }
  details;
  ngOnInit() {
    const id = +this.activatedRoute.snapshot.params['id'];
    this.details = this.productsService.getById(id);
  }

}
