$(function () {

    // 最新资讯模块
    // 渲染页面
    latestNews();
    // 封装函数
    function latestNews() {
        // 发送请求
        $.ajax({
            type: 'get',
            url: '/index/latest',
            success: (res) => {
                // console.log(res);
                if (res.code !== 200) {
                    return alert('获取失败！');
                };
                // 调用模板引擎
                let ln = template('latest_news', { data: res.data });
                $('.left_con .common_news').html(ln);
            },
        });
    };
});