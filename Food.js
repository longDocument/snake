//食物的代码在这里(第一步创建食物)
(function ( window ) {
    var list = [];
    function Food ( width,height,bgColor ) {//给食物添加默认属性
        this.width=width || 20 ;
        this.height = height || 20 ;
        this.bgColor = bgColor || 'green';
    }
    Food.prototype.render = function ( map ) {
        //食物生成之前删除老食物
        removeFood ( map );
        //食物的随机坐标
        this.x = Math.floor(Math.random()*map.offsetWidth/this.width)*this.width;
        this.y = Math.floor(Math.random()*map.offsetHeight/this.height)*this.height;
        var div = document.createElement('div');//添加食物盒子
        //食物盒子样式
        div.style.position = 'absolute';
        div.style.width= this.width+'px';
        div.style.height= this.height+'px';
        div.style.backgroundColor=this.bgColor;
        div.style.left = this.x+'px';
        div.style.top = this.y+'px';
        map.appendChild(div);//将食物盒子添加到地图
        list.push(div);
    }

    function removeFood ( map ) {
        for(var i = 0;i<list.length;i++){
            map.removeChild(list[i]);
        }
        list.length=0;
    }


    window.Food = Food ;//食物暴露出去
}(window));