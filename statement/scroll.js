window.addEventListener('scroll', function () {
    var Y = scrollController.Y();
    console.log(Y)
	
    var oldHeight = 0;
    var newHeight = 0;
    var billDates = $(".billDate");
    for(var i = 1; i <= billDates.length; i++){
    	if(i == 1){
    		newHeight = $("#fixbox"+i).height();
    	}else{
    		newHeight = oldHeight + $("#fix"+i).height() + $("#fixbox"+i).height() + i%5;
    	}
    	if(oldHeight < Y && Y < newHeight){
    		visual.add(document.getElementById('fix'+i));
    	}
    	oldHeight = newHeight;
    }

}, false);

var visual = {};
visual.add = function (el) {
    $(el).addClass('fix');
    $(el).siblings().removeClass('fix');
};

var scrollController = {
};
scrollController.Y = function () {
    return window.pageYOffset || window.document.documentElement.scrollTop;
}
