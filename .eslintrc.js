module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module",
    "ecmaVersion": 2017
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": ["error", 2],
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    "varsIgnorePattern": "getInitialProps",
    "space-before-blocks": ["error", "always"],
    "arrow-spacing":
      [
        2,
        { "before": true, "after": true }
      ]
  }
};
