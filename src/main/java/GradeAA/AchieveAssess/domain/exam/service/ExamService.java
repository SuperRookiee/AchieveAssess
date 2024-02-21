package GradeAA.AchieveAssess.domain.exam.service;

import GradeAA.AchieveAssess.domain.exam.dto.*;
import GradeAA.AchieveAssess.domain.exam.repository.ExamRepository;
import GradeAA.AchieveAssess.domain.scoringSystem.dto.ScoringRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class ExamService {

    private final ExamRepository examRepository;

    public List<ExamResponse> getExam(ExamRequest examRequest){
        List<ExamResponse> examResponses = null;

        if( "이어하기".equals(examRequest.getStatusCode()) ) {
            examResponses = examRepository.getExistingAnswers(examRequest);
        } else {
            examResponses = examRepository.getExam(examRequest);
        }
        return examResponses;
    }

    public void updateExamStudentResponses(ExamSubmit examSubmit) {
        Map<String, Object> paramMap = new HashMap<>();
        List<StudentResponses> questions = examSubmit.getQuestions();

        for (StudentResponses question : questions) {
            paramMap.put("answer", question.getAnswer());
            paramMap.put("duration", question.getDuration());
            paramMap.put("responseId", question.getResponseId());

            examRepository.updateExamStudentResponses(paramMap);
        }
    }
    public List<TimeTable> getExamTimeTable(UserInfo userInfo) {
        List<String> examList =examRepository.getExamList(userInfo);
        String examIds = "";

        if(!examList.isEmpty()) {
            for(int i=0; i<examList.size(); i++) {
                if( i == examList.size()-1 ) {
                    examIds += examList.get(i);
                }else {
                    examIds += examList.get(i) + ",";
                }
            }
            return examRepository.getTimeTableAndStatus(examIds, userInfo.getMemberId());
        }
        else {
            return null;
        }
    }

    public void removeStatus(ExamRequest examRequest) {
        examRepository.deleteStatus(examRequest.getMemberId(), examRequest.getExamId());
    }

    public void removeAnswers(ExamRequest examRequest) {
        examRepository.deleteAnswers(examRequest.getMemberId(), examRequest.getExamId());
    }

    public List<ExamResponse> initAnswers(ExamRequest examRequest) {
        int row = examRepository.insertStatusCode(examRequest.getMemberId(), examRequest.getExamId());

        List<QuestionForId> questionIds = examRepository.getQuestionId(examRequest.getExamId());
        int rows = examRepository.insertInitResponse(questionIds, examRequest.getMemberId());

        return examRepository.getExistingAnswers(examRequest);
    }

    public List<ExamResponse> getStudentAnswers(ExamRequest examRequest) {
        return examRepository.getExistingAnswers(examRequest);
    }

    public int modifyStatus(ScoringRequest scoringRequest) {
        return examRepository.updateStatus(scoringRequest.getMemberId(), scoringRequest.getExamId());
    }

    public List<ExamExplain> getExamExplain(int memberId, int examId) {
        return examRepository.selectExamExplain(memberId, examId);
    }
}
