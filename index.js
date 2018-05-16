// JavaScript Document
var index=2;
var imgNum=3;
/*function changeImg(){
	"use strict";
	var c=document.getElementById("imgCanvas");
	var ctx=c.getContext("2d");
	//ctx.fillStyle="white";
	//ctx.fillRect(0,0,150,75);
	var imgObj=new Image();
	imgObj.src="./img/photo1.jpg";
	imgObj.onload=function(){
		ctx.drawImage(this,0,0);//300,150
		
		var w=this.width;
		var h=this.height;
		var ccw=getComputedStyle(c,null).width;
		ccw=ccw.substring(0,ccw.indexOf("p"));
		var cch=getComputedStyle(c,null).height;
		cch=cch.substring(0,cch.indexOf("p"));
		var cw=parseInt(ccw);
		var ch=parseInt(cch);
		var dw=cw/w;
		var dh=ch/h;
		// 裁剪图片中间部分
		if(w > cw && h > ch || w < cw && h < ch){
			if (dw > dh) {
				alert(1);
				ctx.drawImage(this, 0, (h - ch/dw)/2, w, ch/dw, 0, 0, cw, ch);
			} else {
				alert(2);
				ctx.drawImage(this, (w - cw/dh)/2, 0, cw/dh, h, 0, 0, cw, ch);
			}
		}
		// 拉伸图片
		else{
			if(w < cw){
				alert((h - ch/dw)/2);
				alert(w);
				alert(ch/dw);
				alert(cw);
				alert(ch);
				ctx.drawImage(this, 0, (h - ch/dw)/2, w, ch/dw, 0, 0, cw, ch);
			}else {
				ctx.drawImage(this, (w - cw/dh)/2, 0, cw/dh, h, 0, 0, cw, ch);
			}
		}
	};
}*/


function changeImg()
{
	"use strict";
	var element=document.getElementById("p");
	element.src="./img/photo"+index.toString()+".jpg";
	if(++index%(imgNum+1)===0){
		index=1;
	}
}

window.onload=function(){
	"use strict";
	setInterval("changeImg();",2000);
};
