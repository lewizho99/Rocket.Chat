import { Template } from 'meteor/templating';
import { MyChartObj, InitChart } from 'meteor/rocketchat:ui-utils';

Template.umchart.helpers({
	title() {
		return 'User Mood Chart';
	},
});

Template.umchart.rendered = function(){
	let userMood = {
			happy: 0,
			uncertain: 0,
			sad: 0,
			confused: 0,
	}

	if(!window.localStorage.getItem('userMood')){
		window.localStorage.setItem('userMood', JSON.stringify(userMood));
	}else{
		userMood = JSON.parse(window.localStorage.getItem('userMood'));
	}

    let chartDiv = this.find('#chartDiv');
	MyChartObj = InitChart(chartDiv, userMood);
	console.log(MyChartObj);
}
