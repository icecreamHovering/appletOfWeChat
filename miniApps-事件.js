/*
【打打字加深印象】
【WXML】的冒泡事件列表：
1、touchstart   手指触摸动作开始
2、touchmove   手指触摸后移动
3、touchcancle   手指触摸动作被打断，如来点提醒，弹窗
4、touchend   手指触摸动作结束
5、tap   手指触摸后马上离开
6、longpress   手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发
7、longtap   手指触摸后，超过350ms再离开（推荐使用longpress事件代替）
8、transitionend   会在WXSS transition或 wx.createAnimation动画结束后触发
9、animationstart   会在一个WXSS animation动画开始时触发
10、animationiteration   会在一个 WXSS animation一次迭代结束时触发
11、animationend   会在一个WXSS animation动画完成时触发
【注】：除上表之外的其他组件自定义事件和无特殊申明都是非冒泡事件，如<form/>的submit事件，<input/>的input事件，<scroll-view/>的scroll事件

*/


/*
【事件绑定和冒泡】
事件绑定的写法同组件的属性，以key、value的形式。
1、key以bind或catch开头，然后跟上事件的类型，如bindtap、catchtouchstart。自基础库版本1.5.0起，bind和catch后可以紧跟一个冒号，其含义不变，如bind:tap、catch:touchstart。
2、value是一个字符串，需要在对应的Page中定义同名的函数。否则当触发事件的时候会报错。

bind事件绑定不会阻止冒泡事件向上冒泡，catch事件绑定可以阻止冒泡事件向上冒泡。

【事件的捕获】
自基础库版本1.5.0起，触摸类事件支持捕获阶段。捕获阶段位于冒泡阶段之前，且在捕获阶段中，事件到达结点的顺序与冒泡阶段恰好相反。需要在捕获阶段监听事件时，可以采用capture-bind、capture-catch关键字，后者将中断捕获阶段和取消冒泡阶段。

【事件对象】
如无特殊说明，当组件触发事件时，逻辑层绑定该事件的处理函数会收到一个事件对象。

//基础事件对象属性列表
BaseEvent:{
	type: 'String',//事件类型
	timeStamp: Integer,//事件生成时的时间戳
	target: Object,//触发事件的组件的一些属性值集合
	currentTarget: Object//当前组件的一些属性集合
}
//自定义事件对象属性列表
CustomEvent:{
	//继承BaseEvent
	detail: Object//额外的信息
}
//触摸事件对象属性列表
TouchEvent:{
	touches: [Array],//触摸事件，当前停留在屏幕中的触摸点信息的数组
	changedTouches: [Array]//触摸事件，当前变化的触摸点信息的数组
}

【特殊事件】：<canvas/>中的触摸事件不可冒泡，所以没有currentTarget。


【type】
代表事件的类型。

【timeStamp】
页面打开到触发事件所经过的毫秒数。

【target】
触发事件的源组件。
id  String  事件源组件的id
tagName  String  当前组件的类型
dataset  Object  事件源组件上由data-开头的自定义属性组成的集合

【currentTarget】
事件绑定的当前组件。
id  String  当前组件的id
tagName  String  当前组件的类型
dataset  Object  当前组件上由data-开头的自定义属性组成的集合

【dataset】
在组件中可以定义数据，这些数据将会通过事件传递给SERVICE。书写方式：以data-开头，多个单词由连字符-连接，不能有大写（大写会自动转换成小写）如data-element-type，最终在event.currentTarget.dataset中会将连字符转换成驼峰elementType。

【touches】
touches是一个数组，每个元素为一个Touch对象（canvas触摸事件中携带的touches是CanvasTouch数组）。表示当前停留在屏幕上的触摸点。

Touch:{
	indentifier: Number,//触摸点的标识符
	pageX:
	pageY: Number,//距离文档左上角的距离，文档的左上角为原点，横向为X轴，纵向为Y轴
	clientY:
	clientX: Number//距离也蛮可显示区域（屏幕出去导航条）左上角距离，横向为X轴，纵向为Y轴
}

【detail】
自定义事件所携带的数据，如表单组件的提交时间会携带用户的输入，媒体的错误事件会携带错误信息
点击事件的detail带有的x，y同pageX，pageY代表距离文档左上角的距离
*/