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
          { label: "abnormal_fidgety", y: 266.21 },
          { label: "chaotic_gm", y: 302.25 },
          { label: "cramped_synchronised", y: 157.20 },
          { label: "no_movement", y: 148.77 },
          { label: "normal_fidgety", y: 101.50 },
          { label: "normal_writhing", y: 97.8 },
          { label: "poor_repertoire", y: 97.8 }
        ]
      },
      {
        type: "column",	
        name: "Oil Production (million/day)",
        legendText: "Healthy infant",
        axisYType: "secondary",
        showInLegend: true,
        dataPoints:[
          { label: "abnormal_fidgety", y: 10.46 },
          { label: "chaotic_gm", y: 2.27 },
          { label: "cramped_synchronised", y: 3.99 },
          { label: "no_movement", y: 4.45 },
          { label: "normal_fidgety", y: 2.92 },
          { label: "normal_writhing", y: 3.1 },
          { label: "poor_repertoire", y: 97.8 }
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
