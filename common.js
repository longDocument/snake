/*
** 
* 本文件作用：浏览器兼容性封装
*/

/*
根据id获取元素
 */
function id ( str ) {
    return document.getElementById(str);
}

/**
 * 1.获取元素的文本（兼容性处理）
 * @param ele  元素
 * @return 获取到的文本
 */
function getText ( ele ) {
    //浏览器能力检测
    if(ele.textContent == undefined){//IE8浏览器
        return ele.innerText
    }else{
        return ele.textContent;
    }
}

/**
 * 2.设置元素的文本（兼容性处理）
 * @param ele  元素
 * @param txt  需要设置的文本
 */
function setText ( ele,txt ) {
    //浏览器能力检测
    if(ele.textContent == undefined){//IE8浏览器
        ele.innerText = txt;
    }else{
        ele.textContent = txt;
    }
}

/**
 * 3.获取上一个兄弟元素
 * @param ele   元素
 * @return 上一个兄弟元素/null
 */
function getPrevbiousElementSibling ( ele ) {
    var node =  ele.previousSibling;//1.先获取上一个兄弟节点
    //2.如果不是null 并且节点类型不是1，就继续找上一个兄弟节点
    while(node != null && node.nodeType != 1 ){
        node = node.previousSibling;
    }
    return node;
}

/**
 * 4.获取下一个兄弟元素
 * @param ele  元素
 * @return 下一个兄弟元素/null
 */
function getNextElementSibling ( ele ) {
    var node = ele.nextSibling;//获取下一个节点
    while (node != null && node.nodeType != 1){//只要下一个节点不是null并且节点类型不是1，则继续往下找
        node = node.nextSibling;
    }
    return node;
}