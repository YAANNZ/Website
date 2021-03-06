var config = require('config-lite')(__dirname);
var Mongolass = require('mongolass');
var mongolass = new Mongolass();
mongolass.connect(config.mongodb);	// 初始化

// 定义用户表schema，生成并导出User这个model，同时设置name为唯一索引
exports.User = mongolass.model('User', {
 	name: {type: 'string'},
 	password: {type: 'string'},
 	avatar: {type: 'string'},
 	gender: {type: 'string', enum: ['m', 'f', 'x']},
 	bio: {type: 'string'};
});
exports.User.index({name: 1}, {unique: true}).exec();

// 文章模型
exports.Post = mongolass.model('Post', {
	author: {type: Mongolass.Types.ObjectId},
	title: {type: 'string'},
	content: {type: 'string'},
	pv: {type: 'number'}
});
exports.Post.index({author:1, _id:-1}).exec();