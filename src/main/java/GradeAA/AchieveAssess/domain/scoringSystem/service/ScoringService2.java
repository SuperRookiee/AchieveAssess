package GradeAA.AchieveAssess.domain.scoringSystem.service;

import GradeAA.AchieveAssess.domain.scoringSystem.dto.ResponsesAndAnswers;
import GradeAA.AchieveAssess.domain.scoringSystem.dto.ScoringRequest;
import GradeAA.AchieveAssess.domain.scoringSystem.dto.ScoringResult2;
import GradeAA.AchieveAssess.domain.scoringSystem.repository.ScoringRepository2;
import GradeAA.AchieveAssess.exception.scoringSystem.NotFoundDataException;
import GradeAA.AchieveAssess.exception.scoringSystem.ScoringFailedException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ScoringService2 {

    private final ScoringRepository2 scoringRepository;

    // 채점 및 결과 생성
    @Transactional
    public void createScoringResult(ScoringRequest request) {

        // 수험자 답안지 및 정답 가져오기
        List<ResponsesAndAnswers> responsesAndAnswers = getResponsesAndAnswers(request);

        // 채점 후 디비에 결과 저장
        saveResultAfterScoring(responsesAndAnswers);

    }

    private List<ResponsesAndAnswers> getResponsesAndAnswers(ScoringRequest request) {
        List<ResponsesAndAnswers> responsesAndAnswers = scoringRepository.getStudentResponsesAndCorrectAnswers(
            request.getMemberId(),
            request.getExamId());

        if (responsesAndAnswers.isEmpty()) {
            throw new NotFoundDataException(request.getMemberName() + " 님이 제출한 답안지를 찾을 수 없습니다.");
        }
        return responsesAndAnswers;
    }

    private void saveResultAfterScoring(List<ResponsesAndAnswers> responsesAndAnswers) {
        List<ScoringResult2> scoringResults = new ArrayList<>();

        // 채점 로직
        for (ResponsesAndAnswers studentResponse : responsesAndAnswers) {

            String correctResult;
            int score = 0;

            // 답안이 일치 하는 경우
            if (studentResponse.getCorrectAnswer().equals(studentResponse.getStudentAnswer())) {
                correctResult = "O";  // 정답
                score = studentResponse.getScore();  // 배점에 따른 점수 기록
            } else {
                correctResult = "X";  // 오답
            }

            // 각 문항에 대한 채점 결과 저장
            ScoringResult2 scoringResult = ScoringResult2.builder()
                .responseId(studentResponse.getResponseId())
                .correctResult(correctResult)
                .score(score)
                .build();

            if (scoringResult == null) {
                throw new ScoringFailedException("채점 결과 저장에 실패했습니다.");
            }

            scoringResults.add(scoringResult);
        }

        // 채점 결과 디비에 저장
        scoringRepository.saveScoringResults(scoringResults);
    }

}
