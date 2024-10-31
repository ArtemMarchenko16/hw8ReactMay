import React, {useEffect} from 'react';
import {useStore} from "../../store";
import {getUsers} from "../../services/api.service";
import ShowUsersPage from "./ShowUsersPage";

const UsersPage = () => {

    const {userSlice: {loadUsers}} = useStore();

    useEffect(() => {
        getUsers()
            .then(value => {
                loadUsers(value)
            })
    }, []);

    return (
        <div>
            <ShowUsersPage/>
        </div>
    );
};

export default UsersPage;