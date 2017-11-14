/*
【模块】
每一个.wxs文件和<wxs>标签都是一个单独的模块。
每个模块都有自己独立的作用域。即在一个模块里面定义的变量与函数，默认为私有的，对其他模块不可见。
一个模块要想对外暴露其内部的私有变量与函数，只有通过module.exports实现。


【module对象】
每个wxs模块均有一个内置的module对象。

exports：通过该属性，可以对外共享本模块的私有变量与函数。
*/


//    /page/tools.wxs
var foo = "'hello world' from tools.wxs";
var bar = function(d){
	return d;
}
module.exports = {
	FOO: foo,
	bar: bar
};
module.exports.msg = "some msg";


/*   <!-- page/index/index.wxml -->  */
/*
<wxs src="./../tools.wxs" module="tools" />
<view> {{tools.msg}} </view>
<view> {{tools.bar(tools.FOO)}} </view>
*/

/*
页面输出
some msg
'hello world' from tools.wxs
*/


/*
【require】函数
在.wxs模块中引用其他wxs文件模块，可以使用require函数。
注意以下几点：
1、只能引用.wxs文件模块，且必须使用相对路径。
2、wxs模块均为单例，wxs模块在第一次被引用时，会自动初始化为单例对象。多个页面，多个地方，多次引用，使用的都是同一个wxs模块对象。
3、如果一个wxs模块在定义之后，一直没有被引用，则该模块不会被解析与运行。
*/

/*
【module】属性
module属性是当前<wxs>标签的模块名。在单个wxml文件内，建议其值唯一。有重复模块名则按照先后顺序覆盖（后者覆盖前者）。不同文件之间wxs模块名不会相互覆盖。

module 属性值的命名必须符合下面两个规则：
1、首字符必须是：字母（a-zA-Z），下划线（_）
2、剩余字符可以是：字母（a-zA-Z），下划线（_），数字（0-9）
*/