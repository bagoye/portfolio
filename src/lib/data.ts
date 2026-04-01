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
      "국어 · 사회 · 독서논술 과목 *초등 학습 콘텐츠* 개발. Phaser 기반 게임형 인터랙션으로 학습 몰입도 향상. *신규 모듈 개발 및 유지보수 진행 중*.",
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
      "타 팀 콘텐츠 연동을 위한 *단어 버블 게임 독립 모듈* 설계. CreateJS 기반 씬 아키텍처 위에 *외부 API를 제공*해 init/correct/wrong/next 메서드만으로 게임 제어 가능.",
    tags: ["TypeScript", "CreateJS", "Canvas"],
    github: "",
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
    role: "인터렉션 개발팀",
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
