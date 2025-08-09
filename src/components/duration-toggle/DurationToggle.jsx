import useDuration from "@/store/useDuration";
import { useLayoutEffect, useRef, useState } from "react";

const DurationToggle = () => {
	// const [duration, setDuration] = useState({ monthly: false, yearly: true });

	const { monthly, yearly } = useDuration((state) => state.duration);
	const durationChange = useDuration((state) => state.setDuration);
	const { setFadeOn, setFadeOff, setPromoFadeOn, setPromoFadeOff } = useDuration((state) => state);

	const handleToggle = () => {
		setFadeOn();

		if (monthly) {
			setPromoFadeOn();
		}

		if (yearly) {
			setPromoFadeOff();
		}

		const change = setTimeout(
			() => {
				durationChange();
				setFadeOff();
				return clearTimeout(change);
			},
			monthly ? 225 : 225,
		);
	};

	return (
		<section className='bg-alabaster py-4 px-6'>
			<div className='flex justify-evenly'>
				<p className={`duration-text ${monthly ? "text-marine-blue" : "text-cool-gray"}`}>Monthly</p>
				<div className={`w-14 bg-marine-blue rounded-full relative px-1`} onClick={handleToggle}>
					<div
						className={`w-4.5 h-4.5 bg-white rounded-full absolute top-1/2 -translate-y-1/2 transition-all duration-300 ${
							monthly ? "translate-x-[0.175rem]" : yearly ? "translate-x-[1.675rem]" : ""
						}`}></div>
				</div>
				<p className={`duration-text ${yearly ? "text-marine-blue" : "text-cool-gray"}`}>Yearly</p>
			</div>
		</section>
	);
};
export default DurationToggle;
