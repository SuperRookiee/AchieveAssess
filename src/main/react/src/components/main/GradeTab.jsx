import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms/Auth';

const GradeTab = () => {
    const user = useRecoilValue(userState);

    return(
        <section className="flex justify-center text-center">
           <div className="py-2 border-b-2 border-primary-100 w-[600px] font-['SCoreDream'] text-[#222] font-semibold text-xl">
           {user.gradeLevel}
           </div>
        </section>
    );
}

export default GradeTab;