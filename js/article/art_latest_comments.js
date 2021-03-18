$(function () {

    // 最新评论区域
    // 渲染页面
    latestComments();
    // 封装函数
    function latestComments() {
        // 发送请求
        $.ajax({
            type: 'get',
            url: '/index/latest_comment',
            success: (res) => {
                // console.log(res);
                if (res.code !== 200) {
                    return alert('请求失败！');
                };

                // 调用模板引擎
                let lc = template('art_latest_comments', { data: res.data });
                $('.comment_list').html(lc);
            },
        });
    };
});