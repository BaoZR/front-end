// babel.config.js

module.exports = {
    // 配置规则
    presets: ["@babel/preset-env"],
    // 配置插件
    plugins: [
        [
            "@babel/plugin-transform-runtime",
            {
                "absoluteRuntime": false,
                "corejs": false,
                "helpers": true,
                "regenerator": true,
                "version": "7.0.0-beta.0"
            }
        ]
    ]
}
