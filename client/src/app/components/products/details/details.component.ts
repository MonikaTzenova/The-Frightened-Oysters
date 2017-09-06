import { Component, OnInit, Inject } from '@angular/core';
import { ProductsService } from '../../../services//products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public details;
  constructor( @Inject(ProductsService) private productsService,  private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    const id = (+this.activatedRoute.snapshot.params['id'] - 1);
    this.details = this.productsService.getById(id);
  }

}
