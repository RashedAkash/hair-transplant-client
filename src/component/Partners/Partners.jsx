import Marquee from "react-fast-marquee";
import img1 from '../../assets/par1.jpg'
import img2 from '../../assets/par2.jpg'
import img3 from '../../assets/par3.jpg'
import img4 from '../../assets/par4.jpg'
import SectionTitle from "../SectionTitle/SectionTitle";

const Partners = () => {
  return (
    <div>
      <SectionTitle title='Our Partners'/>
      <div className="flex">
        <Marquee>
    <img src={img1} alt="" />
    <img src={img2} alt="" />
    <img src={img3} alt="" />
    <img src={img4} alt="" />
  </Marquee>
    </div>
    </div>
  );
};

export default Partners;