require('./common.css')
require('./main.css')

console.log('It\'s main!')

setTimeout(function() {
	console.log('Asynchronous call modules')
	require.ensure([], function(require) {
		var module1 = require('./module1')
		module1()
	})
}, 1000)
