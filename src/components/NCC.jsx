import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { v4 as uuidv4 } from 'uuid';
import { nccJourney } from '../assets/constants';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

export default function ControlledAccordions() {
    const [expandedAcc, setExpandedAcc] = useState('');

    const handleChange = (title) => {
        if (expandedAcc === title) setExpandedAcc('');
        else setExpandedAcc(title);
    }

    return (
        <div className='w-[95%] md:w-[80%] mx-auto my-5'>
            <div className='text-center text-3xl gotu-regular text-amber-700 border-b-2 border-cyan-500 mb-5 pb-2'>My NCC Jouney</div>

            {nccJourney.map((step) => (
                <Accordion key={uuidv4()} expanded={expandedAcc === step.title} className='flex flex-col justify-center border border-gray-200 rounded-md shadow-md mb-3' onClick={() => handleChange(step.title)}>
                    <AccordionSummary
                        expandIcon={expandedAcc === step.title ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        className=""
                    >
                        <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                            <CalendarMonthIcon className='text-gray-600' /> {step.date}
                        </Typography>
                        <Typography component="span" sx={{ color: 'text.secondary' }}>
                            {step.title}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className='w-[90%] mx-auto overflow-hidden px-2'>
                        <div key={expandedAcc === step.title} className='transition-all duration-2000 ease-in-out opacity-100 translate-y-0 flex flex-col gap-4'>
                            {step.img && <figure>
                                <img src={step.img} alt={step.title} />
                            </figure>}
                            <Typography>
                                <FavoriteIcon className='text-red-600' /> {step.Desc}
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
        </div>
    );
}
