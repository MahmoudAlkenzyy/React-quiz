function NextButton({ answer, dispach, index, numQuestions }) {
    if (answer === null) return null
    if (index < numQuestions - 1)
        return (
            <button
                className="btn-ui btn"
                onClick={() => dispach({ type: 'next' })}
            >
                Next
            </button>
        )
    if (index === numQuestions - 1)
        return (
            <button
                className="btn-ui btn"
                onClick={() => dispach({ type: 'finisheQuiz' })}
            >
                Finish
            </button>
        )
}

export default NextButton
