import { Route, Routes } from "react-router-dom";
import {
	Layout,
	PersonalInfo,
	SelectPlan,
	PickAddOns,
	FinishingUp,
	ThankYou,
	NotFound,
} from "./pages";

function App() {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<>
						<Layout />
					</>
				}>
				<Route index element={<PersonalInfo />} />
				<Route path='select-plan' element={<SelectPlan />} />
				<Route path='pick-add-ons' element={<PickAddOns />} />
				<Route path='finishing-up' element={<FinishingUp />} />
				<Route path='thank-you' element={<ThankYou />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
