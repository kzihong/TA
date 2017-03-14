<template>
	<div>
		<!--日记详情-->
		<div class="container">
		    <div class="weui-article">
		        <h1>标题</h1>
		        <section>
		            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容。。。
		        </section>
		        <!--图片九宫格-->
		        <section>
		            <div class="page grid js_show">
		                <div class="weui-grids">
		                    <a href="javascript:;" class="weui-grid">
		                        <div class="weui-grid__icon">
		                            <img src="../assets/images/pic_160.png" alt="">
		                        </div>
		                    </a>
		                    <a href="javascript:;" class="weui-grid">
		                        <div class="weui-grid__icon">
		                            <img src="../assets/images/pic_160.png" alt="">
		                        </div>
		                    </a>
		                    <a href="javascript:;" class="weui-grid">
		                        <div class="weui-grid__icon">
		                            <img src="../assets/images/pic_160.png" alt="">
		                        </div>
		                    </a>
		                    <a href="javascript:;" class="weui-grid">
		                        <div class="weui-grid__icon">
		                            <img src="../assets/images/pic_160.png" alt="">
		                        </div>
		                    </a>
		                    <a href="javascript:;" class="weui-grid">
		                        <div class="weui-grid__icon">
		                            <img src="../assets/images/pic_160.png" alt="">
		                        </div>
		                    </a>
		                    <a href="javascript:;" class="weui-grid">
		                        <div class="weui-grid__icon">
		                            <img src="../assets/images/pic_160.png" alt="">
		                        </div>
		                    </a>
		                    <a href="javascript:;" class="weui-grid">
		                        <div class="weui-grid__icon">
		                            <img src="../assets/images/pic_160.png" alt="">
		                        </div>
		                    </a>
		                    <a href="javascript:;" class="weui-grid">
		                        <div class="weui-grid__icon">
		                            <img src="../assets/images/pic_160.png" alt="">
		                        </div>
		                    </a>
		                    <a href="javascript:;" class="weui-grid">
		                        <div class="weui-grid__icon">
		                            <img src="../assets/images/pic_160.png" alt="">
		                        </div>
		                    </a>
		                </div>
		            </div>
		        </section>
		        <!--图片九宫格 end-->
		        
		        <div class="weui-footer">
		            <p class="weui-footer__text" style="text-align:left">
		                <span>2017年1月9日&nbsp;22:55</span>
		                <a href="javascript:;" class="remove">删除</a>
		            </p>
		        </div>
		    </div>

		</div>
		<!--日记详情 end-->

		<!--gallery-->
		<div class="weui-gallery">
			<span class="weui-gallery__img" :style="bgStyle"></span>
			<div class="weui-gallery__opr">
				<a href="javascript:;" class="weui-gallery__del">
					<i class="weui-icon-delete weui-icon_gallery-delete"></i>
				</a>
			</div>
		</div>
		<!--gallery end-->

		<!--dailog-->
		<div id="dialog1" style="display: none;">
			<div class="weui-mask"></div>
			<div class="weui-dialog">
				<div class="weui-dialog__hd"><strong class="weui-dialog__title">删除提示</strong></div>
				<div class="weui-dialog__bd">删除该日记？删除后不可恢复，请慎重选择！！！</div>
				<div class="weui-dialog__ft">
					<a id="dialog__submit" href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default">确定</a>
					<a id="dialog__cancel" href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">取消</a>
				</div>
			</div>
		</div>
		<!--dailog end-->

	</div>
</template>

<style scoped>
	.remove{
		margin-left: 1em;
	}
	.weui-grid__icon{
		width: 100%;
		height: 100%;
	}
</style>


<script>
	import "../assets/css/diary_main.css"	
	export default {
		data(){
			return {
				bgStyle:'background-image:url(../assets/images/pic_160.png)'
			}
		},
		mounted() {
			// 使用_vue保存vue对象
			let _vue = this;
			let $gallery = $('.weui-gallery');
			let $galleryImg = $('.weui-gallery__img').eq(0);
			// 图片展示廊显示
			$('.weui-grid').click(function (){
				let $imgsrc = $(this).find('img').attr('src');
				$gallery.show();
				_vue.bgStyle = `background-image:url(${$imgsrc})`;

			})
			// 图片展示廊隐藏
			$gallery.click(function (){
				$(this).hide()
			})

			$('.remove').click(function (){
				$('#dialog1').css('display','block');
			})

			$('#dialog1').click(function (ev){
				if(ev.target && ev.target.id !== 'dialog__submit'){
					$(this).css('display','none')
				}
				if(ev.target && ev.target.id === 'dialog__submit'){
					// code here...
				}
			})
		}
	}
</script>