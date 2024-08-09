import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
  filters = {
    meal_type: 'lunch',
    cuisine: 'indian',
    distance: 5,
    popular: true,
    priceByOrder: 'highToLow',
    price: { lower: 500, upper: 5650 },
  };
  constructor() {}

  ngOnInit() {}

  mealTypeChange(ev: any) {
    console.log(ev.detail.value);
    const type = ev.detail.value;
    this.filters.meal_type = type;
  }

  cuisineTypeChange(ev: any) {
    console.log(ev.detail.value);
    const type = ev.detail.value;
    this.filters.cuisine = type;
  }

  distanceChange(ev: any) {
    console.log(ev.detail.value);
    const type = ev.detail.value;
    this.filters.distance = type;
  }

  popularChange(ev: any) {
    console.log(ev.detail.checked);
    const type = ev.detail.checked;
    this.filters.distance = type;
  }

  highLowChange(ev: any) {
    console.log(ev.detail.value);
    const type = ev.detail.value;
    this.filters.priceByOrder = type;
  }

  priceChange(ev: any) {
    console.log(ev.detail.value);
    const type = ev.detail.value;
    this.filters.price.lower = type.lower;
    this.filters.price.upper = type.upper;
    console.log(this.filters.price);
  }
}
