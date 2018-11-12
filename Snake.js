//蛇的所有代码都在这(第二步创建蛇)
(function ( window ) {
    function getRandomColor (  ) {
        var color =['0','1','2','3','4','5','6','7','8','9','a','b','c','d','f','g'];
        var str = '#';
        for(var i = 0;i<6;i++){
            var num=Math.floor(Math.random()*16);//取整操作
            str+=color[num];
        }
        return str;
    }
    var list =[];//用于删除老蛇的数组
    function Snake ( width,height,direction ) {//构造函数(蛇)
        this.width = width || 20;
        this.height = height || 20;
        this.direction = direction || 'right';
        this.body=[
            {x:3,y:1,bgColor:'red'},
            {x:2,y:1,bgColor:'green'},
            {x:1,y:1,bgColor:'yellow'}
        ];
    }
    Snake.prototype.render = function ( map ) {
        removeSnake ( map );//渲染之前将老蛇删除(第五步)
        //循环遍历蛇的身体并添加样式
        for(var i = 0;i<this.body.length;i++){
            var snakeList = this.body[i];//将身体每节存储起来
            var div1 = document.createElement('div');//添加div到页面上
            //给div添加样式
            div1.style.position = 'absolute';
            div1.style.width=this.width+'px';
            div1.style.height=this.height+'px';
            //引入数组中的样式
            div1.style.backgroundColor =snakeList.bgColor;
            div1.style.left = snakeList.x*this.width+'px';
            div1.style.top= snakeList.y*this.height+'px';
            //将蛇加入地图
            map.appendChild(div1);
            list.push(div1);//(第五步将身体加入数组)
        }
    }

    //删除老蛇的封装(第五步)
    function removeSnake ( map ) {//(第五步删除移动的老蛇传参map)
        for(var i = 0;i<list.length;i++){//循环遍历数组
            map.removeChild(list[i]);//遍历一次删除一次
        }
        list.length=0;//蛇的数组长度再次归零(以便再次使用)
    }

    //创建蛇的初始化动画(第四步初始化蛇动画)
     Snake.prototype.move = function ( food,map ) {
         for(var i = this.body.length-1;i>0;i--){
             this.body[i].x=this.body[i-1].x;
             this.body[i].y=this.body[i-1].y;
         }
         switch (this.direction){
             case 'right':
                 this.body[0].x+=1;
                 break;
             case 'left':
                 this.body[0].x-=1;
                 break;
             case 'top':
                 this.body[0].y-=1;
                 break;
             case 'bottom':
                 this.body[0].y+=1;
                 break;
         }
          //第八步 (吃食物长身体)
          var snakeHeadX = this.body[0].x*this.width;//给出蛇头x/y坐标,是蛇头的x/乘以宽/高
          var snakeHeadY = this.body[0].y*this.height;//多了snake出bug,这就是snake的原型
          var foodX = food.x;//给出食物x/y坐标,是蛇头的x/乘以宽/高
          var foodY = food.y;//问参数要食物对象food

          var lastSnakeInto = this.body[this.body.length-1];
          if(snakeHeadX==foodX&&snakeHeadY==foodY){//重合则长身体
              this.body.push({
                  x:lastSnakeInto.x,
                  y:lastSnakeInto.y,
                  bgColor: getRandomColor (  )
                      //'yellow'//给个随机颜色
              });
              //食物吃了重新生成一个食物
              food.render(map);//需要传参 交互再次生成一个新的食物
          }
     }

    //将蛇添加进地图
    window.Snake = Snake;
}(window));