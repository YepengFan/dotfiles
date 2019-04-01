module.exports = {
    "extends": "airbnb",
    "rules": {
      "no-console": "warn",
      "max-len": "off",
      "indent": "warn",
    },
    "env": {
      "es6": true
    },
    "parserOptions": {
      "sourceType": "module"
    },
    "installedESLint": true,
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ]
};
