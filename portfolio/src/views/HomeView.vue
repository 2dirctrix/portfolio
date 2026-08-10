<script setup lang="ts">
const projects = [
  { title: '3D 인생4컷', subtitle: '3D 재구성 기술을 이용한 사진 촬영관', date: '2025.07 - 2025.11', role: 'Frontend / AI Model Research', description: '3초간 촬영한 영상을 40장의 이미지로 변환하고, MASt3R 모델을 적용해 3D 이미지를 제공했습니다.', tags: ['Vue.js', 'MASt3R', 'Instant-NGP'], visual: 'vision' },
  { title: 'LiCar', subtitle: '병원 내 알약 운송 로봇', date: '2025.09', role: 'Team Lead / AI / ROS2', description: '팀 리딩과 YOLOv7 기반 알약 인식 개선, ROS2 기반 NFC·모터 제어 노드 통합을 담당했습니다.', tags: ['ROS2', 'YOLOv7', 'Gazebo', 'Nav2'], visual: 'robot' },
  { title: 'SmartWindow', subtitle: '투명 디스플레이를 이용한 창문형 IoT', date: '2025.10 - 2025.11', role: 'Hardware / Qt Frontend', description: 'BLE 창문 개폐기와 온습도·조도·미세먼지 센서를 연동하고, Qt 화면에서 제어 및 상태 표시를 구현했습니다.', tags: ['Qt', 'BLE', 'I2C', 'Linux'], visual: 'window' },
  { title: 'League of Algologic', subtitle: '온라인 웹 알고리즘 배틀 플랫폼', date: '2025.08', role: 'Data Processing', description: '3,000개 JSONL 문제를 데이터베이스 입력용 SQL문으로 5초 안에 변환하는 파싱 로직을 구현했습니다.', tags: ['Python', 'SQL', 'Vue.js'], visual: 'data' },
]
</script>

<template>
  <div class="page">
    <section id="home" class="hero"><p>Embedded Software Engineer</p><h1>하드웨어 이해를 기반으로<br />시스템을 완성하는 개발자</h1><div class="hero-links"><a href="mailto:jslee8050@gmail.com">Email <span>↗</span></a><a href="https://github.com/2dirctrix" target="_blank" rel="noreferrer">GitHub <span>↗</span></a></div></section>
    <section id="about" class="section"><h2>About Me</h2><div class="about-grid"><p class="about-copy">전자공학을 전공하며 하드웨어와 회로의 동작 원리를 학습했고, 이후 소프트웨어 개발 역량을 확장해 임베디드·로보틱스 시스템을 개발해 왔습니다. 센서, 카메라, 모터, MCU와 Linux 시스템을 연결하며 전체 흐름에서 문제를 분석하고 안정적으로 작동하는 결과를 만드는 데 관심이 있습니다.</p><div class="about-side"><div><b>Education</b><p>수원대학교 전자공학과 졸업<br />2018.03 - 2024.02</p><p>삼성청년SW아카데미 13기<br />2025</p></div><div><b>Experience</b><p>삼성 전 계열사 임원 대상<br />AI Agent 교육 실습코치<br />2026.05 - 2026.08</p></div></div></div></section>
    <section id="skills" class="section"><h2>Skills</h2><div class="skill-grid"><article><h3>Embedded / System</h3><p>C · C++ · Linux · MCU<br />Device / Peripheral · GDB<br />I2C · SPI · UART</p></article><article><h3>Robotics</h3><p>ROS2 · Navigation2 · Gazebo<br />Sensor Integration · Motor Control</p></article><article><h3>Vision / AI</h3><p>YOLO · OpenCV · PyTorch<br />NeRF · MASt3R · 3D Reconstruction</p></article><article><h3>Frontend / Tools</h3><p>Vue.js · Qt · React Native<br />Python · Git · GitLab · Docker</p></article></div></section>
    <section id="projects" class="section"><h2>Projects</h2><div class="project-list"><article v-for="(project, index) in projects" :key="project.title" class="project"><div class="project-visual" :class="project.visual"><span>0{{ index + 1 }}</span><div class="art"><i></i><i></i><i></i></div></div><div class="project-content"><p class="project-date">{{ project.date }}</p><h3>{{ project.title }}</h3><p class="project-subtitle">{{ project.subtitle }}</p><div class="project-info"><div><b>My Role</b><p>{{ project.role }}</p></div><div><b>Contribution</b><p>{{ project.description }}</p></div></div><div class="tags"><span v-for="tag in project.tags" :key="tag">{{ tag }}</span></div></div></article></div></section>
    <section id="contact" class="contact"><h2>Contact</h2><p>채용 및 협업 관련 연락은 이메일로 부탁드립니다.</p><a href="mailto:jslee8050@gmail.com">jslee8050@gmail.com</a><a href="https://github.com/2dirctrix" target="_blank" rel="noreferrer">github.com/2dirctrix</a><footer>© 2026 JUNSEON LEE</footer></section>
  </div>
</template>
