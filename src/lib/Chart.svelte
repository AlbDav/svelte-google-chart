<svelte:options tag="google-chart" />
<svelte:head>
	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js" on:load={inizializeChart}></script>
</svelte:head>

<script lang="ts">
	let chartContainer;

    function drawChart() {
      var data = new google.visualization.DataTable();

      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      data.addRows([
        ['Mushrooms', 3],
        ['Onions', 1],
        ['Olives', 1],
        ['Zucchini', 1],
        ['Pepperoni', 2]
      ]);

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
</script>

<div bind:this={chartContainer}></div>

<style>
</style>
