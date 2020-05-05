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
    document.getElementById('workoutDisplay').innerHTML = exercises[randomNumber1] + " , " + exercises[randomNumber2] + " , " + exercises[randomNumber3] + " , " +  exercises[randomNumber4] + " , " +  exercises[randomNumber5] + " , " +  exercises[randomNumber6] + " , " +  exercises[randomNumber7] + " , " +  exercises[randomNumber8] + " , " +  exercises[randomNumber9] + " , " +  exercises[randomNumber10];
}
