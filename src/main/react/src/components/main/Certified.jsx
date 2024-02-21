import { useNavigate } from "react-router-dom";

const Certified = () => {
    const navigate = useNavigate();
    return (
        <section className="mb-12 mt-[-2.5rem]">
            <p className="text-lg mb-10">※ CBT 연습 일부 문항은 한국교육과정평가원의 문항을 사용하였으며, 각 문항별 출처표기를 하였습니다.</p>
            <button onClick={() => navigate(`/user/join`)} className="bg-primary-100 rounded-[10px] text-white py-2 text-xl w-[400px] font-semibold m-auto block">
                회원 가입하기
            </button>
        </section>
    )
}

export default Certified;