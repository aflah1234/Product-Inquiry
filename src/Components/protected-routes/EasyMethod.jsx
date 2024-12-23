import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const EasyMethod = ({ children }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    useEffect(() => {
        if ( token === undefined || token === null || !token) {
            navigate('/login', { replace: true})
        }
    }, [navigate, token])
  return children;
}

export default EasyMethod