$(function () {

    let id = window.location.search.split("=")[1];
    // 评论模块
    // 渲染页面
    artComment();
    // 封装函数
    function artComment() {

        $.ajax({
            type: 'get',
            url: '/index/get_comment',
            dataType: 'json',
            data: {
                articleId: id,
            },
            success: (res) => {
                // console.log(res);
                if (res.code != 200) {
                    return alert('评论获取失败!');
                }
                let ac = template('art_comment', { data: res.data });
                $('.comment_list_con').html(ac);
            },
        });
    };
});