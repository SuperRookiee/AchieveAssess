import { useRecoilValue } from 'recoil';
import { authState } from '../../atoms/Auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute = () => {
    const auth = useRecoilValue(authState);
    const location = useLocation();

    const userPaths = ['/user/login'];
    const contentPaths = ['/user/exam/round1', '/user/exam/round2', '/user/report'];
    
    //로그인을 하고 로그인 페이지를 클릭하면 메인페이지로 이동
    if (auth && userPaths.some(path => path === location.pathname)) {
        return <Navigate to="/" replace />;
    }
    //로그인을 안하고 실전시험1, 실전시험2, 시험결과를 클릭하면 로그인 페이지로 이동
    if (!auth && contentPaths.some(path => path === location.pathname)) {
        return <Navigate to="/user/login" replace />;
    }

    return <Outlet />;
};

export default PrivateRoute;
