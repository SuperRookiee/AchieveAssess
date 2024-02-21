import Elementary_CBT1 from "./elementary/CBT1";
import Elementary_CBT2 from "./elementary/CBT2";
import Elementary_CBT3 from "./elementary/CBT3";
import Elementary_CBT4 from "./elementary/CBT4";
import Elementary_CBT5 from "./elementary/CBT5";

import Mid_High_CBT1 from "./mid_high/CBT1";
import Mid_High_CBT2 from "./mid_high/CBT2";
import Mid_High_CBT3 from "./mid_high/CBT3";
import Mid_High_CBT4 from "./mid_high/CBT4";
import Mid_High_CBT5 from "./mid_high/CBT5";
import Mid_High_CBT6 from "./mid_high/CBT6";
import Mid_High_CBT7 from "./mid_high/CBT7";
import Mid_High_CBT8 from "./mid_high/CBT8";
import Mid_High_CBT9 from "./mid_high/CBT9";
import Mid_High_CBT10 from "./mid_high/CBT10";

/* state: gradeLevel round subject */
export const classifyCBT = (state) => {
    if (state?.gradeLevel === '초등') {
        return [{ id: 101, name: 1, answer: null }, { id: 102, name: 2, answer: null }, { id: 103, name: 3, answer: null }, { id: 104, name: 4, answer: null }, { id: 105, name: 5, answer: null }]
    }
    else {
        return [{ id: 111, name: 1, answer: null }, { id: 112, name: 2, answer: null }, { id: 113, name: 3, answer: null }, { id: 114, name: '선택형1', answer: null }, { id: 115, name: '5', answer: null }, { id: 116, name: '6', answer: null }, { id: 117, name: '7', answer: null }, { id: 118, name: '그래프', answer: null }, { id: 118, name: '9', answer: null }]
    }
}

export const getCbtQuestions = (state) => {
    const { gradeLevel } = state;
    if (gradeLevel === '초등')
        return [Elementary_CBT1, Elementary_CBT2, Elementary_CBT3, Elementary_CBT4, Elementary_CBT5];
    else
        return [Mid_High_CBT1, Mid_High_CBT2, Mid_High_CBT3, Mid_High_CBT4, Mid_High_CBT5, Mid_High_CBT6, Mid_High_CBT7, Mid_High_CBT8, Mid_High_CBT9];
}