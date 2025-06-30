import { CompleteData } from './dataset';

const chatWithBot = async (userQuery) => {
    try {

        let bodyContent = {
            contents: [
                {
                    role: "user",
                    parts: [
                        {
                            text: `You are a helpful chatbot that only answers using the following context in short:
                            ${JSON.stringify(CompleteData)}
                            User: ${userQuery}`
                        }
                    ]
                }
            ]
        }

        const apiRes = await fetch(`${import.meta.env.VITE_GEMINI_API}?key=${import.meta.env.VITE_GEMINI_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyContent)
        });
        const botResObj = await apiRes.json();
        const botRes = botResObj.candidates[0].content.parts[0].text;
        const cleanBotReplyArr = botRes.split('*').join(' ');
        console.log('CleanBotReply', cleanBotReplyArr);
        return cleanBotReplyArr;
    } catch (err) {
        return `Error: ${err.message}`;
    }
}

export default chatWithBot;