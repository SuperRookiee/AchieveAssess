import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

/* 1페이지 - 다중 컴포넌트 /*
export const GeneratePDF = (pdfContentRef, fileName) => {
  return new Promise((resolve) => {
      if (pdfContentRef.current) {
          html2canvas(pdfContentRef.current).then((canvas) => {
              const filename = `${fileName}_${Date.now()}.pdf`;
              const doc = new jsPDF('p', 'mm', 'a4');
              const imgData = canvas.toDataURL('image/png');
              const imgWidth = 210;
              const pageHeight = 295;
              const imgHeight = (canvas.height * imgWidth) / canvas.width;
              let heightLeft = imgHeight;
              let position = 0;

              doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
              heightLeft -= pageHeight;

              while (heightLeft >= 0) {
                  position = heightLeft - imgHeight;
                  doc.addPage();
                  doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                  heightLeft -= pageHeight;
              }

              doc.save(filename);
              resolve();
          });
      } else {
          resolve();
      }
  });
};
/* 1페이지 - 1 컴포넌트 */
export const GeneratePDF = (pdfContentRef, fileName) => {
  return new Promise((resolve) => {
    if (pdfContentRef.current) {
      const sections = pdfContentRef.current.querySelectorAll('#detail_report #Box_Layout');
      const doc = new jsPDF('p', 'mm', 'a4');
      console.log(sections)

      sections.forEach((section, index) => {
        html2canvas(section).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const imgWidth = 210;
          const pageHeight = 295;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          let heightLeft = imgHeight;
          let position = 0;

          if (index > 0) {
            doc.addPage();
          }

          doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;

          while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            doc.addPage();
            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
          }

          if (index === sections.length - 1) {
            const filename = `${fileName}_${Date.now()}.pdf`;
            doc.save(filename);
            resolve();
          }
        });
      });
    } else {
      resolve();
    }
  });
};
/* */