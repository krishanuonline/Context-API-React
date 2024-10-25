import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = ()=>{

    const {user} = useContext(UserContext);

    console.log(user)

    return(
        <div>
            <h1>Profile Name : {user.userName}</h1>
        </div>

    );
}

export default Profile;