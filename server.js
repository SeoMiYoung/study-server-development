// express 라이브러리 가져다가 쓰기
const express = require('express')
const app = express()

// 폴더 등록(폴더가 여러개 있다면, app.use몇번 계속 써도 됨)
app.use(express.static(__dirname + '/public'));

// 서버를 띄울 포트번호
app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행중')
})

// user에게 html파일을 보여주기
// __dirname은 server.js가 담긴 폴더 (절대 경로)
app.get('/', (요청, 응답) => {
  응답.sendFile(__dirname + '/index.html')
}) 


