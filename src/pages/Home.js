import React from "react";

import header_bird from "../img/header-bird.png";
import bird1 from "../img/1_Orange-belliedLeafbird.jpg";
import bird2 from "../img/2_StorkbilledKingfisher.png";
import bird3 from "../img/3_BlacknappedFruit Dove.png";
import BirdsList from "./BirdsList";

const Home = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="py-5">
            <h1>ငှက် (Bird)</h1>
            <p className="py-4">
              ငှက် (မျိုးပေါင်း Aves) သည် အမွှေးအတောင်ရှိ၍ အတောင်ပံ
              နှစ်ဖက်ရှိသော သွေးနွေးသတ္တဝါအမျိုးအစားတွင်ပါဝင်သည်။ သို့သော်
              အားလုံး ပျံသန်းနိုင်စွမ်း မရှိကြပေ။ အချို့ငှက်များသည်
              အလွန်အပြေးသန်သူများဖြစ်ကြပြီး အချို့ကတော့ အလွန်ရေကူး
              ကျွမ်းကျင်သူများ ဖြစ်ကြသည်။ ငှက်သည် ကျောရိုးရှိသတ္တဝါဖြစ်ပြီး
              ဥ,ဥတတ်သော သတ္တဝါအမျိုးအစားလည်း ဖြစ်သည်။ ဥက ပေါက်ဖွားလာသော
              ကလေးငယ်များကို စောင့်ရှောက်လေ့ ရှိကြသည်။
            </p>
            <div className="d-flex">
              <div className="related-bird">
                <img
                  className="rounded-circle"
                  src={bird1}
                  alt=""
                  width={100}
                  height={100}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="related-bird">
                <img
                  className="rounded-circle"
                  src={bird2}
                  alt=""
                  width={100}
                  height={100}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="related-bird">
                <img
                  src={bird3}
                  className="rounded-circle"
                  alt=""
                  width={100}
                  height={100}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <img src={header_bird} alt="header-bird" width={"100%"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
