module.exports = {
    plugins: ['@babel/plugin-transform-runtime'],
    presets: ['@babel/react', ['@babel/env', { modules: false }]],
};
