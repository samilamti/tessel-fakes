(function uninstall() {
	var path = require('path');
	var fs = require('fs');
	var root = path.resolve('node_modules/tessel');
	fs.rename(root, 'node_modules/tessel-fakes');
})();