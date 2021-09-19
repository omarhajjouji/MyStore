import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'items-displayer',
  templateUrl: './items-displayer.component.html',
  styleUrls: ['./items-displayer.component.css']
})
export class ItemsDisplayerComponent implements OnInit {
  item1={
    "img_src":"https://www.mykenza.tn/wp-content/uploads/2020/11/004-800x958-768x920.jpg",
    "name":"Pull Polo",
    "price":500
  }

  item2={
    "img_src":"https://media.vertbaudet.com/Pictures/vertbaudet/202294/polo-manches-longues-en-coton-bio-garcon-cyrillus.jpg",
    "name":"Pull Polo",
    "price":500
  }

  item3={
    "img_src":"https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/48/7773/1.jpg",
    "name":"Pull Polo",
    "price":500
  }

  item4={
    "img_src":"https://www.orsonbay.com/15115-small_default/sweat-floque-polo-1967.jpg",
    "name":"Pull Polo",
    "price":500
  }

  constructor() { }

  ngOnInit(): void {

  }



}
