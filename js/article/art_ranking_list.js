$(function () {
    // console.log(9999);

    // 排行榜模块
    // 渲染页面
    artRankingList();
    // 封装函数
    function artRankingList() {
        // 发送请求
        $.ajax({
            type: 'get',
            url: '/index/rank',
            success: (res) => {
                // console.log(res);
                if (res.code !== 200) {
                    return alert('获取失败！');
                };
                let arl = template('art_ranking_list', { data: res.data });
                $('.art_ranking').html(arl);
                $('.art_ranking').find('li').eq(0).find('span').prop('class', 'first');
                $('.art_ranking').find('li').eq(1).find('span').prop('class', 'second');
                $('.art_ranking').find('li').eq(2).find('span').prop('class', 'third');
            },
        });
    };
});