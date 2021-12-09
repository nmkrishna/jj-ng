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

let colors = [
    '#FEC100',
    '#00B0EF',
    '#6633CB',
    '#FF6600',
    '#FF0100',
    'green',
    'cyan',
    'gray',
];
import {
    getAccelarators,
    getCategories,
    getOwners,
    getSeries,
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
        var initiatives: any = [];
        chartSeries.forEach((el: any) => {
            initiatives.push(el.initiative);
        });
        initiatives = [...new Set(initiatives)];

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
        // acceleratorsLabelTemplate.bent = true;
        acceleratorsLabelTemplate.radius = -2;
        // acceleratorsLabelTemplate.inside = true;
        acceleratorsLabelTemplate.padding(0, 0, 0, 0);
        acceleratorsLabelTemplate.wrap = true;
        acceleratorsLabelTemplate.fontSize = 10;
        acceleratorsLabelTemplate.maxWidth = 80;
        acceleratorsLabelTemplate.verticalCenter = 'center';
        acceleratorsLabelTemplate.horizontalCenter = 'left';

        // acceleratorsLabelTemplate.rotation = 180;


        const centerLabel = new window.am4core.Label();
        centerLabel.parent = radialChart;
        centerLabel.text = 'JanssenOne';
        centerLabel.horizontalCenter = 'middle';
        centerLabel.verticalCenter = 'middle';
        centerLabel.fontSize = 11;

        // Disable sliding out of slices
        acceleratorsSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
        acceleratorsSeries.slices.template.states.getKey("hover").properties.scale = 1;

        //Tooltip
        acceleratorsSeries.slices.template.tooltipText = "{category}";

        //colors
        var cs = acceleratorsSeries.colors;
        cs.list = [window.am4core.color(new window.am4core.ColorSet().getIndex(0))];
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

        topStrategiesSeries.radius = window.am4core.percent(25);
        topStrategiesSeries.verticalCenter = "middle";
        topStrategiesSeries.alignLabels = false;
        topStrategiesSeries.innerRadius = window.am4core.percent(20);
        topStrategiesSeries.maxWidth = 50;
        topStrategiesSeries.wrap = true;
        topStrategiesSeries.inside = true;
        // pieSeries2.bent = true;
        topStrategiesSeries.slices.template.interactionsEnabled = false;
        // pieSeries2.relativeRotation = -180;




        // Labels
        // Disabling labels and ticks on inner circle
        // pieSeries.labels.template.disabled = true;
        topStrategiesSeries.ticks.template.disabled = true;
        topStrategiesSeries.alignLabels = false;
        let topStrategyLabelsTemplate = topStrategiesSeries.labels.template;
        topStrategyLabelsTemplate.text = '{category}';
        topStrategyLabelsTemplate.bent = true;


        // topStrategyLabelsTemplate.radius = 10;
        topStrategyLabelsTemplate.inside = true;
        topStrategyLabelsTemplate.padding(0, 0, 0, 0);
        topStrategyLabelsTemplate.wrap = true;
        topStrategyLabelsTemplate.truncate = true;
        topStrategyLabelsTemplate.fontSize = 10;
        topStrategyLabelsTemplate.maxWidth = 100;
        topStrategyLabelsTemplate.strictMinMax = true;
        topStrategyLabelsTemplate.verticalCenter = 'center';
        topStrategyLabelsTemplate.horizontalCenter = 'middle';
        topStrategyLabelsTemplate.rotation = -360;

        // topStrategyLabelsTemplate.relativeRotation = 180;


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
        strategySeries.radius = window.am4core.percent(34);
        strategySeries.innerRadius = window.am4core.percent(28);

        // Labels
        // Disabling labels and ticks on inner circle
        // pieSeries.labels.template.disabled = true;
        // pieSeries3.ticks.template.disabled = true;
        strategySeries.alignLabels = false;
        let strategyLabelsTemplate = strategySeries.labels.template;
        strategyLabelsTemplate.text = '{category}';
        // strategyLabelsTemplate.bent = true;
        strategyLabelsTemplate.radius = 10;
        strategyLabelsTemplate.inside = true;
        strategyLabelsTemplate.padding(0, 0, 0, 0);
        strategyLabelsTemplate.wrap = true;
        strategyLabelsTemplate.fontSize = 10;
        strategyLabelsTemplate.maxWidth = 70;
        strategyLabelsTemplate.rotation = -360;
        strategyLabelsTemplate.valign = 'center';
        strategyLabelsTemplate.align = 'right';

        //Tooltip
        strategySeries.slices.template.tooltipText = "{category}";
        strategySeries.data = strategies.map((name, index) => ({ "name": name, "value": 1 }));


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
        radialChart.dy = -300;
        radialChart.padding(20, 20, 20, 20);
        radialChart.colors.step = 2;
        radialChart.dateFormatter.inputDateFormat = "YYYY-MM-dd";
        radialChart.innerRadius = window.am4core.percent(40);



        // Category Axis
        var categoryAxis = radialChart.yAxes.push(new window.am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "initiative";
        // categoryAxis.renderer.grid.template.location = 0;
        // categoryAxis.renderer.tooltipLocation = 0.5;
        // categoryAxis.renderer.minGridDistance = 400;
        // categoryAxis.renderer.labels.isMeasured = false;
        categoryAxis.mouseEnabled = true;
        // categoryAxis.tooltip.disabled = true;
        categoryAxis.visible = false;
        categoryAxis.fixedWidthGrid = true;
        // categoryAxis.wheelable = false;
        // categoryAxis.renderer.grid.template.strokeOpacity = 0.5;
        // categoryAxis.renderer.grid.template.strokeWidth = 1;
        // categoryAxis.renderer.grid.template.stroke = "0xC0C0C0";
        categoryAxis.renderer.axisFills.template.disabled = false;
        categoryAxis.renderer.line.strokeOpacity = 1;
        categoryAxis.renderer.line.strokeWidth = 2;
        // categoryAxis.renderer.line.stroke = window.am4core.color("red");


        // categoryAxis.data = chartSeries;

        var valueAxis = radialChart.xAxes.push(new window.am4charts.ValueAxis());
        valueAxis.renderer.labels.template.horizontalCenter = "left";
        // valueAxis.strictMinMax = true;
        // valueAxis.renderer.maxLabelPosition = 0.99;
        // valueAxis.renderer.grid.template.strokeOpacity = 0;
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
            let result = radialChart.data;

            radialChart.legend.dataItems.values.forEach((item: any) => {
                console.log(item.name + ":" + item.hasProperties);
            });
            // if (enabled) {
            //     result.concat(chartSeries.filter((chartItem: any) => chartItem.owner === ownerValue));
            // } else {
            //     result = result.filter((chartItem: any) => chartItem.owner === ownerValue);
            // }

            // radialChart.legend.dataItems.values.forEach((item: any) => {
            //     console.log(item.name + ":" + item.hasProperties);
            //     if (item.name == ownerValue) {
            //         if (enabled) {
            //             result.concat(chartSeries.filter((chartItem: any) => chartItem.owner === item.name));
            //         } else {
            //             result = result.filter((chartItem: any) => chartItem.owner !== item.name);
            //         }
            //     } else {
            //         if (item.hasProperties) {
            //             result = result.filter((chartItem: any) => chartItem.owner !== item.name)
            //         } else {
            //             result.concat(chartSeries.filter((chartItem: any) => chartItem.owner === item.name));
            //         }
            //     }
            // })
            categoryAxis.data = result;
            radialChart.data = result;
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
        radialChart.scrollbarX.exportable = false;
        radialChart.scrollbarY = new window.am4core.Scrollbar();
        radialChart.scrollbarY.exportable = false;

        var zoomOutButton = radialChart.zoomOutButton;
        zoomOutButton.dx = 0;
        zoomOutButton.dy = 0;
        zoomOutButton.marginBottom = 15;
        zoomOutButton.parent = radialChart.xAxesContainer;

        radialChart.data = chartSeries;

        chart.toFront();


        //events
        strategySeries.slices.template.events.on("hit", function (ev: any) {
            let finalData: any = [];
            console.log("strategy:" + ev.target.dataItem.dataContext.name + ":" + chartSeries.length);
            strategySeries.slices.values.forEach((element: any) => {
                if (element.isActive) {
                    element.fillOpacity = 1;
                    let filteredData = chartSeries.filter(function (item: any) {
                        return item.strategy === element.dataItem.dataContext.name;
                    });
                    finalData = finalData.concat(filteredData);
                    console.log("adding items for strategy:" + element.dataItem.dataContext.name + ":" + filteredData.length);
                } else {
                    element.fillOpacity = 0.5;
                }

            });
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

    downloadAsPDF() {
        const modalBody = document.getElementById("modal-body") as HTMLElement;
        window.html2canvas(modalBody, {
                    height: window.outerHeight + 600,
                    windowHeight: window.outerHeight + 700,
                }).then(canvas => {
                    this.saveAs(canvas.toDataURL(), `dataExport_${Date.now()}.png`);
                })
    }
}
