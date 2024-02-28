import React from "react";

import header_bird from "../img/header-bird.png";
import bird1 from "../img/1_Orange-belliedLeafbird.jpg";
import bird2 from "../img/2_StorkbilledKingfisher.png";
import bird3 from "../img/3_BlacknappedFruit Dove.png";
import BirdsList from "./BirdsList";
import BirdsData from "../components/BirdsData";

const Home = () => {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-lg-6 order-lg-1">
          <img
            data-aos="fade-up"
            data-aos-duration="1000"
            src={header_bird}
            alt="header-bird"
            width={"100%"}
          />
        </div>
        <div className="col-lg-6 order-lg-0">
          <div className="py-5">
            <h1 data-aos="fade-up" data-aos-duration="1000">
              ငှက် (Bird)
            </h1>
            <p data-aos="fade-up" data-aos-duration="1300" className="py-4">
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
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="rounded-circle"
                  src={bird1}
                  alt=""
                  width={80}
                  height={80}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="related-bird">
                <img
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="rounded-circle"
                  src={bird2}
                  alt=""
                  width={80}
                  height={80}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="related-bird">
                <img
                  data-aos="fade-up"
                  data-aos-duration="1400"
                  src={bird3}
                  className="rounded-circle"
                  alt=""
                  width={80}
                  height={80}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BirdsData />
    </div>
  );
};

export default Home;
