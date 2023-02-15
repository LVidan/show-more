import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.scss']
})
export class ShowMoreComponent implements OnInit {
  @Input() content: string;
  isExpanded: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  expandContent(event: any): void {
    event.preventDefault();
    this.isExpanded = !this.isExpanded;
  }
}
