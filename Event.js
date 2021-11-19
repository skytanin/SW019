
function Event(id,title,description,roomID,date,startTime,endTime,color) {
	this.id = id;
	this.title = title;
	this.description = description;
	this.roomID = roomID;
	this.date = date;
	this.startTime = startTime;
	this.endTime = endTime;
	this.color = color;
}

function timeToMinutes(Time){
	var TimeArray = Time.split(':');
	return (parseInt(TimeArray[0])*60+parseInt(TimeArray[1]));
}

function showAllEvent() {
	var event_string="";
	for(var i=0;i<eventArray.length;i++){
		event_string+=(i+1)+": "+eventArray[i].title+" "+eventArray[i].description+" "+eventArray[i].roomID+" "+eventArray[i].date+" "+eventArray[i].startTime+" "+eventArray[i].endTime+" "+eventArray[i].color+"\n";
	}
	window.alert(event_string);
}

 Array.prototype.insertEvent = function() {
	var event_id = eventArray.length;
	var startTime = document.getElementById("start_time").value;
	var startTimeMinutes = timeToMinutes(startTime);
	var endTime = document.getElementById("end_time").value
	var endTimeMinutes = timeToMinutes(endTime);
	var event_title_text =document.getElementById("title_text").value;
	var event_desc_text =document.getElementById("desc_text").value;
	var event_room_id = document.getElementById("room_id").options[document.getElementById("room_id").selectedIndex].value;
	var event_color = document.getElementById("event_color").value + "";
	//var event_color = 'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')';
	var isExist = false;
	for(var i=0;i<this.length;i++){
		if(this[i].date == selectTime.toDateString() && this[i].roomID == event_room_id)
		{	
			if((endTimeMinutes - startTimeMinutes) < 30)
			{
				window.alert("Please check your use time at least 30 minutes!!");
				return false;
			}
			else if((startTimeMinutes - endTimeMinutes) >= 0)
			{
				window.alert("Please check your time set!!");
				return false;
			}
			else if(startTimeMinutes >= timeToMinutes(this[i].startTime) && startTimeMinutes < timeToMinutes(this[i].endTime) || endTimeMinutes > timeToMinutes(this[i].startTime) && endTimeMinutes <= timeToMinutes(this[i].endTime)){
				isExist = true;
				window.alert("There is exist meet during this time!!");
				return false;
			}
		}
	}
	
	this.push(new Event(event_id,event_title_text,event_desc_text,event_room_id,selectTime.toDateString(),startTime,endTime,event_color));
	//appendTextByID('date_text',event_room_id+" "+eventArray[0].color);
	window.alert("Add event successfully!!\nCurrent event number is "+this.length+"Date="+this[this.length-1].date);
	return true;
	
}

function cleanButton(){
	for(var i=0;i<eventArray.length;i++) 
	{
		if(document.getElementById("Day_Table_button"+i))
		{
			document.getElementById("Day_Table_button"+i).remove();
		}
	}
}


function createButton(idName,x,y,height,title,event_room_id,color) {
	  var newButton = document.createElement("button");
	  newButton.id=idName;
	  newButton.style.width = "100%";
	  newButton.style.height = height+"%";
	  newButton.style.position = "absolute";
	  newButton.style.top=y+"%"; 
	  newButton.textContent = title;
	  newButton.style.fontSize = "30px";
	  newButton.style.border = "0";
	  newButton.style.color = "#000000";
	  newButton.style.backgroundColor = color+"";
	return newButton;
};

function drawEvent() {
	cleanButton();
  for(var i=0;i<eventArray.length;i++){
	if(eventArray[i].date == selectTime.toDateString()){
	  var event_id = eventArray[i].id;
	  var startTimeArray = eventArray[i].startTime.split(':');
	  var startTime = parseInt(startTimeArray[0])*60+parseInt(startTimeArray[1]);
	  var endTimeArray = eventArray[i].endTime.split(':');
	  var endTime = parseInt(endTimeArray[0])*60+parseInt(endTimeArray[1]);
	  var event_title_text = eventArray[i].title;
	  var event_room_id = eventArray[i].roomID;
	  var event_color = eventArray[i].color;
	  if(!document.getElementById("Day_Table_button"+event_id))
	  {
		  document.getElementById("Day_Table_tr"+1+"_td"+event_room_id).appendChild(createButton("Day_Table_button"+event_id,0,100/780*(startTime-480),100/780*(endTime-startTime),event_title_text,event_room_id,event_color));
	  }
	}
  }
  
  return false;
};
