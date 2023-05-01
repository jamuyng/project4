import React, { useEffect } from "react";
const { kakao } = window;

function Section() {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(36.349238, 127.377457),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    // 현재 위치 가져오기
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const markerPosition = new kakao.maps.LatLng(lat, lng);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
      map.setCenter(markerPosition);
    });
  }, []);

  return (
    <section className="sec1 mw">
      <div className="map_btn">
        <button>전체보기</button>
        <button>
          <label>
            <input type="checkbox"></input>점자{" "}
          </label>
        </button>
        <button>
          <label>
            <input type="checkbox"></input>경사로{" "}
          </label>
        </button>
        <button>
          <label>
            <input type="checkbox"></input>자동문{" "}
          </label>
        </button>
        <button>
          <label>
            <input type="checkbox"></input>엘레베이터{" "}
          </label>
        </button>
        <button>
          <label>
            <input type="checkbox"></input>장애인화장실{" "}
          </label>
        </button>
      </div>

      <div className="sch_map">
        <input
          type="search"
          placeholder="  장소를 입력해주세요."
          className="sch"
        ></input>
        <div id="map" style={{ width: "900px", height: "400px" }}></div>
      </div>
    </section>
  );
}

export default Section;
