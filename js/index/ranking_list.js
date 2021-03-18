$(function () {

    // 热门排行模块
    // 渲染页面
    rankingList();
    // 封装函数
    function rankingList() {
        // 发送请求
        $.ajax({
            type: 'get',
            url: '/index/rank',
            success: (res) => {
                // console.log(res);
                if (res.code !== 200) {
                    return alert('获取失败！');
                };
                // alert('获取成功！');
                // 调用模板引擎
                let rl = template('ranking_list', { data: res.data });
                $('.right_con .hotrank_list').html(rl);
                // 添加类
                $('.right_con .content_list').find('li').eq(0).find('span').prop('class', 'first');
                $('.right_con .content_list').find('li').eq(1).find('span').prop('class', 'second');
                $('.right_con .content_list').find('li').eq(2).find('span').prop('class', 'third');
            },
        });
    };
});