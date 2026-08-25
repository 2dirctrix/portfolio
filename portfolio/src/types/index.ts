// src/types/index.ts

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

export interface TimelineEntry {
  period: string
  title: string
  org: string
  points: string[]
  /** 현재 진행 중인 경력이면 배지를 표시한다 */
  ongoing?: boolean
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
