$(function () {
    // console.log(555555);

    let aid = window.location.search.split("=")[1];
    // console.log(aid);

    artDetails(aid);

    // 详情页模块
    // 页面渲染
    // artDetails();
    // 封装函数
    function artDetails(item) {
        // 发送请求
        $.ajax({
            type: 'get',
            url: '/index/article',
            data: {
                id: item,
            },
            success: (res) => {
                // console.log(res);
                if (res.code !== 200) {
                    return alert('获取失败！');
                };
                // 拿到页面里的 art_details 
                let art_details = window.document.getElementById('art_details');
                if (art_details == null) {
                    return /* alert('此页面没有art_details') */;
                }
                let ad = template('art_details', { data: res.data });
                $('.left_con .breadcrumb').after(ad);
            },
        });
    };

});


