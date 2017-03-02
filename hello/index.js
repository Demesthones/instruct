function color(){
	console.log("hello");
	increment();
	var cDiv = document.getElementById("hello");
	cDiv.style.background = "#" + ('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);
}

function init(){
	var hello = document.getElementById("hello");
	hello.style.margin = "40px 40px 40px 40px";
	hello.style.width = "300px";
	hello.style.height = "300px";
	hello.style.border = "solid";
	hello.style.background = "#F1A9A0";
	
	var cDiv = document.createElement('div');
	cDiv.id = "count";
	cDiv.style.cssText = 'position:absolute;width:100%;textAlign:center;';
	cDiv.innerHTML = "Count: 0";
	document.body.appendChild(cDiv);
}

function increment(){
	increment.count = ++increment.count || 1;
	var cDiv = document.getElementById("count");
	cDiv.innerHTML = "Count: " + increment.count;
}