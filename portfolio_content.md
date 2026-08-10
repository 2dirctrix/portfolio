# 이준선 포트폴리오 콘텐츠

> Embedded Software Engineer / Robot Software Developer  
> 전자공학 기반의 HW 이해도와 SW 개발 역량을 바탕으로 임베디드·로보틱스 시스템을 개발합니다.

---

## 1. About Me

전자공학을 전공하며 하드웨어와 회로의 동작 원리를 학습했고, 이후 소프트웨어 개발 역량을 확장해 임베디드 시스템과 로보틱스 분야를 중심으로 프로젝트를 수행했습니다.

하드웨어의 동작 원리를 이해하는 것에 그치지 않고, 실제 시스템에서 성능과 안정성을 결정하는 소프트웨어를 설계하고 구현하는 데 관심이 있습니다.

특히 다음과 같은 분야에 관심이 있습니다.

- Embedded Software
- Robot Software
- MCU 기반 제어 소프트웨어
- Linux 기반 시스템
- ROS / ROS2
- 센서 및 영상 처리
- 모터 제어
- 시스템 통합 및 디버깅

### 개발 방향

> **HW를 이해하고 SW로 시스템을 완성하는 엔지니어**

회로와 전자 시스템에 대한 이해를 기반으로 소프트웨어를 개발하며, 문제가 발생했을 때 특정 계층에만 국한하지 않고 HW → Driver → OS → Application의 전체 흐름에서 원인을 분석하는 것을 지향합니다.

---

# 2. Skills

## Programming

| 기술 | 수준 | 활용 경험 |
|---|---|---|
| C++ | 상중 | 임베디드/로봇 SW 및 알고리즘 학습 |
| Python | 상 | AI/ML, 자동화, 백엔드, 데이터 처리 |
| C | 중 | 임베디드 및 시스템 프로그래밍 학습 |
| Java | 중 | 자료구조/알고리즘 및 백엔드 학습 |

## Embedded / System

- Linux
- MCU 기반 Embedded Software
- Device / Peripheral 이해
- 프로세스 및 메모리 구조
- 네트워크 및 통신 기초
- GDB 기반 디버깅
- Shell / Linux Command
- HW-SW 인터페이스 분석

## Robotics

- ROS
- ROS2
- Navigation2
- Gazebo
- Robot Sensor Integration
- Autonomous Robot Software
- 제어 알고리즘 기초

## AI / Computer Vision

- YOLO
- OpenCV 기반 영상 처리
- 3D Reconstruction
- NeRF
- Gaussian Splatting
- COLMAP
- MASt3R
- Instant-NGP

## Backend / Web

- Python
- Django
- Django REST Framework
- Vue.js
- Pinia
- REST API
- Token Authentication

## Development Tools

- Git / GitHub
- VS Code
- Docker / Linux 환경
- Kaggle
- Google Colab
- GDB

---

# 3. Core Competencies

## 3.1 HW-SW Integration

전자공학 전공을 통해 회로와 하드웨어의 동작 원리를 이해하고 있으며, 이를 소프트웨어 개발과 연결해 문제를 분석할 수 있습니다.

단순히 API나 라이브러리를 사용하는 수준에서 끝내기보다 다음과 같은 계층을 함께 고려합니다.

```text
Hardware
   ↓
Peripheral / Driver
   ↓
Operating System
   ↓
Middleware
   ↓
Application
```

이를 바탕으로 센서, 카메라, 모터, MCU 및 Linux 시스템을 연결하는 임베디드/로봇 시스템 개발을 지향합니다.

---

## 3.2 Problem Solving

프로젝트에서 발생하는 문제를 단순히 에러 메시지를 제거하는 방식으로 해결하기보다 다음과 같은 순서로 접근합니다.

1. 문제 재현
2. 로그 및 상태 확인
3. 문제 발생 계층 분리
4. 원인 후보 정의
5. 실험을 통한 원인 검증
6. 해결 방법 적용
7. 재발 여부 검증

특히 Linux, ROS2, Python 패키지, GPU 환경 등 서로 다른 계층이 연결된 시스템에서 발생하는 의존성 및 환경 문제를 직접 해결한 경험이 있습니다.

---

# 4. Professional Experience

# AI Agent 실습코치 — 삼성 전 계열사 사장단 및 임원 대상

**기간:** 2026.05 ~ 2026.08  
**대상:** 삼성 전 계열사 사장단 및 임원진  
**역할:** AI Agent 교육 실습코치 / 기술 지원

### 업무 개요

삼성 전 계열사 사장단 및 임원진을 대상으로 진행된 생성형 AI 및 AI Agent 활용 교육에서 실습코치로 참여했습니다.

본 교육은 단순한 생성형 AI 사용법 교육이 아니라, 수강생이 자신의 실제 업무를 분석하고 생성형 AI를 활용해 **업무 목적에 맞는 AI Agent를 직접 설계·구현하는 Hands-on 교육**이었습니다.

교육 과정에서는 수강생이 교육 이후 실제 업무에 활용할 수 있는 Agent를 직접 제작하는 것을 목표로 했으며, 저는 실습 과정에서 발생하는 기술적 문제 해결과 Agent 개발 과정에 대한 코칭을 담당했습니다.

### 주요 역할

- 주강사 강의 흐름에 따른 AI Agent 실습 지원
- Claude Code 기반 Agent 개발 실습 지원
- 생성형 AI 도구 활용 방법 안내
- 수강생의 Agent 설계 및 구현 과정 질의응답
- Prompt / Instruction 작성 지원
- 실습 환경 및 계정 관련 이슈 대응
- 코드 및 Agent 실행 오류 원인 분석
- 임원진 대상 상황에 맞춘 기술적 설명 및 커뮤니케이션
- 교육 현장에서 발생하는 즉각적인 기술 이슈 대응

### 활용 기술

- Claude
- Claude Code
- Gemini
- NotebookLM
- Generative AI
- AI Agent
- Prompt Engineering
- Agentic Workflow

### 핵심 경험

#### 1. 비개발자 대상 Agent 개발 지원

수강생 대부분이 전문 Software Developer가 아닌 경영진 및 현업 리더였기 때문에 기술적인 개념을 그대로 설명하기보다 **업무 관점에서 AI Agent를 이해할 수 있도록 설명하는 능력**이 중요했습니다.

예를 들어,

```text
기술 개념
    ↓
업무 상황으로 변환
    ↓
Task 정의
    ↓
AI에게 필요한 Context 정의
    ↓
Agent 설계
    ↓
실습 및 검증
```

과 같이 기술과 실제 업무 사이의 간극을 줄이는 방식으로 실습을 지원했습니다.

#### 2. 현장 Debugging

교육 현장에서는 개인별 환경 차이로 인해 다양한 문제가 발생할 수 있었습니다.

- 계정 및 인증 문제
- AI Tool 접근 문제
- 실습 환경 설정 문제
- Agent 실행 오류
- Prompt / Instruction 오류
- 파일 및 프로젝트 구조 문제

문제를 빠르게 재현하고 원인을 분리하여 교육 흐름이 중단되지 않도록 대응했습니다.

#### 3. Executive Communication

사장단 및 임원진을 대상으로 한 교육이었기 때문에 단순히 기술적으로 정확한 설명을 하는 것뿐 아니라 **짧고 명확하게 핵심을 전달하는 커뮤니케이션**이 중요했습니다.

기술적인 구현 방법을 설명할 때도 개발자 중심의 용어보다 실제 업무의 문제와 결과를 기준으로 설명하는 경험을 쌓았습니다.

### 경험을 통해 얻은 역량

- AI Agent 개발 Workflow 이해
- 생성형 AI Tool 활용 능력
- 비개발자 대상 기술 교육 및 코칭
- 실시간 Technical Troubleshooting
- 고위직 대상 Business Communication
- 업무를 AI가 처리할 수 있는 Task 단위로 분해하는 사고방식

---

# AI Agent 교육 보조강사 — SK이노베이션 팀장 대상

**예정 기간:** 2026.08 ~ 2026.09  
**대상:** SK이노베이션 팀장 및 기업 임직원  
**역할:** AI Agent 제작 교육 보조강사

### 교육 개요

대기업 임직원이 자신의 업무를 직접 분석하고 AI 관점에서 재설계한 뒤, 실제 업무에 활용할 수 있는 AI Agent를 제작하는 Hands-on 교육에 참여합니다.

교육은 단순한 AI Tool 사용법을 넘어 **업무 재설계 → Agent 구조 설계 → Skill 및 MD 작성 → 패키징 → MCP 연동 → 동작 검증**까지 이어지는 실습 중심 과정으로 구성됩니다.

### 주요 역할

- AI Agent 제작 실습 지원
- 업무 분해 및 Task 정의 코칭
- 업무 Wireframe 작성 지원
- `Skill.md` 작성 코칭
- MD 파일 구조 및 내용 작성 지원
- Agent 프로젝트 Folder Tree 구조 검토
- Skill Package 구성 지원
- MCP 연동 실습 지원
- 조별 진행 상황 점검
- Agent 실행 실패 원인 분석
- 실습 환경 및 네트워크 접속 지원
- 참가자 기술 질의응답

### Agent Development Workflow

교육에서 다루는 Agent 제작 과정을 다음과 같이 이해하고 있습니다.

```text
업무 분석
   ↓
Task 분해
   ↓
AI 관점의 업무 재설계
   ↓
Workflow 설계
   ↓
Skill.md / MD 작성
   ↓
Folder Structure 구성
   ↓
Skill Packaging
   ↓
MCP Integration
   ↓
Agent 실행
   ↓
Testing & Debugging
   ↓
업무 적용
```

### 주요 기술

- Codex
- Claude Code
- AI Agent
- Agentic Workflow
- Skill.md
- Markdown
- MCP
- Prompt Engineering
- Workflow Design

### 핵심 역량

#### 업무를 Agent가 수행할 수 있는 형태로 구조화

단순히 "AI에게 일을 시킨다"는 접근이 아니라 기존 업무를 Task 단위로 분해하고, 각 단계에서 필요한 Input / Context / Tool / Output을 정의하는 방식으로 Agent Workflow를 구성합니다.

```text
Business Process
       ↓
Task Decomposition
       ↓
Input / Context
       ↓
Skill
       ↓
Tool / MCP
       ↓
Agent
       ↓
Output
```

#### Agent 구조 디버깅

Agent가 예상대로 동작하지 않을 경우 단순히 Prompt를 수정하는 것이 아니라,

- Task 정의 문제
- Context 부족
- Skill Instruction 문제
- File Structure 문제
- Tool / MCP 연결 문제
- 실행 환경 문제

등으로 원인을 분리해 접근합니다.

---

# 5. Projects


# Project 01. 3D 인생4컷

### 3D Image Reconstruction from 2D Photos

**분야:** 3D Reconstruction / Computer Vision / Hardware

### 프로젝트 개요

여러 장의 2D 사진을 입력으로 받아 실제 공간과 피사체를 3D 모델로 재구성하는 프로젝트입니다.

기존의 단순 사진 출력 방식에서 벗어나 사용자가 촬영한 사진을 기반으로 3D 공간을 구성하는 것을 목표로 했습니다.

### 주요 기술

- MASt3R
- NeRF
- Instant-NGP
- Instant-Splat
- COLMAP
- 3D Reconstruction
- Image Processing

### 기술 선택

여러 3D Reconstruction 기술을 비교한 뒤 프로젝트의 처리 시간과 사용 편의성을 고려해 MASt3R을 선택했습니다.

약 40장의 사진을 이용해 3D 모델을 생성하는 과정에서 처리 시간과 결과 품질을 비교했고, 자동 배경 제거 등 프로젝트 요구사항과의 적합성을 고려했습니다.

### 담당 영역

- 3D Reconstruction 기술 조사
- MASt3R / NeRF 계열 기술 비교
- 3D 모델 생성 파이프라인 구성
- 촬영 및 입력 데이터 처리 구조 설계
- HW 구성 설계
- 프로젝트 기술 검증

### 문제 해결

3D Reconstruction은 입력 이미지의 품질과 촬영 조건에 따라 결과가 크게 달라질 수 있습니다.

따라서 단순히 모델을 적용하는 것이 아니라,

```text
Photo Capture
      ↓
Image Preprocessing
      ↓
Feature / Scene Reconstruction
      ↓
3D Model Generation
      ↓
Model Visualization
```

과 같은 전체 파이프라인 관점에서 접근했습니다.

### 결과

2D 사진 기반 3D 모델 생성 가능성을 검증하고, 다양한 3D Reconstruction 기술의 특성과 적용 조건을 비교했습니다.

---

# Project 02. SSAFY Racing

### Autonomous Driving Simulation

**분야:** Autonomous Driving / Robotics / Control

### 프로젝트 개요

자율주행 환경에서 차량의 주행 데이터를 기반으로 차량을 제어하는 프로젝트를 수행했습니다.

주어진 주행 환경에서 차량의 속도와 조향을 조절하며 안정적인 주행을 구현하는 것을 목표로 했습니다.

### 주요 기술

- Python
- Autonomous Driving
- Vehicle Control
- Steering Control
- Speed Control
- Simulation

### 주요 문제

차량의 조향값을 단순히 현재 오차에만 기반해 변경할 경우 좌우로 반복적으로 흔들리는 Oscillation이 발생할 수 있습니다.

이를 해결하기 위해 차량의 현재 상태와 목표 경로 사이의 관계를 고려해 제어 로직을 조정하는 방식으로 접근했습니다.

### 배운 점

제어 시스템에서는 단순히 목표값에 빠르게 도달하는 것뿐 아니라,

- 안정성
- 응답 속도
- Overshoot
- Oscillation
- Sampling Time

등을 함께 고려해야 한다는 점을 경험했습니다.

---

# Project 03. Pothole Detection

### YOLO 기반 도로 포트홀 탐지 시스템

**분야:** Computer Vision / Deep Learning

### 프로젝트 개요

도로 이미지에서 포트홀을 자동으로 탐지하기 위해 YOLO 기반 Object Detection 모델을 학습했습니다.

### 기술 스택

- Python
- YOLOv8
- PyTorch
- Ultralytics
- Albumentations
- Kaggle
- GPU Computing

### 개발 과정

초기에는 YOLOv8n 모델을 사용해 학습 파이프라인을 구성한 후 데이터셋과 GPU 환경에 맞춰 학습 설정을 조정했습니다.

주요 학습 파라미터를 실험했습니다.

- Image Size
- Batch Size
- Epoch
- Learning Rate
- Optimizer
- Data Augmentation
- Early Stopping

### 문제 해결

GPU 메모리 부족으로 인한 Out Of Memory 문제와 데이터 증강 과정에서 발생하는 Albumentations 관련 오류를 경험했습니다.

이를 해결하기 위해 모델 크기, 이미지 크기, Batch Size 등의 학습 조건을 GPU 메모리에 맞게 조정했습니다.

### 배운 점

AI 모델의 성능은 모델 자체뿐만 아니라 다음 요소들의 조합에 의해 결정된다는 것을 경험했습니다.

```text
Dataset
   +
Preprocessing
   +
Model
   +
Hyperparameters
   +
Hardware
```

특히 GPU 메모리와 학습 시간까지 고려해 모델과 학습 설정을 결정하는 경험을 쌓았습니다.

---

# Project 04. Movie Web Application

### Vue + Django REST Framework 기반 영화 서비스

**분야:** Full Stack / Web / REST API

### 프로젝트 개요

영화 정보를 제공하고 사용자 기능을 지원하는 웹 애플리케이션을 개발했습니다.

TMDB API를 활용해 영화 데이터를 수집하고 Django REST Framework를 이용해 Backend API를 구성했습니다.

### Architecture

```text
Vue 3
  ↓
Vue Router / Pinia
  ↓
REST API
  ↓
Django REST Framework
  ↓
Database
  ↓
TMDB API
```

### Frontend

- Vue 3
- Vue Router
- Pinia
- Component 기반 개발

### Backend

- Django
- Django REST Framework
- Token Authentication
- dj-rest-auth
- REST API

### 주요 경험

개발 과정에서 CORS, API Key, Authentication, Fixture 및 Database 관련 오류를 직접 해결했습니다.

특히 Frontend와 Backend가 서로 다른 환경에서 동작하기 때문에 API 요청 구조와 인증 방식, CORS 정책 등을 함께 이해해야 했습니다.

### 배운 점

Web Application 개발을 통해 단순히 Frontend 또는 Backend 한쪽만 이해하는 것이 아니라,

```text
Client
 ↓
HTTP Request
 ↓
API Server
 ↓
Authentication
 ↓
Database
 ↓
Response
```

전체 요청 흐름을 이해할 수 있었습니다.

---

# Project 05. ROS2 Robot System

### ROS2 기반 로봇 시스템 개발 및 환경 구축

**분야:** Robotics / ROS2 / Linux

### 기술 스택

- Ubuntu 22.04
- ROS2
- Navigation2
- Gazebo
- Raspberry Pi
- USB Camera
- Linux

### 주요 경험

ROS2 기반 로봇 시스템을 구축하면서 다음과 같은 작업을 수행했습니다.

- ROS2 Package Build
- colcon build
- ros2 launch
- Navigation2
- Gazebo Simulation
- Camera Device 설정
- Linux Device 관리
- Sensor Integration

### 문제 해결 경험

ROS2 개발 환경에서 발생하는 의존성 문제와 패키지 빌드 오류를 해결했습니다.

예를 들어 다음과 같은 환경 문제를 직접 분석했습니다.

- `catkin_pkg` dependency
- `colcon` 관련 패키지
- `rosdep`
- Gazebo Address already in use
- ROS2 launch 과정의 Map File 오류
- `/dev/video*` Camera Device 문제

### Hardware Integration

Raspberry Pi 환경에서 USB Camera를 연결하고 Linux의 Video Device를 확인하는 작업을 수행했습니다.

```text
USB Camera
    ↓
Linux /dev/video*
    ↓
V4L2
    ↓
ROS2 Camera Node
    ↓
Robot Application
```

이 과정을 통해 Linux Device와 ROS2 Middleware가 실제 Hardware와 연결되는 구조를 경험했습니다.

---

# 6. Technical Experience

## Linux

Linux 환경에서 개발 및 디버깅을 수행하며 시스템의 동작 구조를 이해하고 있습니다.

주요 경험:

- 파일 시스템 및 권한
- Process / Thread 기초
- Device File
- `/dev` Device 관리
- Shell Command
- Package Management
- GDB
- 환경 변수
- 네트워크 기초
- Linux 기반 개발 환경 구성

---

## ROS2

ROS2의 기본적인 Node 기반 시스템 구조와 Topic / Service / Launch 개념을 학습하고 프로젝트에 적용했습니다.

```text
Node A
  │
  │ Topic
  ↓
Node B
  │
  │ Topic / Service
  ↓
Node C
```

로봇 시스템에서 센서와 Navigation, Application이 Middleware를 통해 연결되는 구조를 이해하고 있습니다.

---

## Computer Vision / 3D Vision

2D Image Processing부터 Object Detection, 3D Reconstruction까지 다양한 Computer Vision 기술을 학습했습니다.

### 경험 기술

- YOLO
- Object Detection
- COLMAP
- NeRF
- Gaussian Splatting
- MASt3R
- Instant-NGP

특히 단순히 모델을 사용하는 것에 그치지 않고 입력 데이터부터 모델 추론, 결과 생성까지 전체 Pipeline을 이해하는 것을 중요하게 생각합니다.

---

# 7. Education

## 전자공학 전공

전자공학을 전공하며 다음과 같은 기반 지식을 습득했습니다.

- 회로이론
- 전자회로
- 디지털 회로
- 신호 및 시스템
- DSP / FFT
- 반도체
- EMI / EMC
- 전자 시스템

이를 통해 Software 개발 시에도 Hardware의 물리적 동작과 제약 조건을 함께 고려할 수 있는 기반을 갖추었습니다.

---

## 삼성청년SW아카데미 (SSAFY)

소프트웨어 개발 역량을 체계적으로 학습하며 Python, CS, Web, Algorithm 및 프로젝트 경험을 쌓았습니다.

교육 과정에서 여러 팀 프로젝트를 수행했으며, 프로젝트의 기획부터 구현, 디버깅까지 전반적인 Software Development Process를 경험했습니다.

---

# 8. Problem Solving Philosophy

## ① 원인을 계층적으로 분리한다

문제가 발생했을 때 특정 코드만 수정하기보다 시스템을 계층별로 나눠 원인을 좁혀갑니다.

```text
Application
    ↓
Middleware
    ↓
OS
    ↓
Driver
    ↓
Hardware
```

---

## ② 재현 가능한 문제로 만든다

문제를 정확히 해결하기 위해 먼저 동일한 문제가 반복해서 발생하는 조건을 찾습니다.

```text
Problem
 ↓
Reproduce
 ↓
Measure
 ↓
Hypothesis
 ↓
Experiment
 ↓
Fix
 ↓
Verify
```

---

## ③ 기술보다 목적을 우선한다

새로운 기술을 사용하는 것 자체를 목표로 하지 않습니다.

프로젝트 요구사항에 따라

- 성능
- 안정성
- 개발 시간
- 유지보수성
- Hardware Resource
- Memory
- Processing Time

을 함께 고려하여 적절한 기술을 선택합니다.

---

# 9. What I Want to Build

앞으로는 Embedded Software와 Robotics를 중심으로 Hardware와 Software를 연결할 수 있는 엔지니어로 성장하고자 합니다.

특히 다음 분야에 관심이 있습니다.

### Embedded

- MCU 기반 제어 Software
- Motor Control
- Device Driver
- Real-Time System
- Embedded Linux

### Robotics

- Robot Control
- ROS2
- Navigation
- Sensor Fusion
- Autonomous Robot

### System

- HW/SW Integration
- System Optimization
- Debugging
- Reliability
- Performance Optimization

궁극적으로는 개별 기능을 구현하는 개발자를 넘어 **하드웨어부터 애플리케이션까지 전체 시스템을 이해하고 문제를 해결할 수 있는 Embedded / Robotics Engineer**를 목표로 합니다.

---

# 10. Portfolio Keywords

```text
Embedded Software
Robot Software
C / C++
Python
Linux
ROS2
MCU
Motor Control
Computer Vision
3D Reconstruction
YOLO
Django
Vue
REST API
System Integration
HW/SW Integration
Debugging
```

---

# 11. Contact

- GitHub: [GitHub 주소 입력]
- Email: [Email 주소 입력]
- LinkedIn: [LinkedIn 주소 입력]

---

# 12. Portfolio Structure Recommendation

이 문서를 기반으로 실제 웹 포트폴리오를 구성할 경우 다음과 같은 구조를 권장합니다.

```text
Home
 ├─ Hero
 │   ├─ 이름
 │   ├─ Embedded / Robotics Engineer
 │   └─ 한 줄 소개
 │
 ├─ About
 │   ├─ Background
 │   ├─ Engineering Philosophy
 │   └─ Core Competencies
 │
 ├─ Skills
 │   ├─ Embedded
 │   ├─ Robotics
 │   ├─ AI / Vision
 │   └─ Web
 │
 ├─ Projects
 │   ├─ 3D 인생4컷
 │   ├─ SSAFY Racing
 │   ├─ Pothole Detection
 │   ├─ Movie Web Application
 │   └─ ROS2 Robot System
 │
 ├─ Experience
 │   ├─ SSAFY
 │   └─ 기타 경험
 │
 └─ Contact
```

## 프로젝트 페이지 구성 방식

각 프로젝트는 단순히 "무엇을 만들었는가"보다 다음 순서로 보여주는 것을 권장합니다.

```text
1. Problem
2. Goal
3. Architecture
4. My Role
5. Technical Decisions
6. Problems
7. Solutions
8. Result
9. What I Learned
```

특히 포트폴리오에서는 **사용한 기술의 나열보다 문제를 어떻게 정의하고 해결했는지**를 강조하는 것이 좋습니다.
