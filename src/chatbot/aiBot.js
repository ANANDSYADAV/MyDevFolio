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

        // let modifiedBodyContent = bodyContent.contents[0].parts[0].text + userQuery;
        const apiRes = await fetch(`${import.meta.env.VITE_GEMINI_API}?key=${import.meta.env.VITE_GEMINI_KEY}`, {
            // const apiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDjOzwnm47nV_WY7hMMkJYnfgWFJsVar0A`, {
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
        // const [first, ...restAll] = cleanBotReplyArr;
        // const markdown = `${first}\n${restAll.join(' ')}`;
        // console.log('msg type:', typeof markdown, 'value:', cleanBotReplyArr);
        return cleanBotReplyArr;
    } catch (err) {
        return `Error: ${err.message}`;
    }
}

export default chatWithBot;