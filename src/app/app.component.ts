import { Component, OnInit } from '@angular/core';
import { DataService } from './data-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    /** Configurations for the Home page */
    constructor(private data: DataService) {
    }

    public ngOnInit(): void {
    }

    public ngAfterViewInit(): void {
    }
}
