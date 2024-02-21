import Box from "@components/user/Box";
import Guide from "@components/user/cbt/Guide";
import CbtInfo from "@components/user/cbt/CbtInfo";

const cbt = ({ gradeLevel }) => {
    return (
        <main>
            <Box>
                <CbtInfo />
                <Guide gradeLevel={gradeLevel} />
            </Box>
        </main>
    );
}

export default cbt;