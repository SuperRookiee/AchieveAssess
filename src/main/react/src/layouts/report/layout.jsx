import { BoxTitle, BoxContainer, BoxContent, TabContentArea } from "../../assets/style/Report.style";

const layout = ({ title, children }) => {
    return (
        <TabContentArea id="Box_Layout">
            <BoxTitle>
                <i className="fa-regular fa-pen-to-square mr-1"></i> {title}
            </BoxTitle>
            <BoxContainer>
                <BoxContent>
                    {children}
                </BoxContent>
            </BoxContainer>
        </TabContentArea>
    )
}

export default layout;