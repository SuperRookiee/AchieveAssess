package GradeAA.AchieveAssess.domain.exam.repository;

import GradeAA.AchieveAssess.domain.exam.dto.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface ExamRepository {

    List<ExamResponse> getExam(ExamRequest examRequest);

    List<ExamResponse> getExistingAnswers(ExamRequest examRequest);

    int getExamIdByConditions(Map<String, Object> paramMap);

    void updateExamStudentResponses(Map<String, Object> paramMap);

    List<String> getExamList(UserInfo userInfo);

    List<TimeTable> getTimeTableAndStatus(String examIds, int memberId);

    int examStatusCheck(int memberId, int examId);

    int insertAnswers(Map<String, Object> answers);

    int insertStatusCode(int memberId, int examId);

    int deleteAnswers(int memberId, int examId);

    int deleteStatus(int memberId, int examId);

    List<QuestionForId> getQuestionId(int examId);

    int insertInitResponse(List<QuestionForId> questionIds, int memberId);

    int updateStatus(int memberId, int examId);

    List<ExamExplain> selectExamExplain(int memberId, int examId);
}
