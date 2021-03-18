$(function () {

    // 从 URL 拿取 id 
    let id = window.location.search.split("=")[1];
    // 发表评论模块
    $('.comment_sub').on('click', function (e) {
        e.preventDefault();
        // 发送请求
        $.ajax({
            type: 'post',
            url: '/index/post_comment',
            dataType: 'json',
            data: {
                author: $('.comment_name').val(),
                content: $('.comment_input').val(),
                articleId: id
            },
            success: (res) => {
                console.log(res);
                if (res.code !== 201) {
                    return alert('评论失败');
                };
                alert('评论成功！');
                window.location.reload();
            },
        });
    });
});