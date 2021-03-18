$(function () {
    // console.log(11111);
    // 列表页排行榜
    // 渲染页面
    listRankingList();
    // 封装函数
    function listRankingList() {
        // 发送请求
        $.ajax({
            type: 'get',
            url: '/index/rank',
            success: (res) => {
                // console.log(res);
                if (res.code !== 200) {
                    return alert('获取失败！');
                };
                // 调用模板引擎
                let lrl = template('list_ranking_list', { data: res.data });
                $('.right_con .ranking_list').html(lrl);
                $('.right_con .content_list').find('li').eq(0).find('span').prop('class', 'first');
                $('.right_con .content_list').find('li').eq(1).find('span').prop('class', 'second');
                $('.right_con .content_list').find('li').eq(2).find('span').prop('class', 'third');
            },
        });
    };
});