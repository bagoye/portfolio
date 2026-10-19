export const siteConfig = {
  name: "leesuyeon",
  title: "developer",
  description: "살아있는 인터랙티브 콘텐츠를 만드는 개발자입니다.",
  email: "dltd0912@gmail.com",
  github: "https://github.com/bagoye",
  instagram: "https://instagram.com/yiisuyeon",
};

export const projects = [
  {
    id: 1,
    type: "company" as const,
    title: "밀크T 아이 아이누리",
    description:
      "천재교육 밀크T *아이누리* 유아 인터랙티브 콘텐츠 개발. Spine 애니메이션 · Canvas 기반 학습 경험 구현. *신규 모듈 개발 및 유지보수 진행 중*.",
    tags: ["Spine", "Canvas", "TypeScript"],
    github: "",
    demo: "https://i.milkt.co.kr/Contents/frm_iNuri.aspx",
    featured: false,
  },
  {
    id: 2,
    type: "company" as const,
    title: "밀크T 초등 학습 콘텐츠",
    description:
      "국어 · 사회 · 독서논술 과목 *초등 학습 콘텐츠* 개발. 외주 JavaScript 하드코딩 콘텐츠를 기능 단위 Scene 구조로 재설계하고 공통 리소스 · 로직 분리. 차시 데이터를 JSON으로 정의하면 Scene 코드가 생성되는 *자동화 구조* 제작, 팀 표준 제작 방식으로 사용 중. 만화형 콘텐츠 *약 60차시*를 공통 진행 구조 + 차시별 데이터로 제작.",
    tags: ["Phaser", "Canvas", "TypeScript"],
    github: "",
    demo: "https://www.milkt.co.kr/About/SchoolStudy_tab01?gn_1",
    featured: false,
  },
  {
    id: 3,
    type: "company" as const,
    title: "단어 게임 모듈",
    description:
      "타 팀 콘텐츠 연동을 위한 *단어 버블 게임 독립 모듈* 설계. CreateJS 기반 씬 아키텍처 위에 *외부 API를 제공*해 init/correct/wrong/next 메서드만으로 게임 제어 가능. 장면별로 필요한 리소스만 로드하도록 변경해 초기 로딩 *약 8~9초 → 약 3초*.",
    tags: ["TypeScript", "CreateJS", "Canvas"],
    github: "",
    demo: "",
    featured: false,
  },
  {
    id: 10,
    type: "company" as const,
    title: "학습 화면 공통 UI 컴포넌트",
    description:
      "버튼 · Toast · 문제 영역 · 정오답 · 타이머 · 다음 행동 등 *학습 화면 UI 6종* 정리. 각 UI의 상태 · 동작 규칙을 정하고 *공통 컴포넌트*로 구현.",
    tags: ["React", "TypeScript"],
    github: "",
    demo: "",
    featured: false,
  },
  {
    id: 11,
    type: "company" as const,
    title: "구형 태블릿 재생 성능 개선",
    description:
      "구형 태블릿에서 재생 성능이 *약 10FPS*까지 저하. FPS 측정 UI를 직접 만들어 구간별 계측하고, 리소스 품질 조정 · 무비클립 단위 테스트로 원인 범위 축소. 컬러 필터가 적용된 무비클립의 과부하를 확인해 애니메이터와 리소스를 수정, *약 30FPS*로 개선.",
    tags: [] as string[],
    github: "",
    demo: "",
    featured: false,
  },
  {
    id: 8,
    type: "personal" as const,
    title: "대저니유",
    description:
      "*반려동물과 함께하는 대전 여행* PWA. 4인 팀(기획 1 · 개발 3)에서 *내 여정 탭* 담당 — MBTI · 직접짓기 코스 위저드, 카카오맵 동선 지도, 다중 일정 캘린더, *실시간 공공데이터 집계* API 구현. *Gemini API 기반 AI 코스 추천* 백엔드 — 응답 스키마로 JSON 구조를 강제하고 후보 목록 밖의 장소 · 개수 오류를 서버에서 재검증.",
    tags: ["FE", "Next.js", "TypeScript", "Express", "Gemini API"],
    github: "https://github.com/bagoye/daejourneyu",
    demo: "https://daejourneyu.vercel.app",
    featured: false,
  },
  {
    id: 9,
    type: "personal" as const,
    title: "bagoye-board",
    description:
      "*백엔드 흐름 학습*을 위해 Spring Boot + React로 만든 게시판. *JWT 인증*, 게시물 CRUD · 좋아요 · 댓글 구현.",
    tags: ["Spring Boot", "React", "TypeScript"],
    github: "https://github.com/bagoye/bagoye-board",
    demo: "",
    featured: false,
  },
  {
    id: 4,
    type: "personal" as const,
    title: "IT Job Dashboard",
    description:
      "Saramin · Wanted · GeekNews *채용공고 실시간 집계* 대시보드. *Streamlit + BeautifulSoup* 기반 Python 프로젝트.",
    tags: ["Python", "Streamlit", "BeautifulSoup"],
    github: "https://github.com/bagoye/job-dashboard",
    demo: "",
    featured: false,
  },
  {
    id: 5,
    type: "personal" as const,
    title: "ToU",
    description:
      "*블록체인 기반 유통 추적* 서비스. Hyperledger Fabric으로 원산지 신뢰성 보증, *PWA*로 모바일 접근성 확보.",
    tags: ["FE", "React", "TypeScript"],
    github: "https://github.com/bagoye/ToU",
    demo: "",
    featured: false,
  },
  {
    id: 6,
    type: "personal" as const,
    title: "Youniverse",
    description:
      "유튜브 시청 이력 분석 기반 *OTT · 영화 추천 플랫폼*. TF-IDF · 코사인 유사도로 구현한 *Python 추천 엔진* 탑재.",
    tags: ["FE", "React", "TypeScript"],
    github: "https://github.com/bagoye/Youniverse",
    demo: "",
    featured: false,
  },
  {
    id: 7,
    type: "personal" as const,
    title: "데려가개",
    description:
      "*24시간 반려견 양육 시뮬레이션*으로 입양 준비도를 검증하는 플랫폼. *OpenVidu* 화상 통신 · *Kakao Pay* 결제 연동.",
    tags: ["FE", "React", "TypeScript"],
    github: "https://github.com/bagoye/Deryeogage",
    demo: "",
    featured: false,
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "HTML", "CSS"],
  },
  {
    category: "Interactive",
    items: ["Phaser", "Canvas API"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Figma", "Notion", "Jira"],
  },
];

export const certifications = [
  {
    name: "SQLD (SQL 개발자)",
    date: "2023.07.07",
    issuer: "한국데이터산업진흥원",
  },
  {
    name: "AI-POT 1급 (AI 프롬프트 활용능력)",
    date: "2026.02.26",
    issuer: "한국생산성본부",
  },
];

export const experience = [
  {
    role: "인터랙션 개발팀",
    company: "천재교육",
    period: "2024.11 – 현재",
    description:
      "JavaScript · TypeScript · Phaser를 활용한 인터랙티브 콘텐츠 개발.",
  },
  {
    role: "교육생",
    company: "삼성청년SW아카데미 (SSAFY)",
    period: "2023.01 – 2023.12",
    description:
      "삼성청년SW아카데미 수료. 알고리즘, 웹 프론트엔드, 프로젝트 중심 교육 이수.",
  },
  {
    role: "생물산업기계공학과",
    company: "전남대학교",
    period: "– 2023.02",
    description:
      "생물산업기계공학 졸업. 센서 및 지능형 바이오시스템 연구실 학부연구생.",
  },
];

export const posts = [
  {
    id: 1,
    title: "IT 채용공고 대시보드 — 구조 설계부터 배포까지",
    date: "2024-05",
    summary:
      "Streamlit + BeautifulSoup로 여러 채용 플랫폼을 한눈에 모아보는 대시보드를 만든 과정을 정리했습니다.",
    url: "https://github.com/bagoye/job-dashboard",
  },
  {
    id: 2,
    title: "FastAPI vs Django — 언제 무엇을 쓸까?",
    date: "2024-03",
    summary:
      "두 프레임워크의 철학 차이와 실전에서 선택 기준을 비교 정리한 글입니다.",
    url: "#",
  },
  {
    id: 3,
    title: "Python 스케줄러로 데이터 자동 수집하기",
    date: "2024-01",
    summary:
      "schedule 라이브러리와 cron 방식을 비교하고 실전 패턴을 소개합니다.",
    url: "#",
  },
];
