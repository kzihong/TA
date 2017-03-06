<template>
	<div>
		<ul class="content">
			<li class="message">
				<p>语言是无声的导弹  波及范围大如疯狗  杀伤力强  持久影响  有累积效应  几乎无法补救  伤了不仅利益关系  善于展现贪欲恶念并加深  如恶魔般反复劝诱  而使自省愈加难了  内涵烟消云散  少言多思  少戏多行</p>
				<div class="mes-bottom clearfix">
					<span class="author">
						<img src="../assets/images/head-photo.jpg" alt="">
						<span>kzh</span>
					</span>
					<div class="mes-bottom-func">
						<button>···</button>
						<div>
							<div>
								<button>点赞</button>
								<button>评论</button>
							</div>
						</div>
					</div>
					<div style="clear:both"></div>
					<div class="comments">
						<ul>
							<li class="comment">
								<span class="reviewer">姜交泽:</span>
								<span class="com-content">你们都不够我帅,你们都不够我帅,你们都不够我帅</span>
							</li>
							<li class="comment">
								<span class="reviewer">姜交泽</span>:
								<span class="com-content">你们都不够我帅,你们都不够我帅,你们都不够我帅</span>
							</li>
						</ul>
					</div>
				</div>
			</li>
			<li class="message">
				<p>语言是无声的导弹  波及范围大如疯狗  杀伤力强  持久影响  有累积效应  几乎无法补救  伤了不仅利益关系  善于展现贪欲恶念并加深  如恶魔般反复劝诱  而使自省愈加难了  内涵烟消云散  少言多思  少戏多行</p>
				<div class="mes-bottom clearfix">
					<span class="author">
						<img src="" alt="">
						<span>kzh</span>
					</span>
					<div class="mes-bottom-func">
						<button>···</button>
						<div>
							<div>
								<button>点赞</button>
								<button>评论</button>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li class="message">
				<p>语言是无声的导弹  波及范围大如疯狗  杀伤力强  持久影响  有累积效应  几乎无法补救  伤了不仅利益关系  善于展现贪欲恶念并加深  如恶魔般反复劝诱  而使自省愈加难了  内涵烟消云散  少言多思  少戏多行</p>
				<div class="mes-bottom clearfix">
					<span class="author">
						<img src="" alt="">
						<span>kzh</span>
					</span>
					<div class="mes-bottom-func">
						<button>···</button>
						<div>
							<div>
								<button>点赞</button>
								<button>评论</button>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li class="message">
				<p>语言是无声的导弹  波及范围大如疯狗  杀伤力强  持久影响  有累积效应  几乎无法补救  伤了不仅利益关系  善于展现贪欲恶念并加深  如恶魔般反复劝诱  而使自省愈加难了  内涵烟消云散  少言多思  少戏多行</p>
				<div class="mes-bottom clearfix">
					<span class="author">
						<img src="" alt="">
						<span>kzh</span>
					</span>
					<div class="mes-bottom-func">
						<button>···</button>
						<div>
							<div>
								<button>点赞</button>
								<button>评论</button>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li class="message">
				<p>语言是无声的导弹  波及范围大如疯狗  杀伤力强  持久影响  有累积效应  几乎无法补救  伤了不仅利益关系  善于展现贪欲恶念并加深  如恶魔般反复劝诱  而使自省愈加难了  内涵烟消云散  少言多思  少戏多行</p>
				<div class="mes-bottom clearfix">
					<span class="author">
						<img src="" alt="">
						<span>kzh</span>
					</span>
					<div class="mes-bottom-func">
						<button>···</button>
						<div>
							<div>
								<button>点赞</button>
								<button>评论</button>
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>

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
<style>
	
</style>
<script>
	import "../assets/css/warm_wall.css"

	export default{
		mounted(){
			// (function(){
				var btn = document.getElementById("info-nr-btn");
				btn.onclick = function () {
				    var divs = document.getElementById("info-nr-phone").querySelectorAll("div");
				    var className = className = this.checked ? "on" : "";
				    for (var i = 0; i < divs.length; i++) {
				        divs[i].className = className;
				    }
				    // document.getElementById("jisou-info").style.display = "on" == className ? "block" : "none";
				}
			// })()

			//kzh的代码
			// (function(){
				var slideBtn = (function(isHide){
					//创建一个闭包持续引用isHide变量
					return function(_this){
						if(isHide){
							$(_this).next().children("div").animate({
								marginLeft:0
							},200)
						}
						else{
							$(_this).next().children("div").animate({
								marginLeft:"100%"
							},200)
						}
						isHide = !isHide;
					}
				})(true)
				//点赞+评论显示和隐藏
				$(".mes-bottom-func").children("button").tap(function(){
					slideBtn(this);
				})


				var toggleComment = (function(isHide){
					//创建一个闭包持续引用isHide变量
					return function(_this){
						if(isHide){
							$(_this).closest(".mes-bottom-func").siblings(".comments").hide();
						}
						else{
							$(_this).closest(".mes-bottom-func").siblings(".comments").show();
						}
						isHide = !isHide;
					}
				})(true)
				$(".mes-bottom-func").children("div").children("div").children("button:nth-of-type(2)").tap(function(){
					toggleComment(this);
				})
			// })()
		}
	}
</script>