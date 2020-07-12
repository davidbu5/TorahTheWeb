module.exports = {
    entry: {
        background: __dirname + "/src/background.ts",
        popup: __dirname + "/src/popup/popup.ts"
    },
    output: {
        path: __dirname + "/unpacked-dist",
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { 
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    devtool: 'source-map',
}