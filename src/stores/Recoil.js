import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
    key: "recoil-persist-atom",
    storage: sessionStorage,
    // storage: localStorage,
});

// 학부모 회원가입 전화번호
export const userId = atom({
    key: "userId",
    default: '',
});

// 학부모 회원가입 비밀번호
export const userPw = atom({
    key: "userPw",
    default: '',
});

// 학부모 회원가입 비밀번호 확인
export const userVerifyPw = atom({
    key: "userVerifyPw",
    default: '',
});