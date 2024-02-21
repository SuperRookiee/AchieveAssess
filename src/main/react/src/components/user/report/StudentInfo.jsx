import { memo } from 'react';
import styled from 'styled-components';
import Eng_Kor from '../../../utils/translate/Eng_Kor';

const StyledUL = styled.ul`
  padding-bottom: 20px;
  i {
    color: '#2f538c';
  }
`;

const StudentInfo = memo(({ user, currentExamInfo }) => {
    return (
        <>
            <StyledUL>
                <i className="fa-solid fa-pen mr-3 mb-3" />
                이름 : <b>{user.memberName}</b>
            </StyledUL>
            <StyledUL>
                <i className="fa-solid fa-pen mr-3 mb-3" />
                학년 : <b>{user.gradeLevel} {user.yearLevel}학년</b>
            </StyledUL>
            <StyledUL>
                <i className="fa-solid fa-pen mr-3 mb-3" />
                응시과목 : <b>{currentExamInfo.length > 0 && Eng_Kor(currentExamInfo[0].subject)} {currentExamInfo.length > 0 && currentExamInfo[0].round}</b>
            </StyledUL>
            <StyledUL>
                <i className="fa-solid fa-pen mr-3 mb-3" />
                응시일자 : <b>{currentExamInfo.length > 0 && new Date(currentExamInfo[0].examDate).toISOString().split('T')[0]}</b>
            </StyledUL>
        </>
    );
})

export default StudentInfo;