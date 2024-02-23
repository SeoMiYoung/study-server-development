// express 라이브러리 가져다가 쓰기
const express = require('express')
const app = express()

// 서버를 띄울 포트번호
app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행중')
})

// 누가 메인페이지에 접속시, '반갑다'라는 문장 보내기
app.get('/', (요청, 응답) => {
  응답.send('반갑다')
}) 

app.get('/news', (요청, 응답) => {
    응답.send('오늘 비옴')
  }) 