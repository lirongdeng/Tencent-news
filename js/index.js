//头部导航条开始
$('#top_nav .spa1').hover(function(){
	$("#top_nav .top_nav_box .one").toggle();
})
$('#top_nav .spa2').hover(function(){
	$("#top_nav .top_nav_box .two").toggle();
})
$("#top_nav .top_nav_box .one").hover(function(){
	$("#top_nav .top_nav_box .one").toggle();
})
$("#top_nav .top_nav_box .two").hover(function(){
	$("#top_nav .top_nav_box .two").toggle();
})
$("#top_nav .top_nav_box .right .dl").click(function(){
	$("#outer").height($(document).height());
	$("#outer").show();
	$("#window").show();
})
$("#window .close").click(function(){
	$("#outer").hide();
	$("#window").hide();
})

//头部导航条结束

//新闻导航条开始
$("#news .news_nav li").hover(function(){
	$(this).children('span').addClass('shows');
	$(this).siblings('li').children('span').removeClass('shows');
	$(this).children('a').addClass('a_shows');
	$(this).siblings('li').children('a').removeClass('a_shows');
})
//隐藏部分开始
$("#news .news_nav .more").hover(function(){
	$("#news .news_nav ul").toggle();
})
$("#news .news_nav ul").hover(function(){
	$("#news .news_nav ul").toggle();
})
//把'更多'修改成当前a标签里的内容
$("#news .news_nav ul a").mouseenter(function(){
	$("#news .news_nav .more").text($(this).text()); 
})
$("#news .news_nav .iden1").mouseenter(function(){
	var xuhao = $(this).index()
	$("#news #left .iden").eq(xuhao).show().siblings('.iden').hide();
})
//隐藏部分结束

//新闻导航条结束

//链接图标部分开始
$("#news #left .news_divs .btn").hover(function(){
	$(this).find('div').toggle();
})
//链接图标部分结束

//右侧影响力开始

//定时器函数
var xuhao = 0;
function run(){
	xuhao++;
	xuhao=(xuhao==5)?0:xuhao;
	$("#news #right .yxl .pics .imgs").eq(xuhao).show().siblings('div').hide();
//	console.log(xuhao);
}
var timer = setInterval(run,2500);

$("#news #right .yxl .pics ul li").click(function(){
	clearInterval(timer);
	xuhao = $(this).index();
	$("#news #right .yxl .pics .imgs").eq(xuhao).show().siblings('div').hide();
	timer = setInterval(run,2500);
})
$("#news #right .yxl .pics .imgs").mouseenter(function(){
	clearInterval(timer);
})
$("#news #right .yxl .pics .imgs").mouseleave(function(){
	timer = setInterval(run,2500);
})

$("#news #right .yxl .pics").hover(function(){
	$("#news #right .yxl .pics .idens").toggle();
})
$("#news #right .yxl .pics .left").click(function(){
	clearInterval(timer);
	xuhao--;
	xuhao=(xuhao<0)?4:xuhao;
	$("#news #right .yxl .pics .imgs").eq(xuhao).show().siblings('div').hide();
//	console.log(xuhao);
//	timer = setInterval(run,2500);
})
$("#news #right .yxl .pics .right").click(function(){
	clearInterval(timer);
	xuhao++;
	xuhao=(xuhao==5)?0:xuhao;
	$("#news #right .yxl .pics .imgs").eq(xuhao).show().siblings('div').hide();
//	console.log(xuhao);
//	timer = setInterval(run,2500);
})
$("#news #right .yxl .pics .idens").mouseleave(function(){
	timer = setInterval(run,2500);
})

//右侧影响力结束

//右侧活动商务开始
var xuhao2;
$("#news #right .huodong .titl .idene").mouseenter(function(){
	xuhao2=$(this).index();
	$(this).addClass('show').siblings('.idene').removeClass('show');
	$("#news #right .huodong .box .idens").eq(xuhao2).show().siblings('.idens').hide();
	console.log(xuhao2);
})
//右侧活动商务结束

//右侧热度排行开始
var xuhao3;
$("#news #right .paihang .titl .idene").mouseenter(function(){
	xuhao3=$(this).index();
	$(this).addClass('show').siblings('.idene').removeClass('show');
	$("#news #right .paihang .box .idens").eq(xuhao3).show().siblings('.idens').hide();
	console.log(xuhao3);
})
//右侧热度排行结束


//底部影像力开始
var xuhao1 = 0;
$("#news .yxl22 .titl .hyh").click(function(){
	xuhao1++;
	if (xuhao1==3) {
		xuhao1=0;
	}
	$("#news .yxl22 .yxl_box .iden_yxl").eq(xuhao1).show(500).siblings('.iden_yxl').hide(500);
	console.log(xuhao1);
})
//底部影像力结束

//页脚开始
var num = 1;
$("#footer .box .more").click(function(){
	if (num==1) {
		$(this).addClass('more2').removeClass('more1');
		$("#footer .box .yc").css({'display':'block'})
		num=2;
	}else{
		$(this).addClass('more1').removeClass('more2');
		$("#footer .box .yc").css({'display':'none'})
		num=1;
	}
	
})







//页脚结束











