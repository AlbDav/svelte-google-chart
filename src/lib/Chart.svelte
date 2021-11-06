<svelte:options tag="google-chart" />
<svelte:head>
	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js" on:load={inizializeChart}></script>
</svelte:head>

<script lang="ts">
	import { onMount } from "svelte";
	let chartContainer;
	let chart;
	let initialized: boolean = false;

	export let chartData: any = [];
	export let type: string = "bar";

    function drawChart() {
      let data = new google.visualization.DataTable();

      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      data.addRows(chartData);

      let options = {'title':'How Much Pizza I Ate Last Night',
                     'width':400,
                     'height':300};

	  let chartClass = getChartClass();
      chart = new chartClass(chartContainer);
      chart.draw(data, options);
    }

	const inizializeChart = () => {
      google.charts.load('current', {'packages':['corechart']});
	  initialized = true;
    //   google.charts.setOnLoadCallback(drawChart);
	}

	$: chartDataChanged(chartData);
	function chartDataChanged(chartData) {
		if (initialized) {
			drawChart();
		}
	}

	function getChartClass() {
		if (type === "pie") {
			return google.visualization.PieChart;
		} else {
			return google.visualization.BarChart;
		}
	}
</script>

<div bind:this={chartContainer}></div>

<style>
</style>
