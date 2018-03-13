/**
 * Given a list of events and a date, filter the events down to those that
 * fall on the same day as the date
 * @param {array} events - List of event objects
 * @param {Date} timestamp - The timestamp representing the day to match
 * @returns {array}
 */
export const filterEventsByDay = (events, timestamp) => {
    //Normally would use something like moment.js to handle these calculations.
    let dateObj = new Date(timestamp);
    let today = '' + dateObj.getYear() + dateObj.getMonth() + dateObj.getDate();

    let filteredEvents = events.filter((event) => {
        let eventDateObj = new Date(event.start);
        let eventDate = '' + eventDateObj.getYear() + eventDateObj.getMonth() + eventDateObj.getDate();

        return eventDate === today;
    });

    return filteredEvents;
}

/**
 * Given a list of events and an hour number, filter the events down to those that
 * start on the specified hour
 * @param {array} events - List of event objects
 * @param {number} hour - The hour to match (0 - 23)
 * @param {array}
 * @returns {array}
 */
export const filterEventsByHour = (events, hour) => (
    events.filter(({start}) => (
        new Date(start)).getHours() === hour
    )
);

/**
 * Given a numerical timestamp, returns the formatted date string w/o time component
 * @param {number} timestamp - The date to format
 * @returns {string} The formatted date
 */
export const getDisplayDate = (timestamp) => {
    let date = new Date(timestamp);
    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    return date.toLocaleString('en-US', options);
};

/**
 * Given an hour number, returns a boolean based on whether that hour is earlier than the current hour
 * @param {number} hour - The hour
 * @returns {boolean} 
 */
export const isPastHour = (hour) => {
    let currentHour = new Date().getHours();

    return currentHour > hour;
};

/**
 * Given an hour number, returns a display string version
 * @param {number} hour - The hour
 * @returns {string}
 */
export const getDisplayHour = (hour) => {
    if (hour === 0) {
        return '12 AM';
    }
    let formattedHour = hour;
    formattedHour < 12 ? formattedHour += ' AM' : formattedHour = (formattedHour - 12) + ' PM';

    return formattedHour;
}

/**
 * Given a list of events, returns the event object whose id matches the specified eventId
 * @param {array} events - List of event objects
 * @param {number} eventId - ID of event to find
 * @returns {object}
 */
export const getEventFromEvents = (events, eventId) => (
    events.find(({id}) => id === eventId)
);
