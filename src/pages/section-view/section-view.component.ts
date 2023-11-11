import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-view',
  templateUrl: './section-view.component.html',
  styleUrls: ['./section-view.component.scss'],
})
export class SectionViewComponent {
  @Input() title!: string;
  @Input() link!: string;
  @Input() description!: string;

  constructor() {}
}
