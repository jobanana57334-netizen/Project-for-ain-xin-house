import  { useState,useEffect } from 'react';
// 1. 引入 Swiper 核心組件與必要模組
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import axios from 'axios';
import { pUrl } from '../../utils/constants';
// 2. 引入 Swiper 的 CSS 樣式
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const AdBar = () => {

    const [adDatas,setAdDatas]=useState([]);

    useEffect(()=>{
        const ImgData=async()=>{
        
            try{
                const res = await axios.get('http://localhost:3004/adDatas');
                setAdDatas(res.data);
                console.log(res.data);
            }catch(err){
                console.log("發生錯誤!"+err?.response?.data?.message);
            }
        }

        ImgData();

    },[]);
    
    return (
        <div className="container py-4 mt-5" style={{ width: "100%" }}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3500 }}
                loop={true}
                className="rounded-4 overflow-hidden shadow"
                style={{ height: '720px' }} //固定高度
            >
                {
                    adDatas.map((item)=>(
                        <>
                            <SwiperSlide key={item.id}>
                                <div className="position-relative h-100 w-100">
                                    <img 
                                    src={pUrl + item.img}
                                    className="w-100 h-100" 
                                    style={{ objectFit: 'cover' }} // 這裡移除了 zIndex: "-1" 
                                    alt={item.text}
                                    />
                                    
                                    {/* 文字遮罩層 */}
                                    <div className="carousel-caption position-absolute" 
                                        style={{ 
                                        left: "10%", 
                                        bottom: "15%", 
                                        textAlign: "left",
                                        zIndex: 10 // 確保文字在圖片上面
                                        }}>
                                    <div className='text-start'>
                                        <h2 className="display-5 fw-bold text-white mb-4" style={{ letterSpacing: '2px', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                                        {item.title}
                                        </h2>
                                        <button className="top-button px-4 py-2">
                                        {item.text} <span className="ms-2">→</span>
                                        </button>
                                    </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default AdBar;