import React from 'react';
import './style.css'; 
import mimoticon from '../src/mimoticon.jpg'

const page2 = () => {
  return (
    <div className="Page2__Wrapper-sc-113b8ll-0 jmYqgT">
      <div className="Page2__Container-sc-113b8ll-1 eNKGZg">
        <div className="TextSlider__SlideContainer-sc-1q3s5sd-0 lyMQS">
          <div style={{ width: '100%', overflow: 'hidden' }}>
            <div style={{ width: '500%', overflow: 'hidden', display: 'flex', animation: 'slide 60s infinite' }}>
              {['Frontend', 'React', 'HTML / CSS', 'Javascript', 'Typescript'].map((text, index) => (
                <div key={index} className="TextSlider__Slide-sc-1q3s5sd-1 iJPQvU">
                  <br />
                  <span className="__text">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="ProgressBar__Container-rg7auc-0 cxLbLP">
          <div className="ProgressBar__Progress-rg7auc-1 fkIkpV"></div>
        </div>
        <div className="Information__Container-sc-71vgk9-0 jzBdnI">
          <div className="memoji">
            <div className="memoji__box">Developer</div>
            <svg width="177" height="178" fill="none" xmlns="http://www.w3.org/2000/svg" className="memoji__svg pc-only">
              <path fill="url(#memoji_svg__pattern0)" d="M0 .373h177v177H0z"></path>
              <defs>
                <pattern id="memoji_svg__pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#memoji_svg__image0" transform="matrix(.0025 0 0 .0025 -.045 -.018)"></use>
                </pattern>
                <image id="memoji_svg__image0" width="421" height="421" />
              </defs>
            </svg>
            <svg width="100" height="100" viewBox="0 0 177 178" fill="none" xmlns="http://www.w3.org/2000/svg" className="memoji__svg mobile-only">
              <path fill="url(#memoji-mobile_svg__pattern0)" d="M0 .373h177v177H0z"></path>
              <defs>
                <pattern id="memoji-mobile_svg__pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#memoji-mobile_svg__image0" transform="matrix(.0025 0 0 .0025 -.045 -.018)"></use>
                </pattern>
                <image id="memoji-mobile_svg__image0" width="421" height="421" />
              </defs>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="500" viewBox="0 0 24 24" className="memoji__cursor" style={{ transform: 'translate(300%, 5%) rotate(45deg)' }}>
            <path d="M8 4v4h8v4H8v4l-6-6 6-6z" />
            </svg>
            <div className="memoji__circle">
            <img src={mimoticon} alt="Mimoticon" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
            </div>
            <div className="memoji__info-circle">
            </div>
            {/* <div className="memoji__info flex">
              한나은
              <br />
              010.2967.9899
              <br />
              1988.09.30
            </div> */}
            <div className="info">
       <a href="mailto:nehan0930@gmail.com" className="info__button">nehan0930@gmail.com</a>
       <a href="https://github.com/NaeunHan" target="_blank" rel="noopener noreferrer" className="info__button">GITHUB</a>
       <a href="https://nanahi.tistory.com" target="_blank" rel="noopener noreferrer" className="info__button">DEVELOP.NOTE</a>
       </div>
          </div>
          <div className="Page2__TextBox-sc-113b8ll-2 fKJRTi flex pc-only">
        <div>
          < br />
          <span className="Page2__Bold-sc-113b8ll-3 ieOPZb">Frontend</span>
          라는 무대에서 제 꿈을 현실로 만드는&nbsp; 
          <span className="Page2__Bold-sc-113b8ll-3 ieOPZb">개발자</span>
          가 되고자 합니다. <br />
          <span className="Page2__Bold-sc-113b8ll-3 ieOPZb">새로운 계획과 도전</span>
          은 제게 불가능을&nbsp;   
          <span className="Page2__Bold-sc-113b8ll-3 ieOPZb">가능&nbsp;</span>으로 만드는&nbsp;  
          <span className="Page2__Bold-sc-113b8ll-3 ieOPZb">원동력</span>
          이 되었습니다. <br />
          저는 계속해서&nbsp; 
          <span className="Page2__Bold-sc-113b8ll-3 ieOPZb">더 나은 내일을</span>&nbsp; 
          꿈꾸고 있고, 이루고 있습니다!
        </div>
      </div>
        </div>
      </div>
      
      <div className="Page2__TextBox-sc-113b8ll-2 fKJRTi flex mobile-only">
      <div>
          <span className="Page2__Bold-sc-113b8ll-3 ieOPZb">Frontend</span>
          라는 무대에서 제 꿈을 현실로 만드는&nbsp; 
          <span className="Page2__Bold-sc-113b8ll-3 ieOPZb">개발자</span>
          가 되고자 합니다. <br />
          <span className="Page2__Bold-sc-113b8ll-3 ieOPZb">새로운 계획과 도전</span>
          은 제게 불가능을&nbsp;   
          <span className="Page2__Bold-sc-113b8ll-3 ieOPZb">가능&nbsp;</span>으로 만드는&nbsp;  
          <span className="Page2__Bold-sc-113b8ll-3 ieOPZb">원동력</span>
          이 되었습니다. <br />
          저는 계속해서&nbsp; 
          <span className="Page2__Bold-sc-113b8ll-3 ieOPZb">더 나은 내일을</span>&nbsp; 
          꿈꾸고 있고, 이루고 있습니다!
        </div>
      </div>
    </div>
  );
};

export default page2;
