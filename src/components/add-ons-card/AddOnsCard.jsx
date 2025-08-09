import useDuration from "@/store/useDuration";
import PropTypes from "prop-types";
import Check from "@assets/images/icon-checkmark.svg";

const AddOnsCard = ({ name, text, plan, selected, toggle }) => {
	const { monthly, yearly } = useDuration((state) => state.duration);

	const period = monthly ? plan?.monthly : yearly ? plan?.yearly : {};

	return (
		<article
			className={`w-full border rounded-lg p-4 flex justify-between items-center transition-all duration-500 ${
				selected ? "border-purplish-blue" : "border-cool-gray"
			}`}
			onClick={toggle}>
			<div className='flex gap-4 items-center'>
				<div>
					<div
						className={`border-1 w-7 h-7 rounded border-cool-gray  flex justify-center items-center transition-all duration-500 ${
							selected ? "bg-purplish-blue" : ""
						}`}>
						<img src={Check} alt='' className='block size-4' />
					</div>
				</div>
				<div>
					<h2 className='text-marine-blue font-medium text-[1.4rem]'>{name}</h2>
					<p className='text-cool-gray text-[1.175rem]'>{text}</p>
				</div>
			</div>
			<div>
				<p className='text-purplish-blue text-[1.075rem] font-medium'>{period}</p>
			</div>
		</article>
	);
};

AddOnsCard.propTypes = {
	name: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	plan: PropTypes.object.isRequired,
	selected: PropTypes.bool.isRequired,
	toggle: PropTypes.func.isRequired,
};

export default AddOnsCard;
