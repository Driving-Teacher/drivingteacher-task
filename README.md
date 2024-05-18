# 운전선생 Frontend task

## 상세 설명 문서

> https://bouncy-begonia-e47.notion.site/90460083d9904f66ad7914a72eca364e?pvs=4

---

## 디렉토리 구조
```
src
 ┣ components
 ┃ ┣ SelectLicenseBox.tsx
 ┃ ┗ TextBold.tsx
 ┣ hooks
 ┃ ┗ use-go-next.ts
 ┣ model
 ┃ ┗ selectLesson.ts
 ┣ pages
 ┃ ┣ api
 ┃ ┃ ┗ get-lesson.ts
 ┃ ┣ complete.tsx
 ┃ ┣ index.tsx
 ┃ ┗ _app.tsx
 ┣ styles
 ┃ ┗ globals.css
 ┣ constants.ts
 ┗ utils.ts
```


## 요구사항 체크리스트
- [x] api를 호출하기
- [x] “딸 수 있는 면허”를 기준으로 수업 묶기
- [x] 면허 종류에 대한 블록 생성
- [x] 면허 보유 여부 묻는 블록 조건부로 생성
- [x] 하단 바에서 수업 이름과 금액 표시
- [x] 버튼을 클릭했을 때의 동작
