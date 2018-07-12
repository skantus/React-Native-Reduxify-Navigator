module.exports = {
  parser: "babel-eslint",
  extends: ["eslint:recommended", "plugin:react/recommended"],
  env: {
    jest: true
  },
  settings: {
    "import/resolver": { "babel-module": {} }
  }
};
