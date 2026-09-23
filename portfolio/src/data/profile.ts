// 이 파일의 모든 내용은 `바탕화면/자기소개서/프로필.md`(Source of Truth)에 근거한다.
// 프로필.md에 없는 경험·수치·기술은 절대 추가하지 않는다.
// 공개 웹페이지이므로 자격증 번호·학번 등 식별번호는 싣지 않는다.

import type {
  Project,
  TimelineEntry,
  Certificate,
  SkillGroup,
  Contact,
  Strength,
  Award,
} from '@/types'

// 터미널 프롬프트는 한 곳에서만 정의한다
const SHELL_USER = 'junseon'
const SHELL_HOST = 'dev'

export const shell = {
  user: SHELL_USER,
  host: SHELL_HOST,
  // 창 제목과 프롬프트의 호스트명이 어긋나지 않도록 조합해서 만든다
  fullHost: `${SHELL_USER}@${SHELL_HOST}`,
} as const

export const profile = {
  name: '이준선',
  role: 'Embedded / Robot Software Engineer',
  goal: '한 시스템의 처음부터 끝까지 모두 설계 가능한 엔지니어가 되고 싶습니다.',
  intro: [
    'HW 제작을 좋아하고 양자역학에 관심이 있어 전자공학과에 진학했습니다. 1학년 교양 수업에서 C와 C++을 배우며 소프트웨어에 관심이 생겼고, 학교에서 들은 SW 수업 성적이 가장 좋았습니다.',
    "재능이 있는지 확인하려고 컴퓨터공학과의 '임베디드 프로그래밍 실습'을 수강해 A+를 받았고, 그때 SW로 진로를 정했습니다. 전공인 전자공학을 살리려면 HW와 SW 지식이 모두 필요한 임베디드·로봇 분야가 맞다고 판단했습니다.",
    'SW 실력이 부족하다는 것을 느껴 SSAFY에 지원했고, 2025년 한 해 동안 네 번의 팀 프로젝트를 진행했습니다.',
  ],
} as const

export const skillGroups: SkillGroup[] = [
  {
    name: 'Software',
    items: [
      { perm: '-rwxr-xr-x', name: 'C++', note: '하드웨어 제어, Qt 6 QML-C++ 분리 설계' },
      { perm: '-rwxr-xr-x', name: 'Python', note: '데이터 전처리·자동화, 대량 데이터 파싱' },
      { perm: '-rwxr-xr-x', name: 'Linux', note: 'Ubuntu / Raspberry Pi OS, SSH, cron' },
      { perm: '-rwxr-xr-x', name: 'ROS2', note: '커스텀 노드, Topic/Service/Action, URDF' },
    ],
  },
  {
    name: 'Robotics',
    items: [
      { perm: '-rwxr-xr-x', name: 'Gazebo', note: '시뮬레이션 환경 구성' },
      { perm: '-rwxr-xr-x', name: 'Nav2', note: '자율주행 경로 계획' },
      { perm: '-rwxr-xr-x', name: 'SLAM', note: 'Lidar 기반 맵핑' },
      { perm: '-rwxr-xr-x', name: 'YOLO', note: '객체 인식 모델 학습·적용' },
    ],
  },
  {
    name: 'Electronics',
    items: [
      { perm: '-rwxr-xr-x', name: 'Matlab', note: '푸리에 변환·Z변환 구현 및 시각화' },
      { perm: '-rwxr-xr-x', name: 'VHDL/Verilog', note: '주파수 분주기, 디스플레이 제어 모듈' },
      { perm: '-rwxr-xr-x', name: 'BLE', note: '블루투스 패킷 분석 및 제어 구현' },
      { perm: '-rwxr-xr-x', name: '회로/신호처리', note: '전자회로, DSP/FFT, EMI/EMC' },
    ],
  },
]

// 화면에는 최신순으로 노출한다 (아래 sortKey 기준 자동 정렬)
const projectList: Project[] = [
  {
    id: 1,
    title: 'Licar',
    subtitle: '병원 내 알약 운송 자율주행 로봇',
    period: '2025.08 ~ 2025.09',
    sortKey: '2025-08-25',
    // 7인으로 시작했으나 막바지에 1명이 이탈해 최종 6인으로 수상 (상장 원본 확인)
    team: '7인 시작 · 최종 6인',
    award: 'SSAFY 프로젝트 우수상',
    role: ['팀장', 'AI 개발', 'HW(ROS2) 개발'],
    description:
      '간호사가 웹에서 알약을 요청하면 약사 웹에 표시되고, 카메라로 알약을 인식한 뒤 NFC 태깅을 거쳐 로봇이 환자에게 자율주행으로 운송합니다. 엘리베이터 위치에 따라 경로가 설정되어 평면이 아닌 3차원 자율주행을 수행하는 점이 차별점입니다.',
    details: [
      'AIHUB 경구알약 데이터 50GB로 학습, 시연용 400장은 촬영·라벨링 후 전처리를 거쳐 1,600장으로 증강',
      'NFC 태깅 시 서보모터로 상자 문이 열리고, 알약이 모두 인식되면 태깅 시 닫히는 로직을 ROS2로 구현',
      '팀장으로서 GitHub 저장소 관리와 Jira 기반 일정 관리를 직접 수행',
    ],
    techStack: ['ROS2', 'Nav2', 'Gazebo', 'Python', 'YOLO', 'Jira'],
  },
  {
    id: 2,
    title: 'Smart Window',
    subtitle: '창문형 투명 디스플레이 IoT',
    period: '2025.10 ~ 2025.11',
    sortKey: '2025-10-10',
    team: '6인',
    award: 'SSAFY 프로젝트 우수상',
    role: ['HW 개발', 'Qt 개발', 'BLE 제어·백엔드'],
    description:
      '일반 디스플레이의 백라이트 반사시트를 PDLC 필름으로 대체해, 평소에는 디스플레이로 쓰다가 필요할 때 투명한 창문으로 전환할 수 있게 만든 IoT 기기입니다. 미세먼지·온습도·조도·CO2 센서 값을 라즈베리파이에서 받아 MQTT로 백엔드에 전송하고 Qt 화면에 표출했습니다.',
    details: [
      '상용 창문 개폐기 제어를 위해 nRF Connect로 제어 신호를 파악하고, 안드로이드 HCI snoop log로 원시 블루투스 패킷 기록',
      'Wireshark에서 MAC 주소와 GATT characteristic UUID로 필터링해 쓰기 명령 패킷만 추출',
      '16진수 페이로드를 비교해 동기화 바이트로 시작하는 고정 길이 패킷 구조를 확인하고, 명령 바이트와 회전 속도·각도 파라미터 영역 식별',
      'BLE 라이브러리로 스마트폰과 라즈베리파이 양쪽에서 동작하는 제어 코드 작성',
    ],
    techStack: ['Raspberry Pi', 'Qt', 'C++', 'BLE', 'MQTT', 'Wireshark'],
  },
  {
    id: 3,
    title: 'League of Algologic',
    subtitle: '웹 알고리즘 코딩 배틀',
    period: '2025.08',
    sortKey: '2025-08-04',
    team: '6인',
    award: 'SSAFY 프로젝트 우수상',
    role: ['데이터 파싱', '프론트엔드 이펙트', '영상 포트폴리오'],
    description:
      '이전 팀이 해체된 뒤 진행 중이던 팀에 합류해 데이터 가공과 프론트엔드 이펙트를 맡았습니다.',
    details: [
      'LeetCode에서 받은 약 2,000건의 JSONL 문제 데이터를 백엔드 요구 형식으로 가공하는 Python 스크립트 작성',
      '마이페이지 및 게임 스킬 사용 시 이펙트 개발',
      '프로젝트 영상 포트폴리오 제작',
    ],
    techStack: ['Python', 'JSONL', 'Frontend'],
  },
  {
    id: 4,
    title: '3D인생4컷',
    subtitle: '3D 재구축 포토부스',
    period: '2025.07 ~ 2025.08',
    sortKey: '2025-07-07',
    team: '6인 시작',
    status: '팀 해체로 미완주',
    role: ['HW 설계', '제어 로직'],
    description:
      '웹캠으로 3초간 촬영한 영상을 30장의 사진으로 분할하고, 3D 재구축 AI로 3D 이미지를 만들어 QR코드로 제공하는 프로젝트입니다. SW는 대부분 완성하고 HW도 설계를 마쳤지만, 실물 제작 직전에 팀원 이탈로 인원이 규정 아래로 줄어 팀이 해체되었습니다. 완주가 불가능하다는 것을 확인한 뒤 곧바로 다른 팀에 합류해 남은 기간에 기여했습니다.',
    details: [
      'PSpice로 소자 파라미터를 모델링해 회로 안전성 시뮬레이션',
      'AutoCAD로 기구 간섭 및 레이아웃 검토',
      '엔코더 펄스 피드백 신호를 카운팅하는 제어 로직을 C++로 구현',
    ],
    techStack: ['C++', 'PSpice', 'AutoCAD'],
  },
  {
    id: 5,
    title: '재난현장 정찰로봇',
    subtitle: '학부 캡스톤 디자인',
    period: '2023.04 ~ 2023.06',
    sortKey: '2023-04-01',
    team: '4인',
    award: '캡스톤 디자인 A+',
    role: ['회로 구성', '차량 제어 코드', '원격조종(RDP)', '기능 코드 병합'],
    description:
      '광원이 없는 재난현장을 상정한 정찰로봇입니다. 시야 확보가 어려운 환경에서도 적외선 카메라와 Lidar 기반 SLAM으로 주행할 수 있게 설계하고, YOLO로 사람을 인식하도록 했습니다. 이 경험으로 HW가 들어가면 고려할 것이 많아진다는 것을 배웠고, 임베디드를 진로로 정했습니다.',
    details: [
      '개별로는 정상 동작하던 5개 부품이 통합 후 매번 다른 조합에서 동작하지 않는 문제 발생',
      '조합별 증상을 표로 정리해 공통 원인을 좁힌 결과, 부품 구동 전력 부족과 MPU 연산속도 부족을 원인으로 확인',
      '프로세서-컨트롤러 간 통신을 I2C에서 SPI로 변경하고, 데이터시트를 확인해 전압은 유지하되 저항값을 낮춰 필요한 전력 확보',
      '보조전력 추가와 멀티프로세싱 적용으로 최종 해결',
    ],
    techStack: ['ROS2', 'SLAM', 'YOLOv7', 'Raspberry Pi 4B', 'Arduino', 'Ubuntu 18.04'],
  },
  {
    id: 6,
    title: '프린터 설치 챗봇',
    subtitle: '기술문서 기반 RAG 질의응답',
    period: '2025.06',
    sortKey: '2025-06-01',
    team: '개인',
    role: [],
    description:
      'PDF 매뉴얼과 데이터시트를 대상으로 자연어 질의응답을 수행하는 RAG 시스템입니다. "ADC resolution은 몇 bit인가요?", "UART baudrate 설정 방법을 알려주세요" 같은 질문에 문서 근거로 답합니다.',
    details: [
      'PDF를 Upstage Document Parse로 파싱한 뒤 의미 단위로 청킹하고 임베딩해 Pinecone에 저장',
      '질문 임베딩으로 Pinecone에서 유사도 검색(MMR, Top-K) 후 ChatUpstage가 컨텍스트 기반 답변 생성',
      '표와 레이아웃이 많은 기술 문서를 보존하기 위해 파서 단계를 별도 구성',
      'FastAPI 서버를 Mangum으로 감싸 AWS Lambda 서버리스 환경에 배포',
    ],
    techStack: ['Python', 'FastAPI', 'LangChain', 'Pinecone', 'Upstage', 'AWS Lambda'],
  },
  {
    id: 7,
    title: '초음파 자율주행 차량',
    subtitle: '개인 프로젝트',
    period: '2023.06',
    sortKey: '2023-06-01',
    team: '개인',
    role: [],
    description:
      '초음파 센서 3개로 전방과 좌우의 벽 유무를 판단해 장애물을 피해 회전하거나 직진하는 자율주행 차량입니다. 센서를 구동하는 전압과 전력도 함께 고려해야 한다는 것을 배웠습니다.',
    details: [],
    techStack: ['Arduino', 'C', 'TinkerCad'],
  },
]

// sortKey 내림차순 = 최신 프로젝트가 위로
export const projects: Project[] = [...projectList].sort((a, b) =>
  b.sortKey.localeCompare(a.sortKey),
)

export const timeline: TimelineEntry[] = [
  {
    period: '2026.08 ~ 2026.09',
    title: 'AI Agent 제작 교육 실습코치',
    org: 'SK이노베이션 임원 및 임직원 대상',
    points: [
      '생성형 AI·AX 트렌드와 비즈니스 적용 사례를 주제로 한 교육에서 수강생 질의 응대',
      '조직 운영·의사결정 관점의 AI 활용 실습 지원',
      '교육 흐름이 끊기지 않도록 현장 진행 지원',
      '현업용 skill 제작 컨설팅(경조사 비용 지급, 통신 비용 지급, 핵심리더 선별 등)',
    ],
  },
  {
    period: '2026.05 ~ 2026.08',
    title: 'AI Agent 교육 실습코치',
    org: '삼성 전 계열사 사장단·임원진 대상',
    points: [
      '주강사 강의 흐름에 따른 AI Agent 실습 보조',
      'Claude, NotebookLM, Claude Code 등 생성형 AI 도구 활용 지원',
      'Claude Code 기반 Agent 개발 과정의 수강생 질의 응대',
      '실습 오류·계정·도구 사용 등 현장 이슈 대응',
    ],
  },
  {
    period: '2025.01 ~ 2025.12',
    title: 'SSAFY 13기',
    org: 'Samsung Software Academy for Youth',
    points: [
      'Embedded Robotics 트랙을 목표로 지원했으나 배치 결과 Python/Web 트랙에 배정',
      'Python/Web 커리큘럼을 수행하면서 Embedded Robotics 분야를 별도로 학습',
      '1학기 코딩 집중과정 종합성적 1등으로 성적우수상, 진행한 네 개의 프로젝트 중 세 개에서 프로젝트 우수상 수상',
    ],
  },
  {
    period: '2020.04 ~ 2022.01',
    title: '공군 항공전자장비병',
    org: '병장 만기전역',
    points: [],
  },
  {
    period: '2018.03 ~ 2024.02',
    title: '수원대학교 전자공학과',
    org: '학점 3.52 / 4.5',
    points: [
      '회로이론, 전자회로, 신호처리, DSP/FFT, EMI/EMC, 반도체 패키징 및 신뢰성',
      "컴퓨터공학과 '임베디드 프로그래밍 실습' 수강 (A+)",
    ],
  },
]

// 상장 원본으로 확인된 수상 내역 (프로필.md 3번).
// 증서번호와 팀원 실명은 공개 페이지에 싣지 않는다.
const awardList: Award[] = [
  {
    title: '프로젝트 우수상',
    org: 'SSAFY',
    rank: '광주 1반 3등',
    period: '2025.10 ~ 2025.11',
    sortKey: '2025-10-10',
    project: 'Smart Window',
    category: '자율 프로젝트 · 오픈소스 주제',
    team: '6인',
  },
  {
    title: '프로젝트 우수상',
    org: 'SSAFY',
    rank: '광주 2반 3등',
    period: '2025.08 ~ 2025.09',
    sortKey: '2025-08-25',
    project: 'Licar',
    category: '특화 프로젝트 · 자율주행(IoT) 도메인',
    team: '최종 6인',
  },
  {
    title: '프로젝트 우수상',
    org: 'SSAFY',
    rank: '광주 2반 3등',
    period: '2025.07 ~ 2025.08',
    sortKey: '2025-07-07',
    project: 'League of Algologic',
    category: '공통 프로젝트 · 웹기술 트랙',
    team: '6인',
  },
  {
    title: '1학기 성적우수상',
    org: 'SSAFY',
    rank: '광주 2반 1등',
    period: '2025.01 ~ 2025.05',
    sortKey: '2025-01-07',
    category: '코딩 집중과정 종합성적',
    team: '개인',
  },
  {
    title: '캡스톤 디자인 A+',
    org: '수원대학교 전자공학과',
    rank: '최고 학점',
    period: '2023.04 ~ 2023.06',
    sortKey: '2023-04-01',
    project: '재난현장 정찰로봇',
    team: '4인',
  },
]

export const awards: Award[] = [...awardList].sort((a, b) => b.sortKey.localeCompare(a.sortKey))

export const certificates: Certificate[] = [
  { name: '리눅스마스터 2급', org: '한국정보통신진흥협회', date: '2026.01' },
  { name: 'TOEIC Speaking IM1', org: 'YBM', date: '2026.03' },
  { name: '삼성 SW 역량테스트 A+', org: '삼성', date: '2025.04' },
  { name: '정보처리기능사', org: '한국산업인력공단', date: '2019.12' },
]

export const trainings: Certificate[] = [
  { name: '인공지능 가속 프로세서 교육', org: 'IDEC', date: '2023.02' },
  { name: 'RF 무선통신시스템 교육', org: 'IDEC', date: '2023.02' },
  { name: '반도체 공정 교육', org: 'TICEM', date: '2022.12' },
]

// value는 화면에 보이는 글자, href는 클릭 시 이동할 주소.
// 항목을 빼고 싶으면 해당 블록만 지우면 화면에서도 사라진다.
export const contacts: Contact[] = [
  {
    label: 'Email',
    value: 'jslee8050@gmail.com',
    href: 'mailto:jslee8050@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/2dirctrix',
    href: 'https://github.com/2dirctrix',
  },
  {
    // 주소에 한글이 있어 링크는 퍼센트 인코딩한 형태로 둔다 (표시는 원문 그대로)
    label: 'LinkedIn',
    value: 'linkedin.com/in/준선-이-205003428',
    href: 'https://linkedin.com/in/%EC%A4%80%EC%84%A0-%EC%9D%B4-205003428',
  },
  {
    label: 'Phone',
    value: '010-5044-0870',
    href: 'tel:+821050440870',
  },
]

export const strengths: Strength[] = [
  {
    title: 'HW와 SW를 함께 보는 시스템 관점',
    body: '전자공학 전공으로 하드웨어 동작 원리를 이해하고, 소프트웨어로 이를 제어하는 관점에서 문제를 봅니다. 임베디드 시스템, 로봇, 센서, 모터 제어처럼 실제 하드웨어와 맞닿는 소프트웨어에 강점을 두고자 합니다.',
  },
  {
    title: '새로운 기술을 탐색하고 적용',
    body: '임베디드, 로보틱스, 컴퓨터 비전, AI Agent 등 서로 다른 분야를 학습해 프로젝트에 적용했습니다. 기술을 쓰는 데 그치지 않고 기존 시스템의 어떤 문제를 해결할 수 있는지 파악한 뒤 적용하는 것을 중요하게 생각합니다.',
  },
  {
    title: '문제 해결을 돕는 경험',
    body: '삼성 임원 및 사장단 대상 AI Agent 교육에서 실습코치로 활동하며 다양한 질문과 문제 상황을 접했습니다. 구현하는 능력뿐 아니라 다른 사람이 기술을 이해하고 활용하도록 돕는 경험을 쌓았습니다.',
  },
]
