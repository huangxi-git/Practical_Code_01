$(function () {
    // 焦点关注模块
    // 渲染页面
    focusList();
    // 封装函数
    function focusList() {
        // 发送请求
        $.ajax({
            type: 'get',
            url: '/index/attention',
            success: (res) => {
                // console.log(res);
                if (res.code !== 200) {
                    return alert('获取失败！');
                }
                // 调用模板引擎
                let fl = template('art_focus_list', { data: res.data });
                $('.guanzhu_list').html(fl);
            },
        });
    };
});