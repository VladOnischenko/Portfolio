import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeSecondName, changeFirstName } from "../store/actions";

const MainComponent = (props) => {
  const { firstName, secondName, changeFirstName, changeSecondName } = props

  return (
    <>
      <div>
        <input
          onChange={(event) => changeFirstName(event.target.value)}
          type="text"
          value={firstName}
          placeholder="First name"/>
      </div>
      <div>
        <input
          onChange={(event) => changeSecondName(event.target.value)}
          type="text"
          value={secondName}
          placeholder="Second name"/>
      </div>
      <p>{`${firstName} ${secondName}`}</p>
      <div />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    firstName: state.firstName,
    secondName: state.secondName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeFirstName: bindActionCreators(changeFirstName, dispatch),
    changeSecondName: bindActionCreators(changeSecondName, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent)
