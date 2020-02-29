const { Setting } = require('../../../model/Setting');

module.exports = async (req, res) => {
	// 查询用户信息
	const settings = await Setting.find();
	// 响应 文章分类存在
	return res.send(settings[0]);
}