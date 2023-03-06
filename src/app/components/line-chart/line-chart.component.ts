import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartConfiguration, ChartData } from 'chart.js/dist/types/index';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {
  ngOnInit(): void {
    this.createChart()

  }
  public chart!: Chart;
  public chart2!: Chart;
  createChart(){
  
    this.chart = new Chart("MyLineChart", this.config);
    this.chart2 = new Chart("MyLineChart2", this.config2);
    this.chart.canvas.onmousemove = this.hover1;
  }
  hover1(move:any){
    const chartInstance = Chart.getChart('MyLineChart');
    const chart2Instance = Chart.getChart('MyLineChart2');
    const points = chartInstance!.getElementsAtEventForMode(move, 'nearest', { intersect: true }, true);
    if(points[0]){
      const dataset = points[0].datasetIndex;
      const datapoint = points[0].index; 
      chart2Instance!.tooltip!.setActiveElements([
        {datasetIndex: dataset, index: datapoint}
      ], move);
      
      chart2Instance!.setActiveElements([
        {datasetIndex:dataset, index:datapoint}
      ]);
      chart2Instance!.update()
    }
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
        // pointRadius:10,
        // pointHoverRadius:10
      },
      // {
      //   label: 'Dataset 2',
      //   data:[542, 542, 536, 327, 17,
      //   0.00, 538, 541],
      //   borderColor: 'rgb(59, 66, 163)',
      //   backgroundColor: 'rgba(59, 66, 163, 0.2)',
      //   yAxisID: 'y1',
      //   tension:0.4,
      //   fill: true,
      //   borderWidth:1
      // }
    ]
  };
  data2: ChartData = {
    // TODO: que pasa si nos faltan datos en un grafico? 
    labels: ['2022-05-10', '2022-05-11','2022-05-12','2022-05-13',
    '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ],
    datasets: [
      {
        label: 'Dataset 1',
        data:[40,20, 15, 25,
        33, 23, 49],
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
        // pointRadius:10,
        // pointHoverRadius:10
      },
      // {
      //   label: 'Dataset 2',
      //   data:[542, 542, 536, 327, 17,
      //   0.00, 538, 541],
      //   borderColor: 'rgb(59, 66, 163)',
      //   backgroundColor: 'rgba(59, 66, 163, 0.2)',
      //   yAxisID: 'y1',
      //   tension:0.4,
      //   fill: true,
      //   borderWidth:1
      // }
    ]
  };

  // tooltipLine
  private tooltipLine = {
    id:'tooltipLine',
    beforeDraw : (chart:any) =>{
      if(chart.tooltip && chart.tooltip._active && chart.tooltip._active.length){
        const ctx = chart.ctx;
        ctx.save();
        const activePoint = chart.tooltip._active[0];
        // console.log(chart.chartArea);
        // codigo de canvas para dibujar una linea
        ctx.beginPath();
        ctx.setLineDash([5, 7]);
        ctx.moveTo(activePoint.element.x, chart.chartArea.top);
        ctx.lineTo(activePoint.element.x, activePoint.element.y)
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'grey';
        ctx.stroke();
        ctx.restore();
        // stroke line
        ctx.beginPath();
        ctx.moveTo(activePoint.element.x,  activePoint.element.y);
        ctx.lineTo(activePoint.element.x,chart.chartArea.bottom)
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'red';
        ctx.stroke();
        ctx.restore();

      }
    }
  };
  // config
  private config:any =  {
    type: 'line',
    data: this.data,
    options: {
      mouseLine:{color:'red'},
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      stacked: false,
      plugins:   
        {
        tooltip:{
          bodyColor:'#fff',
          backgroundColor:'red',
          // yAlign:'bottom'
        },
        tooltipLine:this.tooltipLine,
        title: {
          display: true,
          text: 'Chart.js Line Chart - Multi Axis'
        }
      },
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',

          // grid line settings
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
      }
    },
    plugins:[
      this.tooltipLine
    ]
  }

  // 
  private config2:any =  {
    type: 'line',
    data: this.data2,
    options: {
      mouseLine:{color:'red'},
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      stacked: false,
      plugins:   
        {
        tooltip:{
          bodyColor:'#fff',
          backgroundColor:'red',
          // yAlign:'bottom'
        },
        tooltipLine:this.tooltipLine,
        title: {
          display: true,
          text: 'Chart.js Line Chart - Multi Axis'
        }
      },
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',

          // grid line settings
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
      }
    },
    plugins:[
      this.tooltipLine
    ]
  }
 
//  
}
