import React, {Component} from "react";
import BaseModal from "../../views/ModalContainer";
import Button from "../Button";
import "./login.scss"


class SignUpModal extends Component{

  state = {
    username: "",
    email: "",
    password:""
  };

  handleInputChange = event => {
    this.setState({[event.target.name]: event.target.value});
    console.log(this.state)
  };


  render() {
    const {authSignUp} = this.props;

    return (
        <BaseModal>
          <div className="header">
            <div className="title">Join Today</div>
            <div className="sub-title">
              Choose one of the following sign up methods
            </div>
          </div>
          <div className="social-button">
            <Button value="facebook" className="social facebook" icon="fab fa-facebook-f" onClick={authSignUp}/>
            <Button value="Google" className="social google" icon="fab fa-google"/>
            <Button value="twitter" className="social twitter" icon="fab fa-twitter"/>
          </div>
          <div className="alt-registration" >
            <span className="registration-title">Or sign up using your email address</span>
            <div className="form-container">
              <form>
                <input type="text" placeholder="username" name="username" onChange={this.handleInputChange}/>
                <input type="text" placeholder="email" name="email" onChange={this.handleInputChange}/>
                <input type="text" placeholder="password" name="password" onChange={this.handleInputChange}/>
                <Button className="sign-up-button" value="Create My Account" />
              </form>
            </div>
          </div>
        </BaseModal>
    );
  }
}

export default SignUpModal;
