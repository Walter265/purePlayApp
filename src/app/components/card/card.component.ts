import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {

  @Input() name!: string;
  @Input() summary!: string;
  @Input() country!: string;
  @Input() imageMovie!: string;
  @Input() Movies!: string;
  @Input() University!: string;

  constructor() { }

  ngOnInit() {}

}
