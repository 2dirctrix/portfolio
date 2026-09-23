// src/types/index.ts

export interface ProjectImage {
  /** src/assets/projects/ 기준 경로 (예: 'licar/그림13.png') */
  file: string
  /** 스크린리더용 설명. 무엇이 찍혀 있는지 적는다 */
  alt: string
}

export interface Project {
  id: number
  title: string
  subtitle: string
  period: string
  /** 정렬용 시작일 (YYYY-MM-DD). 최신순 정렬 기준이며 화면에는 나오지 않는다 */
  sortKey: string
  team: string
  /** 수상 내역 (오렌지 배지) */
  award?: string
  /** 수상이 아닌 진행 결과 (중립 배지). award와 섞이지 않게 분리한다 */
  status?: string
  role: string[]
  description: string
  details: string[]
  techStack: string[]
  /** 상세 창 갤러리에 표시된다 (카드에는 나오지 않는다). 첫 장이 맨 처음 보인다 */
  images?: ProjectImage[]
  /** 카드 제목 옆에 붙는 작은 로고. projects/ 기준 경로 (예: 'licar/logo.png') */
  logo?: string
}

export interface SkillItem {
  /** ls -l 스타일 권한 문자열 (표시용) */
  perm: string
  name: string
  note: string
}

export interface SkillGroup {
  name: string
  items: SkillItem[]
}

export interface TimelineLink {
  /** 화면에 보이는 글 (기사 제목 등) */
  label: string
  href: string
  /** 출처 표기 (예: 삼성 뉴스룸) */
  source?: string
}

export interface TimelineEntry {
  period: string
  title: string
  /** 교육 대상이나 소속 (예: 삼성 전 계열사 사장단·임원진 대상) */
  org: string
  /** 교육을 운영한 기관 (예: 멀티캠퍼스) */
  agency?: string
  points: string[]
  /** 현재 진행 중인 경력이면 배지를 표시한다 */
  ongoing?: boolean
  /** 관련 기사·자료 링크 */
  links?: TimelineLink[]
}

export interface Award {
  /** 상 이름 (예: 프로젝트 우수상) */
  title: string
  /** 수여 기관 */
  org: string
  /** 등수·범위 (예: 광주 2반 3등) */
  rank: string
  period: string
  /** 정렬용 시작일 (YYYY-MM-DD). 화면에는 나오지 않는다 */
  sortKey: string
  /** 어떤 프로젝트로 받았는지. 개인 수상은 비워둔다 */
  project?: string
  /** 프로젝트 구분 (예: 자율 프로젝트 · 오픈소스 주제) */
  category?: string
  team: string
}

export interface Strength {
  title: string
  body: string
}

export interface Contact {
  label: string
  /** 화면에 보이는 값 */
  value: string
  /** 링크가 필요 없는 항목(전화 등)은 비워둔다 */
  href?: string
}

export interface Certificate {
  name: string
  /** 프로필에 주관사가 확인되지 않는 항목이 있어 선택 항목으로 둔다 */
  org?: string
  date: string
}
