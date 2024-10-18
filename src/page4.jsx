import React from 'react';
import './style.css'; 

const Page4 = () => {
  const careerData = [
    {
      title: 'CJ 프레시웨이',
      date: '2024.06.14 ~ 2024.08.30',
      about: '앱인앱 외부연동시스템 화면개발',
    },
    {
      title: '롯데정보통신',
      date: '2024.04.05',
      about: '사내 휴양지 예약관리 시스템 개발',
    },
    {
      title: '삼성물산',
      date: '2023.06.14 ~ 2023.08.25',
      about: '래미안 홈닉 화면개발 및 개발테스트',
    },
    {
      title: '직페이',
      date: '2021.10.02 ~ 2023.04.20',
      about: '직페이 결제 서비스 화면개발 ',
    },
  ];

  const activityData = [
    {
      title: 'TODO LIST',
      date: '(2024.04 ~ 2024.06)',
      about: 'Toy Project',
    },
    {
      title: '맛집지도',
      date: '(2023.05 ~ 2023.06)',
      about: 'Toy Project',
    },
    {
      title: 'SQLD 개발자 자격 취득과정 수료',
      date: '(2022.05 ~ 2022.07)',
      about: 'SQL + SQL 최적화 + 모델링',
    },
  ];

  return (
    <div className="Page4__Container-ngi7t-0 jutkna flex" style={{ marginTop: '80px' }}>
      <div className="card">
        <div
          style={{ right: '0.5rem', top: '-0.2rem', transform: 'rotate(40deg)' }}
          className="Page4__Arraw-ngi7t-2 coNgQh"
        ></div>
        <div className="Page4__Title-ngi7t-1 bhNMKk right">Career.</div>
        <div className="card__content">
          {careerData.map((item, index) => (
            <div key={index} data-aos="flip-down" data-aos-delay="500" className="CareerBox__Container-sc-1o64pi0-0 bOTCLb">
              <div className="title">
                {item.title}
                <span className="date">{item.date}</span>
              </div>
              <div className="about">{item.about}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="card">
        <div
          style={{ left: '0.5rem', bottom: '-0.2rem', transform: 'rotate(40deg)' }}
          className="Page4__Arraw-ngi7t-2 coNgQh"
        ></div>
        <div className="Page4__Title-ngi7t-1 MZwHH left">Activity.</div>
        <div className="card__content">
          {activityData.map((item, index) => (
            <div key={index} data-aos="flip-down" data-aos-delay="500" className="CareerBox__Container-sc-1o64pi0-0 eqjpwc">
              <div className="title">
                {item.title}
                <span className="date">{item.date}</span>
              </div>
              <div className="about">{item.about}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page4;
