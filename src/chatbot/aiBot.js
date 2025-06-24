// import { ProjectInfoArr, experience, certificates, academics, nccJourney } from '../assets/constants.js';

// // const newSkillsArray = SkillsArr.map((skill) => {
// //     return skill.name;
// // });

// const bodyContent = {
//     contents: [
//         {
//             role: "user",
//             parts: [
//                 {
//                     text: `You are a helpful chatbot that only answers using the following context:
//                     Projects: ${JSON.stringify(ProjectInfoArr)}
//                     Experience: ${JSON.stringify(experience)}
//                     Certificates: ${JSON.stringify(certificates)}
//                     Academics: ${JSON.stringify(academics)}
//                     NCC Journey: ${JSON.stringify(nccJourney)}
//                     User: Tell me when did anand's NCC jouney ended?`
//                 }
//             ]
//         }
//     ]
// }

// const chatWithBot = async () => {
//     try {
//         const apiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDjOzwnm47nV_WY7hMMkJYnfgWFJsVar0A`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(bodyContent)
//         });
//         const botRes = await apiRes.json();
//         const finalBotReply = botRes.candidates[0].content.parts[0].text;
//         // return finalBotReply;
//         console.log(finalBotReply);
//     } catch (err) {
//         // return `Error: err.message`;
//         console.log(`Error: err.message`);
//     }
// }

// chatWithBot();