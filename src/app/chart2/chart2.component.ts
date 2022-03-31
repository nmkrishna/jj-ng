import { Component, Input, OnInit, OnDestroy, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { chart2data, getBAMAlignments, bamAlignments } from "./chart2data"
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
    rawdata;
    cats = bamAlignments;

    constructor(private modalService: NgbModal, private chartService: ChartService) { }

    getColor(bamAllignment) {
        let match = this.cats.find(element => element.name === bamAllignment);
        if (!match) {
            return "#C0C0C0";
        } else {
            return match.fill;
        }
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

    downloadAsPNG() {
        const modalBody = document.getElementById("modal-body") as HTMLElement;
        window.html2canvas(modalBody, {
            height: window.outerHeight,
            windowHeight: window.outerHeight + 700,
        }).then(canvas => {
            this.saveAs(canvas.toDataURL(), `dataExport_${Date.now()}.png`);
        })
    }

    //loader code
    indicator;
    showIndicator() {
        this.indicator = this.chartInstance.tooltipContainer.createChild(window.am4core.Container);
        this.indicator.background.fill = window.am4core.color("#fff");
        this.indicator.background.fillOpacity = 0.8;
        this.indicator.width = window.am4core.percent(100);
        this.indicator.height = window.am4core.percent(100);
        let indicatorLabel = this.indicator.createChild(window.am4core.Label);
        indicatorLabel.text = "Loading ...";
        indicatorLabel.align = "center";
        indicatorLabel.valign = "middle";
        indicatorLabel.fontSize = 20;
    }

    hideIndicator() {
        this.indicator.hide();
    }

    screenshot() {
        Array.from(document
            .getElementsByClassName("amcharts-Scrollbar-group"))
            .forEach((element) => {
                element.setAttribute("style", "display: none");
            });
        Array.from(document
            .getElementsByClassName("amcharts-Button-group"))
            .forEach((element) => {
                element.setAttribute("style", "display: none");
            });
        window
            .html2canvas(document.getElementById("chart2div"), {
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
                        element.setAttribute("style", "display: block");
                    });

            });
    }

    renderExportButton(chart) {
        var ExportButton = chart.chartContainer.createChild(window.am4core.Button);
        ExportButton.label.text = 'Export';
        ExportButton.padding(5, 5, 5, 5);
        ExportButton.width = 50;
        ExportButton.align = "right";
        ExportButton.marginRight = 80;
        ExportButton.fontSize = 12;
        ExportButton.dy = -653;
        ExportButton.zIndex = "12";
        ExportButton.events.on("hit", () => {
            this.screenshot();
        });
    }

    renderResetButton(chart, legend, categoryAxis) {
        var button = chart.chartContainer.createChild(window.am4core.Button);
        button.label.text = "Reset";
        button.padding(5, 5, 5, 5);
        button.width = 50;
        button.align = "right";
        button.marginRight = 150;
        button.fontSize = 12;
        button.dy = -680;
        button.zIndex = "12";
        button.events.on("hit", () => {
            categoryAxis.data = this.cats;
            chart.data = this.rawdata;
            legend.reinit();
            legend.children.each((item) => {
                item.isActive = false;
            });
        });
    }


    ngOnInit(): void {

        window.am4core.useTheme(window.am4themes_animated);
        window.am4core.addLicense('CH300383565');
        var chart = window.am4core.create("chart2div", window.am4charts.RadarChart);
        this.chartInstance = chart;
        this.showIndicator();
        this.chartService.getChartData().then(data => {
            this.rawdata = chart2data;
            this.cats = getBAMAlignments(this.rawdata);

            if (this.rawdata.length > 0) {
                this.hideIndicator();
                chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
                chart.startAngle = 270 - 180;
                chart.endAngle = 270 + 180;
                // chart.startAngle = -170;
                // chart.endAngle = -10;
                chart.innerRadius = window.am4core.percent(30);
                chart.dateFormatter.dateFormat = "M/d/yy";
                window.am4core.options.autoSetClassName = true;
                var categoryAxis = chart.xAxes.push(new window.am4charts.CategoryAxis());
                categoryAxis.dataFields.category = "name";
                categoryAxis.renderer.grid.template.location = 0;
                categoryAxis.data = this.cats;

                var valueAxis = chart.yAxes.push(new window.am4charts.DateAxis());
                //dynamic date range
                chart.events.on("ready", function (ev) {
                    valueAxis.min = valueAxis.minZoomed - 24 * 60 * 60 * 1000;
                    valueAxis.max = valueAxis.maxZoomed + 24 * 60 * 60 * 1000;
                });

                valueAxis.baseInterval = {
                    "timeUnit": "year",
                    "count": 1
                }
                valueAxis.renderer.grid.template.stroke = window.am4core.color("#0000FF");
                valueAxis.renderer.grid.template.strokeWidth = 3;
                valueAxis.renderer.labels.template.fontSize = 12;
                valueAxis.renderer.labels.template.inside = false;

                valueAxis.interactionsEnabled = true;

                categoryAxis.renderer.labels.template.location = 0.5;
                categoryAxis.renderer.labels.template.fontSize = 12;

                categoryAxis.interactionsEnabled = true;
                categoryAxis.renderer.axisFills.template.disabled = false;
                categoryAxis.renderer.fixedWidthGrid = false;
                categoryAxis.renderer.interactionsEnabled = true;
                categoryAxis.renderer.layout = "grid";
                categoryAxis.renderer.ticks.template.disabled = false;
                categoryAxis.renderer.ticks.template.strokeOpacity = 1;

                // categoryAxis.renderer.grid gridContainer


                var series = chart.series.push(new window.am4charts.RadarSeries());
                series.dataFields.categoryX = "bamAllignment";
                series.dataFields.dateY = "startDate";
                series.dataFields.value = "totalProjectCost";
                series.strokeOpacity = 0;
                series.sequencedInterpolation = true;
                series.sequencedInterpolationDelay = 100;
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

                bullet.adapter.add("dy", function (val, target, key) {
                    var itemDate: Date = new Date(target.dataItem.values.dateY.value);
                    var priorDate: Date = new Date(itemDate.getFullYear(), 0, 0);
                    var dayOfYear = Math.floor((itemDate.getTime() - priorDate.getTime()) / 1000 / 60 / 60 / 24);
                    var offset = 0.0;
                    offset = (1 - (dayOfYear / 365)) * 110;
                    return val + offset;
                });

                bullet.adapter.add("dx", function (val, target, key) {
                    var itemDate: Date = new Date(target.dataItem.values.dateY.value);
                    var priorDate: Date = new Date(itemDate.getFullYear(), 0, 0);
                    var dayOfYear = Math.floor((itemDate.getTime() - priorDate.getTime()) / 1000 / 60 / 60 / 24);
                    var offset = 0.0;
                    offset = (dayOfYear / 365) * 170;
                    // offset = offset < 10 ? 10 : offset;
                    // offset = offset > 170 ? 165 : offset;
                    return val + offset;
                });
                bullet.events.on("hit", this.onClickChartItem, this)
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
              <th align="left" style="font-size:8px">Characteristic</th>
              <td style="font-size:8px">{strategy}</td>
            </tr>
            <tr>
              <th align="left" style="font-size:8px">Principle</th>
              <td style="font-size:8px">{topStrategy}</td>
            </tr>
            <tr>
              <th align="left" style="font-size:8px">Investment Type</th>
              <td style="font-size:8px">{investmentType}</td>
            </tr>
             <tr>
                <th align="left" style="font-size:8px">Planned Start</th>
              <td style="font-size:8px">{startDate}</td>
            </tr>
            <tr>
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

                series.heatRules.push({ target: bullet, min: 4, max: 30, property: "radius" });

                bullet.adapter.add("tooltipY", function (tooltipY, target) {
                    return -target.radius;
                })

                // chart.cursor = new window.am4charts.RadarCursor();
                // chart.cursor.behavior = "zoomXY";
                chart.scrollbarX = new window.am4core.Scrollbar();
                chart.scrollbarY = new window.am4core.Scrollbar();

                var slider = chart.createChild(window.am4core.Slider);
                slider.start = 0;
                slider.events.on("rangechanged", () => {
                    var start = slider.start;
                    chart.startAngle = 270 - start * 179 - 1;
                    chart.endAngle = 270 + start * 179 + 1;
                    valueAxis.renderer.axisAngle = chart.startAngle;
                });
                for (let i = 0; i < this.rawdata.length; i++) {
                    this.rawdata[i]['color'] = this.getColor(this.rawdata[i].bamAllignment);
                };

                // chart.events.on("ready", function (event) {

                let legend = new window.am4charts.Legend();
                legend.parent = chart.chartContainer;
                legend.useDefaultMarker = true;
                legend.labels.template.fontSize = 12;
                legend.showTooltipOn = "hover";
                legend.labels.template.text = "[bold]{name}[/]\n [font-size: 10px] Projects: {initiatives} \n Total Cost:{totalProjectsCost} [/]";
                legend.data = this.cats;

                legend.itemContainers.template.events.on("hit", (ev: any) => {

                    let bamValue = ev.target.dataItem.dataContext.name;
                    let selected = ev.target.isActive;
                    // console.log("bam", bamValue, selected);

                    let finalData: any = [];
                    legend.dataItems.values.forEach((element: any) => {
                        console.log("element", element.dataContext.name, element.properties.color);
                        if (element.properties.color) {
                            let matches = this.rawdata.filter(function (item: any) {
                                return item.bamAllignment === element.dataContext.name;
                            });
                            finalData = finalData.concat(matches);
                        }
                    });
                    let filteredData = this.rawdata.filter(function (item: any) {
                        return item.bamAllignment === bamValue;
                    });
                    // console.log("filteredData", filteredData.length);

                    if (!selected) {
                        finalData = finalData.concat(filteredData);
                        // ev.target.isActive = false;
                    } else {
                        finalData = finalData.filter(ar => !filteredData.find(rm => (rm.bamAllignment === ar.bamAllignment)))
                        // ev.target.isActive = true;
                    }

                    if (finalData.length == 0) {
                        categoryAxis.data = this.cats;
                        finalData = this.rawdata;
                        legend.reinit();
                        chart.reinit();
                        // legend.children.each((item) => {
                        //     item.isActive = false;
                        // });
                    }
                    // console.log("finaldata", finalData.length);

                    categoryAxis.data = this.cats;
                    chart.data = finalData;
                });

                // Export Button
                this.renderExportButton(chart);
                this.renderResetButton(chart, legend, categoryAxis);


                // legend.itemContainers.template.events.on("hit", (ev: any) => {
                //     console.log(ev.target);
                //     console.log(ev.target.dataItem.dataContext.name);
                //     let bamValue = ev.target.dataItem.dataContext.name;
                //     let selected = ev.target.dataItem.properties.color;
                //     console.log("Clicked on", bamValue + ":" + selected);
                //     let finalData: any = [];
                //     if (!selected) {
                //         finalData = this.rawdata.filter(function (item: any) {
                //             return item.bamAllignment != bamValue;
                //         });
                //     } else {
                //         finalData = finalData.filter(function (item: any) {
                //             return item.bamAllignment === bamValue;
                //         });
                //     }
                //     if (finalData.length == 0) {
                //         finalData = this.rawdata;
                //     }
                //     console.log("finalData ", finalData);
                //     categoryAxis.data = this.cats;
                //     chart.data = finalData;

                // });
                // });
                chart.data = this.rawdata;

            }
        })

    }

    onCloseModal() {
        this.modalService.dismissAll()
    }

    onClickChartItem(event: any) {
        this.modalService.open(this.dataModal, { size: 'xl' });
        this.modalContent = event.target.dataItem.dataContext;
    }


    keyFormat(str) {
        return str.slice(0, 1).toUpperCase().concat(str.slice(1)).split(/(?=[A-Z])/).join(" ");
    }

    ngOnDestroy() {
        //this.chartInstance = null;
        this.chartInstance.dispose();
        window.am4core.disposeAllCharts();
    }


}