import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {
  isModalOpen = false;
  a: number | undefined;
  b: number | undefined;
  c: number | undefined;
  resultado: SafeHtml | undefined; 

  constructor(private sanitizer: DomSanitizer) {}

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  calcularRaices() {
    if (this.a === undefined || this.b === undefined || this.c === undefined) {
      this.resultado = 'Por favor, ingrese valores válidos para a, b y c.';
      return;
    }

    const discriminante = this.b * this.b - 4 * this.a * this.c;

    if (discriminante > 0) {
      const raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
      const raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
      this.resultado = this.sanitizer.bypassSecurityTrustHtml(`
        <p>Raíces reales:</p>
        <ul>
          <li>x1 = ${raiz1}</li>
          <li>x2 = ${raiz2}</li>
        </ul>
      `)
    } else if (discriminante === 0) {
      const raiz = -this.b / (2 * this.a);
      this.resultado = this.sanitizer.bypassSecurityTrustHtml(`
        <p>Raíz única:</p>
        <ul>
          <li>x = ${raiz}</li>
        </ul>
      `)
    } else {
      const parteReal = (-this.b / (2 * this.a)).toFixed(2);
      const parteImaginaria = (Math.sqrt(-discriminante) / (2 * this.a)).toFixed(2);
      this.resultado = this.sanitizer.bypassSecurityTrustHtml(`
        <p>Raíces complejas:</p>
        <ul>
          <li>x1 = ${parteReal} + ${parteImaginaria}i</li>
          <li>x2 = ${parteReal} - ${parteImaginaria}i</li>
        </ul>
      `)
    }
    this.setOpen(true)
  }
}
