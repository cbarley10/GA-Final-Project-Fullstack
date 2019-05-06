import React from "react";

const Message = props => {
  const { errorMessage, successMessage } = props;
  return (
    <div>
      {errorMessage ? (
        <React.Fragment>
          <div className="alert alert-danger fade show" role="alert">
            {errorMessage}
          </div>
        </React.Fragment>
      ) : null}
      {successMessage ? (
        <React.Fragment>
          <div className="alert alert-success fade show" role="alert">
            {successMessage}
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default Message;
