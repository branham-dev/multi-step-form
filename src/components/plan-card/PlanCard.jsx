import { useState } from "react";


const PlanCard = ({ icon, name, plan }) => {
	const [subPlan, setSubPlan] = useState(1);
	const period = subPlan ? plan.yearly : plan.monthly;
	const { billing, promo } = period;

	return (
		<article className='flex gap-6 w-full border py-6 px-6 border-cool-gray rounded-lg'>
			<figure className='block'>
				<img src={icon} alt={name} className='size-15' />
			</figure>
			<div className='flex flex-col gap-1.5'>
				<h2 className='text-2xl font-medium text-marine-blue'>{name}</h2>
				<p className='text-cool-gray text-xl font-medium'>{billing}</p>
				{promo && <p className='text-marine-blue text-lg'>{promo}</p>}
			</div>
		</article>
	);
};
export default PlanCard;
