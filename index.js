// automatic slideshow off //
$(document).ready(function(){
	$("#demo").carousel({
		interval : false
	});
});
$(document).ready(function(){
	$("#demo2").carousel({
		interval : false
	});
});

if(screen.width<=699){
    document.location = "mobile.html";
}