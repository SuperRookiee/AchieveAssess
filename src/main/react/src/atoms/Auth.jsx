import { atom, selector } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
    key: 'recoil-persist-chunjae',
    storage: sessionStorage,
  });

//회원정보 상태
export const userState = atom({
    key: "userState",
    default: null,
    effects_UNSTABLE: [persistAtom],
});

//로그인 상태
export const authState = selector({
    key: 'authState',
    get: ({ get }) => {
        const auth = get(userState);
        return auth !== null ? true : false;
    },
});

//서비스 상태
export const serviceState = atom({
    key: 'serviceState',
    default: false,
});