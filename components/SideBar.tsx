'use client';
import { collection, orderBy, query } from 'firebase/firestore';
import { signOut, useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import NewChat from './NewChat';
import { db } from '../firebase';
import ChatRow from './ChatRow';
import ModelSelection from './ModelSelection';

function SideBar() {
	const { data: session } = useSession();

	const [chats, loading, error] = useCollection(
		session &&
			query(
				collection(db, 'users', session.user?.email!, 'chats'),
				orderBy('createdAt', 'asc')
			)
	);

	return (
		<div className='p-2 flex flex-col h-screen '>
			<div className='flex-1'>
				<div>
					<NewChat />
					{/* New Chat option */}

					<div className='hidden sm:inline'>
						<ModelSelection />
					</div>
					<div className='flex flex-col space-y-2 my-2'>
						{chats?.docs.map((chat) => (
							<ChatRow key={chat.id} id={chat.id} />
						))}
					</div>
					{/* navigation through different chats */}
				</div>
			</div>
			{session && (
				<img
					onClick={() => signOut()}
					src={session.user?.image!}
					alt=''
					className='h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50'
				/>
			)}
		</div>
	);
}

export default SideBar;
