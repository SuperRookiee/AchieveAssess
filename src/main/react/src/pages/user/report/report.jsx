import { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import { userState } from '../../../atoms/Auth';
import axios from 'axios';
import Layout from "../../../layouts/report/layout";
import ReportRoundSubject from '../../../components/user/report/ReportRoundSubject'
import ReportTab from '../../../components/user/report/ReportTab'
import BasicReport from '../../../components/user/report/BasicReport';
import DetailReport from '../../../components/user/report/DetailReport';
import StudentInfo from '../../../components/user/report/StudentInfo';
import { ReportContainer } from "@assets/style/Report.style";
const URL = import.meta.env.VITE_BASE_URL;

const Report = memo(() => {
    const [user, setUser] = useRecoilState(userState);
    const [Round, setRound] = useState();
    const [Subject, setSubject] = useState();
    const [reportType, setReportType] = useState('basic');
    const [examInfo, setExamInfo] = useState([]);
    const [currentExamInfo, setCurrentExamInfo] = useState([]);
    const navigate = useNavigate();
    // 시험자 정보 가져오기
    useEffect(() => {
        axios.post(`${URL}/user/report/getExamInfo`, {
            memberId: user.memberId,
        }).then((response) => { // round, subject
            const data = response.data;
            if (data) {
                setExamInfo(data);
                if (currentExamInfo.length === 0) {
                    setCurrentExamInfo(data.filter((exam) => exam.round === data[0].round && exam.subject === data[0].subject));
                }
            }
            else {
                setUser((prevUser) => ({ ...prevUser, examYn: 'N' }));
            }
        }).catch((error) =>
            console.log('failed get ExamInfo', error)
        )
    }, [])

    //현재 선택한 시험결과의 기본정보 찾기
    useEffect(() => {
        if (examInfo.length > 0) {
            setCurrentExamInfo(examInfo.filter((exam) => exam.round === Round && exam.subject === Subject));
        }
    }, [Round, Subject]);
    
    useEffect(() => {
        if (examInfo.length > 0) {
            setSubject(examInfo[0].subject);
            setRound(examInfo[0].round);
        }
    }, [examInfo]);

    return (
        <main className='min-h-[50rem]'>
            <ReportRoundSubject examInfo={examInfo} setRound={setRound} Subject={Subject} setSubject={setSubject} />
            <Layout title={`시험참여 정보`}><StudentInfo user={user} currentExamInfo={currentExamInfo} /></Layout>
            <ReportTab reportType={reportType} setReportType={setReportType} marketingYn={user.marketingYn}/>
            <ReportContainer>
                {reportType === 'basic' ? <BasicReport memberId={user.memberId} currentExamInfo={currentExamInfo}/> : <DetailReport memberId={user.memberId} currentExamInfo={currentExamInfo} />}
            </ReportContainer>

            {user.examYn === 'N' && // 시험 결과가 없는 경우
                <section className='disableDrag absolute top-0 left-0 right-0 bottom-0 h-screen text-center z-10'>
                    <div className='py-[1100vh] bg-third-200 bg-opacity-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center w-screen font-bold'>
                        <p className='text-white text-6xl leading-normal'>시험을 응시하지 않아 리포트가 제공되지 않습니다.<br />시험에 응시해 주세요.</p>
                        <div className='mt-4 space-x-4'>
                            <button onClick={() => navigate(`/user/exam/round1`)} className='bg-[#f79646] hover:brightness-90 text-white px-36 py-5 rounded-2xl text-2xl leading-normal'>실전시험I<br />응시하기</button>
                            <button onClick={() => navigate(`/user/exam/round2`)} className='bg-[#9bbb59] hover:brightness-90 text-white px-36 py-5 rounded-2xl text-2xl leading-normal'>실전시험II<br />응시하기</button>
                        </div>
                    </div>
                </section>
            }
        </main>
    )
})

export default Report;