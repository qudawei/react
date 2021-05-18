/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-05-06 14:08:59
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-06 14:38:01
 */
// These two containers are siblings in the DOM
import React from 'react'
import Modal from './Modal'
import './index.css'
// const appRoot = document.getElementById('app-root');
// const modalRoot = document.getElementById('modal-root');



// The Modal component is a normal React component, so we can
// render it wherever we like without needing to know that it's
// implemented with portals.
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
    
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow() {
    this.setState({showModal: true});
  }
  
  handleHide() {
    this.setState({showModal: false});
  }

  render() {
    // Show a Modal on click.
    // (In a real app, don't forget to use ARIA attributes
    // for accessibility!)
    const modal = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <div>
            With a portal, we can render content into a different
            part of the DOM, as if it were any other React child.
          </div>
          This is being rendered inside the #modal-container div.
          <button onClick={this.handleHide}>Hide modal</button>
        </div>
      </Modal>
    ) : null;

    return (
      <div className="app">
        This div has overflow: hidden.
        <button onClick={this.handleShow}>Show modal</button>
        {modal}
      </div>
    );
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default App