/**
 * ECMAScript3版本的Function.bind()方法
 * bind()方法返回的函数是一个闭包，在这个闭包的外部函数中声明了self和boundArgs变量，
 * 这两个变量的在闭包里用到。尽管定义闭包的内部函数已经从外部函数中返回，而且调用这个闭
 * 包逻辑的时刻要在外部函数返回完之后（在闭包中照样可以正确访问这两个变量）。
 */
Function.prototype.bind = Function.prototype.bind || function(context) {
	var self = this;
	return function() {
		self.apply(context, arguments);
	}
};

if (!Function.prototype.bind) {
	Function.prototype.bind = function(o /* , args */ ) {
		// 将this和arguments的值保存至变量中
		// 以便在后面嵌套的函数中可以使用它们
		var self = this,
			boundArgs = arguments;

		// bind()方法的返回值是一个函数
		return function() {
			// 创建一个实参列表，将传入bind()的第二个及后续的实参都传入这个函数
			var args = [],
				i;
			for (i = 1; i < boundArgs.length; i++) args.push(boundArgs[i]);
			for (i = 0; i < arguments.length; i++) args.push(arguments[i]);
			// 现在将self作为o的方法来调用，传入这些实参
			return self.apply(o, args);
		}
	}
}
/*
 */