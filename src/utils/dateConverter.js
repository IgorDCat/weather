export const dateConverter = (data, timezone) => {
    const date = new Date(data);
    const tz = timezone / 3600;
    let newDate = Number(date.getHours()) + tz;
    if (newDate >= 24) newDate -= 24;
    if (newDate < 10) newDate = "0" + newDate;
    return newDate + ":00"
}

export const timeConverter = (UNIX_timestamp, timezone) => {
  const dtFormat = new Intl.DateTimeFormat('en-GB', {
    timeStyle: 'short',
    timeZone: 'UTC'
  });
  return dtFormat.format(new Date((UNIX_timestamp+timezone) * 1e3));

}

export const getNewDate = (time, timezone) => {
    let date = new Date(time);
    const timeShift = timezone / 3600;
    let newDate = Number(date.getHours()) + timeShift;
    date.setDate(date.getDate() + 1)
    if (newDate === 24) return date.toDateString()
    return null
}


