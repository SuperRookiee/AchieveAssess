package GradeAA.AchieveAssess.domain.scoringSystem.service.oldversion;

import GradeAA.AchieveAssess.domain.scoringSystem.dto.ScoringRequest;
import GradeAA.AchieveAssess.domain.scoringSystem.dto.oldversion.CorrectAnswer;
import GradeAA.AchieveAssess.domain.scoringSystem.dto.oldversion.ScoringResult;
import GradeAA.AchieveAssess.domain.scoringSystem.dto.oldversion.StudentResponses;
import GradeAA.AchieveAssess.domain.scoringSystem.repository.oldversion.ScoringRepository;
import GradeAA.AchieveAssess.exception.scoringSystem.NotFoundDataException;
import GradeAA.AchieveAssess.exception.scoringSystem.ScoringFailedException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ScoringService {

    private final ScoringRepository scoringRepository;

    // 채점 및 결과 생성
    @Transactional
    public void createScoringResult(ScoringRequest request) {

        // 제출된 수험자 답안지 불러오기
        List<StudentResponses> studentResponses = getStudentResponses(request);

        // 문항 정답 가져오기
        Map<Integer, String> correctAnswers = getCorrectAnswers(request);

        // 수험자 답안지 채점 후 디비 저장
        int score = 0;
        scoreUserAnswerSheet(studentResponses, correctAnswers, score);

    }

    // 메서드 for 제출된 수험자 답안지 불러오기
    private List<StudentResponses> getStudentResponses(ScoringRequest request) {
        List<StudentResponses> studentResponses = scoringRepository.getStudentResponses(
            request.getMemberId(), request.getExamId());

        if (studentResponses.isEmpty()) {
            throw new NotFoundDataException(request.getMemberName() + " 님이 제출한 답안지를 찾을 수 없습니다.");
        }
        return studentResponses;
    }

    // 메서드 for 문항 정답 가져오기
    private Map<Integer, String> getCorrectAnswers(ScoringRequest request) {
        List<CorrectAnswer> correctAnswersList = scoringRepository.getCorrectAnswers(
            request.getExamId());

        if (correctAnswersList.isEmpty()) {
            throw new NotFoundDataException("시험" + request.getExamId() + "의 문항에 대한 정답을 찾을 수 없습니다.");
        }

        // 정답 목록을 Map으로 변환
        return correctAnswersList
            .stream()
            .collect(
                Collectors.toMap(CorrectAnswer::getQuestionId, CorrectAnswer::getCorrectAnswer));
    }

    // 메서드 for 수험자 답안지 채점 후 디비 저장
    private void scoreUserAnswerSheet(List<StudentResponses> studentResponses,
        Map<Integer, String> correctAnswers, int score) {
        for (StudentResponses studentResponse : studentResponses) {
            String correctResult;

            // 문항 ID에 해당하는 정답 가져오기
            String correctAnswer = correctAnswers.get(studentResponse.getQuestionId());

            // 답안이 일치 하는 경우
            if (studentResponse.getAnswer().equals(correctAnswer)) {
                score++;  // 점수 증가
                correctResult = "O";  // 정답
            } else {
                correctResult = "X";  // 오답
            }

            // 각 문항에 대한 채점 결과 저장
            ScoringResult scoringResult = ScoringResult.builder()
                .responseId(studentResponse.getResponseId())
                .correctResult(correctResult)
                .build();

            if (scoringResult == null) {
                throw new ScoringFailedException("채점 결과 저장에 실패했습니다.");
            }


            // 채점 결과 디비에 저장
            // scoringRepository.saveScoringResult(scoringResult);
        }
    }
}

