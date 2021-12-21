import { Injectable } from '@angular/core';

import { rawData } from './chart/chartdata';
@Injectable({
    providedIn: 'root',
})
export class ChartService {
    constructor() { }

    chartBaseUrl =
        'https://jj-svc.herokuapp.com/reports/portfolio';

    async getChartData(
        fileName: string = 'Combined_Transformation Roadmap for Verification_Outline 12-13-21.xlsx'
    ): Promise<any> {
        try {
            const jsonData = await fetch(`${this.chartBaseUrl}?file=${fileName}`).then(
                (data) => data.json()
            );
            console.log('chart data >', jsonData);
            return jsonData;
        } catch (error) {
            console.log('chart fetch error', error);
        }
    }
}
