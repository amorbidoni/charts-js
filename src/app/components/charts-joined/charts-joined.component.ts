import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, InteractionItem } from 'chart.js';

@Component({
  selector: 'app-charts-joined',
  templateUrl: './charts-joined.component.html',
  styleUrls: ['./charts-joined.component.scss']
})
export class ChartsJoinedComponent implements OnInit {
  ngOnInit(): void {
        this.createChart()
  }
 // setup 
 public data:ChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'Weekly Sales',
    data: [18, 12, 6, 9, 12, 3, 9],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor: [
      'rgba(255, 26, 104, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(0, 0, 0, 1)'
    ],
    borderWidth: 1
  }]
};
 public data2:ChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'Weekly Sales',
    data: [33, 22,12, 88, 99, 33, 10],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor: [
      'rgba(255, 26, 104, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(0, 0, 0, 1)'
    ],
    borderWidth: 1
  }]
};

// config 
private config:ChartConfiguration = {
  type: 'bar',
  data: this.data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};
private config2:ChartConfiguration = {
  type: 'line',
  data: this.data2,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

public myChart!: Chart;
public myChart2!: Chart;
// render init block
createChart(){
  this.myChart = new Chart('newBarChart', this.config);
  this.myChart2 = new Chart('newLineChart', this.config2);
  this.myChart.canvas.onmousemove = this.hover1;
}
hover1(move:any){
  const chartInstance = Chart.getChart('newBarChart');
  const chart2Instance = Chart.getChart('newLineChart')
  const points = chartInstance!.getElementsAtEventForMode(move, 'nearest', {intersect: true}, true);
  if(points[0]){
    const dataset = points[0].datasetIndex;
    const datapoint = points[0].index; 
    console.log(dataset, datapoint)
    chart2Instance!.tooltip!.setActiveElements([
      {datasetIndex: dataset, index: datapoint}
    ], move);
    
    chart2Instance!.setActiveElements([
      {datasetIndex:dataset, index:datapoint}
    ]);
    chart2Instance!.update()
  }
}
// // Instantly assign Chart.js version
// const chartVersion = document.getElementById('chartVersion');
// chartVersion.innerText = Chart.version;
}
