import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from "moment";
import './basic.css';
import events from '../../../routes/events';

BigCalendar.momentLocalizer(moment);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

let Basic = () => (
  <BigCalendar
    events={events}
    popup events={events}
    views={allViews}
    step={60}
    showMultiDayTimes
    defaultDate={new Date(new Date().setHours(new Date().getHours() - 3))}
    onSelectEvent={event => alert(`${event.title}:
    ${event.desc}`)}
        onSelectSlot={slotInfo =>
        alert(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}` +
            `\naction: ${slotInfo.action}`
        )
        }
  />
)

export default Basic