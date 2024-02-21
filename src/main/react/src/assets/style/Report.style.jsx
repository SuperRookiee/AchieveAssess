import styled from 'styled-components';

/**
 *  리포트 상태 관리 - 1. 회차, 과목 드롭다운    2. 기본리포트, 상태리포트 탭
 *  1. RoundSubjectArea = 회차, 과목 드롭다운 영역 - ReportRoundSubject 컴포넌트
 *  2. BasicDetailArea = 기본리포트, 상테리포트 탭 메뉴 섹션
 *  3. BasicDetailButton = 기본리포트, 상테리포트 탭 버튼
 *  4. ReportContainer = 리포트 섹션 - ReportContent 컴포넌트
 */

export const RoundSubjectArea = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const BasicDetailArea = styled.section`
    display: flex;
    justify-content: center;
    margin: 50px auto 100px auto;

    & .active {
        border-bottom: 3px solid var(--primary);
        color: black;
    }
`;

export const BasicDetailButton = styled.button`
    width: 380px;
    height: 85px;
    font-size: 25px;
    font-weight: 750;
    color: #ccc;
`;

export const ReportContainer = styled.section`
    display: block;
    box-sizing: border-box;
    margin-bottom: 90px;
`;

/**
 *  리포트 내용 영역 (기본 리포트, 상세 리포트 둘 다)
 *  1. ScoreArea = 점수 출력 영역 
 *  2. TabContentArea = 리포트 영역 섹션
 *  3. BoxTitle = 내용 영역
 *  4. BoxContainer = 박스 제목
 *  5. BoxContent = 박스 내 내용
 *  6. PdfDownloadArea = PDF 리포트 다운로드 영역
 *  7. PdfDownloadButton = PDF 리포트 다운로드 버튼
 */

export const ScoreArea = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    margin-bottom: 100px;
    font-size: 30px;
    font-weight: 750;
`;

export const TabContentArea = styled.div`
    box-sizing: border-box;
    display: block;
    text-align: left;
    margin-bottom: 90px;
`;

export const BoxTitle = styled.div`
    font-size: 25px;
    font-weight: 750;
    margin-bottom: 25px;
`;

export const BoxContainer = styled.div`
    font-size: 25px;
    border: 3px solid;
    border-color: #bdbdbd;
    border-radius: 30px;
    box-shadow: 0px 2px 9.2px 0.8px rgba(34, 34, 34, 0.1);
`;

export const BoxContent = styled.div`
    width: 100%;
    padding: 40px 40px 40px 40px;
    box-sizing: border-box;
`;

export const PdfDownloadArea = styled.div`
    display: flex;
    justify-content: center;
`;

export const PdfDownloadButton = styled.button`
    color: white;
    text-decoration: none;
    padding: 17px 165px;
    background-color: #2f538c;
    border-radius: 30px;
    font-size: 25px;
    font-weight: 750;
`;

export const Table = styled.table`
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
    th, td {
        border: 2px solid #ccc;
        text-align: center;
        height: 70px;
        width: 10%;
    }

    &#basic_questionExplain {
        tbody td {
            height: 4.5rem !important;
        }
    }
`;