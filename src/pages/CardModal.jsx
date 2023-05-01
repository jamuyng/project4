function CardModal({ listItem }) {
  console.log(listItem);
  return (
    <div className="modal_con" onClick={() => {}}>
      <div className="modal">
        <p className="modal_title">{listItem.title}</p>
        <div className="modal_facility">
          {" "}
          {listItem.braille === 1 ? (
            <div>
              #점자
              <img
                src={`${process.env.PUBLIC_URL}/${listItem.brailleImg}`}
                alt="?"
              />
            </div>
          ) : null}
          {listItem.slope === 1 ? (
            <div>
              #경사로
              <img
                src={`${process.env.PUBLIC_URL}/${listItem.slopeImg}`}
                alt="?"
              />
            </div>
          ) : null}
          {listItem.automaticDoor === 1 ? (
            <div>
              #자동문
              <img
                src={`${process.env.PUBLIC_URL}/${listItem.automaticDoorImg}`}
                alt="?"
              />
            </div>
          ) : null}
          {listItem.elevator === 1 ? (
            <div>
              #엘리베이터
              <img
                src={`${process.env.PUBLIC_URL}/${listItem.elevatorImg}`}
                alt="?"
              />
            </div>
          ) : null}
          {listItem.toilet === 1 ? (
            <div>
              #장애인화장실
              <img
                src={`${process.env.PUBLIC_URL}/${listItem.toiletImg}`}
                alt="?"
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default CardModal;
