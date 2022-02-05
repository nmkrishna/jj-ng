import { Component, OnInit} from '@angular/core';
import { ChartService } from './chart.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    title = 'jj-chart';
    
    constructor(private chartService: ChartService) { }

    ngOnInit(): void {
        this.chartService.fetchData();
    }

}
