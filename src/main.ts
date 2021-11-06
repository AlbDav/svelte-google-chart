export * from './lib/Chart.svelte';

window.onload = () => {
	let chart: any = document.getElementsByClassName('google-chart');
	console.log(chart);
	chart.chartData = [
		['Mushrooms', 3],
		['Onions', 1],
		['Olives', 1],
		['Zucchini', 1],
		['Pepperoni', 2]
	];
}