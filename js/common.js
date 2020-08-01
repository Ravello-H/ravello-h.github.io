var ravello = {
	namespace: function(ns) {
		var parts = ns.split("."),
		object = this,
		i,len;
		for (i=0, len=parts.length; i < len; i++) {
			if(!object[parts[i]]) {object[parts[i]] = {};}
			object = object[parts[i]];
		}
		return object;
	}
};
ravello.namespace("temp");


if(document.location.host.indexOf('ravello-h.github.io') < 0){
	window.location.href='//mc.ravelloh.com/?from=mirror';
}
$(function(){
	console.log("%c Ravello-H %c Welcome! ","color: #fff; margin: 1em 0; padding: 5px 0; background: #29c75f;","margin: 1em 0; padding: 5px 0; background: #efefef;");
	navPut();footerPut();pageLastInfoPut();pageCommentPut();
	urlDetection();
	moreFunction();_gTimeInitSet();

	var domload = $('.ravello-mask-flex.load-page[data-domload]');
	if(domload.length>0) {
		ravello.temp.domload = true;
		setTimeout(()=>{
			$('.ravello-mask-flex.load-page[data-domload] .flex-loader').css({'border':'16px solid #29c75f'});
			$('.ravello-mask-flex.load-page[data-domload] .flex-text').text('Done');
			setTimeout(()=>{$('.ravello-mask-flex.load-page[data-domload]').fadeOut(500);},200);
		},200);
	}
});
window.onscroll = function(){loadImg(aImages);}

//顶部导航放置
ravello.namespace("nav");
function navPut() {
	var navHeader = $('#navput:not([data-disable])');

	if(navHeader.length > 0) {
		navHeader.html('<div class="nav_mText"><span onclick="window.top.location.href=\'/\';"><img src="img/avatar.jpg" class="nicknameEmoji" style="width:20px;height:20px"> RavelloH</span></div><nav class="nav"><input type="checkbox" class="nav_cb" id="nav-menu" /><div class="nav_content"><div class="nav_logo"><a href="/" target="_self"><img src="/img/favicon.ico"><h2>RavelloH</h2></a></div><div class="dropdown"><div id="nav_wrap_user"><a href="/u/" target="_self"><div class="nav_avatarArea"><img class="avatar ga-spin" src="/favicon.ico" align="absmiddle"><span class="nav_user_message_count">Loading</span></div></a><div class="dropdown-content"><a href="/u" class="nav_drop_user_message_count">历史消息</a><a href="/more">更多</a><a href="//github.com/Ravello-H">项目</a></div></div></div><ul class="nav_list"><li><a href="//ravello-h.github.io" target="_self">主页</a></li><li><a href="/minecraft" target="_self">Minecraft</a></li><li><a href="/dynamic" target="_self">动态</a></li><li><a href="/classification" target="_self">分类</a></li><li><a href="/file" target="_self">文档</a></li><li><a href="/resources" target="_self">资源</a></li></ul></div><div class="wrap-btn"><label class="nav_btn" for="nav-menu"></label></div><div class="nav_flex"></div></nav>');


		}
	}
function footerPut() {
	var footer = document.getElementsByClassName("ifooter")[0] || false;
	if(footer) {
		footer.innerHTML = "<div class='footerNav'><div class='footer-menu'><ul class='menu-items'></ul></div><div class='footer-state'><div class='ravello-info'><a href='/ ' target='_blank'>ravello-h.github.io</a></div><div class='disclaimers'><span>Copyright © 2019 - 2020 RavelloH. All rights reserved. / 部分内容<code>index.html</code>使用 <a rel="license"
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh">知识共享 署名-非商业性使用-相同方式共享 4.0 (CC
                BY-NC-ND 4.0)</a> 协议授权。</span></div></div></div>";
	}
}

function setCookie(name,value,hours) {
	hours = Number(hours);
    var exp = new Date();
    exp.setTime(exp.getTime() + hours*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString() + ";path=/";;
}

//其他函数调用
function moreFunction() {
	if(isExitsFunction("getaImages")) {getaImages();}
	if(isExitsFunction("loadImg")) {loadImg(aImages);}
}
function isExitsFunction(funcName) {
	try {if (typeof(eval(funcName)) == "function") {return true;}} catch(e) {}
	return false;
}

//本地与联网检测
function urlDetection() {
	var thisUrl = window.location.href;
	if (thisUrl.indexOf('file:///') > -1 || thisUrl.indexOf('://localhost') > -1) {//本地
	} else {
		var _hmt = _hmt || [];
		(function() {
			var hm = document.createElement("script");
			hm.src = "https://hm.baidu.com/hm.js?db56d1989c70c67beaed5e17906bbd21";
			var s = document.getElementsByTagName("script")[0]; 
			s.parentNode.insertBefore(hm, s);
		})();
	}
}

if(document.attachEvent) {
	window.attachEvent("onload",function(){_onAllLoad();});
} else if(document.addEventListener) {
	window.addEventListener("load",function(){_onAllLoad();},true);
}
function _onAllLoad() {
	if(!ravello.temp.domload) {
		setTimeout(()=>{
			$('.ravello-mask-flex.load-page .flex-loader').css({'border':'16px solid #29c75f'});
			$('.ravello-mask-flex.load-page .flex-text').text('All done');
			setTimeout(()=>{$('.ravello-mask-flex.load-page').fadeOut(500);},200)
		},200);
	}
}

function _loadPageMask(state) {
	if(!state) {return false;}
	$('.ravello-mask-flex.load-page .flex-loader').css({'border':'16px solid #f3f3f3','border-top':'16px solid #29c75f'});
	$('.ravello-mask-flex.load-page .flex-text').text(state.message);
	$('.ravello-mask-flex.load-page').fadeIn(500);
}

function _gTimeInitSet(){
	ravello.namespace("date");
	ravello.date.d = new Date();
	ravello.date.year = ravello.date.d.getFullYear();
	ravello.date.month = ravello.date.d.getMonth() + 1;
	ravello.date.day = ravello.date.d.getDate();
	ravello.date.hour = ravello.date.d.getHours();
	ravello.date.minute = ravello.date.d.getMinutes();
	ravello.date.second = ravello.date.d.getSeconds();
	ravello.date.time = ravello.date.year+'-'+ravello.date.month+'-'+ravello.date.day+' '+ravello.date.hour+':'+ravello.date.minute+':'+ravello.date.second;
	setTimeout(()=>{
		_gTimeInitSet();
	},500);	
}


//获取链接参数
function getQueryString(name) {
	var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
	var r = window.location.search.substr(1).match(reg);
	if (r != null) {return unescape(r[2]);}
	return null;
}

//图片懒加载
var aImages = new Array();
var aImages_t = new Array();
var itick = 0;
function getaImages() {
	var temp = document.getElementsByTagName('img').length;
	var iobj;
	for(var i=0;i<temp;i++) {
		iobj = document.getElementsByTagName('img')[i];
		if(iobj.dataset) {aImages_t[i] = iobj.dataset.imgurl;} else {aImages_t[i] = iobj.getAttribute("data-imgurl");}
		if(typeof(aImages_t[i]) != "undefined") {aImages[itick] = iobj;itick++;}
	}
}
//getBoundingClientRect 是图片懒加载的核心
function loadImg(arr) {
	for(var i = 0, len = arr.length; i < len; i++) {
		if(arr[i].getBoundingClientRect().top < document.documentElement.clientHeight && !arr[i].isLoad) {
		arr[i].isLoad = true; //图片显示标志位
		(function(i){
			setTimeout(function(){
			if(arr[i].dataset) { //兼容不支持data的浏览器
				aftLoadImg(arr[i], arr[i].dataset.imgurl);
			} else {aftLoadImg(arr[i], arr[i].getAttribute("data-imgurl"));}
			arr[i].style.cssText = "opacity:1;";
			}, 500)
		})(i);
		}
	}
}
function aftLoadImg(obj, url) {
	var oImg = new Image();
	oImg.onload = function(){
		obj.src = oImg.src; //下载完成后将该图片赋给目标obj目标对象
	}
	oImg.src = url; //oImg对象先下载该图像
}

