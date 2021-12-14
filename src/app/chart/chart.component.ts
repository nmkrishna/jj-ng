import { SelectorMatcher } from '@angular/compiler';
import { Component, Input, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RangeValueAccessor } from '@angular/forms';
import { ChartService } from '../chart.service';
import { function_owners, investment_type, car_status, primary_accelerators, primary_dimensions, primary_allignment, primary_valuescore, OWNERS_COLORS } from "./chartdata";
import { faMinusSquare, faCheckSquare, faDownload } from '@fortawesome/free-solid-svg-icons';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


declare const window: any;

let accelerator_colors = [
    window.am4core.color('#00A9E8'),
    window.am4core.color('#00477F'),
    window.am4core.color('#0B75BD'),
    window.am4core.color('#535864'),
    window.am4core.color('#404450'),
    window.am4core.color('#2888B4')
];
let topStratergy_colors = [
    window.am4core.color('#009999'),
    window.am4core.color('#CC0199'),
    window.am4core.color('#090099'),
    window.am4core.color('#C60519')
];
let stratergy_colors = [
    window.am4core.color("#DFE0E2"),
    window.am4core.color("#DFE0E2"),
    window.am4core.color("#DFE0E2"),
    window.am4core.color("#DFE0E2"),
    window.am4core.color("#DFE0E2"),
    window.am4core.color("#DFE0E2")
];
import {
    getAccelarators,
    getCategories,
    getOwners,
    getStratergies,
    getInitiatives,
    getInitiativesSeries,
    getInitiativeColor,
    rawData,
} from '../chart/chartdata';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
    modalContent: any = {}
    FUNCTION_OWNERS: Array<string> = function_owners;
    INVESTMENT_TYPE: Array<string> = investment_type;
    CAR_STATUS: Array<string> = car_status;
    PRIMARY_ACCELERATORS: Array<string> = primary_accelerators;
    PRIMARY_DIMENSIONS: Array<string> = primary_dimensions;
    PRIMARY_ALLIGNMENT: Array<string> = primary_allignment;
    PRIMARY_VALUESCORE: Array<string> = primary_valuescore;
    objectKeys = Object.keys
    faMinusSquare = faMinusSquare;
    faCheckSquare = faCheckSquare;
    faDownload = faDownload;
    @ViewChild('dataModal') dataModal: TemplateRef<any>;

    constructor(private chartService: ChartService, private modalService: NgbModal) { }

    ngOnInit(): void {
        // Themes begin
        let data = rawData;
        const categories = getCategories(data);
        const accelerators = getAccelarators(data);
        const owners = getOwners(data, categories);
        const strategies = getStratergies(data);
        const chartSeries = getInitiativesSeries(data);
        const initiatives = getInitiatives(data);

        var gaugeData = [
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
        console.log('owners', owners);
        console.log('accelerators', accelerators);
        console.log('categorie', categories);
        console.log('strategies', strategies);
        console.log('chartSeries', chartSeries);

        window.am4core.addLicense('CH300383565');
        //enable class names for custom styling
        window.am4core.options.autoSetClassName = true;
        window.am4core.useTheme(window.am4themes_animated);

        // CONTAINER ///
        var chartcontainer = window.am4core.create("chartdiv", window.am4core.Container);
        chartcontainer.width = window.am4core.percent(100);
        chartcontainer.height = window.am4core.percent(100);
        // chartcontainer.layout = "vertical";


        // Create chart instance
        var chart = chartcontainer.createChild(window.am4charts.PieChart)
        // var chart = window.am4core.create("chartdiv", window.am4charts.PieChart);
        chart.startAngle = 180;
        chart.endAngle = 0;
        chart.dy = -300;
        // Let's cut a hole in our Pie chart
        chart.innerRadius = window.am4core.percent(3);

        var janssonLabel = chartcontainer.createChild(window.am4core.Label);
        janssonLabel.text = "Janssen One";
        janssonLabel.fontSize = 10;
        janssonLabel.horizontalCenter = "middle";
        janssonLabel.verticalCenter = "middle";
        janssonLabel.radius = window.am4core.percent(5);



        // Add and configure Series
        var acceleratorsSeries = chart.series.push(new window.am4charts.PieSeries());
        acceleratorsSeries.radius = window.am4core.percent(15);
        acceleratorsSeries.innerRadius = window.am4core.percent(1);
        acceleratorsSeries.startAngle = 360;
        acceleratorsSeries.endAngle = 0;

        acceleratorsSeries.dataFields.value = "value";
        acceleratorsSeries.dataFields.category = "name";
        acceleratorsSeries.slices.template.stroke = new window.am4core.InterfaceColorSet().getFor("background");
        acceleratorsSeries.slices.template.strokeWidth = 1;
        acceleratorsSeries.slices.template.strokeOpacity = 1;

        // Labels
        // Disabling labels and ticks on inner circle
        // pieSeries.labels.template.disabled = true;
        acceleratorsSeries.ticks.template.disabled = true;
        acceleratorsSeries.alignLabels = false;
        let acceleratorsLabelTemplate = acceleratorsSeries.labels.template;
        acceleratorsLabelTemplate.text = '{category}';
        acceleratorsLabelTemplate.bent = true;
        acceleratorsLabelTemplate.radius = 15;
        acceleratorsLabelTemplate.inside = true;
        acceleratorsLabelTemplate.fill = new window.am4core.color("#FFFFFF");
        acceleratorsLabelTemplate.padding(0, 0, 0, 0);
        acceleratorsLabelTemplate.wrap = true;
        acceleratorsLabelTemplate.fontSize = 6;
        acceleratorsLabelTemplate.maxWidth = 80;
        acceleratorsLabelTemplate.verticalCenter = 'center';
        acceleratorsLabelTemplate.horizontalCenter = 'left';
        acceleratorsLabelTemplate.adapter.add("textOutput", function(text) {
            return window.am4core.utils.truncateWithEllipsis(text, 20, "...");
          });
        

        // acceleratorsLabelTemplate.rotation = 180;


        // Disable sliding out of slices
        acceleratorsSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
        acceleratorsSeries.slices.template.states.getKey("hover").properties.scale = 1;

        //Tooltip
        acceleratorsSeries.slices.template.tooltipText = "{category}";

        //colors
        var cs = acceleratorsSeries.colors;
        cs.list = accelerator_colors;
        cs.stepOptions = {
            lightness: -0.05,
            hue: 0
        };
        cs.wrap = true;
        acceleratorsSeries.data = accelerators.map((name, index) => ({ "name": name, "value": 1 }))



        // Add second series
        var topStrategiesSeries = chart.series.push(new window.am4charts.PieSeries());
        topStrategiesSeries.dataFields.value = "value";
        topStrategiesSeries.dataFields.category = "name";
        topStrategiesSeries.slices.template.stroke = new window.am4core.InterfaceColorSet().getFor("background");
        topStrategiesSeries.slices.template.strokeWidth = 1;
        topStrategiesSeries.slices.template.strokeOpacity = 1;
        topStrategiesSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0.05;
        topStrategiesSeries.slices.template.states.getKey("hover").properties.scale = 1;

        topStrategiesSeries.colors.list = topStratergy_colors

        topStrategiesSeries.radius = window.am4core.percent(18);
        topStrategiesSeries.verticalCenter = "middle";
        topStrategiesSeries.alignLabels = false;
        topStrategiesSeries.innerRadius = window.am4core.percent(24);
        topStrategiesSeries.maxWidth = 50;
        topStrategiesSeries.wrap = true;
        topStrategiesSeries.inside = true;
        // pieSeries2.bent = true;
        topStrategiesSeries.slices.template.interactionsEnabled = false;

        // Labels
        // Disabling labels and ticks on inner circle
        // pieSeries.labels.template.disabled = true;
        topStrategiesSeries.ticks.template.disabled = true;
        let topStrategyLabelsTemplate = topStrategiesSeries.labels.template;
        topStrategyLabelsTemplate.text = '{category}';
        topStrategyLabelsTemplate.bent = true;


        topStrategyLabelsTemplate.radius = 15;
        topStrategyLabelsTemplate.inside = false;
        topStrategyLabelsTemplate.padding(0, 0, 0, 0);
        topStrategyLabelsTemplate.wrap = true;
        //topStrategyLabelsTemplate.truncate = true;
        topStrategyLabelsTemplate.fill = new window.am4core.color("#FFFFFF");
        topStrategyLabelsTemplate.fontSize = 6;
        topStrategyLabelsTemplate.maxWidth = 70;
        topStrategyLabelsTemplate.strictMinMax = true;
        topStrategyLabelsTemplate.adapter.add("textOutput", function(text) {
            return window.am4core.utils.truncateWithEllipsis(text, 25, "...");
          });


        //Tooltip
        topStrategiesSeries.slices.template.tooltipText = "{category}";
        topStrategiesSeries.data = gaugeData;

        // Add third series
        var strategySeries = chart.series.push(new window.am4charts.PieSeries());
        strategySeries.dataFields.value = "value";
        strategySeries.dataFields.category = "name";
        strategySeries.slices.template.stroke = new window.am4core.InterfaceColorSet().getFor("background");
        strategySeries.slices.template.strokeWidth = 1;
        strategySeries.slices.template.strokeOpacity = 1;
        strategySeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
        strategySeries.slices.template.states.getKey("hover").properties.scale = 1;
        strategySeries.slices.template.states.getKey("active").properties.scale = 1;
        strategySeries.radius = window.am4core.percent(27);
        strategySeries.innerRadius = window.am4core.percent(33);
        strategySeries.colors.list = stratergy_colors;
        // Labels
        // Disabling labels and ticks on inner circle
        // pieSeries.labels.template.disabled = true;
        // pieSeries3.ticks.template.disabled = true;
        strategySeries.alignLabels = false;
        strategySeries.ticks.template.disabled = true;
        let strategyLabelsTemplate = strategySeries.labels.template;
        strategyLabelsTemplate.text = '{category}';
        strategyLabelsTemplate.bent = true;
        strategyLabelsTemplate.radius = -15;
        strategyLabelsTemplate.inside = true;
        strategyLabelsTemplate.padding(0, 0, 0, 0);        
        strategyLabelsTemplate.fontSize = 6;
        strategyLabelsTemplate.strictMinMax = true;
        strategyLabelsTemplate.maxWidth = 100;
        strategyLabelsTemplate.fill = new window.am4core.color("#000000");
        strategyLabelsTemplate.adapter.add("textOutput", function(text) {
            return window.am4core.utils.truncateWithEllipsis(text, 20, "...");
          });
       

        //Tooltip
        strategySeries.slices.template.tooltipText = "{category}, {initiatives} projects ";
        strategySeries.data = strategies;


        // var label = chart.seriesContainer.createChild(window.am4core.Label);
        // label.textAlign = "middle";
        // label.horizontalCenter = "middle";
        // label.verticalCenter = "middle";
        // label.adapter.add("text", function(text, target){
        //   return "[font-size:18px]total[/]:\n[bold font-size:30px]" + pieSeries.dataItem.values.value.sum + "[/]";
        // })




        /// Radial
        var radialChart = chartcontainer.createChild(window.am4charts.RadarChart);

        radialChart.startAngle = 180;
        radialChart.endAngle = 0;
        radialChart.dy = -320;
        radialChart.dx = 17;
        // radialChart.padding(20, 20, 20, 20);
        radialChart.colors.step = 2;
        radialChart.dateFormatter.inputDateFormat = "YYYY-MM-dd";
        radialChart.innerRadius = window.am4core.percent(44);



        // Category Axis
        var categoryAxis = radialChart.yAxes.push(new window.am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "initiative";
        // categoryAxis.renderer.grid.template.location = 0;
        // categoryAxis.renderer.tooltipLocation = 0.5;
        // categoryAxis.renderer.minGridDistance = 400;
        // categoryAxis.renderer.labels.isMeasured = false;
        categoryAxis.mouseEnabled = true;
        // categoryAxis.tooltip.disabled = true;
        // categoryAxis.visible = false;
        categoryAxis.fixedWidthGrid = true;
        let categoryAxisRenderer = categoryAxis.renderer;
        categoryAxisRenderer.grid.template.stroke = "0xFF0000";
        categoryAxisRenderer.grid.template.strokeWidth = 1;
        categoryAxisRenderer.labels.template.visible = false;
        categoryAxisRenderer.labels.template.diabled = false;


        // categoryAxis.wheelable = false;
        // categoryAxis.renderer.grid.template.strokeOpacity = 0.5;
        // categoryAxis.renderer.grid.template.strokeWidth = 1;
        // categoryAxis.renderer.grid.template.stroke = "0xC0C0C0";
        // categoryAxis.renderer.axisFills.template.disabled = false;
        // categoryAxis.renderer.line.strokeOpacity = 1;
        // categoryAxis.renderer.line.strokeWidth = 2;
        // categoryAxis.renderer.line.stroke = window.am4core.color("red");


        // categoryAxis.data = chartSeries;

        var valueAxis = radialChart.xAxes.push(new window.am4charts.ValueAxis());
        valueAxis.renderer.labels.template.horizontalCenter = "left";
        // valueAxis.strictMinMax = true;
        // valueAxis.renderer.maxLabelPosition = 0.99;
        valueAxis.renderer.grid.template.strokeOpacity = 0.25;
        valueAxis.min = 0;
        valueAxis.max = strategies.length;
        valueAxis.mouseEnabled = true;
        // valueAxis.tooltip.disabled = true;
        // valueAxis.renderer.axisFills.template.disabled = false;
        // valueAxis.interactionsEnabled = true;
        valueAxis.disabled = true;

        for (var i = 0; i < initiatives.length; i++) {
            let initiativesSeries = radialChart.series.push(new window.am4charts.RadarColumnSeries());
            initiativesSeries.name = `{owner}`;
            initiativesSeries.dataFields.categoryY = 'initiative';
            initiativesSeries.dataFields.valueX = "end" + i;
            initiativesSeries.dataFields.openValueX = "start" + i;
            initiativesSeries.clustered = false;
            initiativesSeries.fill = getInitiativeColor(initiatives[i]);
            initiativesSeries.columns.template.tooltipHTML = `<body style="font-size:8px; background-color:grey, width:50px; white-space: nowrap; overflow:hidden; text-overflow:ellipsis">
            <span style="font-size:8px"><center><strong>{initiative}</strong></center></span>
            <hr/>
            <table>
            </tr>
                <tr>
              <th align="left" style="font-size:8px">Lead</th>
              <td style="font-size:8px">{projectLead}</td>
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
              <th align="left" style="font-size:8px">Strategy</th>
              <td style="font-size:8px">{topStrategy}</td>
            </tr>
              <th align="left" style="font-size:8px">Accelerator</th>
              <td style="font-size:8px">{topStrategy}</td>
            </tr>
              <th align="left" style="font-size:8px">Investment Type</th>
              <td style="font-size:8px">{investmentType}</td>
            </tr>
                <th align="left" style="font-size:8px">Planned Start</th>
              <td style="font-size:8px"></td>
            </tr>
            <tr>
            <th align="left" style="font-size:8px">Planned End</th>
              <td style="font-size:8px"></td>
            </tr>
            <tr>
            <th align="left" style="font-size:8px">BAM Alignmnent</th>
              <td style="font-size:8px"></td>
            </tr>
            </body>`;
            initiativesSeries.zIndex = -1;
            initiativesSeries.columns.template.events.on("hit", this.onClickChartItem, this);
        }
        //Legend
        radialChart.cursor = new window.am4charts.RadarCursor();
        radialChart.cursor.lineX.disabled = true;
        radialChart.legend = new window.am4charts.Legend();
        radialChart.legend.useDefaultMarker = true;
        radialChart.legend.position = 'absolute';
        radialChart.legend.maxWidth = 100;
        radialChart.legend.fillOpacity = 0.70;
        radialChart.legend.strokeWidth = 0;
        //chart.legend.x = 150;
        radialChart.legend.y = 150;
        radialChart.legend.itemContainers.template.paddingTop = 250;
        radialChart.legend.fontSize = 10;
        radialChart.legend.contentAlign = "center";
        radialChart.legend.itemContainers.template.clickable = true;
        radialChart.legend.itemContainers.template.focusable = true;
        radialChart.legend.itemContainers.template.events.on("hit", function (ev: any) {
            let ownerValue = ev.target.dataItem.name;
            let enabled = ev.target.dataItem.hasProperties;
            console.log("Clicked on", ownerValue + ":" + enabled);
            let finalData: any = [];

            // radialChart.legend.dataItems.values.forEach((item: any) => {
            //     console.log(item.name + ":" + item.hasProperties);
            //     console.log(item.name + ":" + item.hasProperties);
            // });
            radialChart.legend.dataItems.values.forEach((element: any) => {
                if (!element.hasProperties) {
                    let filteredData = chartSeries.filter(function (item: any) {
                        return item.owner === element.name;
                    });
                    finalData = finalData.concat(filteredData);
                    console.log("adding items for owner:" + element.name + ":" + filteredData.length + "/" + finalData.length);
                }
            });
            if (enabled) {
                let filteredData = chartSeries.filter(function (item: any) {
                    return item.owner === ownerValue;
                });
                finalData = finalData.concat(filteredData);
                console.log("adding items for owner:" + ownerValue + ":" + filteredData.length + "/" + finalData.length);
            } else {
                finalData = finalData.filter(function (item: any) {
                    return item.owner != ownerValue;
                });
                console.log("removing items for owner:" + ownerValue + ":" + finalData.length);
            }
            console.log("final filtered size:" + finalData.length);
            radialChart.data = finalData;
            categoryAxis.data = finalData;
            console.log("filtered chart.data", radialChart.data.length);
        });

        let marker = radialChart.legend.markers.template.children.getIndex(0);
        marker.cornerRadius(12, 12, 12, 12);
        marker.strokeWidth = 0;
        marker.strokeOpacity = 1;
        marker.events.on("hit", function (ev: any) {
            alert("sdw");
        });
        radialChart.legend.data = OWNERS_COLORS;

        // Zoom Controls
        radialChart.scrollbarX = new window.am4core.Scrollbar();
        //radialChart.scrollbarX.parent = chart.bottomAxesContainer;
        radialChart.scrollbarX.exportable = false;
        radialChart.scrollbarY = new window.am4core.Scrollbar();
        radialChart.scrollbarY.exportable = false;

        var zoomOutButton = radialChart.zoomOutButton;
        zoomOutButton.dx = -12;
        zoomOutButton.dy = -3;
        zoomOutButton.parent = radialChart.tooltipContainer;

        zoomOutButton.background.cornerRadius(5, 5, 5, 5);
        zoomOutButton.background.fill = new window.am4core.color("#25283D");
        zoomOutButton.icon.stroke = new window.am4core.color("#EFD9CE");
        zoomOutButton.icon.strokeWidth = 2;
        zoomOutButton.background.states.getKey("hover").properties.fill = new window.am4core.color("#606271");

        radialChart.data = chartSeries;

        chart.toFront();


        //events
        strategySeries.slices.template.events.on("hit", function (ev: any) {
            let finalData: any = [];
            console.log("strategy:" + ev.target.dataItem.dataContext.name + ":" + chartSeries.length);
            var allOff = true;
            strategySeries.slices.values.forEach((element: any) => {
                if (element.isActive) {
                    element.fillOpacity = 1;
                    let filteredData = chartSeries.filter(function (item: any) {
                        return item.strategy === element.dataItem.dataContext.name;
                    });
                    finalData = finalData.concat(filteredData);
                    allOff = false;
                    console.log("adding items for strategy:" + element.dataItem.dataContext.name + ":" + filteredData.length);
                } else {
                    element.fillOpacity = 0.5;
                }

            });
            if (allOff) {
                finalData = chartSeries;
            }
            console.log("final filtered size:" + finalData.length);
            radialChart.data = finalData;
        });


        document
            .getElementById('export')
            ?.setAttribute('style', 'visibility: visible');
    }

    onCloseModal() {
        this.modalService.dismissAll()
    }

    onClickChartItem(event: any) {
        this.modalService.open(this.dataModal, { size: 'xl' });
        this.modalContent = event.target.dataItem.dataContext;
        console.log("clicked on ", this.modalContent);
    }

    saveAs(uri, filename) {
        var link = document.createElement("a");
        if (typeof link.download === "string") {
            link.href = uri;
            link.download = filename;

            //Firefox requires the link to be in the body
            document.body.appendChild(link);

            //simulate click
            link.click();

            //remove the link when done
            document.body.removeChild(link);
        } else {
            window.open(uri);
        }
    }

    downloadAsPNG() {
        const modalBody = document.getElementById("modal-body") as HTMLElement;
        window.html2canvas(modalBody, {
            height: window.outerHeight,
            windowHeight: window.outerHeight + 700,
        }).then(canvas => {
            this.saveAs(canvas.toDataURL(), `dataExport_${Date.now()}.png`);
        })
    }
}
