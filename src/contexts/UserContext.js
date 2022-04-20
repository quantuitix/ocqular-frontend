import React, { Component, createContext } from "react";

export const UserContext = createContext();

class UserContextProvider extends Component {
  state = {
    user: null,
    loading: false,
  };

  updateValues = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          updateValues: this.updateValues,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserContextProvider;
