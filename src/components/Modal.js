import React from 'react';
import Rodal from 'rodal';

import 'rodal/lib/rodal.css';

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: false }
}

show() {
  this.setState({ visible: true})
}

hide() {
  this.setState({ visible: false})
}

render() {
  return (
    <div>
      <button onClick={this.show.bind(this)}>show</button>
      <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
        <div>CONTENT</div>
      </Rodal>
    </div>
  );
}
}

export default Modal;
