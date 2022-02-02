import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from "./chart/chart.component"
import { Chart2Component } from "./chart2/chart2.component"

const routes: Routes = [
    { path: '', component: ChartComponent },
    { path: 'chart2', component: Chart2Component },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
