$(function () {
    // 分类列表模块
    // 渲染页面
    textType();
    // 封装函数
    function textType() {

        // 发送请求
        $.ajax({
            type: 'get',
            url: '/index/category',
            success: (res) => {
                // console.log(res);
                if (res.code !== 200) {
                    return alert('分类获取失败！');
                };
                // 调用模板引擎
                let tt = template('text_type', { data: res.data });
                $('.level_two').html(tt);
            },
        });
    };

    // 点击分类
    $('.level_two').on('click', 'li', function () {
        // 拿到当前点击的id
        // console.log();
        // 调用函数---传入点击的 id
        textSearch($(this).attr('data-id'));
    });

    // 封装搜索类型 id 函数
    function textSearch(item) {
        // 发送请求
        $.ajax({
            type: 'get',
            url: '/index/search',
            data: {
                type: item,
                page: '',
                perpage: 50,
            },
            success: (res) => {
                console.log(res);
                if (res.code !== 200) {
                    return alert('分类搜索失败!');
                };
                // 调用模板引擎
                let ln = template('latest_news', { data: res.data.data });
                $('.left_con .common_news').html(ln);
            },
        });
    };
});