import { SunIcon } from '@heroicons/react/24/outline';
import { BoltIcon } from '@heroicons/react/24/outline';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
function HomePage() {
	return (
		<div
			className='flex flex-col items-center justify-center  px-2 h-screen text-white
		'
		>
			<h1 className='text-5xl font-bold mb-20 '>ChatGpt Clone</h1>
			<div className='flex space-x-2 text-center'>
				<div>
					<div className='flex flex-col items-center justify-center mb-5 '>
						<SunIcon className='h-8 w-8' />
						{/* first icon */}
						<h2>Examples</h2>
					</div>
					<div className='space-y-2'>
						<p className='infoText'>"Explain something to me"</p>
						<p className='infoText'>
							"What is difference between plane and UFO?"
						</p>
						<p className='infoText'>"What are the colours of rainbow?"</p>
					</div>
				</div>
				<div>
					<div className='flex flex-col items-center justify-center mb-5 '>
						<BoltIcon className='h-8 w-8' />
						{/* first icon */}
						<h2>Capabilities</h2>
					</div>
					<div className='space-y-2'>
						<p className='infoText'>Change the ChatGpt model to use</p>
						<p className='infoText'>
							Messages are stored in Firebase's Firestore
						</p>
						<p className='infoText'>
							Hot Toast Notification when Chatgpt is thinking
						</p>
					</div>
				</div>
				<div>
					<div className='flex flex-col items-center justify-center mb-5 '>
						<ExclamationTriangleIcon className='h-8 w-8' />
						{/* first icon */}
						<h2>Limitations</h2>
					</div>
					<div className='space-y-2'>
						<p className='infoText'>
							May occasionally generate incorrect information
						</p>
						<p className='infoText'>
							May Occasionally generate harmful instructions
						</p>
						<p className='infoText'>Limited knowledge of world</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
