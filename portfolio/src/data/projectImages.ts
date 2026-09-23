// src/assets/projects/ 안의 이미지를 파일명으로 찾아 쓸 수 있게 모아둔다.
// Vite가 번들 시 해시 붙은 URL로 바꿔주므로 캐시 문제가 없고,
// public/ 에 두는 것과 달리 파일이 없으면 개발 중에 바로 드러난다.
const modules = import.meta.glob<string>('../assets/projects/**/*.{png,jpg,jpeg,webp,avif,svg}', {
  eager: true,
  import: 'default',
})

const PREFIX = '../assets/projects/'
const byFileName = new Map<string, string>()

for (const [path, url] of Object.entries(modules)) {
  // 'licar/그림13.png' 처럼 projects/ 이후 경로를 키로 쓴다 (하위 폴더 지원)
  byFileName.set(path.slice(PREFIX.length), url)
}

/**
 * 파일명을 번들된 이미지 URL로 바꾼다.
 * 없는 파일명이면 undefined를 돌려주고, 개발 모드에서만 경고한다.
 * (화면이 깨지는 것보다 해당 이미지만 빠지는 편이 낫다)
 */
export const resolveProjectImage = (fileName: string): string | undefined => {
  const url = byFileName.get(fileName)

  if (!url && import.meta.env.DEV) {
    console.warn(
      `[projectImages] '${fileName}' 을(를) src/assets/projects/ 에서 찾지 못했습니다. ` +
        `현재 등록된 파일: ${[...byFileName.keys()].join(', ') || '(없음)'}`,
    )
  }

  return url
}
