const PersonalInfo = () => {
	return (
		<section className=''>
			<h1 className='text-title-1'>Personal info</h1>
			<p className='text-content-standard'>
				Please provide your name, email address, and phone number.
			</p>

			<form action='' className='flex flex-col gap-6'>
				<div>
					<label htmlFor='name' className='form-label'>
						Name
					</label>
					<input
						type='text'
						name='name'
						id='name'
						placeholder='e.g. Stephen King'
						className='form-input'
					/>
				</div>
				<div>
					<label htmlFor='email' className='form-label'>
						Email Address
					</label>
					<input
						type='email'
						name='email'
						id='name'
						placeholder='e.g. stephenking@lorem.com'
						className='form-input'
					/>
				</div>
				<div>
					<label htmlFor='tel' className='form-label'>
						Phone Number
					</label>
					<input
						type='tel'
						name='tel'
						id='tel'
						placeholder='e.g. +1 234 567 890'
						className='form-input'
					/>
				</div>
			</form>
		</section>
	);
};
export default PersonalInfo;
