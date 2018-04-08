'use strict';
// es6 特性: 基于块作用域的"let" 声明

var sentences = [{ subject: 'JavaScript', verb: 'is', object: 'great' }, { subject: 'Elephants', verb: 'are', object: 'large' }];
// es6 特性: 对象解构
function say(_ref) {
	var subject = _ref.subject,
	    verb = _ref.verb,
	    object = _ref.object;

	// es6 特性: 模板字符串
	console.log(subject + ' ' + verb + ' ' + object);
}
// es6 特性: for..of
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = sentences[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var s = _step.value;

		say(s);
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}