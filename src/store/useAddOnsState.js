import { create } from "zustand";
import { pickAddOns } from "@/data";

const useAddOnsState = create((set) => {
	return {
		addOns: pickAddOns(),
		toggleAddOn: (index) =>
			set((state) => ({
				addOns: state.addOns.map((item, i) =>
					i === index ? { ...item, selected: !item.selected } : item,
				),
			})),
	};
});

export default useAddOnsState;
