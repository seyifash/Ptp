import React, {useEffect} from 'react';
import {connect } from 'react-redux';
import { fetchUsers } from './ReduxApi/userActions';

const UserContainer = ({userData, fetchUsers}) => {

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

  return (
    <div>{userData.loading ? 
        (<h2>loading...</h2>) :
        userData.error ? 
        ( <h2>{userData.error}</h2>) : 
        <div>
            <h2>User List</h2>
            <div>
                {userData && userData.users && 
                userData.users.map((user, index) => <p key={index}>
                    {user.name}
                </p>)}
            </div>
        </div>
        
                }</div>
  )
}


const mapStateToProps = (state) => {
    return {
        userData: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers : () => dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)