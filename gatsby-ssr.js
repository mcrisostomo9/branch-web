const React = require("react")
const { Provider } = require("./src/context/Context.js")

exports.wrapRootElement = ({ element }) => {
  return <Provider>{element}</Provider>
}
