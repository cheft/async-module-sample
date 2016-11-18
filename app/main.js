require('./module1.css')
require('./module2.css')

console.log('It\'s main!')

setTimeout(function() {
	console.log('Asynchronous call modules')
	require.ensure([], function(require) {
		var module1 = require('./module1')
		module1()
	})
}, 1000)
