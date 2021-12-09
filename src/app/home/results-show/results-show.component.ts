import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  abnormal_fidgety : any
  chaotic_gm : any
  cramped_synchronised : any
  no_movement : any
  normal_fidgety : any
  normal_writhing : any
  poor_repertoire : any
  not_GM : any

  constructor(private route: ActivatedRoute) { 
    this.abnormal_fidgety = Number(this.route.snapshot.paramMap.get('abnormal_fidgety'));
    this.chaotic_gm = Number(this.route.snapshot.paramMap.get('chaotic_gm'));
    this.cramped_synchronised = Number(this.route.snapshot.paramMap.get('cramped_synchronised'));
    this.no_movement = Number(this.route.snapshot.paramMap.get('no_movement'));
    this.normal_fidgety = Number(this.route.snapshot.paramMap.get('normal_fidgety'));
    this.normal_writhing = Number(this.route.snapshot.paramMap.get('normal_writhing'));
    this.poor_repertoire = Number(this.route.snapshot.paramMap.get('poor_repertoire'));
    this.not_GM = Number(this.route.snapshot.paramMap.get('not_GM'));
  }

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
        name: "poitive",
        legendText: "Your infant",
        showInLegend: true, 
        dataPoints:[
          { label: "1", y: this.abnormal_fidgety },
          { label: "2", y: this.chaotic_gm },
          { label: "3", y: this.cramped_synchronised },
          { label: "4", y: this.no_movement },
          { label: "5", y: this.normal_fidgety },
          { label: "6", y: this.normal_writhing },
          { label: "7", y: this.poor_repertoire },
          { label: "8", y: this.not_GM }
        ]
      },
      {
        type: "column",	
        name: "Healthy",
        legendText: "Healthy infant",
        axisYType: "secondary",
        showInLegend: true,
        dataPoints:[
          { label: "1", y: 0.05 },
          { label: "2", y: 0.03 },
          { label: "3", y: 0.02 },
          { label: "4", y: 0.4 },
          { label: "5", y: 0.2 },
          { label: "6", y: 0.35 },
          { label: "7", y: 0.04 },
          { label: "8", y: 0.01 }
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
