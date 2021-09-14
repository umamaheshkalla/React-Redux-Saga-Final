import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  buyMobile,
  sellMobile,
  getAllUsers,
  addUser,
  getSingleUser,
  deleteUser,
} from "../redux/actions/mobile-actions";

function MobileDetails({
  noOfMobiles,
  buyMobile,
  sellMobile,
  getAllUsers,
  users,
  addUser,
  getSingleUser,
  user,
  deleteUser,
}) {
  const styles = {
    btn: {
      padding: 30,
      margin: 10,
      borderRadius: 10,
      border: 0,
      cursor: "pointer",
    },
    container: {
      backgroundColor: "#000000",
      height: "100vh",
      padding: 10,
    },
    heading: {
      color: "#ffffff",
    },
  };

  return (
    <div style={styles.container}>
      <center>
        <h1 style={styles.heading}>No.of Mobiles : {noOfMobiles}</h1>
        <h2 style={styles.heading}>No.of Users : {users.length}</h2>
        <h3 style={styles.heading}>Single User Name : {user.name}</h3>
        <button style={styles.btn} onClick={() => buyMobile()}>
          Buy Mobile
        </button>
        <button style={styles.btn} onClick={() => sellMobile()}>
          Sell Mobile
        </button>
        <button style={styles.btn} onClick={() => getAllUsers()}>
          Get All Users
        </button>
        <button style={styles.btn} onClick={() => addUser()}>
          Add User
        </button>
        <button style={styles.btn} onClick={() => getSingleUser(4)}>
          Get Single User
        </button>
        <button style={styles.btn} onClick={() => deleteUser(2)}>
          Delete User
        </button>
      </center>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noOfMobiles: state.noOfMobiles,
    users: state.users,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      buyMobile,
      sellMobile,
      getAllUsers,
      addUser,
      getSingleUser,
      deleteUser,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MobileDetails);
