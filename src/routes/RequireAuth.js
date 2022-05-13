import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getIsAuth} from "../redux/auth/authSelectors";

const RequireAuth = ({children}) => {
    const isAuth = useSelector(getIsAuth);
    if (!isAuth) {
        return <Navigate to='/signin'/>
    }
    return children
}
export default RequireAuth