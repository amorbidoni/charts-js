import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, ChartData } from 'chart.js';

@Component({
  selector: 'app-chart-gpt',
  template: `
    <div>
      <canvas #canvas1></canvas>
      <canvas #canvas2></canvas>
    </div>
  `,
  styles: [`
    div {
      display: flex;
    }
    canvas {
      width: 50%;
    }
  `]
})
export class ChartGptComponent implements OnInit {
  @ViewChild('canvas1') canvas1Ref?: ElementRef;
  @ViewChild('canvas2') canvas2Ref?: ElementRef;
  
  public chart1!: Chart;
  public chart2!: Chart;

  ngOnInit() {

    const canvas1 = Chart.getChart('canvas1');
    const canvas2 = Chart.getChart('canvas2');
      this.chart1 = new Chart(canvas1!, {
        type: 'line',
        data: this.data,
        options: {
           plugins:{
            tooltip:{
              mode:'index',
              intersect:true
            }
           }, 
          hover: {
            mode: 'index',
            intersect: true
          }
        }
      });
  
      this.chart2 = new Chart(canvas2!, {
        type: 'bar',
        data: this.data2,
        options: {
          plugins:{
            tooltip: {
              mode: 'index',
              intersect: false
            },
          },
          hover: {
            mode: 'index',
            intersect: true
          }
        }
      });
    

  }


  data: ChartData = {
    labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
    '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ],
    datasets: [
      {
        label: 'Dataset 1',
        data:[10,30, 20, 40, 25,
        33, 55, 10],
        borderColor: 'rgb(163, 59, 66)',
        backgroundColor: 'rgba(163, 59, 66, 0.2)',
        yAxisID: 'y',
        tension:0.4,
        fill: true,
        borderWidth:1,
        pointHoverBorderColor:'white',
        pointHoverBackgroundColor:'rgba(255, 99, 132, 1)',
        pointBorderWidth: 3,
        pointHoverBorderWidth:3,
      },
    ]
  };
  data2: ChartData = {
    labels: ['2022-05-10', '2022-05-11','2022-05-12','2022-05-13',
    '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ],
    datasets: [
      {
        label: 'Dataset 1',
        data:[40,20, 15, 25,
        33, 23, 49, 20],
        borderColor: 'rgb(163, 59, 66)',
        backgroundColor: 'rgba(163, 59, 66, 0.2)',
        yAxisID: 'y',
        tension:0.4,
        fill: true,
        borderWidth:1,
        pointHoverBorderColor:'white',
        pointHoverBackgroundColor:'rgba(255, 99, 132, 1)',
        pointBorderWidth: 3,
        pointHoverBorderWidth:3,
      },
    ]
  };
}
