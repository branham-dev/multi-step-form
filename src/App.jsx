import { Route, Routes } from "react-router-dom";
import {
	DesktopLayout,
	MobileLayout,
	PersonalInfo,
	SelectPlan,
	PickAddOns,
	FinishingUp,
	ThankYou,
} from "./pages";

function App() {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<>
						<MobileLayout /> <DesktopLayout />
					</>
				}>
				<Route index element={<PersonalInfo />} />
				<Route path='select-plan' element={<SelectPlan />} />
				<Route path='pick-add-ons' element={<PickAddOns />} />
				<Route path='finishing-up' element={<FinishingUp />} />
				<Route path='thank-you' element={<ThankYou />} />
			</Route>
		</Routes>
	);
}

export default App;
