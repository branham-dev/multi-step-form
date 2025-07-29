import { NavLink, Outlet } from "react-router-dom";
import { BottomNavigation } from "@components";

const Layout = () => {
	const pageNumbers = [
		[1, "/"],
		[2, "select-plan"],
		[3, "pick-add-ons"],
		[4, "finishing-up"],
	];

	return (
		<div className='font-ubuntu'>
			<header className="bg-[url('/images/bg-sidebar-mobile.svg')] w-full h-60 bg-no-repeat bg-center bg-cover pt-0.5  text-3xl text-marine-blue">
				<div className='w-full flex justify-center gap-8 mt-6 text-white'>
					{pageNumbers.map((page, index) => (
						<NavLink key={index} to={page[1]} className=''>
							<span className=' h-12 w-12 flex justify-center items-center rounded-full p-6'>
								{page[0]}
							</span>
						</NavLink>
					))}
				</div>
			</header>
			<main className='bg-light-gray h-screen flex justify-center items-start'>
				<div className='w-1/2 min-h-1/3 bg-white -mt-12 rounded-2xl pt-8 px-6'>
					<Outlet />
				</div>
			</main>
			<footer className='fixed bottom-0 bg-white w-full py-6 px-5'>
				<BottomNavigation />
			</footer>
		</div>
	);
};
export default Layout;
