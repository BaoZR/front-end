const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    // 模式 开发模式
    mode: 'development',
    // 入口文件 main.js
    entry: {
        main: './src/main.js'
    },
    // 输出
    output: {
        // 输出到 dist文件夹
        path: path.resolve(__dirname, './dist'),
        // js文件下
        filename: 'js/chunk-[contenthash].js',
        // 每次打包前自动清除旧的dist
        clean: true,
    },
    // 插件都放 plugins 中
    plugins: [
        new HtmlWebpackPlugin({
            // 选择模板 public/index.html
            template: './public/index.html',
            // 打包后的名字
            filename: 'index.html',
            // js文件插入 body里
            inject: 'body',
        }),
        new MiniCssExtractPlugin({
            // 将css代码输出到dist/styles文件夹下
            filename: 'styles/chunk-[contenthash].css',
            ignoreOrder: true,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(css|s[cs]ss)$/,// 正则表达式，表示打包.css等后缀的文件
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]// 针对css文件使用的loader，注意有先后顺序，数组项越靠后越先执行
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|bmp)$/,
                type: 'asset',
                parser: {
                    // 转base64的条件
                    dataUrlCondition: {
                        maxSize: 25 * 1024, // 25kb
                    }
                },
                generator: {
                    // 打包到 dist/image 文件下
                    filename: 'img/[name][contenthash][ext]',
                },
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    'babel-loader'
                ],
            }
        ]
    },
}






