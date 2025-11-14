const timeChecker = function (workingTimeStart, workingTimeEnd, meetingTimeStart, meetingTime){
  const separator = ':';
  const arrayOfWorkingTimeStart = workingTimeStart.split(separator);
  const arrayOfWorkingTimeEnd = workingTimeEnd.split(separator);
  const arrayOfMeetingTimeStart = meetingTimeStart.split(separator);

  if(arrayOfWorkingTimeStart[0] > arrayOfMeetingTimeStart[0]) {
    return false;
  }

  if (arrayOfWorkingTimeEnd[0].toNumber < arrayOfMeetingTimeStart[0].toNumber) {
    return false;
  }

  if (arrayOfWorkingTimeStart[0].toNumber === arrayOfMeetingTimeStart[0].toNumber) {
    if (arrayOfWorkingTimeStart[1].toNumber > arrayOfMeetingTimeStart[1].toNumber) {
      return false;
    }
  }

  const hoursFromMeetingStartToWorkingTimeEnd = arrayOfWorkingTimeEnd[0] - arrayOfMeetingTimeStart[0];

  const minutesFromMeetingStartToWorkingTimeEnd = arrayOfWorkingTimeEnd[1] - arrayOfMeetingTimeStart[1];

  return (hoursFromMeetingStartToWorkingTimeEnd * 60) + minutesFromMeetingStartToWorkingTimeEnd >= meetingTime;

};

timeChecker('8:00', '17:30', '08:00', 900);
