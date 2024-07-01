// 移动端导航栏事件
var navMobilBtn = document.querySelector(".nav-mobil-btn");	//获取点击对象
var navMobileWrap = document.querySelector(".nav-mobile-wrap");
var navWrap = document.querySelector(".nav-wrap");
var NowShow = true;	//设置展开开关
var navMobilBtnLine2 = document.querySelector(".nav-mobil-btn-line2");
var navMobilBtnLine3 = document.querySelector(".nav-mobil-btn-line3");
var navMobilBtnLine1 = document.querySelector(".nav-mobil-btn-line1");

navMobilBtn.onclick = function(){
	if(NowShow){
		navWrap.style.cssText = "background-color:rgba(0,0,0,0)";
		navMobilBtnLine1.style.cssText = "display: none";
		navMobilBtnLine2.style.cssText = "transform: rotate(45deg)";
		navMobilBtnLine3.style.cssText = "transform: rotate(-45deg);bottom:0.44rem";
		navMobileWrap.animate([	//导航栏打开动画
			{
				visibility: 'visible',
				transform: 'translateY(-2.5rem)',
				opacity: 0
			},
			{
				visibility: 'visible',
				transform: 'translateY(1rem)',
				opacity: 1
			},{
				visibility: 'visible',
				transform: 'translateY(0rem)',
				opacity: 1
			},
		],{
			duration:350,
			fill:'forwards'
		})
		NowShow = false;
	}else{
		navWrap.style.cssText = "background-color:rgba(29,29,65,1)";
		navMobilBtnLine1.style.cssText = "display: block";
		navMobilBtnLine2.style.cssText = "transform: rotate(0deg)";
		navMobilBtnLine3.style.cssText = "transform: rotate(0deg);bottom:0rem";
		navMobileWrap.animate([	//导航栏收起动画
			{
				visibility: 'visible',
				transform: 'translateY(0)',
				opacity: 1
			},
			{
				visibility: 'visible',
				transform: 'translateY(1rem)',
				opacity: 1
			},
			{
				visibility: 'hidden',
				transform: 'translateY(-2.5rem)',
				opacity: 0
			},
		],{
			duration:350,
			fill:'forwards'
		})
		NowShow = true;
	}
}

// 移动端二级导航栏事件
var navMobile = document.querySelectorAll(".nav-mobile>li");	//获取点击对象
// console.log(navMobile.length)
var NextNavNowShowArray = new Array();

for(var i=0;i<navMobile.length;i++){
	NextNavNowShowArray.push(1);	//利用数组给每个菜单设置展开开关（用来判断菜单是否展开）,默认按钮为true,状态：未展开
	navMobile[i].index = i;	//赋值下标给对应对象
	// console.log("对象下标：" + navMobile[i].index)
	// console.log("数组：" + NextNavNowShowArray)
	
	navMobile[i].onclick = function(){
		// console.log(NextNavNowShowArray[this.index]);
		var objec = navMobile[this.index].children;	//this.index当前点击元素的下标
		if(NextNavNowShowArray[this.index] == 1){	//这里要用==
			objec[1].animate([	//文字进入动画
				{
					display:'block',
					opacity: 0,
					transform: 'translateX(-2rem)',
				},
				{
					display:'block',
					opacity: 1,
					transform: 'translateX(0rem)',
				},
			],{
				duration:500,
				fill:'forwards'
			})
			NextNavNowShowArray[this.index] = 0;
		}else{
			objec[1].animate([	//文字进入动画
				{
					display:'block',
					opacity: 1,
					transform: 'translateX(0rem)',
				},
				{
					display:'none',
					opacity: 0,
					transform: 'translateX(-2rem)',
				},
			],{
				duration:300,
				fill:'forwards'
			})
			NextNavNowShowArray[this.index] = 0;
		}
		// console.log("当前数组值：" + NextNavNowShowArray)
	}
}

// pc端设置菜单事件
var SetBtn = document.querySelector(".main-set-btn");
var SetList = document.querySelector(".main-set-list");
var SetShow = true;
SetBtn.onclick = function(){
	if(SetShow){
		// 按钮动画
		SetBtn.animate([
			{
				transform: 'rotate(0deg)',
			},
			{
				transform: 'rotate(360deg)',
				background:'#6359E9',
			}
		],{
			duration:500,
			fill:'forwards'
		})
		
		SetList.animate([
			{
				visibility: 'hidden',
				transform: 'translateY(6rem) scale(0)',
				opacity: 0
			},
			{
				visibility: 'visible',
				transform: 'translateY(0rem) scale(1)',
				opacity: 1
			},
			{
				visibility: 'visible',
				transform: 'translateY(0rem) scale(1)',
				opacity: 1
			}
		],{
			duration:300,
			fill:'forwards'
		});
		SetShow = false;
	}else{
		// 按钮动画
		SetBtn.animate([
			{
				transform: 'rotate(0deg)',
			},
			{
				transform: 'rotate(-360deg)',
				background:'#343469',
			}
		],{
			duration:500,
			fill:'forwards'
		})
		
		SetList.animate([
			{
				visibility: 'visible',
				transform: 'translateY(0rem) scale(1)',
				opacity: 1
			},
			{
				visibility: 'hidden',
				transform: 'translateY(6rem) scale(0)',
				opacity: 0
			},
		],{
			duration:300,
			fill:'forwards'
		});
		SetShow = true;
	}

}

// 移动端顶部轮播
var SwiperBth = document.querySelectorAll(".swiper-bth li");
var SwiperObject = document.querySelector(".main-left-wrap")
for(var i=0;i<SwiperBth.length;i++){
	SwiperBth[i].index = i;
	SwiperBth[i].onclick = function(){
	
		// console.log(this.index)
		var left = 90*this.index+this.index * 5.3;	//5.3是style里面的外边距
		SwiperObject.style.cssText = "left:" + -left + "%";
		
		for(var i=0;i<SwiperBth.length;i++){
			SwiperBth[i].index = i;
			// console.log(SwiperBth[i].index)
			if(SwiperBth[i].index == this.index){
				SwiperBth[i].style.cssText = "background-color:#CCCCCC;";
			}else{
				SwiperBth[i].style.cssText = "background-color:#1D1D41;";
			}
		}

	}
}
