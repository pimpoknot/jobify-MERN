import { useAppContext } from "../context/appContext";
import { Navigate } from 'react-router-dom'



const ProtectedRoute = () => {
    const { user } = useAppContext()
    if(!user) {
        return <Navigate to="/landing" />
    }
    return <div>there is no user</div>
    
};

export default ProtectedRoute;
