// 用户模块
const { Comment } = require('../../../model/Comment');

module.exports = async (req, res) => {
	// 查询用户信息
	const posts = await Comment.find().populate('author', '-password').sort('-createAt').limit(5)
	// 响应
	res.send(posts);
}