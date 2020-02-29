const { Setting, validateSettings } = require('../../../model/Setting');

module.exports = async (req, res) => {
	// 数据格式校验
	const { error } = validateSettings(req.fields);
	// 格式不符合要求
	if (error) return res.status(400).send({message: error.message});
	// 格式符合要求 继续向下执行
	// 清除现有设置
	await Setting.deleteMany({});
	// 创建轮播图
	let settings = new Setting(req.fields);
	// 保存用户
	await settings.save();
	// 响应
	res.send(settings);
};