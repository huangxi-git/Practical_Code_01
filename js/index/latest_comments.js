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
                // 截取
                // console.log(res.data[0].author.substring(0, 1));
                // let sbstr = res.data[0].author.substring(0, 1);
                // 空变量保存数据
                // let sbstr;
                // 遍历
                // res.data.forEach(function (i, n) {
                //     // console.log(i, n);      // i:元素  n:下标
                //     // console.log(i.author.substring(0, 1));
                //     sbstr = i.author.substring(0, 1);
                //     console.log(sbstr);
                // });

                // 调用模板引擎
                let lc = template('latest_comments', { data: res.data });
                $('.common_wrap .comment_list').html(lc);
            },
        });
    };
});