// Put all your page JS here

// https://github.com/jewlofthelotus/SlickQuiz
$(function () {
    $('#slickQuiz').slickQuiz({
        // options
        wrapOfQuestion: null,
        randomSortQuestions: false,
        randomSortAnswers: true,
        scoreAsPercentage: true,
        perQuestionResponseAnswers: true
    });
});
