import { PlanCard } from "@components";
import { subPlan } from "../../data";
import { DurationToggle } from "@components";

const SelectPlan = () => {
	const planData = subPlan();

	return (
		<section>
			<h1 className='text-title-1'>Select your plan</h1>
			<p className='text-content-standard'>You have the option of monthly or yearly billing.</p>
			<div className='flex flex-col gap-4 mb-8'>
				{planData.map((plan, index) => (
					<PlanCard key={index} {...plan} />
				))}
			</div>
			<div>
				<DurationToggle />
			</div>
		</section>
	);
};
export default SelectPlan;
