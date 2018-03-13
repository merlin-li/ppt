$(function(){
	"use strict";
	$("a.anchorScroll").anchorScroll();
	
	$('.spor ul').on('click','li',function(){
		$('html,body').animate({scrollTop:0 },100);
		$('.floor_list,.increment').hide();
		$('.newsdetails,.goback').show();
	})
	
	$('.goback').on('click',function(){
		$('.floor_list').show();
		$('.newsdetails,.goback,.increment').hide();
		$('html, body').scrollTop($('#sec05').offset().top-54);
	})
	$('.addServer').on('click',function(){
		$('.floor_list,.newsdetails').hide();
		$('.increment,.goback').show();
		$('html,body').animate({scrollTop:0 },100);
	})
	
	$('.c_r5,.logo').on('click',function(){
		$('html,body').animate({scrollTop:0 },100);
	})
	
	$('.sec02main').on('click','li',function(){ 
		var cont='<div class="demand">'
					+'<div class="video"><video src="images/code.mp4" controls="controls" autoplay width="100%" height="600"></video></div>'
					+'<div class="advertisement flex">'
						+'<div class="proimg"><img src="images/xmmc_21.jpg" /></div>'
						+'<div class="flexbox"><h4>个梵蒂冈梵蒂冈发的股份的股份的个梵蒂冈地方个</h4>'
						+'<p>个梵蒂冈地方个梵蒂冈地方个梵蒂冈地方干到死个发送 股份对公司发是的风格发 覆盖发的高德发给对方个梵蒂冈梵蒂冈官方是的</p>'
						+'</div>'
						+'<div class="baojia" onclick="openQQ()">索要制作报价</div>'
					+'</div>'
					+'<div class="btn-close"></div>'
				+'</div>';
		new dialogBox.tips({
			position:"center",
			id:"updatedemand",
			style:"updatedemand",
			hasTitle:true,
			title:"",
			content:cont,
			callback:function(fn){
									
			}	
		});
	})
	
	 var swiper = new Swiper('.swiper-container', {
	 	loop : true,
	 	autoplay: {
		    delay: 5000,
	    },
	    slidesPerGroup: 4,
        slidesPerView: 4,
        spaceBetween: 20,
        pagination: {
	        el: '.swiper-pagination',
	        clickable: true
	    },
    });
	
	function changeFloor(){
		var floorObj = $(".floor_list"),
			navbar = $(".navbar");
        if(floorObj.length < 1){
            return;
        }
		var scrollTop =$(document).scrollTop();//滚动高度  

        floorObj.each(function(idx,e){
		   var ypos = $(this).offset().top-100;
		   var h = $(this).height();
		   var list=$('.serverpro li');
		   var hblist=$('.hb ul li');
		    if(scrollTop > ypos && scrollTop<ypos+h){
		        navbar.find("li").eq(idx).find('a').addClass("href").parent().siblings().find('a').removeClass('href');	
		        if(idx==3){
		        	list.addClass('animated flipInY').animate({opacity:"1"});
		        }else{
		        	list.removeClass('animated flipInY');
		        }
		        if(idx==4){
		        	hblist.addClass('animated flipInX').animate({opacity:"1"});
		        }else{
		        	hblist.removeClass('animated flipInX');
		        }
		    }
		});
	}
	//滚动	
	var flag = true;
	$(window).scroll(function(){
		if(flag){ 
			setTimeout(changeFloor,800); 
			flag = false;
		}else{ 
			flag = true;
		}			
	});
	
	

var wrapTop = $(".digital").offset().top;
var istrue = true;
$(window).on("scroll",
function() {
    var s = $(window).scrollTop();
    if (s > wrapTop && istrue) {
        $(".timer").each(count);
        function count(a) {
            var b = $(this);
            a = $.extend({},
            a || {},
            b.data("countToOptions") || {});
            b.countTo(a)
        };
        istrue = false;
    };
})
//设置计数
$.fn.countTo = function (options) {
	options = options || {};
	return $(this).each(function () {
		//当前元素的选项
		var settings = $.extend({}, $.fn.countTo.defaults, {
			from:            $(this).data('from'),
			to:              $(this).data('to'),
			speed:           $(this).data('speed'),
			refreshInterval: $(this).data('refresh-interval'),
			decimals:        $(this).data('decimals')
		}, options);
		//更新值
		var loops = Math.ceil(settings.speed / settings.refreshInterval),
		    increment = (settings.to - settings.from) / loops;
		//更改应用和变量
		var self = this,
		$self = $(this),
		loopCount = 0,
		value = settings.from,
		data = $self.data('countTo') || {};
		$self.data('countTo', data);
		//如果有间断，找到并清除
		if (data.interval) {
			clearInterval(data.interval);
		};
		data.interval = setInterval(updateTimer, settings.refreshInterval);
		//初始化起始值
		render(value);
		function updateTimer() {
			value += increment;
			loopCount++;
			render(value);
			if (typeof(settings.onUpdate) == 'function') {
				settings.onUpdate.call(self, value);
			}
			if (loopCount >= loops) {
				//移出间隔
				$self.removeData('countTo');
				clearInterval(data.interval);
				value = settings.to;
				if (typeof(settings.onComplete) == 'function') {
					settings.onComplete.call(self, value);
				}
			}
		}
		function render(value) {
			var formattedValue = settings.formatter.call(self, value, settings);
			$self.html(formattedValue);
		}
		});
    };
    $.fn.countTo.defaults={
    	from:0,               //数字开始的值
    	to:0,                 //数字结束的值
    	speed:1000,           //设置步长的时间
    	refreshInterval:100,  //隔间值
    	decimals:0,           //显示小位数
    	formatter: formatter, //渲染之前格式化
    	onUpdate:null,        //每次更新前的回调方法
    	onComplete:null       //完成更新的回调方法
    };
    function formatter(value, settings){
    	return value.toFixed(settings.decimals);
    }
    //自定义格式
    $('#count-number').data('countToOptions',{
    	formmatter:function(value, options){
    		return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
    	}
    });
    //定时器
    $('.timer').each(count);
    function count(options){
    	var $this=$(this);
    	options=$.extend({}, options||{}, $this.data('countToOptions')||{});
    	$this.countTo(options);
    }
	
});

function autoScroll(obj){ 
	$(obj).find("table").animate({
		marginTop : "-61px"  
	},500,function(){  
		$(this).css({marginTop : "0px"}).find("tr:first").appendTo(this); 
	})  
}  

function openQQ() {
    window.open('http://wpa.qq.com/msgrd?v=3&uin=563703943&site=qq&menu=yes','_brank');
}

$(function(){
    $.sublime_slideshow({
        src:[
        {url:"images/kv_bg_02.jpg"},
        {url:"images/kv_bg_01.jpg"}
        ],
        duration:   10,
        fade:       2,
        scaling:    1.4,
        rotating:   false
    });
});



$(document).ready(function(){
    $(".fakeloader").fakeLoader({
        timeToHide:1200,
        bgColor:"#010101",
        spinner:"spinner5"
    });
});



$(function(){
    $('.bxslider').bxSlider({
        touchEnabled:true,
    });
});