import React from 'react';
import {useStore} from "../../store";
import {IUser} from "../../models/IUser";

const ShowUsersPage = () => {

    const {userSlice: {allUsers}} = useStore();


    return (
        <div>
            {
                allUsers.map((user: IUser) => <div key={user.id}>id: {user.id}, name: {user.name}</div>)

            }
        </div>
    );
};

export default ShowUsersPage;