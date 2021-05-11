import { Component, OnInit } from '@angular/core';
// import * as CanvasJS from '../../';
declare const CanvasJS: any;


@Component({
  selector: 'app-results-show',
  templateUrl: './results-show.component.html',
  styleUrls: ['./results-show.component.css']
})
export class ResultsShowComponent implements OnInit {

  parentName = 'Kanthi'
  InfantAge = '45'
  sex = ''

  constructor() { }

  ngOnInit(): void {
    this.chartDraw()
  }

  chartDraw(){
    // let chart = new CanvasJS.Chart("chartContainer", {
    //   animationEnabled: true,
    //   exportEnabled: true,
    //   title: {
    //     text: "Basic Column Chart in Angular"
    //   },
    //   data: [{
    //     type: "column",
    //     dataPoints: [
    //       { y: 71, label: "Apple" },
    //       { y: 55, label: "Mango" },
    //       { y: 50, label: "Orange" },
    //       { y: 65, label: "Banana" },
    //       { y: 95, label: "Pineapple" },
    //       { y: 68, label: "Pears" },
    //       { y: 28, label: "Grapes" },
    //       { y: 34, label: "Lychee" },
    //       { y: 14, label: "Jackfruit" }
    //     ]
    //   }]
    // });
      
    // chart.render();

    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title:{
        text: "Crude Oil Reserves vs Production, 2016"
      },	
      axisY: {
        title: "Billions of Barrels",
        titleFontColor: "#4F81BC",
        lineColor: "#4F81BC",
        labelFontColor: "#4F81BC",
        tickColor: "#4F81BC"
      },
      axisY2: {
        title: "Millions of Barrels/day",
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
        legendText: "Proven Oil Reserves",
        showInLegend: true, 
        dataPoints:[
          { label: "Saudi", y: 266.21 },
          { label: "Venezuela", y: 302.25 },
          { label: "Iran", y: 157.20 },
          { label: "Iraq", y: 148.77 },
          { label: "Kuwait", y: 101.50 },
          { label: "UAE", y: 97.8 }
        ]
      },
      {
        type: "column",	
        name: "Oil Production (million/day)",
        legendText: "Oil Production",
        axisYType: "secondary",
        showInLegend: true,
        dataPoints:[
          { label: "Saudi", y: 10.46 },
          { label: "Venezuela", y: 2.27 },
          { label: "Iran", y: 3.99 },
          { label: "Iraq", y: 4.45 },
          { label: "Kuwait", y: 2.92 },
          { label: "UAE", y: 3.1 }
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
