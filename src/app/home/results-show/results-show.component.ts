import { Component, OnInit } from '@angular/core';
// import * as CanvasJS from '../../';
declare const CanvasJS: any;


@Component({
  selector: 'app-results-show',
  templateUrl: './results-show.component.html',
  styleUrls: ['./results-show.component.css']
})
export class ResultsShowComponent implements OnInit {

  parentName = 'Marry'
  InfantAge = '45'
  sex = ''

  constructor() { }

  ngOnInit(): void {
    this.chartDraw()
  }

  chartDraw(){
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title:{
        text: "Movements of Infants"
      },	
      axisY: {
        title: "Your infant",
        titleFontColor: "#4F81BC",
        lineColor: "#4F81BC",
        labelFontColor: "#4F81BC",
        tickColor: "#4F81BC"
      },
      axisY2: {
        title: "Healthy Infant's avarage",
        titleFontColor: "#C0504E",
        lineColor: "#C0504E",
        labelFontColor: "#C0504E",
        tickColor: "#C0504E"
      },	
      toolTip: {
        shared: true
      },
      legend: {
        cursor:"pointer",
        itemclick: toggleDataSeries
      },
      data: [{
        type: "column",
        name: "Proven Oil Reserves (bn)",
        legendText: "Your infant",
        showInLegend: true, 
        dataPoints:[
          { label: "1", y: 56.21 },
          { label: "2", y: 22.25 },
          { label: "3", y: 17.20 },
          { label: "4", y: 38.77 },
          { label: "5", y: 1.50 },
          { label: "6", y: 7.8 },
          { label: "7", y: 7.8 }
        ]
      },
      {
        type: "column",	
        name: "Oil Production (million/day)",
        legendText: "Healthy infant",
        axisYType: "secondary",
        showInLegend: true,
        dataPoints:[
          { label: "1", y: 1.46 },
          { label: "2", y: 2.27 },
          { label: "3", y: 3.99 },
          { label: "4", y: 54.45 },
          { label: "5", y: 22.92 },
          { label: "6", y: 23.1 },
          { label: "7", y: 0.8 }
        ]
      }]
    });
    function toggleDataSeries(e:any) {
      if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
      }
      else {
        e.dataSeries.visible = true;
      }
      chart.render();
    }
    chart.render();
  }

}
