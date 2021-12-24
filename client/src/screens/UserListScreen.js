import React, { useEffect } from "react";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../actions/userActions";
import { useNavigate } from "react-router-dom";


export default function UserListScreen() {


    const navigate = useNavigate();
    const userList = useSelector((state) => state.userList);
    const { loading, error, users } = userList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listUsers());
        // dispatch({
        //     type: USER_DETAILS_RESET,
        // });
    }, [dispatch/*, successDelete*/]);

    const deleteHandler = (user) => {
        // if (window.confirm('Are you sure?')) {
        //     dispatch(deleteUser(user._id));
        // }
    };
    return (
        <div>
            <h1>Users</h1>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>IS SELLER</th>
                            <th>IS ADMIN</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.isSeller ? 'YES' : ' NO'}</td>
                                <td>{user.isAdmin ? 'YES' : 'NO'}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="small"
                                        onClick={() => navigate(`/user/${user._id}/edit`)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        className="small"
                                        onClick={() => deleteHandler(user)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}