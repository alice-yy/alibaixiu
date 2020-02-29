// 获取地址栏中的categoryId参数
var categoryId = getUrlParams('categoryId');

// 根据分类id获取文章列表
$.ajax({
	type: 'get',
	url: '/posts/category/' + categoryId,
	success: function (response) {
		var html = template('listTpl', {data: response});
		$('#listBox').html(html);
	}
});

// 根据分类id获取分类信息
$.ajax({
	type: 'get',
	url: '/categories/'+ categoryId,
	success: function (response) {
		$('#categoryTitle').html(response.title)
	}
})