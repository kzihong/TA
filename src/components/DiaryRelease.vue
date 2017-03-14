<template>
	<!--发布日记-->
	<div class="container">
		<div class="weui-cells__title">
			<h1>Diary</h1>
		</div>
		<div class="weui-cells weui-cells_form">
			<div class="weui-cell">
				<div class="weui-cell__bd">
					<textarea class="weui-textarea" placeholder="请输入文本" rows="3"></textarea>
					<div class="weui-textarea-counter"><span>{{inputCount}}</span>/{{restInputCount}}</div>
				</div>
			</div>
		</div>
		<!--图片-->
		<div class="page__bd">
			<div class="weui-gallery" id="gallery">
				<span class="weui-gallery__img" id="galleryImg"></span>
				<div class="weui-gallery__opr">
					<a href="javascript:" class="weui-gallery__del">
						<i class="weui-icon-delete weui-icon_gallery-delete"></i>
					</a>
				</div>
			</div>
			<div class="weui-cells weui-cells_form">
				<div class="weui-cell">
					<div class="weui-cell__bd">
						<div class="weui-uploader">
							<div class="weui-uploader__hd">
								<p class="weui-uploader__title">图片上传</p>
								<div class="weui-uploader__info">{{imgCount}}/{{restImgcount}}</div>
							</div>
							<div class="weui-uploader__bd">
								<ul class="weui-uploader__files" id="uploaderFiles">
									<li class="weui-uploader__file" style="background-image:url(/src/assets/images/pic_160.png)"></li>
									<li class="weui-uploader__file" style="background-image:url(/src/assets/images/pic_160.png)"></li>
									<li class="weui-uploader__file" style="background-image:url(/src/assets/images/pic_160.png)"></li>
									<li class="weui-uploader__file weui-uploader__file_status" style="background-image:url(/src/assets/images/pic_160.png)">
										<div class="weui-uploader__file-content">
											<i class="weui-icon-warn"></i>
										</div>
									</li>
									<li class="weui-uploader__file weui-uploader__file_status" style="background-image:url(/src/assets/images/pic_160.png)">
										<div class="weui-uploader__file-content">50%</div>
									</li>
								</ul>
								<div class="weui-uploader__input-box">
									<input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" multiple="">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="btn-group">
			<a id="release__btn" href="javasrcipt:;" class="weui-btn weui-btn_primary"><i></i>发布</a>
		</div>
	</div>
	<!--发布日记 end-->
</template>

<script>
	function getRegexLen(str,regex){
		// console.log(str,str.match(regex).length)
		return str.match(regex) ? str.match(regex).length : 0;
	}

	export default {
		data(){
			return {
				imgCount : 0,
				inputCount: 0
			}
		},
		computed:{
			restImgcount(){
				return 9 - this.imgCount;
			},
			restInputCount(){
				return 200 - this.inputCount;
			}
		},
		mounted(){
			
			// 使用_vue保存vue对象
			let _vue = this;
			// 获取当前已上传图片数目
			_vue.imgCount = $('#uploaderFiles li').length;
			let $gallery = $('.weui-gallery');
			let $galleryImg = $('.weui-gallery__img').eq(0);
			// 图片展示廊显示
			$('.weui-uploader__file').click(function (){
				let $imgsrc = $(this).attr('style');
				// console.log($imgsrc);
				$gallery.show();
				$galleryImg.attr('style',$imgsrc);

			})
			// 图片展示廊隐藏
			$gallery.click(function (){
				$(this).hide();
			})

			$('#release__btn').click(function (){
				// 与后台进行ajax交互效果
				// $.ajax({
				// 	url:'',
				// 	type:'post',
				// 	dataType:'json',
				// 	data:{},
				// 	success:function (){

				// 	},
				// 	fail:function (){

				// 	}
				// })

				// 模拟效果 
				let _self = $(this)
				$(this).find('i').addClass('weui-loading')

				setTimeout(function (){
					_self.find('i').removeClass('weui-loading')
				},2000)

			})

			$('.weui-textarea').keyup(function (){
				// 默认语言时中文
				const $this = $(this);
				console.log('input...');
				let $val = $this.val();
				// console.log($val);
				// 正则处理字符串长度，一个中文默认长度为1，两个个英文字母默认长度为1，空格忽略
				let engwordLen = getRegexLen($val,/[a-zA-Z]/g);
				let spaceLen = getRegexLen($val,/\s/g);
				_vue.inputCount = $val.length - spaceLen - engwordLen + Math.floor(engwordLen/2);
				if(_vue.inputCount >= 200){
					$this.prop('disabled',true)
				}
			})
		}
	}
</script>


<style scoped>
</style>