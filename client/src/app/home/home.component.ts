import { ItemsService } from './../items.service';
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
  items;
  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.items = this.itemsService.getAll();
  }
}
