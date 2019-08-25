//轮播大图
var index=1;
var time;
var Big_Img=document.getElementById("Big_Img");	
time=setInterval("show()",2000);	
function show(id){
	if( Number(id) ){    //函数把对象的值转换为数字
		//鼠标事件
		index=id;
		clearInterval(time);	 //清除定时器
	}else{
		//定时器
		index++;
		if(index==5){   //循环展示
			index=1;	
		}	
	}
	//改变图片
	Big_Img.src="playImg/Big_Img"+index+".jpg";
	//改变颜色
	var lis=document.getElementsByTagName("li");
	for(var i=0;i<lis.length;i++){
		lis[i].setAttribute("class","scroll_number_out");
		if( i==(index-1) ){
			lis[i].setAttribute("class","scroll_number_over");	
		}
	}	
}		
function start(){
	time=setInterval("show()",2000);	
}

//登陆平台
var kg=document.getElementById("kg");
var pt=document.getElementById("pt");
var logo_switchBox=document.getElementsByClassName("logo_switchBox")[0];
var logo_switchBoxx=document.getElementsByClassName("logo_switchBoxx")[0];

kg.onclick=function(){
	this.style.color="#fb6f22";
	this.style.borderBottom="1px solid #ff5c00";
	pt.style.color="#666";
	pt.style.borderBottom="1px solid #dbdcd6";
	logo_switchBox.style.display="block";
	logo_switchBoxx.style.display="none";
}
pt.onclick=function(){
	this.style.color="#fb6f22";
	this.style.borderBottom="1px solid #ff5c00";
	kg.style.color="#666";
	kg.style.borderBottom="1px solid #dbdcd6";
	logo_switchBox.style.display="none";
	logo_switchBoxx.style.display="block";
}

//开服时间
var comein=document.querySelectorAll(".comein");
var Ti=document.querySelectorAll(".comein i");
var Ta=document.querySelectorAll(".comein a");
var Tp=document.querySelectorAll(".comein p");


for(let i=0;i<comein.length;i++){
	comein[i].onmouseover=function(){
		Ti[i].style.display="none";
		Tp[i].style.display="inline-block";
		Ta[i].style.backgroundPosition="0px -3px";
	}
	comein[i].onmouseout=function(){
		Ti[i].style.display="inline-block";
		Tp[i].style.display="none";
		Ta[i].style.backgroundPosition="0px -41px";
	}
}

//translate-X
//推荐盒子-滑动
var Llis=document.querySelectorAll(".recommendBox ul li");
//var divs=document.querySelectorAll(".recommendBox div");

/*for(let i=0;i<Llis.length;i++){
	Llis[i].onmouseover=function(){
		for(var j=0;j<Llis.length;j++){
			if(i==j){
				Llis[j].style.display="block";
			}else{
				Llis[j].style.display="none";
			}
		}
	}
	Llis[i].onmouseout=function(){
		for(var j=0;j<Llis.length;j++){
			if(i==j){
				Llis[j].style.display="inline-block";
			}else{
				Llis[j].style.display="inline-block";
			}
		}
	}
}*/

//推荐游戏盒子
var lis=document.querySelectorAll(".gameBox li");
var host=document.querySelectorAll(".host");
var gift=document.querySelectorAll(".gift");
var btna=document.querySelectorAll(".btns_box a");


for(let i=0;i<lis.length;i++){
	lis[i].onmouseover=function(){
		this.style.background="#f66";
		btna[i].style.background="#fff";
		host[i].style.backgroundPosition="0 -86px";
		gift[i].style.backgroundPosition="0 -122px";
	}
	lis[i].onmouseout=function(){
		this.style.background="";
		btna[i].style.background="#fff";
		host[i].style.backgroundPosition="0 -67px";
		gift[i].style.backgroundPosition="0 -104px";
	}
}

//跳转到最上面
window.onscroll=function(){
	if(document.documentElement.scrollTop+document.body.scrollTop>600){
		document.getElementById("scollTop").style.display="block";	
	}
	else{
		document.getElementById("scollTop").style.display="none";
	}
}
onscroll();