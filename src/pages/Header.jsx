import BtnModal from "./BtnModal";

function Header() {
  return (
    <section className="hd mw">
      <div>
        <div className="logo">WITH</div>
      </div>
      <div className="hd_sec">
        <img src={`${process.env.PUBLIC_URL}/img/left.jpg`} alt="이미지" />
        <h1 className="title">
          <span>마음의 눈</span>을 열면
          <br />
          세상은 <span>하나</span>입니다
        </h1>
        <img src={`${process.env.PUBLIC_URL}/img/right.jpg`} alt="이미지" />
      </div>
      <div className="btn_top">
        <button>장애인시설 등록하기</button>
        <BtnModal />
      </div>
    </section>
  );
}

export default Header;
