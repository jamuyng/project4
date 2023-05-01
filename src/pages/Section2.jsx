import React, { useState } from "react";
import data from "../store/data";
import CardModal from "./CardModal";

function Section2(props) {
  const [count, setCount] = useState(3);
  let [listItem, setListItem] = useState();

  const handleClick = () => {
    setCount(count + 6);
  };
  let [Modal, setModal] = useState(false);
  return (
    <section className="sec2 mw">
      <div className="card_wrap">
        {data.slice(0, count).map((item, index) => (
          <div
            className="card"
            onClick={() => {
              setModal(true);
              setListItem(item);
            }}
            key={index}
          >
            <div className="card_img">
              <img src={`${process.env.PUBLIC_URL}${item.Img}`} alt="이미지" />
            </div>
            <div className="card_text">
              <p className="card_title">{item.title}</p>
              <p className="card_time">{item.hours}</p>
              <p className="card_address">{item.address}</p>
              <div className="facility">
                {item.braille === 1 ? <p>#점자</p> : null}
                {item.slope === 1 ? <p>#경사로</p> : null}
                {item.automaticDoor === 1 ? <p>#자동문</p> : null}
                {item.elevator === 1 ? <p>#엘리베이터</p> : null}
                {item.toilet === 1 ? <p>#장애인화장실</p> : null}
              </div>
            </div>
          </div>
        ))}
      </div>

      {Modal === true ? <CardModal listItem={listItem} /> : null}
      <div className="more">
        <button onClick={handleClick}>더보기</button>
      </div>
    </section>
  );
}
export default Section2;
