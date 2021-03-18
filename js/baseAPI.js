// 开发环境服务器地址
let baseURL = 'http://120.24.171.137:1337/api/v1';
// 截取所有api请求，get(),post(),ajax()
$.ajaxPrefilter(function (params) {
    // 拼接对应环境的服务器地址
    params.url = baseURL + params.url;
})

