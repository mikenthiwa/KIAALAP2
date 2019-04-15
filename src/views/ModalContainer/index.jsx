import React, {Component} from "react";
import {connect} from "react-redux";
import {hideModal} from "../../redux/actions/modalActions";
import "./modalcontainer.scss"

class ModalContainer extends Component{

  state = {
    isActive: false
  };

  componentDidMount() {
    setTimeout(() => this.setState({isActive: true}), 10)
  }
  closeModal = () => {
    const {closeModal} = this.props;
    this.setState({isActive: false});
    setTimeout(() => closeModal(), 300)
  };

  onOverlayClick = event => {
    return event.stopPropagation()
  };

  render() {
    const {isActive} = this.state;

    return (
      <div className={`modal-overlay ${isActive? 'active': 'inactive'}`} onClick={this.closeModal}>

        <div className={`modal ${isActive? 'active': 'inactive'}`} onClick={this.onOverlayClick}>
          <i className="fas fa-times close" onClick={this.closeModal}/>
          <div className="modal-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(hideModal())
});

export default connect(
  null,
  mapDispatchToProps
)(ModalContainer)

