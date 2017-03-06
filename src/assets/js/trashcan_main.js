	window.onload=function(){

    //模拟json数据
    var dataJson = {'data': [{'src':'forget.ico','nickname':'Venono曹','passages':'我只是试试行不行'},{'src':'wish.ico','nickname':'Venono曹','passages':'我只是试试行不行'},{'src':'past.ico','nickname':'Venono曹','passages':'我只是试试行不行'},{'src':'heart.ico','nickname':'Venono曹','passages':'我只是试试行不行'},{'src':'heart.ico','nickname':'Venono曹','passages':'我只是试试行不行'},{'src':'heart.ico','nickname':'Venono曹','passages':'我只是试试行不行'},{'src':'heart.ico','nickname':'Venono曹','passages':'我只是试试行不行'},{'src':'favicon.ico','nickname':'Venono曹','passages':'我只是试试行不行'},{'src':'favicon.ico','nickname':'Venono曹','passages':'我只是试试行不行'},{'src':'past.ico','nickname':'Venono曹','passages':'我只是试试行不行'},{'src':'wish.ico','nickname':'Venono曹','passages':'我只是试试行不行'},{'src':'past.ico','nickname':'Venono曹','passages':'我只是试试行不行'},{'src':'favicon.ico','nickname':'Venono曹','passages':'我只是试试行不行'},{'src':'heart.ico','nickname':'Venono曹','passages':'我只是试试行不行'},{'src':'forget.ico','nickname':'Venono曹','passages':'我只是试试行不行'},{'src':'wish.ico','nickname':'Venono曹','passages':'我只是试试行不行'}]};

    //监听scroll事件
    window.onscroll = function(){
        var isPosting = false;
        if(checkScollSlide('dustbin','rubbish') && !isPosting){
            var oParent = document.getElementById('dustbin');
            for(var i in dataJson.data){
                isPosting = true;
                var oBox = document.createElement('div');
                oBox.className = 'rubbish';
                oBox.innerHTML = '<img class="portrait circle" alt="..." src="images/abbr/'+dataJson.data[i].src+'"><span class="nickname">'+dataJson.data[i].nickname+'</span><p class="passages">'+dataJson.data[i].passages+'</p>	<span class="small stamp">'+dataJson.data[i].pubtime+'</span> <button class="good_btn"></button><div class="good_box"><span class="agree" style="left:200%;">点赞</span><span class="com_btn" style="left:200%;">评论</span></div>';
                oParent.appendChild(oBox);
                g_show();
            }
            isPosting = false;
        }
    }  
	g_show();
	//检查是否满足加载数据条件,parent 父元素id clsName 块元素类
function checkScollSlide(parent,clsName){
    var oParent = document.getElementById(parent),
        aBoxArr = oParent.getElementsByClassName(clsName),
        // 最后一个box元素的offsetTop+高度的一半
        lastBoxH = aBoxArr[aBoxArr.length - 1].offsetTop + aBoxArr[aBoxArr.length - 1].offsetHeight / 2,
        //兼容js标准模式和混杂模式
        scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
        height = document.documentElement.clientHeight || document.body.clientHeight;
    return lastBoxH < scrollTop + height ? true : false;
	}	

		//工具栏显示隐藏函数 
		function g_show(){
			var g_btn=document.getElementsByClassName("good_btn");
		for(let i=0;i<g_btn.length;i++)
			{g_btn[i].onclick=function(){
				// alert("adf");
				var num=i;
				setTimeout(function(){move(num);},30);
			}
		}
	}
	// 动画计时器
	var init=100,speed,flag=true;
	function move(i){
		var lock;
		var agree=document.getElementsByClassName("agree"),
			comment=document.getElementsByClassName("com_btn");
			if(flag){
				speed=Math.ceil(init/3);
				init-speed>=5?init=init-speed:init=0;
				left="left:"+init+"%";
				agree[i].setAttribute("style",left);
				comment[i].setAttribute("style",left);
				lock=setTimeout(function(){move(i);},30);
				if(0==init){
					flag=false;
					clearTimeout(lock);
					}
				}
			else{
				speed=Math.ceil((100-init)/3);
				init+speed<=100?init=init+speed:init=100;
				left="left:"+init+"%";
				agree[i].setAttribute("style",left);
				comment[i].setAttribute("style",left);
				lock=setTimeout(function(){move(i);},30);
				if(100==init){
					flag=true;
					clearTimeout(lock);
					}
			}	
		}
}