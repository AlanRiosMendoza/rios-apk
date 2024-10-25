import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page {
  description: string = '';
  savedDescription: string | null = null;

  constructor() {}

  saveDescription() {
    this.savedDescription = this.description;
    this.description = '';
  }
}
