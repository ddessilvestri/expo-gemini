import { ChatMessages } from '@/components/chat/ChatMessages';
import CustomInputBox from '@/components/chat/CustomInputBox';
import { useBasicPromptStore } from '@/store/basic-prompt/basicPrompt.store';
import { Layout } from '@ui-kitten/components';



const BasicPromptScreen = () => {

  const messages  = useBasicPromptStore((state) => state.messages);
  const isGeminiWriting = useBasicPromptStore((state) => state.geminiWriting);
  const { addMessage } = useBasicPromptStore()
  return (
    <Layout style={{ flex: 1 }}>
      <ChatMessages messages={messages}  isGeminiWriting={isGeminiWriting}/>

      <CustomInputBox onSendMessage={(message) => {addMessage(message)}} />
    </Layout>
  );
};

export default BasicPromptScreen;
