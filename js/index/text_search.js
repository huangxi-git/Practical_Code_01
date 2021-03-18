$(function () {

    // 文章搜索模块
    // 拿到输入框输入的内容
    let search = $('.search_txt').val().trim();
    // 点击 搜索按钮
    $('.search_btn').on('click', function () {
        console.log(search);
    });
});