import Box from "../../../components/user/Box";
import TimeTable from "../../../components/user/exam/TimeTable";
import Info from "../../../components/user/exam/Info";
import { useState } from "react";
import MediaTest from "../../../components/user/exam/MediaTest";
import ExamAgree from "../../../components/user/exam/ExamAgree";

const exam = ({ rounded }) => {
    const [showTimeTable, setShowTimeTable] = useState(false);
    const [mediaTest, setMediaTest] = useState(false);
    const [examAgree, setExamAgree] = useState(false);
    const [examInfo, setExamInfo] = useState();

    return (
        <main>
            <Box>
                {!showTimeTable &&
                    <>
                        <Info />
                        <TimeTable round={rounded} setShowTimeTable={setShowTimeTable} examAgree={examAgree} setExamInfo={setExamInfo} />
                    </>
                }
                {showTimeTable && !mediaTest && examInfo?.statusCode === "응시하기" && <MediaTest setMediaTest={setMediaTest} />}
                {mediaTest && examInfo?.statusCode === "응시하기" && <ExamAgree setExamAgree={setExamAgree} examInfo={examInfo} />}
            </Box>
        </main>
    );
};

export default exam;