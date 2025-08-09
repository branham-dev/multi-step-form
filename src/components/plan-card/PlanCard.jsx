import useDuration from "@/store/useDuration";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const PlanCard = ({ icon, name, plan }) => {
	const { monthly, yearly } = useDuration((state) => state.duration);

	const period = monthly ? plan?.monthly : yearly ? plan?.yearly : {};
	const { billing, promo } = period || {};

	const [displayPromo, setDisplayPromo] = useState(promo || "");

	const { fade, promoFade } = useDuration((state) => state);

	return (
		<article className='flex gap-6 w-full border py-6 px-6 border-cool-gray rounded-lg'>
			<figure className='block'>
				<img src={icon} alt={name} className='size-15' />
			</figure>
			<div className='flex flex-col gap-1.5'>
				<h2 className='text-2xl font-medium text-marine-blue'>{name}</h2>
				<p
					className={`text-cool-gray text-xl font-medium transition-opacity duration-300 ${
						fade ? "opacity-0" : "opacity-100"
					}`}>
					{billing}
				</p>
				{
					<p
						className={`text-marine-blue text-lg transition-all duration-500 ease-in-out overflow-hidden ${
							promoFade && !fade ? "opacity-100 max-h-10" : "opacity-0 max-h-0 "
						} ${promo ? "" : ""}`}>
						{promo || ""}
					</p>
				}
			</div>
		</article>
	);
};

PlanCard.propTypes = {
	icon: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	plan: PropTypes.object.isRequired,
};

export default PlanCard;
