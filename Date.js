Date.prototype.getWeekday = function(){
	switch(this.getDay()){
		case 0:
			return "日";
		break;
		case 1:
			return "一";
		break;
		case 2:
			return "二";
		break;
		case 3:
			return "三";
		break;
		case 4:
			return "四";
		break;
		case 5:
			return "五";
		break;
		case 6:
			return "六";
		break;
	}
}
Date.prototype.updateDate = function() {
	this.date = this.getDate();
	this.month = this.getMonth() + 1;
	this.year = this.getFullYear();
	this.weekday = this.getWeekday();
	return this;
};
Date.prototype.nextDays = function(Days) {
	this.setDate(this.getDate() + Days);
	var next_2_week = new Date();
	next_2_week.setDate(next_2_week.getDate() + 14);
	if((Date.parse(this.toUTCString()) - Date.parse(next_2_week.toUTCString())) > 86000)
	{
		this.setDate(this.getDate() - Days);
		return false;
	}
	this.updateDate();
	return true;
}
Date.prototype.prevDays = function(Days) {
	this.setDate(this.getDate() - Days);
	var current = new Date();
	if((Date.parse(current.toUTCString()) - Date.parse(this.toUTCString())) > 86000)
	{
		this.setDate(this.getDate() + Days);
		return false;
	}
	this.updateDate();
	return true;
}
Date.prototype.init = function() {
	this.updateDate();
	return this;
}