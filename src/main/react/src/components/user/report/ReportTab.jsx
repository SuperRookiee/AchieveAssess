import { BasicDetailButton, BasicDetailArea } from '@assets/style/Report.style';
import { memo } from 'react';

const ReportTab = memo(({ reportType, setReportType, marketingYn }) => {

    const setReportTypeHandler = (type) => {
        if(type === 'detail' && marketingYn === 'N') {
            alert('상세 리포트는 마케팅 동의를 한 사용자만 이용하실 수 있습니다')
            return false;
        }
        setReportType(type);
    }
    return (
        <BasicDetailArea>
            <BasicDetailButton className={reportType === 'basic' && 'active'} onClick={() => setReportTypeHandler('basic')}>기본 리포트</BasicDetailButton>
            <BasicDetailButton className={reportType === 'detail' && 'active'} onClick={() => setReportTypeHandler('detail')}>상세 리포트</BasicDetailButton>
        </BasicDetailArea>
    )
})

export default ReportTab;