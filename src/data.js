import ArcadeIcon from "@assets/images/icon-arcade.svg";
import AdvancedIcon from "@assets/images/icon-advanced.svg";
import ProIcon from "@assets/images/icon-pro.svg";

export const subPlan = () => {
	const promo = "2 months free";

	const planData = [
		{
			icon: ArcadeIcon,
			name: "Arcade",
			plan: {
				monthly: {
					billing: "$9/mo",
					promo: null,
				},
				yearly: {
					billing: "$90/yr",
					promo: promo,
				},
			},
		},
		{
			icon: AdvancedIcon,
			name: "Advanced",
			plan: {
				monthly: {
					billing: "$12/mo",
					promo: null,
				},
				yearly: {
					billing: "$120/yr",
					promo: promo,
				},
			},
		},
		{
			icon: ProIcon,
			name: "Pro",
			plan: {
				monthly: {
					billing: "$15/mo",
					promo: null,
				},
				yearly: {
					billing: "$150/yr",
					promo: promo,
				},
			},
		},
	];

	return planData;
};
