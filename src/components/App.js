import React from 'react'

const App = ({ name = 'World' }) => (
  <div>
    <h1>Hello {name}!</h1>
  </div>
)

App.propTypes = {
  name: React.PropTypes.string
}

export default App
