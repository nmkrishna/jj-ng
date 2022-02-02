import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Chart2Component } from './chart2/chart2.component';

@NgModule({
    declarations: [
        AppComponent,
        ChartComponent,
        Chart2Component
    ],
    imports: [
        NgbModule,
        BrowserModule,
        AppRoutingModule,
        NgxSpinnerModule,
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
