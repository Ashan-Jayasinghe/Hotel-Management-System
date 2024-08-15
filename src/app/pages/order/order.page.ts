import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular'; // Import the PopoverController from Ionic
import { OrderMenuPage } from '../popup/order-menu/order-menu.page';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  orders = [
    {
      date: 'Today, 15 Aug 2024',
      order: [
        {
          id: '01',
          image: '001.jpg',
          title: 'Hamburger',
          amount: '55.40',
          transId: '58745212',
          time: '20 Min',
          status: 'CONFIRM',
        },
        {
          id: '02',
          image: '002.jpg',
          title: 'Deep dish Pizza',
          amount: '48.40',
          transId: '45784125',
          time: '45 Min',
          status: 'CANCELLED',
        },
        {
          id: '03',
          image: '003.jpg',
          title: 'Bacon wrapped shrimp',
          amount: '23.40',
          transId: '23081980',
          time: '10 Min',
          status: 'CONFIRM',
        },
      ],
    },
    {
      date: 'Today, 16 Aug 2024',
      order: [
        {
          id: '04',
          image: '004.jpg',
          title: 'Hamburger',
          amount: '55.40',
          transId: '58745212',
          time: '20 Min',
          status: 'CONFIRM',
        },
        {
          id: '05',
          image: '005.jpg',
          title: 'Deep dish Pizza',
          amount: '48.40',
          transId: '45784125',
          time: '30 Min',
          status: 'CANCELLED',
        },
        {
          id: '06',
          image: '006.jpg',
          title: 'Bacon wrapped shrimp',
          amount: '23.40',
          transId: '23081980',
          time: '5 Min',
          status: 'CONFIRM',
        },
      ],
    },
    {
      date: 'Today, 17 Aug 2024',
      order: [
        {
          id: '07',
          image: '007.jpg',
          title: 'Hamburger',
          amount: '55.40',
          transId: '58745212',
          time: '26 Min',
          status: 'CONFIRM',
        },
        {
          id: '08',
          image: '008.jpg',
          title: 'Deep dish Pizza',
          amount: '48.40',
          transId: '45784125',
          time: '45 Min',
          status: 'CANCELLED',
        },
        {
          id: '09',
          image: '009.jpg',
          title: 'Bacon wrapped shrimp',
          amount: '23.40',
          transId: '23081980',
          time: '10 Min',
          status: 'CONFIRM',
        },
      ],
    },
  ];

  constructor(public popoverController: PopoverController) {}

  ngOnInit() {}

  segmentChanged(ev: any) {
    console.log(ev.detail.value);
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: OrderMenuPage,
      event: ev,
      mode: 'ios',
      translucent: true,
    });

    await popover.present();
  }
}
