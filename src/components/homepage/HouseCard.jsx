import { useState,useEffect } from "react";
import axios from 'axios';

import { pUrl } from "../../utils/constants";
const HouseCard=()=>{

    const [houseDatas,setHouseDatas]=useState([]);
    const [houseType,setHouseType]= useState([]);
    
    useEffect(()=>{
        const getHouse=async()=>{
            try{
                // 同時抓取兩份資料
                const [resHouses,resTypes]= await Promise.all([
                    axios.get("http://localhost:3004/houses?isHot=true"),
                    axios.get("http://localhost:3004/houseTypes")
                ]);
                
                setHouseDatas(resHouses.data);
                setHouseType(resTypes.data);
            }catch(err){
                console.error("抓取失敗:"+err?.response?.data?.message);
            }
        }

        getHouse();
    },[]);

    return (
        <>
            {/* 熱門租屋處外層 */}
            <div className='container-fluid py-4 my-5 mt-5'> {/* 改用 container-fluid 讓寬度更彈性 */}
                <div 
                    id="select1"
                    className="select1 slide rounded-4 overflow-hidden mx-auto"
                    style={{ maxWidth: '1400px' }}> {/* 限制最大寬度，確保在大螢幕不會太散 */}
                    
                    <h1 className="ps-4">熱門首選</h1>
                    <div className="d-flex align-items-center ps-4">
                        <span className="text-muted">你不可錯過的精選租屋處</span>
                        <hr className="ms-3 flex-grow-1" style={{border: "1px solid #9cb7c4", opacity: "1", maxWidth: "120px"}} />
                        
                        {/* 左右按鈕 */}
                        <div className="d-flex ms-auto gap-2 pe-4">
                            <button type="button" className="btn btn-houseCard-custom rounded-circle btn-icon">
                                <i className="bi bi-arrow-left"></i>
                            </button>
                            <button type="button" className="btn btn-houseCard-custom rounded-circle btn-icon">
                                <i className="bi bi-arrow-right"></i>
                            </button>
                        </div>
                    </div>

                    {/* 卡片展示區：這是解決切除問題的關鍵區塊 */}
                    <div style={{ 
                        marginTop: "50px", 
                        overflow: "hidden", // 隱藏超過第 5 張的部分
                        padding: "20px 0px 30px 30px" // 增加左側位移，並為陰影留空間
                    }}> 
                        <div className='d-flex flex-nowrap gap-4 justify-content-start'>
                            {
                                // 修正：db.json 裡是 houseTypes 複數
                                houseDatas.slice(0, 5).map((item, index) => {
                                    const typeName = houseType.find(t => t.id === item.typeId)?.name || "未知類型";
                                    const isFifth = index === 4; // 第 5 張 (索引 4)

                                    return (
                                        <div 
                                            className={`flex-shrink-0 ${isFifth ? 'opacity-50' : ''}`} 
                                            key={item.id}
                                            style={{ 
                                                width: "306px",
                                                transition: "all 0.3s ease" 
                                            }}
                                        >
                                            <div className="card h-100 custom-card" style={{ borderRadius: '16px', border: 'none' }}>
                                                <img 
                                                    src={pUrl + item.img} 
                                                    className="card-img-top" 
                                                    alt={item.title} 
                                                    style={{ 
                                                        width: "100%", 
                                                        height: "230px", 
                                                        objectFit: "cover",
                                                        borderRadius: '16px 16px 0 0' // 圖片上方同步 16px
                                                    }} 
                                                />
                                                <div className="card-body px-3">
                                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                                        <h5 className="card-title fw-bold mb-0">{item.title}</h5>
                                                        <i className={`bi ${item.isfavor ? "bi-heart-fill" : "bi-heart"} text-warning`} style={{ cursor: 'pointer' }}></i>
                                                    </div>
                                                    <p className="card-text text-muted small mb-1">{item.address}</p>
                                                    <p className="card-text text-muted small">{typeName} | {item.age}年 | 坪數 {item.size}</p>
                                                    <p className="card-text fw-bold text-dark fs-5 mt-3">${item.price.toLocaleString()} / 月租</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default HouseCard;