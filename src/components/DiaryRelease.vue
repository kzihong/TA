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
	                <div class="weui-textarea-counter"><span>0</span>/200</div>
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
	                            <div class="weui-uploader__info">0/2</div>
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
	        <a href="javasrcipt:;" class="weui-btn weui-btn_primary">发布</a>
	        <a href="javasrcipt:;" class="weui-btn weui-btn_primary weui-btn_loading"><i class="weui-loading"></i>发布</a>
	        <a href="javasrcipt:;" class="weui-btn weui-btn_primary weui-btn_disabled">发布</a>
	    </div>
	</div>
	<!--发布日记 end-->
</template>
<style>
	
</style>
<script>
	
</script>