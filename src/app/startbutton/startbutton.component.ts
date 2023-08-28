import { Component, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbOffcanvas, NgbOffcanvasRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-startbutton',
  templateUrl: './startbutton.component.html',
  styleUrls: ['./startbutton.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class StartbuttonComponent {
  progress: number = 0;
  offcanvasRef: NgbOffcanvasRef | null = null; 
  alertShown: boolean = false; 

  constructor(private offcanvasService: NgbOffcanvas) {}

  openBottom(content: TemplateRef<any>) {
    this.offcanvasRef = this.offcanvasService.open(content, { position: 'bottom' });
    this.simulateProgress();
  }

  simulateProgress() {
    const interval = setInterval(() => {
      this.progress += 10;

      if (this.progress === 100) {
        clearInterval(interval);
        if (this.offcanvasRef) {
          this.offcanvasRef.close(); 
        }
        if (!this.alertShown) {
          this.alertShown = true;
          alert('Migration process completed.'); 
          this.progress = 0;
        }
      }
    }, 1000);
  }

  toggleOffcanvas() {
    if (this.offcanvasService) {
      if (this.offcanvasService.hasOpenOffcanvas()) { 
        this.offcanvasService.dismiss();
      } else {
        this.offcanvasService.open;
      }
    }
  }
}
