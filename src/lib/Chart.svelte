<svelte:options tag="google-chart" />
<svelte:head>
	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js" on:load={inizializeChart}></script>
</svelte:head>

<script lang="ts">
	import { onMount } from "svelte";
	let chartContainer;

	export let chartData: any = [];
	export let type: string = "bar";

    function drawChart() {
      var data = new google.visualization.DataTable();

      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      data.addRows(chartData);

      var options = {'title':'How Much Pizza I Ate Last Night',
                     'width':400,
                     'height':300};

      var chart = new google.visualization.PieChart(chartContainer);
      chart.draw(data, options);
    }

	const inizializeChart = () => {
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
	}

	$: chartDataChanged(chartData);
	function chartDataChanged(chartData) {
		console.log(chartData);
	}

	onMount(() => {
		console.log(type);
	});
</script>

<div bind:this={chartContainer}></div>

<style>
</style>
