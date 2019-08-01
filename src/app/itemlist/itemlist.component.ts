import { Component, OnInit } from '@angular/core';
import {ItemService} from "../item.service";

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.scss']
})
export class ItemlistComponent implements OnInit {
  items;

  constructor(
      private itemService: ItemService
  ) {
    this.items = this.itemService.getItems();
  }

  ngOnInit() {
  }

}
