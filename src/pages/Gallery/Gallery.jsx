import img1 from '../../assets/bald-to-bold.jpg';
import img2 from '../../assets/best-hair-transplant-front.jpg';
import img3 from '../../assets/best-hair-transplnt-result.jpg';
import img4 from '../../assets/grade-6-result.jpg';
import img5 from '../../assets/hair-transplant-before-after-result.jpg';
import img6 from '../../assets/hair-transplant-before-after-Right.jpg';
import img7 from '../../assets/result1.jpg';
import img8 from '../../assets/result2.jpg';
import img11 from '../../assets/hair-transplant-result-right-view.jpg';
import img12 from '../../assets/hair-transplant-best-result.jpg';
import img13 from '../../assets/hair-transplant-before-after-Right.jpg';
import SectionTitle from '../../component/SectionTitle/SectionTitle';

const Gallery = () => {
  return (
    <div className=' py-10'>
      <SectionTitle title='Result Gallery' subTitle='See Our amazing hair transplant results and book your appintment now!'></SectionTitle>
    <section className="py-6 dark:text-gray-50">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src={img1} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img11} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img12} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img13} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img2} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img3} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img4} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img5} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img6} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img8} />
		<img src={img7} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
	</div>
</section>
    </div>
  );
};

export default Gallery;