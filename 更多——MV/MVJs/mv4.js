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

/*大图*/
var BigImgs=document.getElementsByClassName("BigImgs")[0];
var i=1;
setInterval(function(){
	//单位换算
    if(BigImgs.style.left==""){
    	x=0;
	}else{
    	x=parseInt(BigImgs.style.left);
	}
	//改变图片位置
	BigImgs.style.left=(x-668)+"px";
	i++;

    if( i==6 ){
		i=1;
		BigImgs.style.left=0+"px";
    }
    console.log(x);
},1000);



/*内容 菜单部分*/
var dds=document.getElementsByTagName("dd");
for(let i=0;i<dds.length-1;i++){
	dds[i].onmouseover=function(){
		var as=this.getElementsByTagName("a")[0];
		this.style.background="#85d4f3";
		as.style.color="#fff";
	}
	dds[i].onmouseout=function(){
		var as=this.getElementsByTagName("a")[0];
		this.style.background="";
		as.style.color="#555";
	}
}
