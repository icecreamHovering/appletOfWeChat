/*1、开发模式转换*/

/*官方DEMO代码*/
//index.js
//获取应用实例
var app = getApp();
Page({
	data:{
		motto: 'Hello World',
		userInfo: {}
	},
	//事件处理函数
	bindViewTap: function(){
		console.log('button clicked')
	},
	onLoad: function(){
		console.log('onLoad')
	}
})

/*基于wepy的实现*/
import wepy from 'wepy';
export default class Index extends wepy.page{
	data = {
		motto: 'Hello World',
		userInfo: {}
	};
	methods = {
		bindViewTap(){
			console.log('button clicked');
		}
	};
	onLoad(){
		console.log('onLoad');
	};
}


/*2、支持组建开发*/

/*3、支持加载外部NPM包*/

/*4、单文件模式，使得目录结构更加清晰*/
//样式，结构和js都放在一个*.wpy文件中

/*5、默认使用babel编译，支持ES6/7的一些新特性*/
//用户可以通过修改.wepyrc配置文件，配置自己熟悉的babel环境进行开发。默认开启使用了一些新的特性如promise，async/await等等。
import wepy from 'wepy';
export default class Index extends wepy.page{
	getData(){
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve({data:123});
			},3000);
		});
	};
	async onLoad(){
		let data = await this.getData();
		console.log(data.data);
	}

	getData(){
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve({data:123});
			},3000);
		});
	};
	async onLoad(){
		let data = await this.getData();
		console.log(data.data);
	}
}

/*
ES6 原生提供了 Promise 对象。

所谓 Promise，就是一个对象，用来传递异步操作的消息。它代表了某个未来才会知道结果的事件（通常是一个异步操作），并且这个事件提供统一的 API，可供进一步处理。

Promise 对象有以下两个特点。

（1）对象的状态不受外界影响。Promise 对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，又称 Fulfilled）和 Rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是 Promise 这个名字的由来，它的英语意思就是「承诺」，表示其他手段无法改变。

（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise 对象的状态改变，只有两种可能：从 Pending 变为 Resolved 和从 Pending 变为 Rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。就算改变已经发生了，你再对 Promise 对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

*/

/*6、针对原生API进行优化*/
//对想在API进行Promise处理，同时修复一些现有API的缺陷，比如：wx.request并发问题等。
//原有代码
onLoad = function(){
	var self = this;
	wx.login({
		success:function(data){
			wx.getUserInfo({
				success:function(userinfo){
					self.setData({userInfo:userinfo});
				}
			});
		}
	});
}
//基于wepy实现代码
async onLoad(){
	await wx.login();
	this.userInfo = await wx.getUserInfo();
}