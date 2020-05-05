var exercises = [
    '60 seconds front plank',
    '45 seconds side plank both sides',
    '30 crunches',
    '15 situps',
    '20 toe touches',
    '30 jumping jacks',
    '30 Russian twists',
    '15 leg raises',
    '5x10 second flutter kicks',
    '40 inverse crunches',
    '30 second raised leg circles',
    '60 second hi-lo plank',
    '30 squats',
    '20 lunges each leg',

]

function newWorkout() {
    var randomNumber1 = Math.floor(Math.random()*(exercises.length));
    var randomNumber2 = Math.floor(Math.random()*(exercises.length));
    var randomNumber3 = Math.floor(Math.random()*(exercises.length));
    var randomNumber4 = Math.floor(Math.random()*(exercises.length));
    var randomNumber5 = Math.floor(Math.random()*(exercises.length));
    var randomNumber6 = Math.floor(Math.random()*(exercises.length));
    var randomNumber7 = Math.floor(Math.random()*(exercises.length));
    var randomNumber8 = Math.floor(Math.random()*(exercises.length));
    var randomNumber9 = Math.floor(Math.random()*(exercises.length));
    var randomNumber10 = Math.floor(Math.random()*(exercises.length));
    document.getElementById('workoutDisplay').innerHTML = exercises[randomNumber1] + '/n' + exercises[randomNumber2] + '/n' + exercises[randomNumber3] + '/n' +  exercises[randomNumber4] + '/n' +  exercises[randomNumber5] + '/n' +  exercises[randomNumber6] + '/n' +  exercises[randomNumber7] + '/n' +  exercises[randomNumber8] + '/n' +  exercises[randomNumber9] + '/n' +  exercises[randomNumber10];
