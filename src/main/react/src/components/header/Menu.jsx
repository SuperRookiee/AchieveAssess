import { Link, useLocation } from "react-router-dom";
import { userState } from "../../atoms/Auth";
import { useRecoilValue, useResetRecoilState } from "recoil";

const Menu = () => {
    const user = useRecoilValue(userState);
    const resetUser = useResetRecoilState(userState);
    const location = useLocation();

    return (
        <section className="flex justify-center h-[100px]">
            <div className="Container py-[35px] flex justify-between">
                <Link to={`/`} className="text-[32px] font-semibold font-['SCoreDream'] leading-none tracking-[-0.8px]">온라인 학업성취도 평가</Link>
                <div className="flex items-center">
                    <div className="flex items-center">
                        {!user && location.pathname !== '/user/login' ? (
                            <button >
                                <Link to="/user/login" className="px-4 py-2 rounded-full bg-primary-100 text-white">
                                    로그인
                                </Link>
                            </button>
                        ) : user && location.pathname !== '/user/login' ? (
                            <>
                                <span className="px-4 py-2">{user.memberName}</span>
                                <button onClick={resetUser} className="bg-gray-400 px-4 py-2 rounded-[20px] text-white">로그아웃</button>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Menu;