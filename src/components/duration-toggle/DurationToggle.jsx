import { useLayoutEffect, useRef, useState } from "react";

const DurationToggle = () => {
	const [duration, setDuration] = useState({ monthly: false, yearly: true });

	const handleToggle = () => {
		setDuration((prev) => ({
			monthly: !prev.monthly,
			yearly: !prev.yearly,
		}));
	};

	return (
		<section className='bg-alabaster py-4 px-6'>
			<div className='flex justify-evenly'>
				<p className='duration-text'>Monthly</p>
				<div className={`w-14 bg-marine-blue rounded-full relative px-1`} onClick={handleToggle}>
					<div
						className={`w-4.5 h-4.5 bg-white rounded-full absolute top-1/2 -translate-y-1/2 transition-all duration-300 ${duration.monthly ? "translate-x-[0.175rem]" : duration.yearly ? "translate-x-[1.675rem]" : ""}`}></div>
				</div>
				<p className='duration-text'>Yearly</p>
			</div>
		</section>
	);
};
export default DurationToggle;
