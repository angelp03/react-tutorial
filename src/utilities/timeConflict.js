const parseMeetingTime = (meetingString) => {
  if (!meetingString) return null;
  const [daysPart, timePart] = meetingString.split(' ');
  const [startTime, endTime] = timePart.split('-').map(parseTime);
  const days = daysPart.split('');
  return { days, startTime, endTime };
}

const parseTime = (timeStr) => {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
}

const checkTimeOverlap = (startA, endA, startB, endB) => {
  return Math.max(startA, startB) < Math.min(endA, endB);
}

const doCoursesConflict = (classA, classB) => {
  const meetingA = parseMeetingTime(classA.meets);
  const meetingB = parseMeetingTime(classB.meets);
  //course cannot conflict with itself
  if (classA === classB) return false;
  //courses in different terms don't conflict
  if (classA.term !== classB.term) return false;
  if (!meetingA || !meetingB) return false;

  const commonDays = meetingA.days.filter(day => meetingB.days.includes(day));
  if (commonDays.length === 0) return false; // No common days, no conflict

  return checkTimeOverlap(meetingA.startTime, meetingA.endTime, meetingB.startTime, meetingB.endTime);
}

export const checkCourseConflict = (selectedCourses, allCourses) => {
    return Object.values(allCourses).filter((course) =>
        selectedCourses.some((selectedCourse) =>
            doCoursesConflict(course, selectedCourse)
        )
    ) || [];
};
