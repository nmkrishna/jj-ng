import { SelectorMatcher } from '@angular/compiler';
import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RangeValueAccessor } from '@angular/forms';
import { ChartService } from '../chart.service';
import {function_owners, investment_type, car_status, primary_accelerators, primary_dimensions, primary_allignment, primary_valuescore} from "./chartdata";
import { faMinusSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

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
    getOwnerColor
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
    @ViewChild('dataModal') dataModal : TemplateRef<any>;
    
    constructor(private chartService: ChartService, private modalService: NgbModal) { }

    ngOnInit(): void {
        // Themes begin
        this.chartService.getChartData().then((data) => {
            console.log('chart api successfull', data);
            const categories = getCategories(data);
            const accelerators = getAccelarators(data);
            const owners = getOwners(data, categories);
            //   const chartSeries = getSeries(data, categories);
            const strategies = getStratergies(data);
            //const chartSeries = getInitiativesSeries(data);


            const dummySeries = [
                {
                    initiative: "One",
                    start: 1,
                    end: 2
                },
                {
                    initiative: "One",
                    start: 1,
                    end: 3
                },
                {
                    initiative: "Two",
                    start: 3,
                    end: 4
                },
                {
                    initiative: "Two",
                    start: 2,
                    end: 5
                },
                {
                    initiative: "Three",
                    start: 5,
                    end: 8
                },
                {
                    initiative: "Four",
                    start: 1,
                    end: 4
                },
                {
                    initiative: "Four",
                    start: 1,
                    end: 4
                },
                {
                    initiative: "Five",
                    start: 1,
                    end: 4
                },
                {
                    initiative: "Five",
                    start: 1,
                    end: 4
                }
            ];


            var initiatives: any = [];
            // chartSeries.forEach((el: any) => {
            //     initiatives.push(el.initiative);
            // });
            //initiatives = [...new Set(initiatives)];
            initiatives = [...new Set(data.map((i:any) => i.initiative))];

            //const oldSeries = getSeries(data, categories);
            // let initiativeData: any = [];
            // initiatives.forEach((item, index) => {
            //     initiativeData.push({ "name": item, "value": index });
            // }
            // );

            window.am4core.addLicense('CH300383565');

            //enable class names for custom styling
            window.am4core.options.autoSetClassName = true;

            window.am4core.useTheme(window.am4themes_animated);


            // ===== INITIATIVES ==== 

            // Create chart
            var chart = window.am4core.create(
                'chartdiv',
                window.am4charts.RadarChart
            );
            chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
            chart.colors.step = 4;

            // Chart settings
            chart.startAngle = 180;
            chart.endAngle = 0;
            chart.innerRadius = window.am4core.percent(60);
            chart.panX = false;
            chart.panY = false;
            chart.dx = 210;
            chart.dy = -20;
            chart.responsive.enabled = true;


            // Category Axis
            var categoryAxis = chart.yAxes.push(new window.am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "initiative";
            // categoryAxis.renderer.labels.template.location = 0.5;
            // categoryAxis.renderer.labels.template.horizontalCenter = "right"; 
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.tooltipLocation = 0.5;
            categoryAxis.renderer.grid.template.strokeOpacity = 0;
            categoryAxis.renderer.minGridDistance = 20;
            categoryAxis.renderer.labels.isMeasured = false;

            categoryAxis.mouseEnabled = false;
            categoryAxis.tooltip.disabled = true;

            categoryAxis.data = data;

            var valueAxis = chart.xAxes.push(new window.am4charts.ValueAxis());
            valueAxis.renderer.labels.template.horizontalCenter = "left";
            valueAxis.strictMinMax = true;
            valueAxis.renderer.maxLabelPosition = 0.99;
            valueAxis.renderer.grid.template.strokeOpacity = 0;
            valueAxis.min = 0;
            valueAxis.max = 8;
            valueAxis.mouseEnabled = false;
            valueAxis.tooltip.disabled = false;
            valueAxis.renderer.axisFills.template.disabled = false;
            valueAxis.interactionsEnabled = true;
            valueAxis.disabled = true;


            console.log(initiatives);
            for (var i = 0; i < initiatives.length; i++) {
                let series1 = chart.series.push(new window.am4charts.RadarColumnSeries());
                series1.dataFields.categoryY = 'initiative';
                series1.dataFields.valueX = "end" + i;
                series1.dataFields.openValueX = "start" + i;
                series1.clustered = false;
                series1.columns.template.tooltipHTML = `<body style="font-size:8px; background-color:grey, width:50px; white-space: nowrap; overflow:hidden; text-overflow:ellipsis">
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
                series1.zIndex = 100;
                series1.columns.template.events.on("hit", this.onClickDownload, this);
                // series1.columns.template.adapter.add("fill", function (fill: any, target: any) {
                //     if (target.dataItem) {
                //         return '{columnSettings}';
                //     }
                //     else {
                //         return fill;
                //     }
                // });

            }

            //chart.series.legendSettings.labelText = '{owner}';
            chart.cursor = new window.am4charts.RadarCursor();
            chart.cursor.lineX.disabled = true;
            chart.legend = new window.am4charts.Legend();
            chart.legend.useDefaultMarker = true;
            chart.legend.position = 'absolute';
            chart.legend.maxWidth = 100;
            chart.legend.fillOpacity = 0.70;
            chart.legend.strokeWidth = 0;
            chart.legend.x = 100;
            chart.legend.y = 100;
            chart.legend.itemContainers.template.paddingTop = 250;
            chart.legend.fontSize = 10;
            let marker = chart.legend.markers.template.children.getIndex(0);
            marker.cornerRadius(12, 12, 12, 12);
            marker.strokeWidth = 0;
            marker.strokeOpacity = 1;

            chart.data = data;


            // ===== ACCELERATORS ===

            // donut chart

            // Create chart instance

            // chart.exporting.menu = new window.am4core.ExportMenu();
            // chart.exporting.menu.align = 'left';
            // chart.exporting.menu.verticalAlign = 'top';

            var chart = window.am4core.create('chartdiv2', window.am4charts.PieChart);

            // Add data

            const iconMap = [
                'light-mode',
                'tungsten',
                'question_answer',
                'moving',
                'group',
                'table_view',
            ];

            chart.data = accelerators.map((acc, index) => ({
                label: acc,
                value: 100 / accelerators.length,
                icon: iconMap[index],
            }));

            // Add and configure Series
            var pieSeries = chart.series.push(new window.am4charts.PieSeries());
            pieSeries.dataFields.value = 'value';
            pieSeries.dataFields.category = 'label';
            //pieSeries.dataFields.icon = 'icon';
            pieSeries.ticks.template.disabled = true;
            // pieSeries.labels.template.html = '<i class="material-icons">{icon}</i>';
            pieSeries.alignLabels = false;
            pieSeries.labels.template.text = '{category}';
            //pieSeries.labels.template.radius = window.am4core.percent(-40);
            //pieSeries.labels.template.fill = window.am4core.color('white');
            //pieSeries.labels.template.bent = true;
            pieSeries.labels.template.radius = -50;
            //pieSeries.labels.template.padding(5, 5, 5, 5);
            //pieSeries.labels.template.rotation = -90;
            //chart.seriesContainer.zIndex = -1;
            pieSeries.slices.template.tooltipText = '{category}';

            //pieSeries.labels.template.tooltipText = '{category}';

            let labelT = pieSeries.labels.template;
            labelT.wrap = true;
            labelT.fontSize = 11;
            labelT.maxWidth = 60;
            labelT.verticalCenter = 'bottom';
            labelT.horizontalCenter = 'middle';

            chart.innerRadius = window.am4core.percent(20);
            chart.radius = window.am4core.percent(70);
            let container = new window.am4core.Container();
            container.parent = pieSeries;
            container.horizontalCenter = 'middle';
            container.verticalCenter = 'middle';
            container.width = window.am4core.percent(40);
            container.fill = 'white';

            const label1 = new window.am4core.Label();
            label1.parent = container;
            label1.text = 'Janssen One';
            label1.horizontalCenter = 'middle';
            label1.verticalCenter = 'middle';
            label1.fontSize = 11;

            chart.events.on('sizechanged', function (ev: any) {
                let scale = (pieSeries.pixelInnerRadius * 2) / label1.bbox.width;
                if (scale > 1) {
                    scale = 1;
                }
                label1.scale = scale;
            });

            //gauge chart

            var chart3 = window.am4core.create(
                'gaugeChart1',
                window.am4charts.GaugeChart
            );
            chart3.hiddenState.properties.opacity = 0; // this makes initial fade in effect

            chart3.innerRadius = -50;
            chart3.startAngle = 0;
            chart3.endAngle = 180;

            var axis = chart3.xAxes.push(new window.am4charts.ValueAxis());
            axis.min = 0;
            axis.max = 400;
            axis.strictMinMax = true;
            axis.renderer.grid.template.stroke =
                new window.am4core.InterfaceColorSet().getFor('background');
            axis.renderer.grid.template.strokeOpacity = 0.3;
            axis.renderer.minGridDistance = 10000;

            var colorSet = ['#CA001B', 'blue', '#CC0099', '#009999'];

            let gaugeData = [
                {
                    category: 1,
                    value: 'Our People',
                },
                {
                    category: 2,
                    value: 'Trusted partnership',
                },
                {
                    category: 3,
                    value: 'Quality as a differentiator',
                },
                {
                    category: 4,
                    value: 'Next gen quality',
                },
            ];
            gaugeData = gaugeData.reverse();
            let slice = 100;
            for (let i = 0; i < 4; i++) {
                const range = axis.axisRanges.create();
                range.value = 0 + i * slice;
                range.endValue = 100 + i * slice;
                range.axisFill.fillOpacity = 0.6;
                range.axisFill.fill = colorSet[3 - i];
                range.axisFill.zIndex = -1;
                range.locations.category = 10.5;
                range.locations.endCategory = 20.5;
                range.label.text = gaugeData[i].value;
                range.label.fontSize = 10;
                range.label.inside = true;
                range.label.verticalCenter = 'top';
                range.label.rotation = 0;
                range.label.wrap = true;
                range.label.maxWidth = 60;
                range.label.contentAlign = "left";
                range.label.isMeasured = true;
                chart3.numberFormatter.numberFormat = '';
            }

            // gauge 2

            var chart4 = window.am4core.create(
                'gaugeChart2',
                window.am4charts.GaugeChart
            );
            chart4.hiddenState.properties.opacity = 0; // this makes initial fade in effect

            chart4.innerRadius = -60;
            chart4.startAngle = 0;
            chart4.endAngle = 180;

            var axis = chart4.xAxes.push(new window.am4charts.ValueAxis());
            axis.min = 0;
            axis.max = strategies.length * 100;
            axis.strictMinMax = true;
            axis.renderer.grid.template.stroke =
                new window.am4core.InterfaceColorSet().getFor('background');
            axis.renderer.grid.template.strokeOpacity = 0.3;
            axis.renderer.minGridDistance = 10000;

            let gaugeData2 = strategies.map((str) => ({ value: str }));

            let colorSet2 = [
                '#808080',
                '#dcdcdc',
                '#778899',
                '#696969',
                '#c9c0bb',
                '#cfcfc4',
                '#c4aead',
                '#acacac',
            ];
            gaugeData2 = gaugeData2.reverse();
            for (let i = 0; i < strategies.length; i++) {
                const range = axis.axisRanges.create();
                range.value = 0 + i * 100;
                range.endValue = 100 + i * 100;
                range.axisFill.fillOpacity = 1;
                range.axisFill.fill = colorSet2[i];
                range.axisFill.zIndex = -1;
                range.locations.category = 117.5;
                range.locations.endCategory = 192.5;
                range.label.text = gaugeData2[i].value;
                range.label.fontSize = 10;
                range.label.inside = true;
                range.label.verticalCenter = 'top';
                range.label.rotation = 0;
                range.label.isMeasured = true;
                range.label.wrap = true;
                chart4.numberFormatter.numberFormat = '';
                range.label.position = 'top';
                range.label.locationX = 200.2;
                range.label.locationY = -2;
            }


            document
                .getElementById('export')
                ?.setAttribute('style', 'visibility: visible');
        });


    }

    onCloseModal() {
        this.modalService.dismissAll()
    }
    
    onClickDownload(event: any) {
        this.modalService.open(this.dataModal,{size:'xl'});
        this.modalContent = event.target.dataItem.dataContext;
        console.log("clicked on ", this.modalContent);
        // var element = document.getElementById('html-template');
        // html2pdf(element);
    }
}
