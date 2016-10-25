/**
 * 通过原型继承创建一个新的对象
 * inherit()返回一个继承自原型对象p的属性的新对象
 * 这里使用es5中的Object.create()函数（如果有的话）
 * 如果不存在Object.create()，则退货使用其他方法
 */
function inherit(p) {
	if (p == null) throw TypeError();
	if (Object.create)
		return Object.create(p);
	var t = typeof p;
	if (t !== "object" && t !== "function") throw TypeError();

	function f() {};
	f.prototype = p;
	return new f();
}