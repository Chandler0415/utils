/**
 *对于不支持es5中函数绑定的兼容处理
 */
Function.prototype.bind = Function.prototype.bind || function(context) {
	var self = this;
	return function() {
		self.apply(context, arguments);
	}
};