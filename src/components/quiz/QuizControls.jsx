import React from "react";
import Button from "../ui/Button";

const QuizControls = ({
	currentQuestionIndex,
	totalQuestions,
	canProceed,
	onPrevious,
	onNext,
	onFinish,
	selectedAnswer,
}) => {
	return (
		<div className="flex items-center justify-between">
			<div>
				<Button
					variant="outline"
					size="medium"
					onClick={onPrevious}
					disabled={currentQuestionIndex === 0}
				>
					Previous
				</Button>
			</div>

			<div className="space-x-3">
				{currentQuestionIndex < totalQuestions - 1 ? (
					<Button
						variant="primary"
						size="medium"
						onClick={onNext}
						disabled={!canProceed()}
					>
						Next
					</Button>
				) : (
					<Button
						variant="success"
						size="medium"
						onClick={onFinish}
						disabled={!selectedAnswer}
					>
						Finish
					</Button>
				)}
			</div>
		</div>
	);
};

export default QuizControls;

