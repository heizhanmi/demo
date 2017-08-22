;$(function(){
	function gunlun(){
		var odiv=$(".public");				
		var oli=$(".jd_elevator li");
		var n;
		$(".jd_elevator").hide();
		$(window).scroll(function(){//滚动条事件
			console.log($(window).scrollTop());
			if((odiv.eq(0).offset().top)<oli.eq(0).offset().top+100){
				$(".jd_elevator").show();
			}else{
				$(".jd_elevator").hide();
			}
			if($(window).scrollTop()>odiv.eq(11).offset().top){
				$(".jd_elevator").hide();
			}
			for(var i=0;i<odiv.length;i++){
				if((odiv.eq(i).offset().top)<oli.eq(i).offset().top){	//让当前DIV离浏览器高度小于等于他相对应他楼层高
				oli.eq(i).addClass("ac").siblings().removeClass("ac"); //让楼层显示，让其他楼层隐藏
				n=i;
			}
			};			
		});
		for(var j=0;j<oli.length;j++){	                                                     		//绑定楼层点击事件
			oli.eq(j).click(function(){
				$("html,body").animate({"scrollTop":(odiv.eq($(this).index()).offset().top)},800);	//让内容高度等于相对应的div离内容的高度
			});
		};
	}gunlun();
//	!_---------------------------------------------------------------------------
	
	function caidan(){
		$(".focus .inner .list-nav li").on('mouseover',function(){						//li移入事件
			$(this).addClass("ac").siblings().removeClass("ac");
		$(".focus .popup").show();
		var _this=$(this);
		var n=$(this).index();												//定义一个变量n记录他的坐标
		$(".focus .popup .first").eq(n).show().siblings().hide();						//相对应的dl显示，其他隐藏
		$(".focus .popup .first").eq(n).mouseover(function(){								//相对应的dl的移入事件
			_this.addClass("ac").siblings().removeClass("ac");	//它的移入事件不变
		});
	});
	$(".wrap").mouseleave(function(){
		$(".focus .popup").hide();
		$(".focus .inner .list-nav li").removeClass("ac");
	});
	};caidan();

	
})(jQuery)
