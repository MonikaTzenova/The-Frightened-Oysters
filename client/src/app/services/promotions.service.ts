import { Injectable } from '@angular/core';

export class PromotionsService {
  constructor() { }

  promotions = [{
    image: 'http://cdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j7-pro.jpg',
    name: 'Samsung Galaxy J7 Pro',
    size: '181g, 7.9mm thickness',
    os: 'Android 7.1',
    storage: '32/64GB storage, microSD card slot',
    displaySize: '5.5"',
    cameraSize: '13MP',
    memory: '3GB RAM',
    chipset: 'Exynos 7870 Octa',
    batteryMaH: '3600mAh',
    price: 'About 300 EUR',
    id: 'p1'
  }, {
    image: 'http://cdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j1-ace.jpg',
    name: 'Samsung Galaxy J1 Ace',
    size: '131g, 9.5mm thickness',
    os: 'Android 4.4.4',
    storage: '4GB storage, microSD card slot',
    displaySize: '4.3"',
    cameraSize: '5MP',
    memory: '1GB RAM',
    chipset: 'Spreadtrum SC9830',
    batteryMaH: '1850mAh',
    price: 'About 140 EUR',
    id: 'p2'
  }, {
    image: 'http://cdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a9-pro1.jpg',
    name: 'Samsung Galaxy A9 Pro (2016)',
    size: '210g, 7.9mm thickness',
    os: 'Android 6.0.1',
    storage: '32GB storage, microSD card slot',
    displaySize: '6.0"',
    cameraSize: '16MP',
    memory: '4GB RAM',
    chipset: 'Snapdragon 652',
    batteryMaH: '5000mAh',
    price: 'About 500 EUR',
    id: 'p3'
  },
  ];

  getAll() { return this.promotions; }
  
    getById(id) {
	    return this.promotions.find(x => x.id === id);
	}
}

