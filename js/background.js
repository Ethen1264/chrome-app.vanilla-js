const images = ["0.jpg", "1.jpg", "2.jpg"]

const chosenImage = images[Math.floor(Math.random()* images.length)]

const bgImage = document.createElement("img")   // img 태그를 js에 생성을 함

bgImage.src = `img/${chosenImage}`              // bg의 src의 값을 파일 이름을 이용해 연결한다

document.body.appendChild(bgImage)              // 문서의 바디 태그 안에 위에서 지정한 img 태그를 넣음
