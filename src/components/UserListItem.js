import React from 'react';
import UserContext from "../contexts/UserContext"

function UserListItem({usr}) {    

    const{users,setUsers,currentUsers,setCurrentUsers} = React.useContext(UserContext);

    const deleteUser = (id)=>{

    setUsers(users.filter((x)=>x.id !== id));
    setCurrentUsers(currentUsers.filter((x)=>x.id !== id));

    };

    return (
        <div>
            <span>{usr.name}</span>
            <span style={{marginLeft:'5px', color:'red'}} onClick={()=>deleteUser(usr.id)}>Sil</span>
        </div>
    );
}

export default UserListItem;
