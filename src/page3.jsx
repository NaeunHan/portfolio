import React from 'react';
import './style.css'; // 필요한 경우 CSS 파일을 임포트합니다.

const page3 = () => {
  return (
    <div className="flex">
      <div className="Page3__Container-kgwt3h-0 ipxUUU">
        <div className="Page3__Title-kgwt3h-1 iMajUu">Strength.</div>
        <div className="strong flex">
          {['React', 'Recoil', 'Next.js', 'Typescript', 'Javascript', 'Vue.js', 'Node.js', 'HTML', 'SCSS',].map((skill, index) => (
            <div key={index} className="strong__skill">{skill}</div>
          ))}
        </div>
        <div className="skills">
          {[
            {
              name: 'React',
              contents: [
                'recoil 등의 상태관리 라이브러리 사용 경험이 있습니다.',
                'API를 호출하여 데이터를 가져오고, useEffect를 사용해 컴포넌트가 마운트될 때 데이터를 로드하였습니다.',
                '의존성 배열을 활용하여 특정 상태가 변경될 때만 효과를 실행하도록 최적화하였습니다.'
              ]
            },
            {
              name: 'Vue',
              contents: [
                'Vue Router를 사용하여 동적 라우팅 및 네비게이션 가드를 구현한 경험이 있습니다.',
                'vuex 사용 경험이 있습니다.',
                'Axios를 사용하여 RESTful API와 통신하며 데이터를 가져오는 경험이 있습니다.',
                'Vuex 상태 관리에서 모듈화를 통해 복잡한 상태를 관리하고, Vuex의 getters, mutations, actions을 활용한 경험이 있습니다.'
              ]
            },
            {
              name: 'HTML/CSS',
              contents: [
                'SCSS 문법에 익숙합니다.',
                '웹표준을 지키려 노력합니다.',
                '크로스 브라우징에 대응할 수 있습니다.',
                '여러 CSS 라이브러리를 통해 직관적인 UI를 구현한 경험이 있습니다.',
                'keyframe을 활용한 애니메이션 기법을 활용할 수 있습니다.'
              ]
            },
            {
              name: 'Javascript',
              contents: [
                'ES6+ 문법에 익숙합니다.',
                'webpack, parcel 등의 번들러 사용 경험이 있습니다.',
                'typescript를 사용할 수 있습니다.',
                'async/await, Promise, callback을 활용한 비동기 처리 경험이 있습니다.'
              ]
            }
          ].map((skill, index) => (
            <div key={index} data-aos="flip-left" className="SkillBox__Container-mfr9mb-0 cQuYna">
              <div className="name">{skill.name}</div>
              <div className="contents">
                {skill.contents.map((content, idx) => (
                  <div key={idx} className="contents__content">{content}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page3;
