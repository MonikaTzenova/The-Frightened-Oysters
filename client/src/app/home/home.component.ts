import { PromotionsService } from '../core-module/promotions.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@NgModule({
  imports: [CarouselModule]
})

export class HomeComponent implements OnInit {
  promotions;
  constructor(private promotionsService: PromotionsService) { }

  ngOnInit() {
    this.promotions = this.promotionsService.getAll();
  }
}
