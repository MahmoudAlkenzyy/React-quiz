function Options({ question, dispach, answer }) {
    const hasAnswered = answer !== null
    return (
        <div className="options">
            {question.options.map((option, index) => {
                return (
                    <button
                        className={`btn-option btn ${
                            index === answer ? 'answer' : ''
                        } 
                        ${
                            hasAnswered
                                ? index === question.correctOption
                                    ? 'correct'
                                    : 'wrong'
                                : ''
                        }`}
                        key={index}
                        onClick={() =>
                            dispach({
                                type: 'newAnswer',
                                payload: index,
                            })
                        }
                        disabled={hasAnswered}
                    >
                        {option}
                    </button>
                )
            })}
        </div>
    )
}

export default Options
