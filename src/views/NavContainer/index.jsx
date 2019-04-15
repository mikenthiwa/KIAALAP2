import React, {Component} from "react";
import {connect} from "react-redux";
import {loadModal} from "../../redux/actions/modalActions";
import {LOGIN_MODAL} from "../../redux/constants";
import "./navCont.scss"

class NavContainer extends Component{
  render() {
    const { loadModal } = this.props;
    return (
      <div className="nav-container">
        <div className="logo"/>
        <div className="title"/>
        <div className="auth-area">
          <div className="login" >Login</div>
          <div className="sign-up" onClick={loadModal}>Sign up</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal.modalType
});

const mapDispatchToProps = dispatch => ({
  loadModal: () => dispatch(loadModal(LOGIN_MODAL))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavContainer)

