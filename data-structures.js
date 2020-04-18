const user = {
  name: 'smayx', //probably ref
  userBlocks: [objId1, objId2, objId3],  //refs
  activities: [objId1, objId2, objId3] //refs
};

// const block = {
//   blockName: 'Japanese',
//   timeUnitInMin: 15,
//   activities: [
//     {
//       activityID:'objId1',
//       position: {
//         x: '', // or start end using the timeUnits
//         y: ''
//       } },
//     {
//       activityID:'objId1',
//       position: {
//         x: '', // or start end using the timeUnits
//         y: ''
//       } },
//     {
//       activityID:'objId1',
//       position: {
//         x: '', // or start end using the timeUnits
//         y: ''
//       } }
//   ] };

const activityName = {
  name: 'Wani Kani',
  duration: 3,
  color: 'rgba'
};


const block = {
  userId: 'user1',
  blockName: 'Japanese',
  timeUnitInMin: 15,
  activities: [
    {
      activityID:'id1',
      activityName: 'Wani Kani',
      duration: 3,
      color: 'rgba1',
      position: {
        x: '', // or start end using the timeUnits
        y: ''
      } },
    {
      activityID:'id2',
      activityName: 'Glossika',
      duration: 2,
      color: 'rgba2',
      position: {
        x: '', // or start end using the timeUnits
        y: ''
      } },
    {
      activityID:'id3',
      activityName: 'Kanji',
      duration: 1,
      color: 'rgba3',
      position: {
        x: '', // or start end using the timeUnits
        y: ''
      } }
  ] };

  const block = {
    userId: 'user1',
    blockName: 'Japanese',
    timeUnitInMin: 15,
    activities: [
      {
        activityID:'id1',
        activityName: 'Wani Kani',
        duration: 3,
        color: 'rgba1',
        description: 'Complete Wani Kani levels.',
        position: {
          x: '', // or start end using the timeUnits
          y: ''
        } },
      {
        activityID:'id2',
        activityName: 'Glossika',
        duration: 2,
        color: 'rgba2',
        description: 'Listen to Glossika sentences',
        position: {
          x: '', // or start end using the timeUnits
          y: ''
        } },
      {
        activityID:'id3',
        activityName: 'Kanji',
        duration: 1,
        color: 'rgba3',
        description: 'Practice writing basic 100',
        position: {
          x: '', // or start end using the timeUnits
          y: ''
        } }
    ] };
  
  