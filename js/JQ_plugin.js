;(function($){
	$.fn.extend({
	//拖拽
	darg:function(title){		
		return this.each(function(){
				title=title||$(this)
				var _this=$(this);
			title.mousedown(function(ev){		
			var disX=ev.pageX-$(this).offset().left;
			var disY=ev.pageY-$(this).offset().top;			
			$(document).mousemove(function(ev){
				var l=ev.pageX-disX;
				var t=ev.pageY-disY;
				//居中样式
				var s_l=$(window).width();
				var s_h=$(window).height();
				if(l<0){
					l=0;
				};
				if(t<0){
					t=0
				};
				if(t>s_h-_this.outerHeight()){
					t=s_h-_this.outerHeight()
				}
				if(l>s_l-_this.outerWidth()){
					l=s_l-_this.outerWidth()
				};
	
				_this.css({"left":l,"top":t})
				
			});		
			$(document).mouseup(function(){
			$(document).unbind("mousemove");			
	});
			return false;    
	});

						
		})				
	},
	//居中	
	showCenter:function(){
		return this.each(function(){
					var _this=$(this)
					function run(){
					var this_w=_this.outerWidth()
					var this_h=_this.outerHeight()
					var s_l=$(window).width();
					var s_h=$(window).height();
					var t=(s_h-this_h)/2;
					var l=(s_l-this_w)/2
			
					_this.css({"left":l,"top":t})
		
					}
					run();
					$(window).resize(run);
			
		
		})
	},
	//选项卡
	imgTab:function(opt){
		var def={
			"aotuplay":true,
			"time":1500
		};
	  var n_opt=$.extend(def,opt);
	  var n=0;
		return this.each(function(){
			var _this=$(this)
			$(this).find("ol li").click(function(){
				$(this).addClass("ac").siblings().removeClass("ac");
				_this.find("ul li").eq($(this).index()).show().siblings().hide();
				n=$(this).index();
			});
			
			var timer
			if(n_opt.aotuplay){
				function ontime(){
					timer=setInterval(function(){
					n++;
					if(n>=_this.find("ol li").length){
						n=0;
					}
				_this.find("ol li").eq(n).addClass("ac").siblings().removeClass("ac");
				_this.find("ul li").eq(n).show().siblings().hide();
			
				},n_opt.time);
				}ontime();
				$(this).hover(function(){
				clearInterval(timer);
			},function(){
				ontime();
			});	
			}	
		})
	},
	
	
	
	//气压表
	ckAll:function(obj){
		return this.each(function(){
			var n=0;											//定义一个变量来存储小选项的值		
			var _this=$(this);									//保存未来实例对象	
			$(this).click(function(){		
				if(_this.prop("checked")){						//当大选项被勾选时 小选项全选	
					obj.prop("checked",true);
					n=obj.length;								//小选项的值为它的长度
				}else{											//当大选项取消选中状态时 小选项全取消	
					obj.prop("checked",false);	
					n=0;										//小选项 的值为0
				}	
			});
			obj.each(function(){
				$(this).click(function(){
					if($(this).prop("checked")){				//小选项的值为被选中时
						n++;									//它的值+1		
						if(n>=obj.length){						//当它的值大于或等与它的长度时让大选项被勾选
							_this.prop("checked",true)
						}
					}else{
						n--;									//被取消时他的值-1
						_this.prop("checked",false)				//大选项取消
						 
					}
				})
			})
					
		})
		
	}
	
	
	
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})(jQuery);


