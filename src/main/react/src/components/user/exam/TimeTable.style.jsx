import { styled } from "styled-components";

export const TabCon = styled.div`
     /* display:none; */
      text-align:left; position:absolute; width: 100%; left: 0; padding-top: 100px; box-sizing: border-box;
     > div {
        width: 100%; height: auto; border: 3px solid #6c9deb; border-radius: 30px; padding: 60px; margin-bottom: 150px;
     }
`

export const PageTit = styled.div`
    font-size: 28px; line-height: 35px; font-weight: 600; text-align: center;
    > em {
        color: #6c9deb; font-weight: 600;
    }
`

export const PageInfo = styled.p`
    font-size: 18px; color: #757575; line-height: 26px;
    > em {
        font-weight: 900;
    }
`

export const TblList = styled.table`
    width: 100%; table-layout:fixed;border:1px solid #ccc;
    thead th {
        padding:5px 8px; height: 100px; border-left:1px solid #cccccc; border-top:1px solid #ccc; text-align:center; font-weight: 700; font-size: 20px;
    }
    tbody td {
        padding:5px 8px; height: 100px; font-size: 18px; border-top:1px solid #ccc; color: #000; border-left:1px solid #ccc;color:#333;text-align:center;line-height:18px; background-color:#fff;
    }
`