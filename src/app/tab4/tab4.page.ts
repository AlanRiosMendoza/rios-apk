import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  startDate: string | undefined;
  endDate: string | undefined;
  daysDifference: number | undefined;

  constructor() {}

  calculateDays() {
    if (this.startDate && this.endDate) {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      this.daysDifference = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    } else {
      this.daysDifference = undefined;
    }
  }
}