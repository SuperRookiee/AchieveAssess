import { useRecoilValue } from "recoil";
import { authState, serviceState } from "../atoms/Auth";
import Cards from "../components/main/Cards";
import Certified from "../components/main/Certified";
import GradeTab from "../components/main/GradeTab"
import Footer from "../layouts/user/footer";
import Popup from "../components/main/Popup";

const main = () => {
  const auth = useRecoilValue(authState);
  const service = useRecoilValue(serviceState);

  return (
    <>
      <main className="relative">
        {auth && <GradeTab />}
        {service && <Popup />}
        <Cards />

        {!auth && <Certified />}
      </main>
      <Footer />
    </>
  );
}

export default main;