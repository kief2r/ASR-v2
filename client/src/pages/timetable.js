import React, { useState, useEffect } from 'react';

function Timetable() {
  const [scheduleHtml, setScheduleHtml] = useState('');

  useEffect(() => {
    fetch('/teacher_schedule.html')
      .then(response => response.text())
      .then(data => {
        setScheduleHtml(data);
      });
  }, []);

  return (
    <div className="timetable-container">
      <h1>Timetable Page</h1>
      <div dangerouslySetInnerHTML={{ __html: scheduleHtml }} />
    </div>
  );
}

export default Timetable;
