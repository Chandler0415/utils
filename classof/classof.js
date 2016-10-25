/**
 * 对象的类属性(class attribute)是一个字符串，用以表示对象的类型信息。默认的toString()方法返回了如下这种格式的字符串：
 * [object class]
 * 因此，想要获得对象的类，可以调用对象的toString()方法，然后提取已返回字符串的第8个到倒数第二个位置之前的字符。因很多对
 * 象继承的toString()方法改写了，为了能调用正确的toString()版本，必须间接的调用Function.call()方法。
 */
function classof(o) {
	if (o === null) return 'Null';
	if (o === undefined) return 'Undefined';
	return Object.prototype.toString.call(o).slice(8, -1);
}