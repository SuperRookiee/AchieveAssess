import R1_Elem_Kor_Exam1 from "./round1/elementary/korean/FirstExamElemKor1"
import R1_Elem_Kor_Exam2 from "./round1/elementary/korean/FirstExamElemKor2"
import R1_Elem_Kor_Exam3 from "./round1/elementary/korean/FirstExamElemKor3"
import R1_Elem_Kor_Exam4 from "./round1/elementary/korean/FirstExamElemKor4"
import R1_Elem_Kor_Exam5 from "./round1/elementary/korean/FirstExamElemKor5"
import R1_Elem_Kor_Exam6 from "./round1/elementary/korean/FirstExamElemKor6"
import R1_Elem_Kor_Exam7 from "./round1/elementary/korean/FirstExamElemKor7"
import R1_Elem_Kor_Exam8 from "./round1/elementary/korean/FirstExamElemKor8"
import R1_Elem_Kor_Exam9 from "./round1/elementary/korean/FirstExamElemKor9"
import R1_Elem_Kor_Exam10 from "./round1/elementary/korean/FirstExamElemKor10"

import R1_Elem_Math_Exam1 from "./round1/elementary/math/FirstExamElemMath1"
import R1_Elem_Math_Exam2 from "./round1/elementary/math/FirstExamElemMath2"
import R1_Elem_Math_Exam3 from "./round1/elementary/math/FirstExamElemMath3"
import R1_Elem_Math_Exam4 from "./round1/elementary/math/FirstExamElemMath4"
import R1_Elem_Math_Exam5 from "./round1/elementary/math/FirstExamElemMath5"
import R1_Elem_Math_Exam6 from "./round1/elementary/math/FirstExamElemMath6"
import R1_Elem_Math_Exam7 from "./round1/elementary/math/FirstExamElemMath7"
import R1_Elem_Math_Exam8 from "./round1/elementary/math/FirstExamElemMath8"
import R1_Elem_Math_Exam9 from "./round1/elementary/math/FirstExamElemMath9"
import R1_Elem_Math_Exam10 from "./round1/elementary/math/FirstExamElemMath10"

import R1_Elem_Eng_Exam1 from "./round1/elementary/english/FirstExamElemEng1"
import R1_Elem_Eng_Exam2 from "./round1/elementary/english/FirstExamElemEng2"
import R1_Elem_Eng_Exam3 from "./round1/elementary/english/FirstExamElemEng3"
import R1_Elem_Eng_Exam4 from "./round1/elementary/english/FirstExamElemEng4"
import R1_Elem_Eng_Exam5 from "./round1/elementary/english/FirstExamElemEng5"
import R1_Elem_Eng_Exam6 from "./round1/elementary/english/FirstExamElemEng6"
import R1_Elem_Eng_Exam7 from "./round1/elementary/english/FirstExamElemEng7"
import R1_Elem_Eng_Exam8 from "./round1/elementary/english/FirstExamElemEng8"
import R1_Elem_Eng_Exam9 from "./round1/elementary/english/FirstExamElemEng9"
import R1_Elem_Eng_Exam10 from "./round1/elementary/english/FirstExamElemEng10"
import CommingSoon from "../../../main/Popup";

export const classifyExam = (examData) => {
    const array = [];
    examData.map((exam) => {
        const elem = { id: exam.questionId, name: exam.questionOrderName, answer: exam.answer, duration: exam.duration, responseId: exam.responseId };
        array.push(elem);
    });
    return array;
}

export const getExamQuestions = (states) => {
    const { gradeLevel, round, subject } = states;
    if (round == '1') {
        if (gradeLevel == 'elem') {
            if (subject == 'korean')
                return [R1_Elem_Kor_Exam1, R1_Elem_Kor_Exam2, R1_Elem_Kor_Exam3, R1_Elem_Kor_Exam4, R1_Elem_Kor_Exam5, R1_Elem_Kor_Exam6, R1_Elem_Kor_Exam7, R1_Elem_Kor_Exam8, R1_Elem_Kor_Exam9, R1_Elem_Kor_Exam10]
            else if (subject == 'math')
                return [R1_Elem_Math_Exam1, R1_Elem_Math_Exam2, R1_Elem_Math_Exam3, R1_Elem_Math_Exam4, R1_Elem_Math_Exam5, R1_Elem_Math_Exam6, R1_Elem_Math_Exam7, R1_Elem_Math_Exam8, R1_Elem_Math_Exam9, R1_Elem_Math_Exam10]
            else if (subject == 'english')
                return [R1_Elem_Eng_Exam1, R1_Elem_Eng_Exam2, R1_Elem_Eng_Exam3, R1_Elem_Eng_Exam4, R1_Elem_Eng_Exam5, R1_Elem_Eng_Exam6, R1_Elem_Eng_Exam7, R1_Elem_Eng_Exam8, R1_Elem_Eng_Exam9, R1_Elem_Eng_Exam10]
        }
        else if (gradeLevel == 'mid') {
            if (subject == 'korean')
                return [CommingSoon];
            else if (subject == 'math')
                return [CommingSoon];
            else if (subject == 'english')
                return [CommingSoon];
        }
        else if (gradeLevel == 'high') {
            if (subject == 'korean')
                return [CommingSoon];
            else if (subject == 'math')
                return [CommingSoon];
            else if (subject == 'english')
                return [CommingSoon];
        }
    }
    else if (round == '2') {
        if (gradeLevel == 'elem') {
            if (subject == 'korean')
                return [R1_Elem_Kor_Exam1, R1_Elem_Kor_Exam2, R1_Elem_Kor_Exam3, R1_Elem_Kor_Exam4, R1_Elem_Kor_Exam5, R1_Elem_Kor_Exam6, R1_Elem_Kor_Exam7, R1_Elem_Kor_Exam8, R1_Elem_Kor_Exam9, R1_Elem_Kor_Exam10]
            else if (subject == 'math')
                return [R1_Elem_Math_Exam1, R1_Elem_Math_Exam2, R1_Elem_Math_Exam3, R1_Elem_Math_Exam4, R1_Elem_Math_Exam5, R1_Elem_Math_Exam6, R1_Elem_Math_Exam7, R1_Elem_Math_Exam8, R1_Elem_Math_Exam9, R1_Elem_Math_Exam10]
            else if (subject == 'english')
                return [R1_Elem_Eng_Exam1, R1_Elem_Eng_Exam2, R1_Elem_Eng_Exam3, R1_Elem_Eng_Exam4, R1_Elem_Eng_Exam5, R1_Elem_Eng_Exam6, R1_Elem_Eng_Exam7, R1_Elem_Eng_Exam8, R1_Elem_Eng_Exam9, R1_Elem_Eng_Exam10]
        }
        else if (gradeLevel == 'mid') {
            if (subject == 'korean')
                return [CommingSoon];
            else if (subject == 'math')
                return [CommingSoon];
            else if (subject == 'english')
                return [CommingSoon];
        }
        else if (gradeLevel == 'high') {
            if (subject == 'korean')
                return [CommingSoon];
            else if (subject == 'math')
                return [CommingSoon];
            else if (subject == 'english')
                return [CommingSoon];
        }
    }
}