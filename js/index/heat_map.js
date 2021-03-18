$(function () {

    // 热点图模块
    // 渲染页面
    heatMap();
    // 热点图模块--封装函数
    function heatMap() {

        // 发送请求
        $.ajax({
            type: 'get',
            url: '/index/hotpic',
            success: (res) => {
                // console.log(res);       // 获取成功
                // console.log(res.code);
                if (res.code !== 200) {
                    return alert('获取失败！');
                };
                // 调用模板引擎
                let hm = template('heat_map', { data: res.data });
                $('.main_con .focus_list').html(hm);
                // 拿到第一个li, 添加类名
                $('.main_con .focus_list').find('li').eq(0).prop('class', 'first');
            },
        });
    };
});