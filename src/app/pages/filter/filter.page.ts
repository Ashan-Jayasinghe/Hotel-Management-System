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
    price: { lower: 5, upper: 10 },
  };
  constructor() {}

  ngOnInit() {}

  mealTypeChange(ev: any) {
    console.log(ev.detail.value);
    const type = ev.detail.value;
    this.filters.meal_type = type;
  }
}
