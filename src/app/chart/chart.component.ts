import { SelectorMatcher } from '@angular/compiler';
import { Component, Input, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RangeValueAccessor } from '@angular/forms';
import { ChartService } from '../chart.service';
import { function_owners, investment_type, car_status, primary_accelerators, primary_dimensions, primary_allignment, primary_valuescore } from "./chartdata";
import { faMinusSquare, faCheckSquare, faDownload } from '@fortawesome/free-solid-svg-icons';
import { NgxSpinnerService } from 'ngx-spinner';
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
    getOwners,
    getStratergies,
    getInitiatives,
    getInitiativesSeries,
    getInitiativeColor
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
    constructor(private chartService: ChartService, private modalService: NgbModal, private spinner: NgxSpinnerService) { }




    gaugeData = [
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


    renderAcceleratorChart(chart, accelerators) {
        // Add and configure Series
        var acceleratorsSeries = chart.series.push(new window.am4charts.PieSeries());
        acceleratorsSeries.radius = window.am4core.percent(8);
        acceleratorsSeries.innerRadius = window.am4core.percent(1);
        acceleratorsSeries.startAngle = 0;
        acceleratorsSeries.endAngle = 360;
        acceleratorsSeries.dy = 100;

        acceleratorsSeries.dataFields.value = "value";
        acceleratorsSeries.dataFields.category = "name";
        acceleratorsSeries.slices.template.stroke = new window.am4core.InterfaceColorSet().getFor("background");
        acceleratorsSeries.slices.template.strokeWidth = 1;
        acceleratorsSeries.slices.template.strokeOpacity = 1;

        var janssonLabel = acceleratorsSeries.createChild(window.am4core.Label);
        janssonLabel.text = "Janssen One";
        janssonLabel.fontSize = 7;
        janssonLabel.horizontalCenter = "middle";
        janssonLabel.verticalCenter = "middle";

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
        acceleratorsLabelTemplate.fontSize = 5;
        acceleratorsLabelTemplate.maxWidth = 80;
        acceleratorsLabelTemplate.verticalCenter = 'center';
        acceleratorsLabelTemplate.horizontalCenter = 'left';
        acceleratorsLabelTemplate.adapter.add("textOutput", function (text) {
            return window.am4core.utils.truncateWithEllipsis(text, 15, "...");
        });
        // Disable sliding out of slices
        acceleratorsSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
        acceleratorsSeries.slices.template.states.getKey("hover").properties.scale = 1;
        acceleratorsSeries.slices.template.states.getKey("active").properties.shiftRadius = 0;

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
    }

    renderTopStratergiesChart(chart, gaugeData) { // configuring top stratergies pie chart
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

        topStrategiesSeries.radius = window.am4core.percent(15);
        topStrategiesSeries.verticalCenter = "middle";
        topStrategiesSeries.alignLabels = false;
        topStrategiesSeries.innerRadius = window.am4core.percent(10);
        topStrategiesSeries.maxWidth = 50;
        topStrategiesSeries.wrap = true;
        topStrategiesSeries.inside = true;
        topStrategiesSeries.dy = 100;
        topStrategiesSeries.slices.template.interactionsEnabled = true;

        let topStrategyLabelsTemplate = topStrategiesSeries.labels.template;
        topStrategyLabelsTemplate.text = '{category}';
        topStrategyLabelsTemplate.bent = true;


        topStrategyLabelsTemplate.radius = window.am4core.percent(-15);
        topStrategyLabelsTemplate.inside = false;
        topStrategyLabelsTemplate.padding(0, 0, 0, 0);
        topStrategyLabelsTemplate.wrap = true;
        //topStrategyLabelsTemplate.truncate = true;
        topStrategyLabelsTemplate.fill = new window.am4core.color("#FFFFFF");
        topStrategyLabelsTemplate.fontSize = 6;
        topStrategyLabelsTemplate.maxWidth = 70;
        topStrategyLabelsTemplate.strictMinMax = true;
        topStrategyLabelsTemplate.adapter.add("textOutput", function (text) {
            return window.am4core.utils.truncateWithEllipsis(text, 20, "...");
        });

        topStrategiesSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
        topStrategiesSeries.slices.template.states.getKey("hover").properties.scale = 1;
        topStrategiesSeries.slices.template.states.getKey("active").properties.shiftRadius = 0;
        topStrategiesSeries.slices.template.tooltipText = "{category} ";

        //Tooltip
        topStrategiesSeries.data = this.gaugeData;
    }

    renderStratergiesChart(strategySeries, strategies) { // configuring stratergy pie chart
        strategySeries.dataFields.value = "value";
        strategySeries.dataFields.category = "name";
        strategySeries.slices.template.stroke = new window.am4core.InterfaceColorSet().getFor("background");
        strategySeries.slices.template.strokeWidth = 1;
        strategySeries.slices.template.strokeOpacity = 1;
        strategySeries.slices.template.fillOpacity = 0.5;
        strategySeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
        strategySeries.slices.template.states.getKey("active").properties.shiftRadius = 0;
        strategySeries.slices.template.states.getKey("hover").properties.scale = 1;
        strategySeries.slices.template.states.getKey("active").properties.scale = 1.02;
        strategySeries.slices.template.states.getKey("active").properties.fillOpacity = 1;

        strategySeries.radius = window.am4core.percent(22);
        strategySeries.innerRadius = window.am4core.percent(17);
        strategySeries.colors.list = stratergy_colors;
        strategySeries.dy = 100;
        strategySeries.alignLabels = false;
        strategySeries.ticks.template.disabled = true;
        let strategyLabelsTemplate = strategySeries.labels.template;
        strategyLabelsTemplate.text = '{category}';
        strategyLabelsTemplate.bent = true;
        strategyLabelsTemplate.radius = window.am4core.percent(10);
        strategyLabelsTemplate.inside = true;
        strategyLabelsTemplate.padding(0, 0, 0, 0);
        strategyLabelsTemplate.fontSize = 6;
        strategyLabelsTemplate.strictMinMax = true;
        strategyLabelsTemplate.maxWidth = 100;
        strategyLabelsTemplate.fill = new window.am4core.color("#000000");
        strategyLabelsTemplate.adapter.add("textOutput", function (text) {
            return window.am4core.utils.truncateWithEllipsis(text, 15, "...");
        });
        strategyLabelsTemplate.interactionsEnabled = true;
        //Tooltip
        strategySeries.slices.template.tooltipText = "{category}, {initiatives} projects, Total Projects Cost {totalProjectsCost} ";
        strategySeries.data = strategies;
    }

    renderRadialChart(radialChart, initiatives, strategies, owners, data, chartSeries) { // configuring radial chart   
        radialChart.startAngle = 0;
        radialChart.endAngle = -180;
        radialChart.dy = 230;
        radialChart.dx = 0;
        radialChart.responsive.enabled = true;
        radialChart.colors.step = 2;
        radialChart.dateFormatter.inputDateFormat = "YYYY-MM-dd";
        radialChart.innerRadius = window.am4core.percent(29);
        radialChart.radius = window.am4core.percent(75);
        radialChart.responsive.rules.push({
            relevant: function(target) {
              if (target.pixelWidth <= 1025) {
                  console.log("illliiiii")
                return true;
              }
              return false;
            },
            state: function(target, stateId) {
                console.log(target);
            }
          });

        // Category Axis
        var categoryAxis = radialChart.yAxes.push(new window.am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "initiative";
        categoryAxis.mouseEnabled = true;
        categoryAxis.fixedWidthGrid = true;
        let categoryAxisRenderer = categoryAxis.renderer;
        categoryAxisRenderer.grid.template.stroke = "0xFF0000";
        categoryAxisRenderer.grid.template.strokeWidth = 1;
        categoryAxisRenderer.labels.template.visible = false;
        categoryAxisRenderer.labels.template.diabled = false;

        var valueAxis = radialChart.xAxes.push(new window.am4charts.ValueAxis());
        valueAxis.renderer.labels.template.horizontalCenter = "left";
        valueAxis.renderer.grid.template.strokeOpacity = 0.25;
        valueAxis.min = 0;
        valueAxis.max = strategies.length;
        valueAxis.mouseEnabled = true;
        valueAxis.disabled = true;

        for (var i = 0; i < initiatives.length; i++) {
            let initiativesSeries = radialChart.series.push(new window.am4charts.RadarColumnSeries());
            initiativesSeries.dataFields.categoryY = 'initiative';
            initiativesSeries.dataFields.valueX = "end" + i;
            initiativesSeries.dataFields.openValueX = "start" + i;
            initiativesSeries.clustered = false;
            let initiativeColor = getInitiativeColor(initiatives[i], chartSeries);
            initiativesSeries.fill = initiativeColor;
            initiativesSeries.stroke = initiativeColor;
            initiativesSeries.columns.template.tooltipHTML = `<body style="font-size:8px; background-color:grey, width:50px; white-space: nowrap; overflow:hidden; text-overflow:ellipsis">
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
            initiativesSeries.zIndex = -1;
            initiativesSeries.columns.template.events.on("hit", this.onClickChartItem, this);
        }
        //Legend
        radialChart.cursor = new window.am4charts.RadarCursor();
        radialChart.cursor.lineX.disabled = true;
        radialChart.legend = new window.am4charts.Legend();
        radialChart.legend.useDefaultMarker = true;
        radialChart.legend.position = 'absolute';
        radialChart.legend.maxHeight = 30;
        //radialChart.legend.width = 200;
        radialChart.legend.fillOpacity = 0.70;
        radialChart.legend.strokeWidth = 0;
        radialChart.legend.y = -215;
        radialChart.legend.fontSize = 10;
        radialChart.legend.contentAlign = "top";
        radialChart.legend.itemContainers.template.clickable = true;
        radialChart.legend.itemContainers.template.focusable = true;

        radialChart.legend.itemContainers.template.events.on("hit", (ev: any) => {
            let ownerValue = ev.target.dataItem.name;
            let selected = ev.target.dataItem.properties.color;
            console.log("Clicked on", ownerValue + ":" + selected);
            let finalData: any = [];
            if (!selected) {
                let filteredData = chartSeries.filter(function (item: any) {
                    return item.owner === ownerValue;
                });
                finalData = finalData.concat(filteredData);
                console.log("adding items for owner:" + ownerValue + ":" + filteredData.length + "/" + finalData.length);
                radialChart.legend.dataItems.values.forEach((element: any) => {
                    if (element.properties.color) {
                        filteredData = chartSeries.filter(function (item: any) {
                            return item.owner === element.name;
                        });
                        finalData = finalData.concat(filteredData);
                        console.log("1-final adding items for owner:" + element.name + ":" + filteredData.length + "/" + finalData.length);
                    }
                });

            } else {

                radialChart.legend.dataItems.values.forEach((element: any) => {
                    if (element.properties.color) {
                        let filteredData = chartSeries.filter(function (item: any) {
                            return item.owner === element.name;
                        });
                        finalData = finalData.concat(filteredData);
                        console.log("2-final adding items for owner:" + element.name + ":" + filteredData.length + "/" + finalData.length);
                    }
                });
                finalData = finalData.filter(function (item: any) {
                    return item.owner != ownerValue;
                });
                console.log("removing items for owner:" + ownerValue + ":" + finalData.length);

            }
            //console.log("final filtered size:" + finalData.length);
            if (finalData.length == 0) {
                finalData = chartSeries;
            }
            radialChart.data = finalData;
            categoryAxis.data = finalData;
            //console.log("filtered chart.data", radialChart.data.length);
        });
        radialChart.legend.data = owners;
        radialChart.data = chartSeries;
    }

    screenshot() {
        Array.from(document
            .getElementsByClassName("amcharts-Scrollbar-group"))
            .forEach((element) => {
                // console.log(element);
                element.setAttribute("style", "display: none");
            });
        Array.from(document
            .getElementsByClassName("amcharts-Button-group"))
            .forEach((element) => {
                // console.log(element);
                element.setAttribute("style", "display: none");
            });
        window
            .html2canvas(document.getElementById("chartdiv"), {
                height: window.outerHeight + 600,
                windowHeight: window.outerHeight + 700,
            })
            .then((canvas) => {
                //document.body.appendChild(canvas);
                this.saveAs(canvas.toDataURL(), `jjchart${Date.now()}.png`);
                Array.from(document
                    .getElementsByClassName("amcharts-Scrollbar-group"))
                    .forEach((element) => {
                        element.setAttribute("style", "display: block");
                    });
                Array.from(document
                    .getElementsByClassName("amcharts-Button-group"))
                    .forEach((element) => {
                        // console.log(element);
                        element.setAttribute("style", "display: block");
                    });

            });
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

    amountFormat(val) {
        var nf = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
        return nf.format(val);
    }

    keyFormat(str) {
        return str.slice(0, 1).toUpperCase().concat(str.slice(1)).split(/(?=[A-Z])/).join(" ");
    }

    renderResetButton(chartcontainer, radialChart, strategySeries, chartSeries) {
        var button = chartcontainer.createChild(window.am4core.Button);
        button.label.text = "Reset";
        button.padding(5, 5, 5, 5);
        button.width = 50;
        button.align = "right";
        button.marginRight = 180;
        button.fontSize = 12;
        button.y = -3;
        button.zIndex = "12";
        button.events.on("hit", () => {
            radialChart.data = chartSeries;
            radialChart.yAxes.values[0].data = chartSeries;
            // radialChart.legend.data = owners;
            strategySeries.slices.each((item) => {
                item.isActive = false;
                item.fillOpacity = 0.5;
            })
            radialChart.legend.reinit();
            radialChart.legend.children.each((item) => {
                item.isActive = false;
            });
        });
    }

    renderExportButton(chartcontainer) {
        var ExportButton = chartcontainer.createChild(window.am4core.Button);
        ExportButton.label.text = 'Export';
        ExportButton.padding(5, 5, 5, 5);
        ExportButton.width = 50;
        ExportButton.align = "right";
        ExportButton.marginRight = 100;
        ExportButton.fontSize = 12;
        ExportButton.y = -3;
        ExportButton.zIndex = "12";
        ExportButton.events.on("hit", () => {
            this.screenshot();
        });
    }


    ngOnInit(): void {
        // Themes begin
        this.spinner.show();
        this.chartService.getChartData().then((data) => {
            console.log('chart api successfull', data);
            this.spinner.hide();
            var accelerators = getAccelarators(data);
            var owners = getOwners(data);
            var strategies = getStratergies(data);
            var chartSeries = getInitiativesSeries(data);
            var initiatives = getInitiatives(data);
            console.log('owners', owners);
            window.am4core.addLicense('CH300383565');
            //enable class names for custom styling
            window.am4core.options.autoSetClassName = true;
            window.am4core.useTheme(window.am4themes_animated);

            // CONTAINER ///
            var chartcontainer = window.am4core.create("chartdiv", window.am4core.Container);
            chartcontainer.width = window.am4core.percent(100);
            chartcontainer.height = window.am4core.percent(100);

            // Create chart instance
            var chart = chartcontainer.createChild(window.am4charts.PieChart)
            chart.startAngle = 0;
            chart.endAngle = -180;
            chart.dy = 130;
            // Let's cut a hole in our Pie chart
            chart.innerRadius = window.am4core.percent(3);

            //accelerator chart
            this.renderAcceleratorChart(chart, accelerators);
            //Top Stratergies chart
            this.renderTopStratergiesChart(chart, this.gaugeData);
            // Startergies chart
            let strategySeries = chart.series.push(new window.am4charts.PieSeries());
            this.renderStratergiesChart(strategySeries, strategies);
            //radial chart
            let radialChart = chartcontainer.createChild(window.am4charts.RadarChart);
            this.renderRadialChart(radialChart, initiatives, strategies, owners, data, chartSeries);
            let categoryAxis = null;

            //Reset Button
            this.renderResetButton(chartcontainer, radialChart, strategySeries, chartSeries)


            // Export Button
            this.renderExportButton(chartcontainer);

            chart.toFront();

            // //events
            strategySeries.interactionsEnabled = true;
            strategySeries.slices.template.events.on("hit", (ev: any) => {
                let finalData: any = [];
                var allOff = true;
                strategySeries.slices.values.forEach((element: any) => {
                    if (element.isActive) {
                        element.fillOpacity = 1;
                        let filteredData = chartSeries.filter(function (item: any) {
                            return item.strategy === element.dataItem.dataContext.name;
                        });
                        finalData = finalData.concat(filteredData);
                        allOff = false;
                    } else {
                        element.fillOpacity = 0.5;
                    }

                });
                if (allOff) {
                    finalData = chartSeries;
                }
                radialChart.data = finalData;
                radialChart.yAxes.values[0].data = finalData;
                radialChart.legend.data = owners;
                radialChart.legend.reinit();
                radialChart.legend.children.each((item) => {
                    item.isActive = false;
                });
            });

            // Zoom Controls
            radialChart.scrollbarX = new window.am4core.Scrollbar();
            radialChart.scrollbarX.parent = chartcontainer;
            radialChart.scrollbarX.exportable = false;
            radialChart.scrollbarX.valign = "bottom";
            radialChart.scrollbarX.align = "left";
            radialChart.scrollbarX.marginBottom = 10;
            radialChart.scrollbarX.marginLeft = 60;
            radialChart.scrollbarX.width = window.am4core.percent(90);

            radialChart.scrollbarY = new window.am4core.Scrollbar();
            radialChart.scrollbarY.parent = chartcontainer;
            radialChart.scrollbarY.exportable = false;
            radialChart.scrollbarY.align = "right";
            radialChart.scrollbarY.valign = "bottom";
            radialChart.scrollbarY.marginBottom = 50;
            radialChart.scrollbarY.marginRight = 10;
            radialChart.scrollbarY.height = window.am4core.percent(90);

            var zoomOutButton = radialChart.zoomOutButton;
            zoomOutButton.dx = -12;
            zoomOutButton.dy = -3;
            zoomOutButton.parent = radialChart.tooltipContainer;
            zoomOutButton.background.cornerRadius(5, 5, 5, 5);
            zoomOutButton.background.fill = new window.am4core.color("#25283D");
            zoomOutButton.icon.stroke = new window.am4core.color("#EFD9CE");
            zoomOutButton.icon.strokeWidth = 2;
            zoomOutButton.background.states.getKey("hover").properties.fill = new window.am4core.color("#606271");
        });

    }
    onCloseModal() {
        this.modalService.dismissAll()
    }

    onClickChartItem(event: any) {
        this.modalService.open(this.dataModal, { size: 'xl' });
        this.modalContent = event.target.dataItem.dataContext;
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
