import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { ChartsJoinedComponent } from './components/charts-joined/charts-joined.component';
import { ChartGptComponent } from './components/charts-chatgpt/charts-chatgpt.component';


@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    LineChartComponent,
    ChartsJoinedComponent,
    ChartGptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
