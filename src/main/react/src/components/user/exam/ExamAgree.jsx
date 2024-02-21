import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  &::before {
    content: '';
    background: url(/src/assets/image/exam/icon1.png) no-repeat 0px 0px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
    width: 18px;
    height: 18px;
    background-size: cover;
  }
`;

const ListItem = styled.li`
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "·";
    display: inline-block;
    margin-right: 8px;
    font-size: 30px;
  }
`;

const ExamAgree = ({setExamAgree, examInfo}) => {
  const navigate = useNavigate();

//   const validateAccess = (round, gradeLevel, subject, examId, statusCode, memberId, testTime) => {
//     navigate(`/user/exam/viewer`, {
//         state: { round, gradeLevel, subject, examId , statusCode, memberId, testTime},
//     });
//     goToViewer = (info) => {
//         validateAccess(info.round, info.gradeLevel, info.subject, info.examId, info.statusCode, info.memberId, info.testTime);
//     }
// };
const goToViewer = (info) => {
  navigate(`/user/exam/viewer`, {
      state: { 
          round: info.round, 
          gradeLevel: info.userLevel, 
          subject: info.subjectUrl, 
          examId: info.examId, 
          statusCode: info.statusCode, 
          memberId: info.memberId, 
          testTime: info.testTime
      },
  });
};

    return (
        <div>
            <div className="text-center text-3xl font-semibold pb-5"><em className="text-blue-500 not-italic">주의사항</em> 및 <em className="text-blue-500 not-italic">부정행위</em>안내</div>
            <p className="text-center text-lg pb-14 text-gray-500">실제 한국교육과정평가원의 시험에서 제시되는 화면입니다. 예시로 제공되는 화면이며,<br />
                주의사항 및 부정행위 안내 내용을 확인하고 <em className="not-italic">[동의합니다] 버튼을 클릭</em>하시기 바랍니다.</p>
            <div className="w-full h-auto p-12 border border-gray-300 rounded-3xl">
                <div className="relative">
                    <List className="text-xl font-bold">응시자 주의사항
                        <ListItem className="relative w-full flex flex-row items-center text-base leading-7 font-normal text-left mt-2 pl-4">감독 선생님의 지시에 따라 시험에 응시하십시오.</ListItem>
                        <ListItem className="relative w-full flex flex-row items-center text-base leading-7 font-normal text-left mt-2 pl-4">책상 위에는 응시표를 제외한 모든 소지품은 책상 아래에 정리하여 주십시오.</ListItem>
                        <ListItem className="relative w-full flex flex-row items-center text-base leading-7 font-normal text-left mt-2 pl-4">감독 선생님에게 시험내용에 대한 질문은 금하고, 시험 중 문제가 발생한 경우 소리내지 말고 조용히 손을 들어 주시기 바랍니다.</ListItem>
                    </List>

                    <List className="text-xl font-bold mt-16">부정행위 안내
                        <ListItem className="relative w-full flex flex-row items-center text-base leading-7 font-normal text-left mt-2 pl-4">개인정보를 타인에게 전달하여 대리로 시험을 보거나, 다른 응시자의 시험을 방해하는 행위</ListItem>
                        <ListItem className="relative w-full flex flex-row items-center text-base leading-7 font-normal text-left mt-2 pl-4">다른 응시자의 모니터를 보거나 자신의 모니터를 보여주는 행위</ListItem>
                        <ListItem className="relative w-full flex flex-row items-center text-base leading-7 font-normal text-left mt-2 pl-4">기타 감독 선생님이 부정행위로 판단하는 행위</ListItem>
                    </List>
                </div>
            </div>
            <div className="flex justify-center items-center mt-16">
                <button className="w-auto bg-primary-100 rounded-full text-xl font-bold text-white py-3 px-11" onClick={() => {setExamAgree(true); goToViewer(examInfo);}}>동의합니다</button>
            </div>
        </div>
  )
}

export default ExamAgree;
