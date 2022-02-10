export default function TimerComponent() {
    var timerCount = 0;

    setInterval(() => {
        timerCount = timerCount + 1;
        console.log("Functional: " + timerCount)
    }, 1000)

    return <h1>Functional: Counter is {timerCount}</h1>
    
}