import Chat from '../../../components/Chat';
import ChatInput from '../../../components/ChatInput';

type Props = {
	params: {
		id: string;
	};
};

// page when the user clicks on the new chat option
function ChatPage({ params: { id } }: Props) {
	return (
		<div className='flex flex-col h-screen overflow-hidden'>
			{/* chat */}
			<Chat chatId={id} />
			{/* chatinput */}
			<ChatInput chatId={id} />
		</div>
	);
}

export default ChatPage;
