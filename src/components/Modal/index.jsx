import React, {Component} from "react";
import {connect} from "react-redux";
import SignUpModal from "../Auth/SignUpModal";
import {authSignUp} from "../../redux/actions/authAction";

class ModalComponent extends Component{

  renderModal = () => {
    const components = {
      LOGIN_MODAL: SignUpModal,
    };
    const {modalType, socialSignUp} = this.props;
    const SelectedModal = components[modalType];
    return (
      <div>
        {modalType
          ? <SelectedModal
            modalType={modalType}
            authSignUp={socialSignUp}
          />
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

const mapDispatchToProps = dispatch => ({
  socialSignUp: () => dispatch(authSignUp())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalComponent)
