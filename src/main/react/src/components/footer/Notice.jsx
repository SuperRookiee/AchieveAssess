import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import '../../assets/css/main/swiper.scss';
import Modal from './Modal';
import { useEffect, useState } from 'react';
const URL = import.meta.env.VITE_BASE_URL;

const Notice = () => {
    const [modal, setModal] = useState(false);
    const [noticeData, setNoticeData] = useState([]);

    useEffect(() => {
        fetch(`${URL}/notice`)
            .then(response => response.json())
            .then(data => setNoticeData(data))
            .catch(error => console.error("Error:", error));
    }, []);

    return (
        <section className="bg-gray-100">
            <div className="Container mx-auto font-semibold text-2xl flex whitespace-pre h-[70px] py-4">
                <span>공지사항</span>
                <span className="px-2 text-gray-400">NOTICE</span>
                <Swiper
                    direction="vertical"
                    className="flex justify-between w-full ml-9"
                    modules={[Navigation]}
                    navigation={{
                        prevEl: '#swiperNav .swiper-button-prev',
                        nextEl: '#swiperNav .swiper-button-next',
                    }}
                >
                    {noticeData.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <button to={`/`} className="text-lg font-semibold">
                                <span className="bg-primary-100 text-white px-3 py-2">{slide.category}</span>
                                <span onClick={() => (setModal(index))} className="pl-6">{slide.title}</span>
                            </button>
                            <span className="text-lg text-gray-400 float-right leading-loose">{slide.regDate}</span>
                        </SwiperSlide>
                    ))}

                </Swiper>
                <div id='swiperNav'>
                    <div className="swiper-button-prev" />
                    <div className="swiper-button-next" />
                </div>
            </div>
            {modal !== false && <Modal modal={modal} setModal={setModal} notice={noticeData[modal]}/>}
        </section>
    );
};

export default Notice;
