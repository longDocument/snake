//游戏的构建方法(第三步构建游戏将之前的蛇对象,食物对象移过来)
(function ( window ) {
    //构造游戏方法
    var that=null;//给that一个全局变量
    function Game ( map ) {
        //引入食物,蛇,地图对象
        this.food = new Food();//this指向食物这个对象
        this.snake = new Snake();
        this.map = map;
        that=this;//把this指向that(游戏控制对象)
    }
    //游戏原型的开始方法
    Game.prototype.start = function ( ) {
        this.snake.render(this.map);//蛇渲染方法指向map
        this.food.render(this.map);//食物渲染方法指向map
        snakeMove (  );//(第四步初始化蛇动画封装调用)
        bindKey (  );//第六步(按键控制蛇移动封装)

    }
    
     function snakeMove (  ) {//(第四步初始化蛇动画封装)
         //给个定时器计时ID(第七步)
         var timeID=setInterval(function (  ) {
             this.snake.move(this.food,this.map);//小蛇移动一步 snake的js中move文件需要指向传参
             this.snake.render(this.map);//蛇渲染方法map在map中,this指向window

             //第七步判定蛇是否出边界
             var snakeX = this.snake.body[0].x*this.snake.width;//给出x/y坐标,是蛇头的x/乘以宽/高
             var snakeY = this.snake.body[0].y*this.snake.height;
             if(snakeX<0 || snakeX>map.offsetWidth || snakeY<0 || snakeY>map.offsetHeight ){
                 clearInterval(timeID);//清除定时器
                 alert('game over');//弹出对话框
             }

         }.bind(that),400);//改变this指向,指向that(游戏控制对象)
     }

     //第六步(按键控制蛇移动封装)
    function bindKey (  ) {
        window.onkeydown =function ( e ) {
            e = e || window.event;//按键事件兼容
            // console.log ( e.keyCode );可以检查按键的编码
            switch (e.keyCode){
                case 37:
                    //if控制蛇的反向不能移动
                    if(this.snake.direction!='right'){
                        this.snake.direction = 'left';
                    }
                    break;
                case 38:
                    if(this.snake.direction !='bottom'){
                        this.snake.direction = 'top';
                    }
                    break;
                case 39:
                    if(this.snake.direction != 'left'){
                        this.snake.direction = 'right';
                    }
                    break;
                case 40:
                    if(this.snake.direction != 'top'){
                        this.snake.direction = 'bottom';
                    }
                    break;
            }
        }.bind(that);//改变指向
    }

    window.Game =Game;
}(window));