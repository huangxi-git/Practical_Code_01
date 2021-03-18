$(function () {

    // 渲染页面
    searchNews();

    // 文章搜索模块
    // 点击 搜索按钮
    $('.search_btn').on('click', function () {
        // 调用函数
        searchNews();
    });

    // 封装函数
    function searchNews() {
        // 拿到输入框输入的内容
        // console.log($('.search_txt').val().trim());
        // 发送请求
        $.ajax({
            type: 'get',
            url: '/index/search',
            data: {
                // 搜索关键词
                key: $('.search_txt').val().trim(),
                // 文章类型id
                // type: $('.search_txt').val().trim() || '',
                // 每页显示条数
                perpage: 150,
                // 当前页，为空返回第1页
                page: '',
            },
            success: (res) => {
                // console.log(res);
                if (res.code !== 200) {
                    return alert('搜索失败!');
                };
                // 调用模板引擎
                let ln = template('search_news', { data: res.data.data });
                $('.left_con').html(ln);
            },
        });
    };
});