import { useNavigate } from "react-router-dom";

const Guide = ({ gradeLevel }) => {
    const navigate = useNavigate();

    const validateAccess = (gradeLevel) => {
        navigate(`/user/cbt/viewer`, {
            state: { gradeLevel },
        });
    };

    return (
        <div className="flex justify-between items-end">
            <div className="test_guide flex_end">
                <h6 className="text-primary-100 font-bold text-lg">꼭-확인하세요.</h6>
                <ul className="ml-4 pl-1">
                    <li className="list-disc py-1"><label className="text-first-100 pr-1">동영상, 듣기 내용은 한 번만 들려주는 문항이 있습니다.</label>잘 청취하도록 유의 바랍니다.</li>
                    <li className="list-disc py-1"><label className="text-first-100">헤드셋 혹은 이어폰을 착용</label>해 주시기 바랍니다.</li>
                </ul>
            </div>
            <button onClick={() => validateAccess(gradeLevel)} className="bg-first-100 py-2 px-9 rounded-3xl text-white text-lg font-semibold hover:opacity-90">시험 시작</button>
        </div>
    );
}

export default Guide;