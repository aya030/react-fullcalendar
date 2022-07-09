import React, { useCallback } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import allLocales from '@fullcalendar/core/locales-all';
import interactionPlugin from '@fullcalendar/interaction';

function App() {
  const eventClick = useCallback((arg) => {
    alert(arg.event.startStr + ' : ' + arg.event.title);
  }, []);

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      eventClick={eventClick}
      initialView="dayGridMonth"
      businessHours={{
        daysOfWeek: [1, 2, 3, 4, 5],
      }}
      contentHeight={'auto'}
      events={[
        { title: 'event 1', start: '2022-07-01' },
        { title: 'event 2', start: '2022-07-02T12:00:00' },
        { title: 'event 3', start: '2022-07-11', end: '2022-07-13' }, // endに指定した日付は含まない
      ]}
      locales={allLocales}
      locale="ja"
    />
  );
}

export default App;
