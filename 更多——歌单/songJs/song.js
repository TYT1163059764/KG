// JavaScript Document
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

/*更多盒子*/
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



/*菜单*/
var menu2=document.getElementsByClassName("menu2");

for(let i=0;i<menu2.length;i++){
	menu2[i].onmouseover=function(){
		var ma=this.getElementsByTagName("a")[0];
		menu2[i].style.background="#169af3";
		ma.style.color="#fff";
	}
	menu2[i].onmouseout=function(){
		var ma=this.getElementsByTagName("a")[0];
		menu2[i].style.background="";
		ma.style.color="#555";
	}
}

