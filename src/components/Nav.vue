<template>
	<!--底部导航-->
	<div class="weui-tabbar">
	    <router-link to="/diary" class="weui-tabbar__item" active-class="red">
	        <span style="display: inline-block;position: relative;">
	            <img src="../assets/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
	            <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
	        </span>
	        <p class="weui-tabbar__label">日记</p>
	    </router-link>
	    <router-link to="/warm_wall" class="weui-tabbar__item" active-class="red">
	        <img src="../assets/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
	        <p class="weui-tabbar__label">温馨墙</p>
	    </router-link>
	    <router-link to="/trash_can" class="weui-tabbar__item" active-class="red">
	        <span style="display: inline-block;position: relative;">
	            <img src="../assets/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
	            <span class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span>
	        </span>
	        <p class="weui-tabbar__label">垃圾桶</p>
	    </router-link>
	</div>
	<!--底部导航 end-->
</template>
<style>
	.red{
		background-color:red;
	}
</style>
<script>

	export default{

	}
</script>