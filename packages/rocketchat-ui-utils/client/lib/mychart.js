import Chart from 'chart.js';

let MyChartObj;
let InitChart = function(elem, userMood) {
	MyChartObj = new Chart(elem, {
	    type: 'pie',
	    data: {
	        labels: ['Happy ('+userMood.happy+')', 'Uncertain ('+userMood.uncertain+')', 'Sad ('+userMood.sad+')', 'Confused ('+userMood.confused+')'],
	        datasets: [{
	            label: '# of Clicks',
	            data: [userMood.happy, userMood.uncertain, userMood.sad, userMood.confused],
	            backgroundColor: [
	                '#2de0a5',
	                '#ffd300',
	                '#f84258',
	                '#cbced1',
	            ],
	            borderColor: [
	                'rgba(0,0,0,.2)',
	                'rgba(0,0,0,.2)',
	                'rgba(0,0,0,.2)',
	                'rgba(0,0,0,.2)',
	            ],
	            borderWidth: 1
	        }]
	    },
		options: {
			cutoutPercentage: 50,
		}
	});
	return MyChartObj;
}

export {
	MyChartObj,
	InitChart
}