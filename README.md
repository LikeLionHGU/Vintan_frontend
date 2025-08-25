# Vintan - 상권 분석 및 커뮤니티 서비스

Vintan은 예비 창업자와 자영업자를 위한 상권 분석 및 정보 공유 플랫폼입니다. 사용자는 특정 지역 및 업종에 대한 상권 분석 보고서를 받아볼 수 있으며, 커뮤니티를 통해 다른 사용자들과 정보를 교류하고 질문을 주고받을 수 있습니다.

## ✨ 주요 기능

- **상권 분석 리포트**: 사용자가 선택한 지역과 업종에 대한 심층적인 상권 분석 정보를 제공합니다. (매출, 유동인구, 경쟁 업체 분석 등)
- **상권 평가**: 사용자는 자신이 경험한 상권에 대해 직접 평가를 남기고 다른 사람의 평가를 조회할 수 있습니다.
- **커뮤니티**: 자유롭게 질문하고 답변하며 예비 창업자 및 자영업자 간의 정보 교류를 할 수 있는 공간입니다.
- **마이페이지**: 자신의 활동 내역(작성한 질문, 평가, 리포트 내역)을 확인하고 프로필을 관리할 수 있습니다.

## 🛠️ 기술 스택

- **Frontend**: React, JavaScript
- **Styling**: Material-UI, Emotion
- **State Management**: Zustand
- **Routing**: React Router
- **Data Fetching**: Axios
- **Charts**: Chart.js, Recharts
- **Deployment**: Firebase Hosting

## 🚀 시작하기

### 1. 프로젝트 클론

```bash
git clone https://github.com/your-username/vintan.git
cd vintan
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 로컬 서버 실행

```bash
npm start
```

이제 브라우저에서 `http://localhost:3000`으로 접속하여 Vintan을 확인할 수 있습니다.

## 📁 프로젝트 구조

```
/
├── public/              # 정적 파일 (index.html, images, fonts)
├── src/
│   ├── api/             # API 요청 함수
│   ├── components/      # 공통 및 기능별 컴포넌트
│   ├── hooks/           # 커스텀 훅
│   ├── imgs/            # UI 관련 이미지 및 아이콘
│   ├── page/            # 라우팅되는 페이지 컴포넌트
│   ├── store/           # Zustand 상태 관리
│   ├── style/           # 전역 스타일
│   ├── theme/           # 테마 (색상, 타이포그래피)
│   ├── utils/           # 유틸리티 함수
│   ├── App.js           # 메인 애플리케이션 컴포넌트
│   ├── index.js         # 애플리케이션 진입점
│   └── Router.js        # 라우팅 설정
├── .firebaserc          # Firebase 설정
├── firebase.json        # Firebase 호스팅 설정
└── package.json         # 프로젝트 의존성 및 스크립트
```