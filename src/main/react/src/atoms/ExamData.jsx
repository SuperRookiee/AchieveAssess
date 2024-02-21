import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

//시험 답안 상태
export const examState = atom({
    key: "examState",
    default: [],
    effects_UNSTABLE: [persistAtom],
});