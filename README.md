# WEEF

> RE-FRESH, BE-FREE — 식물 유래 성분의 프리미엄 주방 세정 브랜드 WEEF 공식 반응형 웹사이트

> ⚠️ **본 프로젝트는 [WEEF 공식 웹사이트](https://weef.co.kr/)를 클론코딩한 학습용 프로젝트입니다.**  
> 디자인 및 콘텐츠의 저작권은 원본 제작자에게 있습니다.

<br>

## 📌 프로젝트 소개

WEEF는 기분 좋은 세척 경험을 추구하는 주방 세정 브랜드입니다.  
이 프로젝트는 브랜드의 핵심 가치인 **프레쉬함**과 **자연 친화성**을 온라인에서도 일관되게 전달하기 위한 공식 브랜드 웹사이트입니다.

- 브랜드 아이덴티티를 효과적으로 전달하는 감각적 UI/UX 구현
- 주요 제품(디쉬 리퀴드, 주방 ACC)의 특장점을 시각적으로 소구
- PC · 태블릿 · 모바일 전 환경에서 동일한 품질의 사용 경험 제공
- 스크롤 애니메이션과 슬라이더를 활용한 인터랙티브 제품 스토리텔링

<br>

## 🗓 제작 기간

**총 3일** (2025)

| 기간 | 작업 내용 |
|------|-----------|
| DAY 1 | 프로젝트 기획 · 브랜드 분석 · HTML 구조 설계 · 공통 스타일 작성 · 메인 페이지 마크업 |
| DAY 2 | brand · dish 서브 페이지 마크업 및 스타일링 · Swiper 슬라이더 · AOS 애니메이션 적용 |
| DAY 3 | acc 페이지 완성 · 전체 반응형 점검 · 크로스브라우징 테스트 · 최종 코드 정리 |

<br>

## 🛠 사용 기술

| 기술 | 내용 |
|------|------|
| HTML5 | 시맨틱 마크업, `picture/source` 반응형 이미지, `aria-label` 웹 접근성 |
| CSS3 | CSS 변수(Custom Properties), Flexbox/Grid, `clamp()` 유동형 사이즈, 미디어 쿼리, 키프레임 애니메이션 |
| JavaScript | Vanilla JS, 스크롤 이벤트, DOM 조작, 모바일 메뉴 인터랙션 |
| Swiper.js v11 | 이미지 슬라이더 (ACC 제품 슬라이더 · DISH 라이프스타일 슬라이더) |
| AOS v2.3.1 | 스크롤 진입 애니메이션 |
| SUIT Variable Font | 한글 웹폰트 |

<br>

## 📂 폴더 구조

```
weef/
├── index.html          # 메인 페이지
├── brand.html          # 브랜드 스토리 페이지
├── dish.html           # 디쉬 리퀴드 제품 페이지
├── acc.html            # 주방 ACC 제품 페이지
│
├── style/
│   ├── style.css       # 공통 스타일 (헤더, 푸터, reset 등)
│   ├── brand.css       # brand.html 전용 스타일
│   ├── dish.css        # dish.html 전용 스타일
│   └── acc.css         # acc.html 전용 스타일
│
├── script.js           # 공통 JS (AOS, 헤더 스크롤, 모바일 메뉴, Swiper)
│
└── images/             # 모든 이미지 에셋
    ├── 00_icon_logo.png
    ├── 01_logo.png
    └── ...
```

<br>

## ⚙️ 주요 기능

### 반응형 헤더 & 모바일 메뉴
- 스크롤 20px 이상 시 헤더 배경 전환 (`is-scroll` 클래스)
- 현재 페이지 GNB에 하단 밑줄 인디케이터 (`is-active`)
- 768px 이하에서 햄버거 버튼 + 슬라이드인 모바일 메뉴 + 딤 레이어
- 메뉴 링크 클릭 또는 딤 영역 클릭 시 자동 닫힘
<br>

<div align="center">
<img width="474" height="531" alt="Image" src="https://github.com/user-attachments/assets/b5c09ce2-8b02-44d4-b386-838dfd968ff3" />
</div>
<br>

### AOS 스크롤 애니메이션
- `once: true`로 한 번만 재생, 성능 최적화
- `fade-up`, `zoom-in`, `fade-left`, `fade-right` 방향별 애니메이션
- ACC 히어로 타이틀은 데스크탑(`>768px`)에서만 JS로 동적 AOS 속성 부여
- `ease-out-cubic` 이징으로 자연스러운 모션 구현
<br>

<div align="center">
<img width="474" height="741" alt="Image" src="https://github.com/user-attachments/assets/1a83101c-25be-475f-9f5e-708e1aa82134" />
</div>
<br>

### Swiper 이미지 슬라이더
- **ACC** — `loop` 무한 반복, `autoplay` 5초, 화살표 + 페이지네이션 도트
- **DISH** — `slidesPerView: auto` 다중 노출, 2.2초 고속 자동재생, 768px 기준 `centeredSlides` 분기 처리
<br>

<div align="center">
 <img width="478" height="751" alt="Image" src="https://github.com/user-attachments/assets/2ef44b30-3c95-4d00-a2ee-02ff054638dd" />
</div>
<br>

### 반응형 레이아웃
- `clamp()`로 슬라이더 크기를 뷰포트에 맞게 유동 조절
- `picture + source` 태그로 데스크탑/모바일 이미지 소스 분기
- `768px`, `480px` 두 브레이크포인트로 레이아웃 최적화

### CSS 키프레임 애니메이션
- 배지 요소에 `badgeSwing`, `badgeSwingRotateSmall` 적용
- 3초 주기 `ease-in-out infinite`로 브랜드 생동감 연출
<br>

<div align="center">
<img width="474" height="542" alt="Image" src="https://github.com/user-attachments/assets/a3b6c42c-0cad-40f8-a949-2e096e4cf255" />
</div>

<br>

### 고정 CTA 버튼
- DISH LIQUID 페이지 하단 `position: fixed` CTA 배너로 구매 전환 유도
<br>

<div align="center">
<img width="474" height="747" alt="Image" src="https://github.com/user-attachments/assets/97000b16-0c0a-4927-9a34-0f798d55dea8" />
</div>
<br>
<br>

## 🔧 문제 해결 과정

### 1. Swiper 슬라이드 이미지가 지정한 높이를 벗어나는 현상

**문제**  
ACC 페이지 Swiper 컨테이너에 고정 높이를 지정했으나, `swiper-wrapper`와 `swiper-slide`가 `height: 100%`를 상속받지 못해 이미지가 넘치거나 압축되는 현상이 발생했습니다.

**해결**  
`.acc-swiper`, `.swiper-wrapper`, `.swiper-slide` 모두에 `height: 100%`와 `overflow: hidden`을 명시하고, 이미지에 `object-fit: cover`를 적용했습니다. 컨테이너 크기는 `clamp()`로 뷰포트 대응형으로 지정하여 해결했습니다.

```css
.acc-slide-box {
  flex: 0 1 clamp(445px, 33.85vw, 650px);
  height: clamp(446px, 33.95vw, 652px);
}

.acc-swiper,
.acc-swiper .swiper-wrapper,
.acc-swiper .swiper-slide {
  height: 100%;
  overflow: hidden;
}

.acc-swiper .swiper-slide img {
  object-fit: cover;
}
```

---

### 2. 모바일에서 AOS 히어로 타이틀 깜빡임 현상

**문제**  
ACC 히어로 타이틀에 HTML에서 직접 `data-aos` 속성을 부여하면, 모바일 초기 로드 시 요소가 잠깐 보였다 사라지는 깜빡임과 타이밍 이슈가 발생했습니다.

**해결**  
HTML 속성을 제거하고, `script.js`에서 `window.innerWidth > 768` 조건으로 데스크탑에서만 JS로 동적 `setAttribute` 처리했습니다. `AOS.init()` 이전에 조건부 실행하여 타이밍 문제를 해결했습니다.

```js
if (window.innerWidth > 768) {
  const accHeroTitle = document.querySelector(".acc-hero-title");
  if (accHeroTitle) {
    accHeroTitle.setAttribute("data-aos", "fade-up");
    accHeroTitle.setAttribute("data-aos-delay", "300");
    accHeroTitle.setAttribute("data-aos-duration", "800");
  }
}

AOS.init({ duration: 900, easing: "ease-out-cubic", once: true });
```

---

### 3. 중간 해상도(769px~1400px)에서 ACC 레이아웃 붕괴

**문제**  
ACC 제품 섹션에서 슬라이더와 텍스트 영역이 중간 화면 크기에서 Flex 비율이 깨지는 문제가 발생했습니다.

**해결**  
슬라이더 박스에 `flex: 0 1 clamp(445px, 33.85vw, 650px)`와 `min-width: 445px`를 함께 지정해, vw 단위로 비례 축소되면서도 최소 너비를 보장하도록 처리했습니다.

<br>

## 💬 회고

### 잘 된 점
- CSS 변수와 `clamp()`를 적극 활용해 반응형 코드 중복을 줄임
- 공통 `script.js` 하나로 모든 페이지의 인터랙션을 관리, 유지보수성 향상
- `picture + source` 태그로 데스크탑/모바일 이미지를 분기하여 모바일 데이터 절약
- AOS `once: true`와 조건부 JS 로직으로 불필요한 리페인트 최소화

### 아쉬운 점 / 개선 여지
- 이미지를 WebP 포맷으로 전환하면 로딩 성능을 추가 개선할 수 있음
- BEM 네이밍 규칙을 더 엄격히 적용하면 팀 협업 시 가독성 향상
- 제품 데이터(가격, 성분)를 JSON으로 분리하고 JS로 렌더링하면 콘텐츠 변경에 더 유연하게 대응 가능

### 배운 점
- 라이브러리 공식 문서를 꼼꼼히 읽는 것이 버그 해결의 가장 빠른 경로임을 재확인
- 디자인 시안의 수치를 px 고정값이 아닌 상대 단위로 번역하는 과정에서 `clamp()`의 실용성을 체감
- 3일이라는 짧은 기간 안에 완성도를 높이기 위해 공통 컴포넌트 우선 작업의 중요성을 실감

<br>

## 🔗 참고

- 원본 사이트 : [https://weef.co.kr/](https://weef.co.kr/)
- 본 프로젝트는 학습 목적의 클론코딩이며 상업적 용도로 사용하지 않습니다.
