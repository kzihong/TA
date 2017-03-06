window.onload=function(){

    //模拟json数据
    var dataJson = {'data': [{'src':'forget.ico','nickname':'Venono曹','content':'我只是试试行不行','pub_time':'1分钟前'},{'src':'wish.ico','nickname':'Venono曹','content':'我只是试试行不行','pub_time':'1分钟前'},{'src':'past.ico','nickname':'Venono曹','content':'我只是试试行不行','pub_time':'1分钟前'},{'src':'heart.ico','nickname':'Venono曹','content':'我只是试试行不行','pub_time':'1分钟前'},{'src':'heart.ico','nickname':'Venono曹','content':'我只是试试行不行','pub_time':'1分钟前'},{'src':'heart.ico','nickname':'Venono曹','content':'我只是试试行不行','pub_time':'1分钟前'},{'src':'heart.ico','nickname':'Venono曹','content':'我只是试试行不行','pub_time':'1分钟前'},{'src':'favicon.ico','nickname':'Venono曹','content':'我只是试试行不行','pub_time':'1分钟前'},{'src':'favicon.ico','nickname':'Venono曹','content':'我只是试试行不行','pub_time':'1分钟前'},{'src':'past.ico','nickname':'Venono曹','content':'我只是试试行不行','pub_time':'1分钟前'},{'src':'wish.ico','nickname':'Venono曹','content':'我只是试试行不行','pub_time':'1分钟前'},{'src':'past.ico','nickname':'Venono曹','content':'我只是试试行不行','pub_time':'1分钟前'},{'src':'favicon.ico','nickname':'Venono曹','content':'我只是试试行不行','pub_time':'1分钟前'},{'src':'heart.ico','nickname':'Venono曹','content':'我只是试试行不行','pub_time':'1分钟前'},{'src':'forget.ico','nickname':'Venono曹','content':'我只是试试行不行','pub_time':'1分钟前'},{'src':'wish.ico','nickname':'Venono曹','content':'我只是试试行不行','pub_time':'1分钟前'}]};

    //监听scroll事件
    window.onscroll = function(){
        var isPosting = false;
        if(checkScollSlide('acomment','comment') && !isPosting){
            var oParent = document.getElementById('acomment');
            for(var i in dataJson.data){
                isPosting = true;
                var oBox = document.createElement('div');
                oBox.className = 'comment';
                oBox.innerHTML ='<div class="top"><img class="portrait circle" src="images/abbr/'+dataJson.data[i].src+'" alt="..."><span class="nickname ml10">'+dataJson.data[i].nickname+'</span><span class="fr great">+1</span></div><div class="base"><p class="com_con">'+dataJson.data[i].content+'</p><span class="small">'+dataJson.data[i].pub_time+'</span><span class="small ml10">回复</span></div>'	
                oParent.appendChild(oBox);
            }
            isPosting = false;
        }
    }

}

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