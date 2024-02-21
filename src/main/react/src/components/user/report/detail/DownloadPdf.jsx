import { PdfDownloadArea, PdfDownloadButton } from "@assets/style/Report.style";
import { useRecoilValue } from "recoil";
import { userState } from "../../../../atoms/Auth";
import { useState } from "react";

const DownloadPdf = ({ GeneratePDF, pdfContentRef }) => {
    const user = useRecoilValue(userState);
    const [downloading, setDownloading] = useState(false);

    const handleDownloadClick = () => {
        setDownloading(true);
        GeneratePDF(pdfContentRef, user.memberName).then(() => setDownloading(false));
    };

    return (
        <PdfDownloadArea>
            <PdfDownloadButton onClick={handleDownloadClick} disabled={downloading}>
                {downloading ? "PDF 준비중..." : "PDF 다운로드"}
            </PdfDownloadButton>
        </PdfDownloadArea>
    );
};

export default DownloadPdf;