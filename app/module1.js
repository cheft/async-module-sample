module.exports = function() {
  console.log('It\'s module1 !')

  setTimeout(function() {
		require.ensure([], function(require) {
			var module2 = require('./module2')
			module2()

			var module3 = require('./module3')
			module3()

			require('./module3.css')
		})
	}, 1000)


	setTimeout(function() {
		require.ensure([], function(require) {
			var module4 = require('./module4')
			module4()

			require('./module4.css')
		}, 'bundle')
	}, 2000)
}
