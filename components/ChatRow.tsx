import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/solid';
import { collection, deleteDoc, doc, orderBy } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

type Props = {
	id: string;
};

function ChatRow({ id }: Props) {
	// to serve the path of the new chat as main after directing it
	const pathname = usePathname();
	const router = useRouter();
	const { data: session } = useSession();
	const [active, setActive] = useState(false);
	// to display the content of the messsage from the firestore database
	const [messages] = useCollection(
		collection(db, 'users', session?.user?.email!, 'chats', id, 'messages')
	);

	useEffect(() => {
		if (!pathname) return;

		setActive(pathname.includes(id));
	}, [pathname]);

	// to delete the chat row
	const removeChat = async () => {
		await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id));
		// after deleting the chat , to redirect the user
		router.replace('/');
	};

	return (
		<Link
			href={`/chat/${id}`}
			// the styling after dollar sign tells that whenever that row is in use or is active change its  colour as mentioned
			className={`chatRow justify-center ${active && 'bg-gray-700/50'}`}
		>
			<ChatBubbleLeftIcon className='h-5 w-5' />
			{/* to display the message in the chat row */}
			<p className='flex-1 hidden md:inline-flex truncate'>
				{/* so the following code will display the message if the new chat is present and if not it will display "new chat"*/}
				{messages?.docs[messages.docs.length - 1]?.data().text || 'New Chat'}
			</p>
			<TrashIcon
				onClick={removeChat}
				className='h-5 w-5 text-gray-700 hover:text-red-700'
			/>
		</Link>
	);
}

export default ChatRow;
