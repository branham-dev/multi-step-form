import { create } from "zustand";

const useDuration = create((set) => {
	return {
		duration: {
			monthly: true,
			yearly: false,
		},
		fade: false,
		promoFade: false,

		setDuration: () =>
			set((state) => ({
				duration: { monthly: !state.duration.monthly, yearly: !state.duration.yearly },
			})),
		setFadeOn: () => set({ fade: true }),
		setFadeOff: () => set({ fade: false }),
		setPromoFadeOn: () => set({ promoFade: true }),
		setPromoFadeOff: () => set({ promoFade: false }),
	};
});

export default useDuration;
