var exercises = [
    'seconds front plank',
    'seconds side plank both sides',
    'crunches',
    'situps',
    'toe touches',
    'jumping jacks',
    'Russian twists',
    'leg raises',
    'seconds flutter kicks',
    'inverse crunches',
    'second raised leg circles',
    'second hi-lo plank',
    'squats',
    'lunges each leg',
    'pushups',
    'burpees',
    'mountain climbers',
    'bicycle crunches',
    'bridge',
    'high knees',
    'butt kicks',
    'side lunges',
    'seconds wall sit',
    'arm circles',
    'v-ups',
    'sumo squats',
    'squat kicks',
    'squat jumps',
    'tuck jumps',
    'cross body mountain climbers',
    'low jacks',
    'military push-ups',
    'wide pushups',
    'supermans',
    'scissor kicks',
    'seconds single leg wall sit',
    'chair dips'
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
    document.getElementById('workoutDisplay').innerHTML = exercises[randomNumber1]
    document.getElementById('workoutDisplay2').innerHTML = exercises[randomNumber2]
    document.getElementById('workoutDisplay3').innerHTML = exercises[randomNumber3]
    document.getElementById('workoutDisplay4').innerHTML = exercises[randomNumber4]
    document.getElementById('workoutDisplay5').innerHTML = exercises[randomNumber5]
    document.getElementById('workoutDisplay6').innerHTML = exercises[randomNumber6]
    document.getElementById('workoutDisplay7').innerHTML = exercises[randomNumber7]
    document.getElementById('workoutDisplay8').innerHTML = exercises[randomNumber8]
    document.getElementById('workoutDisplay9').innerHTML = exercises[randomNumber9]
    document.getElementById('workoutDisplay10').innerHTML = exercises[randomNumber10]
}

var Duration = [
    '10',
    '15',
    '30',
    '45',
    '60'
]

function newDuration() {
    var randomDuration1 = Math.floor(Math.random()*(Duration.length));
    var randomDuration2 = Math.floor(Math.random()*(Duration.length));
    var randomDuration3 = Math.floor(Math.random()*(Duration.length));
    var randomDuration4 = Math.floor(Math.random()*(Duration.length));
    var randomDuration5 = Math.floor(Math.random()*(Duration.length));
    var randomDuration6 = Math.floor(Math.random()*(Duration.length));
    var randomDuration7 = Math.floor(Math.random()*(Duration.length));
    var randomDuration8 = Math.floor(Math.random()*(Duration.length));
    var randomDuration9 = Math.floor(Math.random()*(Duration.length));
    var randomDuration10 = Math.floor(Math.random()*(Duration.length));
    document.getElementById('durationDisplay').innerHTML = Duration[randomDuration1]
    document.getElementById('durationDisplay2').innerHTML = Duration[randomDuration2]
    document.getElementById('durationDisplay3').innerHTML = Duration[randomDuration3]
    document.getElementById('durationDisplay4').innerHTML = Duration[randomDuration4]
    document.getElementById('durationDisplay5').innerHTML = Duration[randomDuration5]
    document.getElementById('durationDisplay6').innerHTML = Duration[randomDuration6]
    document.getElementById('durationDisplay7').innerHTML = Duration[randomDuration7]
    document.getElementById('durationDisplay8').innerHTML = Duration[randomDuration8]
    document.getElementById('durationDisplay9').innerHTML = Duration[randomDuration9]
    document.getElementById('durationDisplay10').innerHTML = Duration[randomDuration10]
}
