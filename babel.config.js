module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // 'transform-react-jsx-self', // 제거
      // 'transform-react-jsx-source', // 제거
      // 다른 플러그인들...
    ],
  };
};
