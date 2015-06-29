(function install() {
	var path = require('path');
	var fs = require('fs');
	var root = path.resolve('node_modules/tessel-fakes');
	fs.rename(root, 'node_modules/tessel');
})();