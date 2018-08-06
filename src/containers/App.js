import React from 'react';
import HelloWorld from '../components/HelloWorld';

const App = props => <div>
  <HelloWorld name={props.name} />
</div>

//
// App.propTypes = {
//   name: PropTypes.string.isRequired
// }
//
// App.defaultProps = {
//   name: 'Nacho'
// }

export default App;