import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { v4 as uuidv4 } from 'uuid';
import { nccJourney } from '../assets/constants';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

export default function ControlledAccordions() {
    const [expandedAcc, setExpandedAcc] = useState('');
    const navigate = useNavigate();

    const handleChange = (title) => {
        if (expandedAcc === title) setExpandedAcc('');
        else setExpandedAcc(title);
    }

    return (
        <div className='w-[95%] md:w-[80%] mx-auto my-5'>
            <div className='text-center text-3xl gotu-regular text-amber-700 border-b-2 border-cyan-500 mb-5 pb-2 w-[220px] mx-auto'>My NCC Jouney</div>

            {nccJourney.map((step) => (
                <Accordion key={uuidv4()} expanded={expandedAcc === step.title} className='flex flex-col justify-center border border-gray-200 rounded-md shadow-md mb-3'>
                    <AccordionSummary
                        // expandIcon=
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        onClick={() => handleChange(step.title)}
                        className="relative flex justify-around"
                    >
                        <Typography component="span" sx={{ width: '33%', flexShrink: 0 }} className="pr-2 flex gap-1 items-center justify-center sm:justify-start text-center flex-wrap">
                            <CalendarMonthIcon className='text-gray-600' /> {step.date}
                        </Typography>
                        <Typography component="span" sx={{ color: 'text.secondary' }}>
                            {step.title}
                        </Typography>
                        <div className='pl-2'>
                            {expandedAcc === step.title ? <ExpandLessIcon className='absolute right-1 sm:right-3 top-[25%]' /> : <ExpandMoreIcon className='absolute right-1 sm:right-3 top-[25%]' />}
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className='w-[90%] mx-auto overflow-hidden px-2'>
                        <div key={expandedAcc === step.title} className='transition-all duration-500 ease-in-out opacity-100 translate-y-0 flex flex-col gap-4'>
                            {step.img && <figure>
                                <img src={step.img} alt={step.title} />
                            </figure>}
                            <Typography>
                                {step.Desc}
                            </Typography>
                            <Typography className='flex flex-col gap-2'>
                                {step.achievement?.map((ach) => (
                                    <div key={uuidv4()}><MilitaryTechIcon className='text-purple-900' /> {ach}</div>
                                ))}
                            </Typography>
                        </div>
                    </AccordionDetails>
                </Accordion>
            ))}

            <div className='flex justify-center'>
                <button
                    onClick={() => navigate(-1)}
                    className="w-[200px] bg-gray-800 py-3 text-blue-200 text-xl font-bold font-sans rounded-md hover:text-indigo-100 mx-auto lg:mx-0 text-center px-5"
                >
                    ← Go Back
                </button>
            </div>
        </div>
    );
}
