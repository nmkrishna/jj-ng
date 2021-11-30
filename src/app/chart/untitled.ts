
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