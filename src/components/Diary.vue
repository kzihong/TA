<template>
	<div id="diary">
		<router-view>
			
		</router-view>
	    <!--时间轴-->
	    <section id="cd-timeline" class="cd-container">
			<div class="cd-timeline-block">
				<div class="cd-timeline-img cd-picture">
					<img src="../assets/images/cd-icon-picture.svg" alt="Picture">
				</div><!-- cd-timeline-img -->

				<div class="cd-timeline-content">
					<h2>JS代码网 1</h2>
					<p>JS代码网专注分享js代码和CSS样式，拥有史上最全的JS代码和jQuery特效,jQuery插件,同时还提供网站模板,还与大家分享知名WEB前端的开源项目</p>
					<a href="" class="cd-read-more">阅读更多</a>
					<span class="cd-date">Jan 14</span>
				</div> <!-- cd-timeline-content -->
			</div> <!-- cd-timeline-block -->

			<div class="cd-timeline-block">
				<div class="cd-timeline-img cd-movie">
					<img src="../assets/images/cd-icon-movie.svg" alt="Movie">
				</div> <!-- cd-timeline-img -->

				<div class="cd-timeline-content">
					<h2>JS代码网 2</h2>
					<p>JS代码网专注分享js代码和CSS样式，拥有史上最全的JS代码和jQuery特效,jQuery插件,同时还提供网站模板,还与大家分享知名WEB前端的开源项目</p>
					<a href="" class="cd-read-more">阅读更多</a>
					<span class="cd-date">Jan 18</span>
				</div> <!-- cd-timeline-content -->
			</div> <!-- cd-timeline-block -->

			<div class="cd-timeline-block">
				<div class="cd-timeline-img cd-picture">
					<img src="../assets/images/cd-icon-picture.svg" alt="Picture">
				</div> <!-- cd-timeline-img -->

				<div class="cd-timeline-content">
					<h2>JS代码网 3</h2>
					<p>JS代码网专注分享js代码和CSS样式，拥有史上最全的JS代码和jQuery特效,jQuery插件,同时还提供网站模板,还与大家分享知名WEB前端的开源项目</p>
					<a href="" class="cd-read-more">阅读更多</a>
					<span class="cd-date">Jan 24</span>
				</div> <!-- cd-timeline-content -->
			</div> <!-- cd-timeline-block -->

			<div class="cd-timeline-block">
				<div class="cd-timeline-img cd-location">
					<img src="../assets/images/cd-icon-location.svg" alt="Location">
				</div> <!-- cd-timeline-img -->

				<div class="cd-timeline-content">
					<h2>JS代码网 4</h2>
					<p>JS代码网专注分享js代码和CSS样式，拥有史上最全的JS代码和jQuery特效,jQuery插件,同时还提供网站模板,还与大家分享知名WEB前端的开源项目</p>
					<a href="" class="cd-read-more">阅读更多</a>
					<span class="cd-date">Feb 14</span>
				</div> <!-- cd-timeline-content -->
			</div> <!-- cd-timeline-block -->

			<div class="cd-timeline-block">
				<div class="cd-timeline-img cd-location">
					<img src="../assets/images/cd-icon-location.svg" alt="Location">
				</div> <!-- cd-timeline-img -->

				<div class="cd-timeline-content">
					<h2>JS代码网 5</h2>
					<p>JS代码网专注分享js代码和CSS样式，拥有史上最全的JS代码和jQuery特效,jQuery插件,同时还提供网站模板,还与大家分享知名WEB前端的开源项目</p>
					<a href="" class="cd-read-more">阅读更多</a>
					<span class="cd-date">Feb 18</span>
				</div> <!-- cd-timeline-content -->
			</div> <!-- cd-timeline-block -->

			<div class="cd-timeline-block">
				<div class="cd-timeline-img cd-movie">
					<img src="../assets/images/cd-icon-movie.svg" alt="Movie">
				</div> <!-- cd-timeline-img -->

				<div class="cd-timeline-content">
					<h2>JS代码网 6</h2>
					<p>JS代码网专注分享js代码和CSS样式，拥有史上最全的JS代码和jQuery特效,jQuery插件,同时还提供网站模板,还与大家分享知名WEB前端的开源项目</p>
	                <a href="" class="cd-read-more">阅读更多</a>
					<span class="cd-date">Feb 26</span>
				</div> <!-- cd-timeline-content -->
			</div> <!-- cd-timeline-block -->
		</section> <!-- cd-timeline -->
	    <!--时间轴 end-->

	    <!--弧形弹出-->
	    <section class="radius-plugins">
	        <div id="jisou-info" class="jisou-info" style="display:none;"></div>
	        <div class="info-nr">
	            <div id="info-nr-phone" class="info-nr-phone color-orange">
	            <input id="info-nr-btn" type="checkbox" name="" value="" class="info-nr-menu">
	            <div> <a href="http://www.jq-school.com/" class="icon-phone"></a> </div>
	            <div> <a href="http://www.jq-school.com/" class="icon-location"></a> </div>
	            <div> <a href="http://www.jq-school.com/" class="icon-message"></a> </div>
	            <div> <a href="http://www.jq-school.com/" class="icon-share"></a> </div>
	            </div>
	        </div>
	    </section>
    </div>
</template>
<style scoped>
#diary{
	background-color: #e9f0f5;
}
	
</style>
<script>
import "../assets/css/timeline.css"
import "../assets/css/diary_main.css"


export default {
	mounted(){
		var btn = document.getElementById("info-nr-btn");
		btn.onclick = function () {
		    var divs = document.getElementById("info-nr-phone").querySelectorAll("div");
		    var className = className = this.checked ? "on" : "";
		    for (var i = 0; i < divs.length; i++) {
		        divs[i].className = className;
		    }
		    // document.getElementById("jisou-info").style.display = "on" == className ? "block" : "none";
		}
	}
}
</script>