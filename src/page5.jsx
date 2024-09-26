import React from 'react';
import './style.css'; 

const Page5 = () => {
    return (
      <div className="Page5__Container-sc-12ob24r-0 iSTDHh">
      <div className="Page5__Title-sc-12ob24r-1 duwuNz">Projects.</div>
      <div className="contents">
      <div className="contents__content">
                        <div data-aos="flip-left" class="ProjectBox__Container-sc-1m1icly-0 gMpCsm">
            <div className="container green-container">
                <div className="title">고객 주문 및 관리자 연동 시스템 개발</div>
                <div className="date">2024.06 ~ 2024.08 (9명)</div>
                <div className="skills">
                    {["React", "Typescript", "Recoil",].map(skill => (
                        <div className="skills__skill" key={skill}>{skill}</div>
                    ))}
                </div>
                <div className="about">고객 주문 및 관리자 인터페이스 통합</div>
                <div style={{ marginTop: '0.5rem' }}>
                    {[
                        "커뮤니티 관리 기능구현 (1:1문의, 자주묻는질문) ",
                        "업종/기간/지역별 필터링 기능 구현",
                        "주문 이력에 대한 데이터 시각화",
                        "API 연동을 통한 데이터 시각화 개발",
                        "배너관리 화면 개발",
                        "그리드 시스템 기반의 css 마크업",
                    ].map((content, index) => (
                        <div className="content" key={index}>{content}</div>
                    ))}
                </div>
                <div className="icons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="svg">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm10 12c0 .685-.07 1.354-.202 2h-3.853a21.373 21.373 0 000-4h3.853c.132.646.202 1.315.202 2zm-.841-4h-3.5c-.383-1.96-1.052-3.751-1.948-5.278A10.048 10.048 0 0121.159 8zm-5.554 0H13V2.342c1.215 1.46 2.117 3.41 2.605 5.658zM11 2.342V8H8.395C8.883 5.752 9.785 3.802 11 2.342zM11 10v4H8.07a18.32 18.32 0 010-4H11zm0 6v5.658c-1.215-1.46-2.117-3.41-2.605-5.658H11zm2 5.658V16h2.605c-.488 2.248-1.39 4.198-2.605 5.658zM13 14v-4h2.93a18.32 18.32 0 010 4H13zM8.289 2.722C7.393 4.249 6.724 6.04 6.341 8h-3.5a10.048 10.048 0 015.448-5.278zM2.202 10h3.853a21.373 21.373 0 000 4H2.202a9.983 9.983 0 010-4zm.639 6h3.5c.383 1.96 1.052 3.751 1.948 5.278A10.048 10.048 0 012.841 16zm12.87 5.278c.896-1.527 1.565-3.318 1.948-5.278h3.5a10.048 10.048 0 01-5.448 5.278z"></path>
                        </svg>
                </div>
            </div>
        </div>
        <div className="contents__content">
            <div data-aos="flip-left" className="ProjectBox__Container-sc-1m1icly-0 gMpCsm">
                <div className="container blue-container">
                    <div className="title">사내 휴양지 예약관리 시스템 개발</div>
                    <div className="date">2024.04 (2명)</div>
                    <div className="skills">
                        <div className="skills__skill">Mendix</div>
                        <div className="skills__skill">Java</div>
                    </div>
                    <div className="about">사내 휴양지 숙소 예약시스템</div>
                    <div style={{ marginTop: '0.5rem' }}>
                        <div className="content"></div>
                        <div className="content">중복예약 방지기능 구현</div>
                        <div className="content">실시간 예약 가능상태 표시 구현</div>
                        <div className="content">지도 API를 활용한 위치 기반 서비스 구현</div>
                    </div>
                    <div className="icons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="svg">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm10 12c0 .685-.07 1.354-.202 2h-3.853a21.373 21.373 0 000-4h3.853c.132.646.202 1.315.202 2zm-.841-4h-3.5c-.383-1.96-1.052-3.751-1.948-5.278A10.048 10.048 0 0121.159 8zm-5.554 0H13V2.342c1.215 1.46 2.117 3.41 2.605 5.658zM11 2.342V8H8.395C8.883 5.752 9.785 3.802 11 2.342zM11 10v4H8.07a18.32 18.32 0 010-4H11zm0 6v5.658c-1.215-1.46-2.117-3.41-2.605-5.658H11zm2 5.658V16h2.605c-.488 2.248-1.39 4.198-2.605 5.658zM13 14v-4h2.93a18.32 18.32 0 010 4H13zM8.289 2.722C7.393 4.249 6.724 6.04 6.341 8h-3.5a10.048 10.048 0 015.448-5.278zM2.202 10h3.853a21.373 21.373 0 000 4H2.202a9.983 9.983 0 010-4zm.639 6h3.5c.383 1.96 1.052 3.751 1.948 5.278A10.048 10.048 0 012.841 16zm12.87 5.278c.896-1.527 1.565-3.318 1.948-5.278h3.5a10.048 10.048 0 01-5.448 5.278z"></path>
                        </svg>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="svg">
                            <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zM6 13h4V6h4v7h4l-6 6-6-6z"></path>
                        </svg> */}
                    </div>
                </div>
            </div>
            <div className="contents__content">
            <div data-aos="flip-right" className="ProjectBox__Container-sc-1m1icly-0 gMpCsm">
                <div className="container green-container">
                    <div className="title">래미안홈닉 화면개발</div>
                    <div className="date">2023.06 ~ 2023.08 (20명)</div>
                    <div className="skills">
                        <div className="skills__skill">Vue</div>
                        <div className="skills__skill">Vue Router</div>
                        <div className="skills__skill">Axios</div>
                        <div className="skills__skill">SCSS</div>
                        <div className="skills__skill">TypeScript</div>
                    </div>
                    <div className="about">홈 IoT 및 커뮤니티 서비스 개발</div>
                    <div style={{ marginTop: '0.5rem' }}>
                        <div className="content">UX를 고려하여 직관적인 UI 설계</div>
                        <div className="content">사용자가 쉽게 접근할 수 있는 메뉴 및 버튼 배치 최적화</div>
                    </div>
                    <div className="icons">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="svg">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="svg">
                            <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zM6 13h4V6h4v7h4l-6 6-6-6z"></path>
                        </svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="svg">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm10 12c0 .685-.07 1.354-.202 2h-3.853a21.373 21.373 0 000-4h3.853c.132.646.202 1.315.202 2zm-.841-4h-3.5c-.383-1.96-1.052-3.751-1.948-5.278A10.048 10.048 0 0121.159 8zm-5.554 0H13V2.342c1.215 1.46 2.117 3.41 2.605 5.658zM11 2.342V8H8.395C8.883 5.752 9.785 3.802 11 2.342zM11 10v4H8.07a18.32 18.32 0 010-4H11zm0 6v5.658c-1.215-1.46-2.117-3.41-2.605-5.658H11zm2 5.658V16h2.605c-.488 2.248-1.39 4.198-2.605 5.658zM13 14v-4h2.93a18.32 18.32 0 010 4H13zM8.289 2.722C7.393 4.249 6.724 6.04 6.341 8h-3.5a10.048 10.048 0 015.448-5.278zM2.202 10h3.853a21.373 21.373 0 000 4H2.202a9.983 9.983 0 010-4zm.639 6h3.5c.383 1.96 1.052 3.751 1.948 5.278A10.048 10.048 0 012.841 16zm12.87 5.278c.896-1.527 1.565-3.318 1.948-5.278h3.5a10.048 10.048 0 01-5.448 5.278z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="contents__content">
            <div data-aos="flip-left" className="ProjectBox__Container-sc-1m1icly-0 gMpCsm">
                <div className="container blue-container">
                    <div className="title">직페이 결제 서비스 개발</div>
                    <div className="date">2021.10 ~ 2023.04 (8명)</div>
                    <div className="skills">
                        <div className="skills__skill">Vue</div>
                        <div className="skills__skill">Javascript</div>
                        <div className="skills__skill">Vuex</div>
                    </div>
                    <div className="about">토큰 결제 서비스</div>
                    <div style={{ marginTop: '0.5rem' }}>
                        <div className="content">자료수집 및 소스검토</div>
                        <div className="content">css 마크업</div>
                        <div className="content">페이지 개발 및 리팩토링</div>
                    </div>
                    <div className="icons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="svg">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm10 12c0 .685-.07 1.354-.202 2h-3.853a21.373 21.373 0 000-4h3.853c.132.646.202 1.315.202 2zm-.841-4h-3.5c-.383-1.96-1.052-3.751-1.948-5.278A10.048 10.048 0 0121.159 8zm-5.554 0H13V2.342c1.215 1.46 2.117 3.41 2.605 5.658zM11 2.342V8H8.395C8.883 5.752 9.785 3.802 11 2.342zM11 10v4H8.07a18.32 18.32 0 010-4H11zm0 6v5.658c-1.215-1.46-2.117-3.41-2.605-5.658H11zm2 5.658V16h2.605c-.488 2.248-1.39 4.198-2.605 5.658zM13 14v-4h2.93a18.32 18.32 0 010 4H13zM8.289 2.722C7.393 4.249 6.724 6.04 6.341 8h-3.5a10.048 10.048 0 015.448-5.278zM2.202 10h3.853a21.373 21.373 0 000 4H2.202a9.983 9.983 0 010-4zm.639 6h3.5c.383 1.96 1.052 3.751 1.948 5.278A10.048 10.048 0 012.841 16zm12.87 5.278c.896-1.527 1.565-3.318 1.948-5.278h3.5a10.048 10.048 0 01-5.448 5.278z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="contents__content">
            <div data-aos="flip-right" className="ProjectBox__Container-sc-1m1icly-0 gMpCsm">
                <div className="container green-container">
                    <div className="title">TODO LIST</div>
                    <div className="date">2024.04 ~ 2024.06 (1명)</div>
                    <div className="skills">
                        <div className="skills__skill">Vue</div>
                        <div className="skills__skill">Javascript</div>
                        <div className="skills__skill">Vuex</div>
                    </div>
                    <div className="about">할일 목록 체크 리스트 개발</div>
                    <div style={{ marginTop: '0.5rem' }}>
                        <div className="content">사용자 인터페이스 설계</div>
                        <div className="content">항목 추가/삭제 기능, 체크 기능 화면 개발</div>
                        <div className="content">정렬기능 개발</div>
                    </div>
                    <div className="icons">
                    <a href="https://github.com/nanaHiii/TodoList" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="svg">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
                        </svg>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="svg">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm10 12c0 .685-.07 1.354-.202 2h-3.853a21.373 21.373 0 000-4h3.853c.132.646.202 1.315.202 2zm-.841-4h-3.5c-.383-1.96-1.052-3.751-1.948-5.278A10.048 10.048 0 0121.159 8zm-5.554 0H13V2.342c1.215 1.46 2.117 3.41 2.605 5.658zM11 2.342V8H8.395C8.883 5.752 9.785 3.802 11 2.342zM11 10v4H8.07a18.32 18.32 0 010-4H11zm0 6v5.658c-1.215-1.46-2.117-3.41-2.605-5.658H11zm2 5.658V16h2.605c-.488 2.248-1.39 4.198-2.605 5.658zM13 14v-4h2.93a18.32 18.32 0 010 4H13zM8.289 2.722C7.393 4.249 6.724 6.04 6.341 8h-3.5a10.048 10.048 0 015.448-5.278zM2.202 10h3.853a21.373 21.373 0 000 4H2.202a9.983 9.983 0 010-4zm.639 6h3.5c.383 1.96 1.052 3.751 1.948 5.278A10.048 10.048 0 012.841 16zm12.87 5.278c.896-1.527 1.565-3.318 1.948-5.278h3.5a10.048 10.048 0 01-5.448 5.278z"></path>
                        </svg> */}
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="contents__content">
            <div data-aos="flip-right" className="ProjectBox__Container-sc-1m1icly-0 gMpCsm">
                <div className="container blue-container">
                    <div className="title">맛집지도</div>
                    <div className="date">2024.04 ~ 2024.06 (1명)</div>
                    <div className="skills">
                        <div className="skills__skill">Vue</div>
                        <div className="skills__skill">Javascript</div>
                        <div className="skills__skill">Vuex</div>
                    </div>
                    <div className="about">맛집지도 위치기반 서비스 개발</div>
                    <div style={{ marginTop: '0.5rem' }}>
                        <div className="content">Kakao Maps API를 활용하여 지도 표시 및 위치 마킹 기능 구현</div>
                        <div className="content">위치 마킹 클릭 시, 해당 가게의 정보와 함께 유튜브 영상 링크를 제공하는 상세 정보 팝업 구현</div>
                        <div className="content">사용자 친화적인 인터페이스 및 경험 설계</div>
                        <div className="content">카테고리별 메뉴 필터링 개발</div>
                    </div>
                    <div className="icons">
                    <a href="http://www.nanacon.store" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="svg">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm10 12c0 .685-.07 1.354-.202 2h-3.853a21.373 21.373 0 000-4h3.853c.132.646.202 1.315.202 2zm-.841-4h-3.5c-.383-1.96-1.052-3.751-1.948-5.278A10.048 10.048 0 0121.159 8zm-5.554 0H13V2.342c1.215 1.46 2.117 3.41 2.605 5.658zM11 2.342V8H8.395C8.883 5.752 9.785 3.802 11 2.342zM11 10v4H8.07a18.32 18.32 0 010-4H11zm0 6v5.658c-1.215-1.46-2.117-3.41-2.605-5.658H11zm2 5.658V16h2.605c-.488 2.248-1.39 4.198-2.605 5.658zM13 14v-4h2.93a18.32 18.32 0 010 4H13zM8.289 2.722C7.393 4.249 6.724 6.04 6.341 8h-3.5a10.048 10.048 0 015.448-5.278zM2.202 10h3.853a21.373 21.373 0 000 4H2.202a9.983 9.983 0 010-4zm.639 6h3.5c.383 1.96 1.052 3.751 1.948 5.278A10.048 10.048 0 012.841 16zm12.87 5.278c.896-1.527 1.565-3.318 1.948-5.278h3.5a10.048 10.048 0 01-5.448 5.278z"></path>
                        </svg>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
        </div>
        </div>
        <div class="text">Designed &amp; Developed By </div>
        <div className="pages__ScrollBtn-sc-1j514r3-1 hjYniq">
        <div 
        style={{ width: '100%', height: '100%', overflow: 'hidden', margin: '0 auto', outline: 'none' }} 
        title="" 
        role="img" 
        aria-label="animation" 
        tabIndex="0">
          </div>
         </div>
        </div>
      </div>
    </div>
    );
};

export default Page5;

