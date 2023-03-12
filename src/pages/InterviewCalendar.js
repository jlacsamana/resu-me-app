import PageWrapper from '../components/PageWrapper';
import './InterviewCalendar.css';
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export function InterviewCalendar() {
    return (
        <PageWrapper>
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView='dayGridMonth'
                events={sampleData}
                displayEventEnd='true'
            />
        </PageWrapper>
    );
}

const sampleData = [
    {
        title: 'Coffee chat with Mr. Apple',
        start:  '2023-03-09T10:30:00.000',
        end:  '2023-03-09T11:00:00.000',
        display: 'block',
    },
    {
        title: 'Interview with Bobby Activision',
        start:  '2023-03-09T18:00:00.000',
        end:  '2023-03-09T20:00:00.000',
        display: 'block',
    },
    {
        title: 'Shell Interview with Mr. Ep',
        start:  '2023-03-19T14:00:00.000',
        end:  '2023-03-19T15:00:00.000',
        display: 'block',
    }
]