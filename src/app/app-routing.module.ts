import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from "./chart/chart.component"
import { Chart2Component } from "./chart2/chart2.component"

const routes: Routes = [
    { path: 'chart1', component: ChartComponent },
    { path: 'chart2', component: Chart2Component },
    { path: '',   redirectTo: '/chart1', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
