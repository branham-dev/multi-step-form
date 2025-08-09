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
					promo: "-",
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
					promo: "-",
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
					promo: "-",
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

export const pickAddOns = () => {
	const addOnsData = [
		{
			name: "Online service",
			text: "Access to multiplayer games",
			plan: {
				monthly: "+$1/mo",
				yearly: "+$10/yr",
			},
			selected: false,
		},
		{
			name: "Larger storage",
			text: "Extra 1TB of cloud save",
			plan: {
				monthly: "+$2/mo",
				yearly: "+$20/yr",
			},
			selected: false,
		},
		{
			name: "Customizable Profile",
			text: "Custom theme on your profile",
			plan: {
				monthly: "+$2/mo",
				yearly: "+$20/yr",
			},
			selected: false,
		},
	];

	return addOnsData;
};
