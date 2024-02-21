import "@assets/css/user/login.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const URL = import.meta.env.VITE_BASE_URL;

const join = () => {
	const [loginId, setLoginId] = useState("");
	const [password, setPassword] = useState("");
	const [memberName, setMemberName] = useState("");
	const [gradeLevel, setGradeLevel] = useState("");
	const [yearLevel, setYearLevel] = useState("");
	const [marketingYn, setMarketingYn] = useState("N");
	const navigate = useNavigate();

	const [maxYearLevel, setMaxYearLevel] = useState(0);

	useEffect(() => {
		if (gradeLevel === 'elem')
			setMaxYearLevel(6);
		else
			setMaxYearLevel(3);
	}, [gradeLevel])

	const joinHandler = async () => {
		if (!loginId) {
			alert('아이디를 입력하세요.');
			return;
		}

		if (!password) {
			alert('비밀번호를 입력하세요.');
			return;
		}

		if (!memberName) {
			alert('이름을 입력하세요.');
			return;
		}

		if (!gradeLevel) {
			alert('학교급을 선택하세요.');
			return;
		}

		if (!yearLevel) {
			alert('학년을 입력하세요.');
			return;
		}

		const joinData = {
			loginId: loginId,
			password: password,
			memberName: memberName,
			gradeLevel: gradeLevel,
			yearLevel: yearLevel,
			marketingYn: marketingYn,
		};

		try {
			let response = await fetch(`${URL}/user/join`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(joinData)
			});

			if (response.ok) {
				navigate(`/`);
			} else if (response.status === 409) {
				const data = await response.json();
				alert('이미 존재하는 아이디입니다.');
			}
		} catch (error) {
			console.error("네트워크 에러:", error);
		}
	};

	return (
		<main id="join">
			<div className="container">
				<div className="tab-wrap">
					<ul className="tab-btn">
						<li className="on">
							<span>
								회원가입
							</span>
						</li>
					</ul>
					<div className="tab-cnt on">
						<div className="input-box full input_id">
							<input type="text" placeholder="아이디" name="login_id" value={loginId} onChange={(e) => setLoginId(e.target.value)} />
						</div>
						<div className="input-box full input_pw">
							<input type="password" placeholder="비밀번호" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
						</div>
						<div className="input-box full input_name">
							<input type="text" placeholder="이름" name="member_name" value={memberName} onChange={(e) => setMemberName(e.target.value)} />
						</div>
						<div className="input-box full input_grade">
							<select name="grade_level" value={gradeLevel} onChange={(e) => setGradeLevel(e.target.value)}>
								<option value="" checked>학교급</option>
								<option value="elem">초등</option>
								<option value="mid">중등</option>
								<option value="high">고등</option>
							</select>
						</div>
						<div className="input-box full input_year">
							{/* <input type="number" placeholder="학년" name="year_level" value={yearLevel} onChange={(e) => setYearLevel(e.target.value)} min={1} max={gradeLevel ==='elem' ? 6 : 3}/> */}
							<select name="year_level" value={yearLevel} onChange={(e) => setYearLevel(e.target.value)}>
								{Array.from({ length: maxYearLevel }, (_, i) => (
									<option value={i + 1} key={i}>
										{i + 1 === 0 ? "학년" : i + 1}학년
									</option>
								))}
							</select>
						</div>
						<div className="flex justify-center mb-2">
							<div className="flex items-center h-5  w-[400px]">
								<input id="terms" type="checkbox" name="marketing_yn" checked={marketingYn === "Y"} onChange={(e) => setMarketingYn(e.target.checked ? "Y" : "N")}
									className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
								<label htmlFor="terms" className="input-box ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">마케팅 수신 동의(선택)</label>
							</div>
						</div>
						<label className="ml-2 !my-5 text-sm font-medium text-gray-900 dark:text-gray-300">
							※ 선택항목 미동의 시, 취약점 분석표 및 상세 리포트 등을 열람할 수 없습니다. 정상적인 사이트 이용은 가능합니다.
						</label>
						<button className="btn-type01 !mt-5" onClick={joinHandler}>회원가입</button>
					</div>
				</div>
			</div>
		</main>
	);
}

export default join;