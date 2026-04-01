# Portfolio

Next.js 14 + Tailwind CSS + TypeScript로 만든 포트폴리오 사이트

## 특징

- 다크/라이트 테마 토글 (localStorage 저장)
- Sections: Projects, Skills, Experience, Blog, Contact
- SEO 최적화 (metadata, OpenGraph)
- Vercel 배포

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 열기

## 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx       # Root layout + metadata
│   ├── page.tsx         # 메인 페이지
│   └── globals.css      # 디자인 토큰 + 글로벌 스타일
├── components/
│   ├── Navbar.tsx       # 상단 네비게이션 + 테마 토글
│   ├── Main.tsx         # 메인 소개
│   ├── Projects.tsx     # 프로젝트 카드
│   ├── Skills.tsx       # 기술 스택
│   ├── Experience.tsx   # 경력/이력
│   ├── Blog.tsx         # 블로그 포스트 링크
│   └── Contact.tsx      # 연락처
└── lib/
    ├── data.ts           # 포트폴리오 데이터
    └── ThemeContext.tsx  # 다크/라이트 테마 컨텍스트
```
