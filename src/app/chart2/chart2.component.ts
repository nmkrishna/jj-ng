import { Component, Input, OnInit, OnDestroy, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import chart2data from "./chart2data"
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faMinusSquare, faCheckSquare, faDownload } from '@fortawesome/free-solid-svg-icons';
import { ChartService } from '../chart.service';
import { Subscription } from 'rxjs';

declare const window: any;
@Component({
    selector: 'chart-2',
    templateUrl: './chart2.component.html',
    styleUrls: ['./chart2.component.scss'],
})
export class Chart2Component implements OnInit, OnDestroy {
    modalContent: any = {}
    @ViewChild('dataModal') dataModal: TemplateRef<any>;
    objectKeys = Object.keys
    faMinusSquare = faMinusSquare;
    faCheckSquare = faCheckSquare;
    faDownload = faDownload;
    chartInstance: any;
    quadrants = [
        {
            value: 1,
            name: 'Our People',
        },
        {
            value: 1,
            name: 'Trusted partnership',
        },
        {
            value: 1,
            name: 'Quality as a differentiator',
        },
        {
            value: 1,
            name: 'Next gen quality',
        },
    ];

    rawdata ;
    cats = [{ "category": "100% Digital QMS" },
    { "category": "98% Satisfaction in Customer Facing KPIs" },
    { "category": "80% Automated QC and Product Release" },
    { "category": "100% Integrated Data" },
    { "category": "75% Focused on Patient, Consumer & Customer Exp" },
    { "category": "N/A" }];

    constructor(private modalService: NgbModal, private chartService: ChartService) { }

    getColor(bamAllignment) {
        if (bamAllignment == "100% Digital QMS") {
            return "#de4c4f";
        } else if (bamAllignment == "98% Satisfaction in Customer Facing KPIs") {
            return "#eea638";
        } else if (bamAllignment == "80% Automated QC and Product Release") {
            return "#86a965";
        } else if (bamAllignment == "100% Integrated Data") {
            return "#a7a737";
        } else if (bamAllignment == "75% Focused on Patient, Consumer & Customer Exp") {
            return "#d8854f";
        } else if (bamAllignment == "N/A") {
            return "grey";
        }
    }

    amountFormat(val) {
        var nf = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
        return nf.format(val);
    }

    downloadAsPNG() {
        const modalBody = document.getElementById("modal-body") as HTMLElement;
        window.html2canvas(modalBody, {
            height: window.outerHeight,
            windowHeight: window.outerHeight + 700,
        }).then(canvas => {
            // this.saveAs(canvas.toDataURL(), `dataExport_${Date.now()}.png`);
        })
    }

    obs: Subscription;

    ngOnInit(): void {

        window.am4core.useTheme(window.am4themes_animated);
        window.am4core.addLicense('CH300383565');

        this.obs = this.chartService.chartResponse.subscribe(data => {
            this.rawdata = data ;         
            if(this.rawdata.length > 0) {
                console.log(this.rawdata);
                var chart = window.am4core.create("chart2div", window.am4charts.RadarChart);
                 this.chartInstance = chart;
                 chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
                 chart.startAngle = 270 - 180;
                 chart.endAngle = 270 + 180;
                 // chart.startAngle = -170;
                 // chart.endAngle = -10;
                 chart.innerRadius = window.am4core.percent(30);
                 chart.dateFormatter.dateFormat = "M/d/yy";
                 chart.interactionsEnabled = true;
     
     
                 // chart.legend = new window.am4charts.Legend();
     
                 // var valueAxisX = chart.xAxes.push(new am4charts.ValueAxis());
                 var categoryAxis = chart.xAxes.push(new window.am4charts.CategoryAxis());
                 categoryAxis.dataFields.category = "category";
                 // categoryAxis.renderer.grid.template.location = 0;
                 categoryAxis.data = this.cats;
                 // var valueAxisY = chart.yAxes.push(new am4charts.ValueAxis());
                 var valueAxis = chart.yAxes.push(new window.am4charts.DateAxis());
     
                 //dynamic date range
                 chart.events.on("ready", function (ev) {
                     valueAxis.min = valueAxis.minZoomed;
                     valueAxis.max = valueAxis.maxZoomed;
                 });
     
                 //static
                 //static
                 // valueAxis.min = new Date(2019, 0, 1).getTime()
                 // valueAxis.max = new Date(2023, 11, 31).getTime();
                 valueAxis.baseInterval = {
                     "timeUnit": "year",
                     "count": 1
                 }
                 valueAxis.renderer.grid.template.stroke = window.am4core.color("blue");
                 valueAxis.renderer.grid.template.strokeWidth = 2;
                 valueAxis.interactionsEnabled = true;
     
                 categoryAxis.renderer.labels.template.location = 0;
                 categoryAxis.interactionsEnabled = true;
                 categoryAxis.renderer.axisFills.template.disabled = false;
                 categoryAxis.renderer.fixedWidthGrid = false;
                 categoryAxis.renderer.interactionsEnabled = true;
                 categoryAxis.renderer.layout = "grid";
                 categoryAxis.renderer.ticks.template.disabled = false;
                 categoryAxis.renderer.ticks.template.strokeOpacity = 0.5;
     
                 // categoryAxis.renderer.grid gridContainer
     
     
                 var series = chart.series.push(new window.am4charts.LineSeries());
                 series.dataFields.categoryX = "bamAllignment";
                 series.dataFields.dateY = "startDate";
                 series.dataFields.value = "totalProjectCost";
                 series.strokeOpacity = 0;
                 // series.sequencedInterpolation = true;
                 // series.sequencedInterpolationDelay = 100;
                 // series.legendSettings.labelText = "{bamAllignment}";
                 series.interactionsEnabled = true;
                 series.clickable = true;
     
                 var bullet = series.bullets.push(new window.am4core.Circle());
                 bullet.fill = window.am4core.color("#ff0000");
                 bullet.propertyFields.fill = "color";
                 bullet.strokeOpacity = 0;
                 bullet.radius = 5;
                 bullet.strokeWidth = 2;
                 bullet.fillOpacity = 0.7;
                 bullet.stroke = window.am4core.color("#C0C0C0");
                 bullet.clickable = true;
                 // bullet.horizontalCenter = "left";
                 // bullet.verticalCenter = "top";
                 // series.bullets.template.horizontalCenter = "left";
                 // series.bullets.template.verticalCenter = "top";
                 // series.bullets.template.location = 0;
     
                 bullet.adapter.add("dy", function (val, target, key) {            
                     var month = new Date(target.dataItem.values.dateY.value).getMonth();
                     var offset = 0.0;
                     if (month > 6) {
                         offset = - (month / 12) * 40;
                     } else {
                         offset = (month / 12) * 40;
                     }
                     return val - offset;
                 });
     
                 bullet.adapter.add("dx", function (val, target, key) {
                     var dateOfMonth = new Date(target.dataItem.values.dateY.value).getDate();
                     var offset = 0.0;
                     if (dateOfMonth > 15) {
                         offset = - (dateOfMonth / 12) * 450;
                     } else {
                         offset = (dateOfMonth / 12) * 450;
                     }
                     return val - offset;
                 });
                 // bullet.adapter.add("dy", function (val, target, key) {
                 //     return val + (new Date(target.dataItem.values.dateY.value).getMonth() / 12) * target.measuredWidth;
                 // });
     
                 bullet.events.on("hit", this.onClickChartItem,this)
     
                 bullet.tooltipHTML = `<body style="font-size:8px; background-color:grey, width:50px; white-space: nowrap; overflow:hidden; text-overflow:ellipsis">
                     <span style="font-size:8px"><center><strong>{initiative}</strong></center></span>
                     <hr/>
                     <table>
                     </tr>
                         <tr>
                     <th align="left" style="font-size:8px">Lead</th>
                     <td style="font-size:8px">{projectManager}</td>
                     </tr>
                     <tr>
                     <th align="left" style="font-size:8px">Ownership</th>
                     <td style="font-size:8px">{owner}</td>
                     </tr>
                     <tr>
                     <th align="left" style="font-size:8px">Strategy</th>
                     <td style="font-size:8px">{strategy}</td>
                     </tr>
                     <tr>
                     <th align="left" style="font-size:8px">Quality Enabler</th>
                     <td style="font-size:8px">{qualityEnabler}</td>
                     </tr>
                     <tr>
                     <th align="left" style="font-size:8px">Pillar</th>
                     <td style="font-size:8px">{topStrategy}</td>
                     </tr>
                     <th align="left" style="font-size:8px">Accelerator</th>
                     <td style="font-size:8px">{janssenOneAccelerator}</td>
                     </tr>
                     <th align="left" style="font-size:8px">Investment Type</th>
                     <td style="font-size:8px">{investmentType}</td>
                     </tr>
                         <th align="left" style="font-size:8px">Planned Start</th>
                     <td style="font-size:8px">{startDate}</td>
                     </tr>
                     <tr>
                     <th align="left" style="font-size:8px">Planned End</th>
                     <td style="font-size:8px">{endDate}</td>
                     </tr>
                     <tr>
                     <th align="left" style="font-size:8px">BAM Alignmnent</th>
                     <td style="font-size:8px">{bamAllignment}</td>
                     </tr>
                     <th align="left" style="font-size:8px">Total Project Cost</th>
                     <td style="font-size:8px">$ {totalProjectCost}</td>
                     </tr>
                     <tr>
                     <th align="left" style="font-size:8px"></th>
                     <td style="font-size:8px"></td>
                     </tr>
                     </body>`;
     
                 var hoverState = bullet.states.create("hover");
                 hoverState.properties.fillOpacity = 1;
                 hoverState.properties.strokeOpacity = 1;
                 series.bullets.template.interactionsEnabled = true;
                 // series.bullets.template.events.on("hit", function (ev) {
                 //     console.log("clicked on:", ev);
                 // });
                 series.heatRules.push({ target: bullet, min: 4, max: 30, property: "radius" });
     
                 // bullet.adapter.add("tooltipY", function (tooltipY, target) {
                 //     return -target.radius;
                 // })
     
                 chart.cursor = new window.am4charts.XYCursor();
                 chart.cursor.behavior = "zoomXY";
                 chart.scrollbarX = new window.am4core.Scrollbar();
                 chart.scrollbarY = new window.am4core.Scrollbar();
     
                 var slider = chart.createChild(window.am4core.Slider);
                 slider.start = 0.5;
                 slider.events.on("rangechanged", () => {
                     var start = slider.start;
                     chart.startAngle = 270 - start * 179 - 1;
                     chart.endAngle = 270 + start * 179 + 1;
                     valueAxis.renderer.axisAngle = chart.startAngle;
                 });
     
                 for (let i = 0; i < this.rawdata.length; i++) {
                     this.rawdata[i]['color'] = this.getColor(this.rawdata[i].bamAllignment);
                 };
                 chart.data = this.rawdata;
            } 
        })        

    }

    onCloseModal() {
        this.modalService.dismissAll()
    }

    onClickChartItem(event: any) {
        console.log(event);
        this.modalService.open(this.dataModal, { size: 'xl' });
        this.modalContent = event.target.dataItem.dataContext;
    }


    keyFormat(str) {
        return str.slice(0, 1).toUpperCase().concat(str.slice(1)).split(/(?=[A-Z])/).join(" ");
    }

    ngOnDestroy() {
        //this.chartInstance = null;
        this.obs.unsubscribe();
        this.chartInstance.dispose();
        window.am4core.disposeAllCharts();
    }


}