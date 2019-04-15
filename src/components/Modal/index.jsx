import React, {Component} from "react";
import LoginModal from "../Auth/LoginModal";
import {connect} from "react-redux";

class ModalComponent extends Component{

  renderModal = () => {
    const components = {
      LOGIN_MODAL: LoginModal,
    };
    const {modalType} = this.props;
    const SelectedModal = components[modalType];
    return (
      <div>
        {modalType
          ? <SelectedModal/>
        : null}
      </div>
    )
  };

  render() {
    return (
      <div>
        {this.renderModal()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modalType: state.modal.modalType
});

export default connect(
  mapStateToProps
)(ModalComponent)
