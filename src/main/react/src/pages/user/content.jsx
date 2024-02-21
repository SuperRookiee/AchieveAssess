import { useCallback, memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Tab from "@components/user/Tab";
import CBT from "./cbt/cbt";
import Exam from "./exam/exam";
import Report from "./report/report";

const content = memo(() => {
    const { content, id } = useParams();
    const navigate = useNavigate();

    const handleTab = useCallback((content) => {
        navigate(`/user/${content}${content === "exam" ? `/${id}` : ""}`);
    }, [navigate, id]);

    return (
        <>
            <Tab handleTab={handleTab} currentTab={content} rounded={id} />
            {content === "cbt" && <CBT gradeLevel={id || "중등"} />}
            {content === "exam" && <Exam rounded={id} />}
            {content === "report" && <Report />}
        </>
    );
})

export default content;