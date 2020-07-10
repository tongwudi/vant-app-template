const path = require('path');

module.exports = {
    publicPath: './',  // 输出的根路径，解决启动项目后白屏问题
    devServer: {
        open: true, // 自动启动浏览器
        proxy: { // 跨域
            '/api': {
                // target: 'http://api.javaswing.cn',
                target: 'http://59.110.124.156:3000',
                pathRewrite: {
                    '^/api': ''
                },
                changeOrigin: true
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                'components': path.resolve(__dirname, 'src/components'),
                'views': path.resolve(__dirname, 'src/views'),
                'utils': path.resolve(__dirname, 'src/utils')
            }
        }
    },
    productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
}