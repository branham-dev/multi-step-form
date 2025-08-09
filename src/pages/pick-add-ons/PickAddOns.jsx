import useAddOnsState from "@/store/useAddOnsState";
import { AddOnsCard } from "@components";

const PickAddOns = () => {
	const addOns = useAddOnsState((state) => state.addOns);
	const toggleAddOn = useAddOnsState((state) => state.toggleAddOn);

	return (
		<section>
			<h1 className='text-title-1'>Pick add-ons</h1>
			<p className='text-content-standard'>Add-ons help enhance your gaming experience.</p>
			<div className='flex flex-col gap-4'>
				{addOns.map((addOn, index) => (
					<AddOnsCard key={index} {...addOn} toggle={() => toggleAddOn(index)} />
				))}
			</div>
		</section>
	);
};
export default PickAddOns;
