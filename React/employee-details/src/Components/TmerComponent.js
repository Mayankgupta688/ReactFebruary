export default function TmerComponent() {
    var timerCount = 0;

    setInterval(() => {
        timerCount = timerCount + 1;
        console.log(timerCount)
    }, 1000)

    return <h1>Counter is {timerCount}</h1>
}