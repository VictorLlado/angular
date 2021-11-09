import { Component, OnInit } from '@angular/core';
import { Speed } from '../shared/speed'

@Component({
  selector: 'app-speedtrack',
  templateUrl: './speedtrack.component.html',
  styleUrls: ['./speedtrack.component.scss']
})
export class SpeedtrackComponent implements OnInit {

  speed: Speed[] = [
    {
      id: '0',
      name: 'Uthappizza',
      image: '/assets/images/uthappizza.png',
      category: 'mains',
      featured: true,
      label: 'Hot',
      price: '4.99',
      description: 'Type A'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
