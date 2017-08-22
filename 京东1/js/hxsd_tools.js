		var hxsd_tools={};
		
		
		hxsd_tools.cr=function(){
				 var odiv=$("<div class='box'>回到顶部</div>")
			 	$("body").append(odiv);
			 	odiv.hide();
			$(window).scroll(function(){
					if($(window).scrollTop()>2000){
						odiv.show();
						odiv.click(function(){
							$("html,body").animate({"scrollTop":0},1000);
							odiv.hide();
						});
					}else{
						odiv.hide();
					}	
			});
			}
	hxsd_tools.gunlun=function(){
		var odiv=$(".page3");				
		var oli=$(".page3_main ul li");
//		console.log(odiv.eq(3).offset().top)
		$(".page3_main ul").hide();
		$(window).scroll(function(){													//滚动条事件
//			console.log(odiv.eq(2).offset().top)
			if(odiv.eq(0).offset().top<oli.eq(0).offset().top){
				$(".page3_main ul").show();
			}else{
				$(".page3_main ul").hide();
			}
			
			for(var i=0;i<odiv.length;i++){
				if((odiv.eq(i).offset().top)<oli.eq(i).offset().top){	//让当前DIV离浏览器高度小于等于他相对应他楼层高
				oli.eq(i).addClass("ac").siblings().removeClass("ac");				//让楼层显示，让其他楼层隐藏	
			}
			};
			
		});
		for(var j=0;j<oli.length;j++){	//绑定楼层点击事件
			oli.eq(j).click(function(){
				$("html,body").animate({"scrollTop":(odiv.eq($(this).index()).offset().top)},800);	//让内容高度等于相对应的div离内容的高度
			});
		}
	
			
			
			
			
			
		}
		$.extend(hxsd_tools);
