// JavaScript Document
var index=2;
var imgNum=3;

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
