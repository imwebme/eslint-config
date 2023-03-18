module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    './index',
    './react',
    './typescript',
    './prettier',
  ],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    /**
     * zynk-react 컴포넌트는 tailwind기반의 twin.macro를 사용한다
     * 그래서 emotion의 css와 twin.macro의 tw 속성을 사용할 수 있도록 설정
     */
    'react/no-unknown-property': ['error', { 'ignore': ['css', 'tw']}],
    // zynk에서 사용할 prettier
    'prettier/prettier': ['error', {
      singleQuote: true,
      semi: false,
    }],
    "import/prefer-default-export": 'off',
    // 모든코드가 build에 번들되기 때문에 모두 dev디펜던시로 설정
    "import/no-extraneous-dependencies": 'off',
    "lines-around-comment": ["error", {
      "beforeBlockComment": true,
      "afterBlockComment": false,
      "beforeLineComment": true,
      "afterLineComment": false,
    }]
  }
};
