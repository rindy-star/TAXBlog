# TAXboard
<<<<<<< HEAD

=======
>>>>>>> 49c7d5e96a87e29f5d0f906ba1d24b538ad93085
일반 소비자에게 친근한 세무 정보를 전달하는 반응형 웹사이트 프로젝트입니다.  
메인 페이지, 블로그 리스트 페이지, 상세 페이지로 구성되어 있으며 공통 영역은 partial include 방식으로 관리합니다.

## Features
<<<<<<< HEAD

=======
>>>>>>> 49c7d5e96a87e29f5d0f906ba1d24b538ad93085
- 반응형 레이아웃 (모바일/태블릿/데스크톱)
- 공통 레이아웃 분리 (`head`, `nav`, `footer`)
- 블로그 리스트 카드 전체 클릭 이동
- 상세 페이지 공유 영역 (Copy link, SNS 아이콘)
- 깔끔한 블루 계열 UI 톤

## Tech Stack
<<<<<<< HEAD

=======
>>>>>>> 49c7d5e96a87e29f5d0f906ba1d24b538ad93085
- HTML5
- CSS3
- Vanilla JavaScript

## Project Structure
<<<<<<< HEAD

```text
taxBlog/
├─ css/
│  └─ styles.css
├─ js/
│  ├─ script.js
│  └─ include.js
├─ README.md
└─ views/
   ├─ index.html
   ├─ blog.html
   ├─ blogContent.html
   └─ partials/
      ├─ head-common.html
      ├─ nav.html
      └─ footer.html
```

## Run Locally

이 프로젝트는 `js/include.js`에서 `fetch`를 사용해 partial 파일을 불러오므로,  
=======
```text
taxBlog/
├─ index.html
├─ blog.html
├─ post.html
├─ styles.css
├─ script.js
├─ include.js
├─ README.md
└─ partials/
   ├─ head-common.html
   ├─ nav.html
   └─ footer.html
```

## Run Locally
이 프로젝트는 `include.js`에서 `fetch`를 사용해 partial 파일을 불러오므로,  
>>>>>>> 49c7d5e96a87e29f5d0f906ba1d24b538ad93085
`file://`로 직접 열기보다 로컬 서버 실행을 권장합니다.

```bash
python -m http.server 5500
```

브라우저에서 아래 주소로 접속:

<<<<<<< HEAD
- `http://localhost:5500/views/index.html`
- `http://localhost:5500/views/blog.html`
- `http://localhost:5500/views/blogContent.html`

## GitHub Upload

=======
- `http://localhost:5500/index.html`
- `http://localhost:5500/blog.html`
- `http://localhost:5500/post.html`

## GitHub Upload
>>>>>>> 49c7d5e96a87e29f5d0f906ba1d24b538ad93085
```bash
git init
git add .
git commit -m "Initial TAXboard site"
git branch -M main
git remote add origin <REPO_URL>
git push -u origin main
```

## GitHub Pages Deployment
<<<<<<< HEAD

=======
>>>>>>> 49c7d5e96a87e29f5d0f906ba1d24b538ad93085
1. 저장소 업로드 완료
2. GitHub 저장소 `Settings > Pages` 이동
3. Source: `Deploy from a branch`
4. Branch: `main` / `(root)` 선택 후 저장

배포 완료 후:
<<<<<<< HEAD

- `https://<github-id>.github.io/<repo-name>/`

## Customize Guide

- 메뉴 수정: `views/partials/nav.html`
- 공통 head 수정: `views/partials/head-common.html`
- 푸터 수정: `views/partials/footer.html`
- 메인 콘텐츠 수정: `views/index.html`
- 블로그 리스트 수정: `views/blog.html`
- 상세 콘텐츠 수정: `views/blogContent.html`
- 스타일 수정: `css/styles.css`
- 인터랙션(메뉴/공유) 수정: `js/script.js`

## Notes

- 현재 상세 페이지(`views/blogContent.html`)는 샘플 1개 기준입니다.
=======
- `https://<github-id>.github.io/<repo-name>/`

## Customize Guide
- 메뉴 수정: `partials/nav.html`
- 공통 head 수정: `partials/head-common.html`
- 푸터 수정: `partials/footer.html`
- 메인 콘텐츠 수정: `index.html`
- 블로그 리스트 수정: `blog.html`
- 상세 콘텐츠 수정: `post.html`
- 스타일 수정: `styles.css`
- 인터랙션(메뉴/공유) 수정: `script.js`

## Notes
- 현재 상세 페이지(`post.html`)는 샘플 1개 기준입니다.
>>>>>>> 49c7d5e96a87e29f5d0f906ba1d24b538ad93085
- 운영 환경에서는 각 게시글별 상세 페이지 템플릿 또는 CMS 연동을 권장합니다.
