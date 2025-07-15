# 시작하기
1. burn-fit-test 폴더 이동 후 `npm install` 실행
2. `npm run start` 실행
3. 준비해둔 iOS 또는 Android 에뮬레이터 실행
4. `npm run start` 입력한 터미널에 i(iOS) 또는 a(Android) 입력

# 구현 목록
### level 1
1. BottomTabNavigator 구현으로 하단에 이동할 수 있는 탭 4개 생성
2. HomeScreen, CalendarScreen, LibraryScreen, MyPageScreen 으로 이동할 수 있는 스크린 생성

### level 2
1. CalendarTopBar 컴포넌트 생성하여 달력 상단 년,월 표시 및 이전, 이후 화살표 추가
2. CalendarTopBar 컴포넌트에서 클릭시 이벤트 처리
3. Calendar 컴포넌트 생성하여 년,월 에 맞는 달력 생성
4. Date 컴포넌트 생성하여 특정 날짜 클릭시 이벤트 처리

### level 3
1. 화면 하단 드래그 시 주 <-> 월 캘린더 전환 기능 구현
2. 주 캘린더는 상단 화살표 클릭시 주간 별 이동 기능 구현
3. 마지막으로 클릭한 날짜를 기준으로 주간 캘린더로 전환됨
4. 주간 캘린더에서 월간 캘린더로 전환 후 날짜 클릭하지 않고 바로 주간 캘린더로 전환시 마지막에 있었던 주간 캘린더로 전환됨
   1. 단 월간 캘린더에서 상단 화살표 클릭하여 월 변경 시 초기화 됨
5. 월간 캘린더에서 주간 캘린더로 전환시 해당 주의 첫번째 날짜가 월간 캘린더의 월이 아닐 경우 자동으로 해당 월로 이동됨
