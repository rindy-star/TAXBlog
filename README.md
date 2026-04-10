# TAXboard

일반 소비자에게 친근한 세무 정보를 전달하는 반응형 웹사이트 프로젝트입니다.  
메인 페이지, 블로그 리스트 페이지, 상세 페이지로 구성되어 있으며 공통 영역은 partial include 방식으로 관리합니다.

## Features

- 반응형 레이아웃 (모바일/태블릿/데스크톱)
- 공통 레이아웃 분리 (`head`, `nav`, `footer`)
- 블로그 리스트 카드 전체 클릭 이동
- 상세 페이지 공유 영역 (Copy link, SNS 아이콘)
- 깔끔한 블루 계열 UI 톤

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

## Project Structure

```text
taxBlog/
├─ index.html  (루트 진입용, views/index.html로 리다이렉트)
├─ css/
│  └─ styles.css
├─ js/
│  ├─ script.js
│  └─ include.js
├─ views/
│  ├─ index.html
│  ├─ blog.html
│  ├─ blogContent.html
│  └─ partials/
│     ├─ head-common.html
│     ├─ nav.html
│     └─ footer.html
└─ README.md
```

## Notes

- 현재 상세 페이지(`views/blogContent.html`)는 샘플 1개 기준입니다.
- 운영 환경에서는 각 게시글별 상세 페이지 템플릿 또는 CMS 연동을 권장합니다.