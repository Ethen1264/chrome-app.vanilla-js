const clock = document. ("h2#clock")

function getClock () {
  const date = new Date()   // 현재 날자와 시간을 가지고 온다
  const hours = String(date.getHours()).padStart(2,"0")   // 위에서 가지고 온 new Date()를 Hours 부분만 가지고 온다. padStart()를 이용하여 시작할 숫자를 지정할 수 있음
  const minutes = String(date.getMinutes()).padStart(2,"0") // 시간과 같은 개념
  const seconds = String(date.getSeconds()).padStart(2,"0") // 시간과 같은 개념
  clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock ()
setInterval(getClock, 1000)