var fs = require('fs');
var path = require('path');

/**
 * 读取js文件
 */
var readJsFile = function (filepath, stateArr, cb) {
	var moduleName = path.basename(filepath, '.js') + 'Module';
	fs.readFile(filepath, 'utf8', function(err, data) {
		if(err)
			return cb(err);
		data.replace(/\/\*[/\*{2}][\s\S]*?\}\]\);/ig, function(match, offset, string) {
			var stateObj = {};
			stateObj['moduleName'] = moduleName;
			if(!match) {
				console.log('没有匹配到controller注解');
				// return ;
			}
			// 匹配@At
			match.replace(/\@At\(([^*]*?),([^*]*?)\)/ig, function(at, state, url) {
				// 替换引号
				state = state.replace(/[\'\"]*/ig, '').trim();
				url = url.replace(/[\'\"]*/ig, '').trim();
				stateObj['state'] = state;
				stateObj['url'] = url;
			});
			// 匹配@Template
			match.replace(/\@Template\(([^*]*?)\)/ig, function(tempalte, str) {
				// 替换引号
				str = str.replace(/[\'\"]*/ig, '').trim();
				var temp = path.format({
					dir: path.dirname('/' + filepath),
					base: str
				});
				stateObj['template'] =  path.normalize(temp);
			});
			// 匹配@Style
			match.replace(/\@Style\(([^*]*?)\)/ig, function(tempalte, str) {
				// 替换引号
				str = str.replace(/[\'\"]*/ig, '').trim();
				var temp = path.format({
					dir: path.dirname('/' + filepath),
					base: str
				});
				stateObj['style'] =  path.normalize(temp);
			});
			
			// 匹配ctrlName
			match.replace(/\.controller\(([^*?]*?),/ig, function(ctrl, ctrlName) {
				// 替换引号
				ctrlName = ctrlName.replace(/[\'\"]*/ig, '').trim();
				stateObj['ctrlName'] = ctrlName;
			});
			
			stateArr.push(stateObj);
		});
		
		cb(err, stateArr);
	});
};

/**
 * 读文件夹递归异步操作，写的不好啊，先把功能实现
 * @param dir 目录名字
 * @param stateArr 最终的state对象数组
 * @param count 用来递归记录callback个数的数组
 * @param cd 回调函数
 */
var readDir = function(dir, stateArr, count, cb) {
	if(!cb || typeof cb != 'function')
		throw new Error('没有传入正确的回调函数');
	fs.readdir(dir, function (err, arr) {
		if(err)
			return cb(err);
		arr.forEach(function (name, i) {
			var temp = dir + '/' + name;
			fs.stat(temp, function (err, stats) {
				if(stats.isDirectory()) {
					readDir(temp, stateArr, count, cb);
				}
				else if(stats.isFile() && path.extname(temp) == '.js') {
					count.push('');
					readJsFile(temp, stateArr, cb);
				}
			});
		});
	});
};
var arr = [], count = [];
var currentPath = './module';
readDir(currentPath, arr, count, function(err, aa) {
	if(err) {
		return ;
	}
	count.shift();
	if(count.length == 0)
		console.log(aa);
});

