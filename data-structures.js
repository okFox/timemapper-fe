const user = {
  name: 'smayx', //probably ref
  userBlocks: [objId1, objId2, objId3],  //refs
  activities: [objId1, objId2, objId3] //refs
};

const block = {
  blockName: 'Japanese',
  timeUnitInMin: 15,
  activities: [
    {
      activityID:'objId1',
      position: {
        x: '', // or start end using the timeUnits
        y: ''
      } },
    {
      activityID:'objId1',
      position: {
        x: '', // or start end using the timeUnits
        y: ''
      } },
    {
      activityID:'objId1',
      position: {
        x: '', // or start end using the timeUnits
        y: ''
      } }
  ] };

const activityName = {
  name: 'Wani Kani',
  duration: 3,
  color: 'rgba'
};
