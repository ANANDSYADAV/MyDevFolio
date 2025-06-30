import WavingHandIcon from '@mui/icons-material/WavingHand';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import { useEffect, useState, useRef } from 'react';
import chatWithBot from './aiBot';
import { v4 as uuidv4 } from 'uuid';
import { BeatLoader } from "react-spinners";

const Chatbot = () => {
    const [query, setQuery] = useState('');
    const [queryStatus, setQueryStatus] = useState(false);
    const [chatMsg, setChatMsg] = useState([]);
    const [openStatus, setOpenStatus] = useState(false);
    const [loading, setLoading] = useState(false);
    const bottomRef = useRef(null);

    // Call this after messages update
    useEffect(() => {
        const el = bottomRef.current;
        if (el) {
            el.scrollTop = el.scrollHeight;
        }
    }, [chatMsg]);

    const getBotResponse = async (userQuery) => {
        console.log('inside getbotresponse fn');
        console.log('chatMsg: ', chatMsg);
        let botResponse = await chatWithBot(userQuery);
        setChatMsg(prev => [...prev, botResponse]);
        setLoading(false);
        setQueryStatus(false);
    }

    const sendUserQuery = () => {
        if (!query.trim().length) return;
        console.log('inside sendUSerquery fn');
        console.log('Query: ', query);
        console.log('chatMsg: ', chatMsg);
        setChatMsg(prev => [...prev, query.trim()]);
        setLoading(true);
        setQuery('');
        setQueryStatus(true);
        console.log('get bot response method called');
        getBotResponse(query);
    }

    useEffect(() => {
        console.log('ChatMsg: ', chatMsg);
    }, [chatMsg]);

    return (
        <>
            {openStatus &&
                <section className="bg-slate-300 rounded-lg w-[80%] md:w-[60%] h-[70%] mx-auto px-4 fixed bottom-[100px] right-10 z-40">
                    <article className='h-full w-full flex flex-col justify-around gap-2'>
                        <div className="flex items-center justify-between border-b pb-2">
                            <h3 className="text-2xl text-violet-900 font-semibold flex items-center gap-2">MiniMe <WavingHandIcon />
                            </h3>
                            <button className="text-red-700 bg-slate-200 rounded-lg p-1 hover:text-red-900 hover:bg-slate-100" onClick={() => setOpenStatus(false)}>
                                <CloseIcon />
                            </button>
                        </div>

                        <div ref={bottomRef} className="h-[65%] overflow-y-auto p-2 text-xl flex flex-col gap-2">
                            <p className="text-lg text-gray-600 mb-1">Ask about my journey so far!</p>
                            {chatMsg.length > 0 && chatMsg.map((msg, index) => (
                                <div key={uuidv4()} style={{ whiteSpace: 'pre-line' }} className={`p-1 flex gap-1 items-end text-lg font-serif ${index % 2 === 0 ? 'bg-slate-400 w-[80%] text-white font-sans font-medium px-2 rounded-md ml-auto' : 'flex-shrink break-words'} `}>
                                    {Array.isArray(msg) && msg.length ? msg.join('\n') : (msg || '')}
                                </div>
                            ))}
                            {loading && <BeatLoader />}
                        </div>

                        <div className=" flex flex-col">
                            <hr className="my-4" />
                            <div className='flex rounded-lg border-t-2 border-gray-400'>
                                <input type="text" value={query} className="flex-1 rounded-l-lg p-2 pl-4 focus:outline-none" placeholder="Ask about myself..." required onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => {
                                    if (e.key === 'Enter') sendUserQuery();
                                }} />

                                <button onClick={sendUserQuery} disabled={queryStatus} className="w-20 rounded-r-lg bg-blue-500 hover:bg-blue-600 py-2 text-xl text-white flex justify-center items-center cursor-pointer">
                                    <SendIcon />
                                </button>
                            </div>
                        </div>
                    </article>
                </section>
            }

            <section className="fixed bottom-4 right-6 z-40">
                <span className="bg-blue-100 p-2 hover:scale-110 text-blue-500 rounded-full flex justify-center items-center shadow-lg transition-all duration-300 cursor-pointer"
                    onClick={() => setOpenStatus(!openStatus)}
                >
                    <HeadsetMicIcon style={{ fontSize: '48px' }} />
                </span>
            </section>
        </>
    )
}

export default Chatbot;