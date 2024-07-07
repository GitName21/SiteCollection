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
				transform: 'translateY(0.5rem)',
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
		// alert('')
		// console.log(NextNavNowShowArray[this.index]);
		var objec = navMobile[this.index].children;	//this.index当前点击元素的下标
		if(NextNavNowShowArray[this.index] == 1){	//这里要用==
			objec[1].style.cssText = "display:block";	//display:block不能放在animate里面，不然小米浏览器没有效果
			objec[1].animate([	//文字进入动画
				{
					opacity: 0,
					transform: 'translateX(-2rem)',
				},
				{
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
					opacity: 1,
					transform: 'translateX(0rem)',
				},
				{
					opacity: 0,
					transform: 'translateX(-2rem)',
				},
			],{
				duration:300,
				fill:'forwards'
			})
			setTimeout(function(){
				objec[1].style.cssText = "display:none";
			}, 300 )
			NextNavNowShowArray[this.index] = 1;
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

// 数量
var NumObject = document.querySelector(".main-item-moblie-name");
var NumCont = NumObject.children[1];
var listNum = document.querySelectorAll(".main-item-content>li");
NumCont.innerHTML = "共[ " + listNum.length + "条 ]";
var thisIndex = 0;
// 内容选项卡式面板
var MainMenuList = document.querySelectorAll(".main-menu-list li");
var MainItem = document.querySelectorAll(".main-item");
// console.log(MainItem)
for(let i=0;i<MainMenuList.length;i++){
	MainMenuList[i].index = i;	//重新赋值给下标
	MainMenuList[i].onclick = function(){
		var thisIndex = this.index;
		// 菜单栏点击焦点
		MainMenuList[this.index].classList.add("main-menu-list-focus");	//当前点击元素添加焦点样式
		for(let i=0;i<MainMenuList.length;i++){
			MainMenuList[i].index = i;
			if(MainMenuList[i] != MainMenuList[this.index]){
				MainMenuList[i].classList.remove("main-menu-list-focus"); //其它元素移除焦点样式
			}
		}
		// 内容点击焦点
		for(let i=0;i<MainItem.length;i++){	//循环内容所有标签
			MainItem[i].index = i;
			if(MainItem[i].index == thisIndex){	//如果内容标签的下标和点击的菜单下标一致，则显示对应的内容
			MainItem[i].style.cssText = "z-index:99";
				MainItem[i].animate([	//进入动画
					{
						position:"absolute",
						opacity:0,
						transform: 'translateY(1.5rem)'
					},{
						position:"relative",
						opacity:1,
						transform: 'translateY(0)'
					}
				],{
					duration:500,
					fill:'forwards'
				})
			}else{
				MainItem[i].style.cssText = "z-index:98";
				MainItem[i].animate([	//退出动画 
					{
						position:"relative",
						opacity:1
					},{
						position:"absolute",
						opacity:0
					}
				],{
					duration:0,
					fill:'forwards'
				})
			}
		}
	}
}


//元素居中
let WindowWidth = window.innerWidth;
let WindowHeight = window.innerHeight;
// 历史记录
var History = document.querySelector(".history-wrap")
var HisIcon = document.querySelector(".history-icon")
// 收藏
var alertWrap = document.querySelector(".alert-wrap");
var collection = document.querySelector(".collection");

// 遮罩打开
var mask = document.querySelector(".mask");
function maskShow(){
	mask.style.cssText = "display:block";
	mask.animate([
		{
			background: 'rgba(0, 0, 0, 0)'
		},
		{
			background: 'rgba(0, 0, 0, 0.5)'
		}
	],{
		duration:600,
		fill:'forwards'
	})
}
// 遮罩收起
mask.onclick = function(){
	// 遮罩层收起
	mask.style.cssText = "display:none";
	//历史记录图标隐藏
	HisIcon.style.cssText = "display:flex";
	// 历史记录收起
	History.animate([
		// {
		// 	width:'400px',
		// 	height:'400px',
		// 	borderRadius:'1.25rem'

		// },
		{
			width:'3.75rem',
			height:'3.75rem',
			borderRadius:'3rem',	//不能写border-radius
			right:'10%',
			bottom:'10%'
		}
	],{
		duration:400,
		fill:'forwards'
	});
	
	
	
	// 收藏
	alertWrap.animate([
		{
			opacity:'0',
			transform: 'scale(0.5)'
		}
	],{
		duration:250,
		fill:'forwards'
	});
	
	var alertWrapTime = setTimeout(function(){
		alertWrap.style.cssText = "display:none";
		clearTimeout(alertWrapTime);
	},200)
}

// 点击历史记录
var objWidth = 0;
HisIcon.onclick = function(){
	if(WindowWidth<768){	//如果是移动端设备的话，历史记录块的宽度调整为90%；
		objWidth = '90%';
	}else{
		objWidth = '400px';	//如果不是移动端设备，就用400px宽度
	}
	//历史记录图标隐藏
	HisIcon.style.cssText = "display:none";
	maskShow();	//弹出遮罩层
	
	let HisAlertLeft = (WindowWidth - 400) / 2 + "px";
	let HisAlertTop = (WindowHeight - 400) / 2 + "px";
	
	if(WindowWidth<768){
		HisAlertLeft = '5%';
	}
	// console.log(HisAlertLeft)
	History.animate([
		// {
		// 	width:'3.75rem',
		// 	height:'3.75rem',
		// 	borderRadius:'3rem',	//不能写border-radius
		// 	right:'10%',
		// 	bottom:'10%'
		// },
		{
			width:objWidth,
			height:'400px',
			borderRadius:'1.25rem',
			right:HisAlertLeft,
			bottom:HisAlertTop,
			transform: 'scale(1)',
		}
	],{
		duration:200,
		fill:'forwards'
	})
}

// 收藏弹窗
collection.onclick = function(){
	maskShow();
	let ColAlertLeft = (WindowWidth - 400) / 2 + "px";
	let ColAlertTop = (WindowHeight - 137) / 2 + "px";
	alertWrapCss = "left:" + ColAlertLeft + ";" + "top:" + ColAlertTop + ";" + "display:block";
	alertWrap.style.cssText = alertWrapCss;
	
	alertWrap.animate([
		{
			opacity:'1',
			transform: 'scale(1)'
		}
	],{
		duration:250,
		fill:'forwards'
	})
}
