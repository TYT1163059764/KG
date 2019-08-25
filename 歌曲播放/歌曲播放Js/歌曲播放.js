// JavaScript Document
var a1=document.getElementsByClassName("a1")[0];
var cover=document.getElementById("cover");
var notice=document.getElementById("notice");
var closer=document.getElementsByClassName("close")[0];

a1.onclick=function(){
	cover.style.display="block";
	notice.style.display="block";
}
closer.onclick=function(){
	notice.style.display="none";
	cover.style.display="none";
}


/*头部*/
var dir_aa=document.getElementsByClassName("dir_aa");
for(let i=0;i<dir_aa.length;i++){	
	dir_aa[i].onmouseover=function(){
		var aaA=this.getElementsByTagName("a")[0];
		aaA.style.color="#fff";
		this.style.background="#0c8ed9";
	}
	dir_aa[i].onmouseout=function(){
		var aaA=this.getElementsByTagName("a")[0];
		aaA.style.color="#bbb";
		this.style.background="";
	}
}

//更多盒子
var dir_more=document.getElementsByClassName("dir_more")[0];
var dir_hind=document.getElementsByClassName("dir_hind")[0];

dir_more.onmouseover=function(){
	dir_hind.style.display="block";
}
dir_more.onmouseout=function(){
	dir_hind.style.display="none";
}
setTimeout(function(){
	dir_hind.onmouseover=function(){
		this.style.display="block";
	    }
	},500)
dir_hind.onmouseout=function(){
	clearTimeout();
	this.style.display="none";
}


<!--播放-->
var btn1 = document.getElementById("btn-play");
	btn1.onclick = function(){
		 if(audio.paused){                 
			audio.play();
		}
	}

<!--暂停-->
var btn2 = document.getElementById("btn-stop");
	btn2.onclick = function(){
		 if(audio.played){                 
			audio.pause();
		}
	}
	
var music = new Array();
music = ["林俊杰 - 那些你很冒险的梦","张杰 - 三生三世","朴树 - 平凡之路"];//歌单
var num = 0;
var name = document.getElementById("name");


<!--上一首-->
var btn3 = document.getElementById("btn-pre");
btn3.onclick = function(){
		num = (num +2)%3;
		audio.src =  "music/"+music[num]+".mp3";
		name.innerHTML = music[num];
		audio.play();
	}
	
<!--下一首-->
var btn4 = document.getElementById("btn-next");
btn4.onclick = function(){
		num = (num +1)%3;
		audio.src =  "music/"+music[num]+".mp3";
		name.innerHTML = music[num];
		audio.play();
	}
