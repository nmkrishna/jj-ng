import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ChartService {
   
    
    
    constructor() { }

    chartBaseUrl =
        '/reports/portfolio';



    async getChartData(
        fileName: string = 'TRoadmap Initiative Data - Final.xlsx'
    ): Promise<any> {
        try {
            const jsonData = await fetch(`${this.chartBaseUrl}?file=${fileName}`).then(
                (data) => data.json()
            );      
            return jsonData;
        } catch (error) {
            console.log('chart fetch error', error);
            return error;
        }
    }
}
