import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item_data : any;

  constructor() { }

  ngOnInit(): void {
  }

}
