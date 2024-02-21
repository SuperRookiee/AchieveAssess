import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { userState } from '../../../atoms/Auth';
import { Link, useNavigate } from 'react-router-dom';
import "@assets/css/user/login.scss";
const URL = import.meta.env.VITE_BASE_URL;

const login = () => {
    const [user, setUser] = useRecoilState(userState);
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const loginHandler = async () => {
        const userData = {
            loginId: loginId,
            password: password,
        };

        const convertGradeLevel = (grade) => {
            switch (grade) {
                case 'elem':
                    return '초등';
                case 'mid':
                    return '중등';
                case 'high':
                    return '고등';
                default:
                    return grade;
            }
        }

        try {
            const response = await fetch(`${URL}/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            const result = await response.json();
            if (response.ok) {
                setUser({
                    memberId: result.memberId,
                    loginId: result.loginId,
                    memberName: result.memberName,
                    gradeLevel: convertGradeLevel(result.gradeLevel),
                    yearLevel: result.yearLevel,
                    marketingYn: result.marketingYn,
                    examYn: result.examYn
                });
                navigate(`/`);
            } else if (response.status === 401) {
                alert('아이디/비밀번호가 올바르지 않습니다');
            }
        } catch (error) {
            console.error("네트워크 에러:", error);
        }
    };

    return (
        <main id="login">
            <div className="container">
                <div className="tab-wrap">
                    <ul className="tab-btn">
                        <li className="on">
                            <span>
                                로그인
                            </span>
                        </li>
                    </ul>
                    <div className="tab-cnt on">
                        <div className="input-box full input_id">
                            <input type="text" placeholder="아이디" name="login_id" value={loginId} onChange={e => setLoginId(e.target.value)} onKeyDown={e => e.key === 'Enter' && loginHandler()} />
                        </div>
                        <div className="input-box input_pw">
                            <input type="password" placeholder="비밀번호" name="password" value={password} onChange={e => setPassword(e.target.value)} onKeyDown={e => e.key === 'Enter' && loginHandler()} />
                        </div>
                        <button className="btn-type01 !mb-5" onClick={loginHandler}>로그인</button>
                        <Link to={`/user/join`} className='font-bold'>회원가입</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default login;