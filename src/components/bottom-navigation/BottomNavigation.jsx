import { useLocation, useNavigate } from "react-router-dom";

const BottomNavigation = () => {
	const stepRoutes = ["/", "/select-plan", "/pick-add-ons", "/finishing-up"];

	const location = useLocation();
	const navigate = useNavigate();
	const currentIndex = stepRoutes.indexOf(location.pathname);

	// console.log(currentIndex);

	const isFirstStep = currentIndex === 0;
	const isLastStep = currentIndex === stepRoutes.length - 1;

	const handleNext = () => {
		if (isLastStep) {
			navigate("/thank-you");
		} else {
			navigate(stepRoutes[currentIndex + 1]);
		}
	};

	const handleBack = () => {
		if (!isFirstStep) {
			navigate(stepRoutes[currentIndex - 1]);
		}
	};

	if (currentIndex === -1) return null;

	return (
		<div className='flex justify-between text-xl font-medium'>
			<button
				className='border border-light-gray py-2.5 px-5 text-cool-gray rounded-md'
				onClick={handleBack}
				disabled={isFirstStep}
				style={{ visibility: isFirstStep ? "hidden" : "visible" }}>
				Go Back
			</button>
			<button className={`${isLastStep ? "bg-purplish-blue" : "bg-marine-blue"} py-2.5 px-5 text-white rounded-md`} onClick={handleNext}> 
				{isLastStep ? "Confirm" : "Next Step"}
			</button>
		</div>
	);
};
export default BottomNavigation;
