// 移动端导航栏事件
var navMobilBtn = document.querySelector(".nav-mobil-btn");
var navMobileWrap = document.querySelector(".nav-mobile-wrap");
var navWrap = document.querySelector(".nav-wrap");
var NowShow = true;
var navMobilBtnLine2 = document.querySelector(".nav-mobil-btn-line2");
var navMobilBtnLine3 = document.querySelector(".nav-mobil-btn-line3");
var navMobilBtnLine1 = document.querySelector(".nav-mobil-btn-line1");
navMobilBtn.onclick = function(){
	if(NowShow){
		navWrap.style.cssText = "background-color:rgba(0,0,0,0)";
		navMobilBtnLine1.style.cssText = "display: none";
		navMobilBtnLine2.style.cssText = "transform: rotate(45deg)";
		navMobilBtnLine3.style.cssText = "transform: rotate(-45deg);bottom:0.44rem";
		navMobileWrap.animate([
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
		navMobileWrap.animate([
			{
				visibility: 'visible',
				transform: 'translateY(0)',
				opacity: 1
			},
			{
				visibility: 'visible',
				transform: 'translateY(1rem)',
				opacity: 0.5
			},
			{
				visibility: 'hidden',
				transform: 'translateY(-2.5rem)',
				opacity: 0
			},
		],{
			duration:450,
			fill:'forwards'
		})
		NowShow = true;
	}
	console.log(NowShow)
}