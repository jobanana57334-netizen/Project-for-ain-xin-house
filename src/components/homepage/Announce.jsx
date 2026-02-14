import React from 'react'; // 雖然現在 React 17+ 可以不寫，但養成習慣也不錯

import { pUrl } from '../../utils/constants';
import axios from 'axios';
import { useState,useEffect } from 'react';
// 1. 引入圖片 (這最重要！)
const anxinwoLogo = '/homePagePicture/new/anxinwo_app.png';
const googlePlayDownload = '/homePagePicture/new/google_play_download.png';
const appleStoreDownload = '/homePagePicture/new/apple_store_download.png';
const backgroundImg ='/homePagePicture/new/notice_bg.jpg';
const logo= '/homePagePicture/new/logo.png';
const Announce = () => {

    const [newDatas,setNewDatas]=useState([]);

    useEffect(()=>{
        const getNewDatas= async()=>{
            try{
                const res= await axios.get('http://localhost:3004/news');
                setNewDatas(res.data);
            }catch(err){
                console.log("發生錯誤!"+err?.response?.data?.message);
            }
        }

        getNewDatas();
    },[]);

    return (
        <>
            {/*公告&安心窩app演示*/}
            <div className="container mt-5 my-5 news-app-section py-5" 
            style={{
         // 使用 linear-gradient 疊加在圖片上，達成設計稿中 #597889 60% 的效果
                background: `linear-gradient(rgba(89, 120, 137, 0.6), rgba(89, 120, 137, 0.6)), url(${pUrl + backgroundImg})`,
            }}>
                <div className="custom-container p-4 p-md-5">
                    <div className="row g-4 position-relative">

                    {/* 左側：消息公告 */}
                    <div className="col-md-6">
                        <div className="info-card h-100 p-4 shadow-sm">
                        <h2 className="fw-bold mb-4">消息公告</h2>
                        <ul className="list-unstyled">
                            {
                                newDatas.map((item)=>(
                                    <li className="mb-3 border-bottom pb-2">
                                        {item.isNew&&(<span className="badge bg-warning text-dark me-2">最新</span>)}
                                        <span >{item.title.length > 10 
                                            ? `${item.title.substring(0, 25)}...` 
                                            : item.title}</span>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="text-end mt-auto">
                            <p className="text-decoration-none text-secondary">更多內容 →</p>
                        </div>
                        </div>
                    </div>

                    {/* 右側：APP 下載 */}
                    <div className="col-md-6">
                        {/* 1. 確保卡片有 position-relative 且 overflow-hidden */}
                        <div className="info-card h-100 p-4 shadow-sm d-flex flex-column position-relative overflow-hidden"
                            style={{borderRadius:"16px"}}
                        >
                        
                        {/* 2. 背景圖片：移到最上方，使用絕對定位 */}
                        <img 
                            src={pUrl+anxinwoLogo} 
                            alt="background"
                            style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            zIndex: 0,
                            // --- 新增以下遮罩樣式 ---
                            // 原理：linear-gradient(方向, 上方顏色 位置, 下方顏色 位置)
                            // transparent 代表圖片變透明 (顯示卡片的白底)，black 代表顯示圖片本體
                            maskImage: 'linear-gradient(to bottom, transparent 0%, black 80%)',
                            // 為了相容性，加上 Webkit 前綴
                            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 80%)',
                            }}
                        />

                        {/* 3. 內容區域：確保 z-index 比圖片高，文字才看得到 */}
                        <div style={{ position: 'relative', zIndex: 2 }}>
                            <h3 className="fw-bold h4">想要快速找屋 / 找到租客？</h3>
                            <p className="text-muted">歡迎使用 「安心窩」 APP</p>
                            <div className="d-flex align-items-center gap-3 mb-4">

                            {/* 右下角裝飾logo */}
                            <img
                                /* ⚠️ 請確認這裡使用正確的手機圖片變數，而不是 Logo */
                                src={pUrl + logo } 
                                alt="App Mockup"
                                style={{
                                    position: 'absolute',
                                    // 關鍵定位：設定為負值，讓圖片稍微「沉」到卡片外，更有層次感
                                    bottom: '-110%', 
                                    right: '60%',
                                    // 關鍵尺寸：設定固定寬度，不再是 100%
                                    width: '280px', // 你可以根據實際效果微調這個數字
                                    height: 'auto', // 維持比例
                                    zIndex: 1,      // 比文字內容低一層
                                    pointerEvents: 'none', // 最佳實踐：讓滑鼠點擊穿透這張裝飾圖，避免擋到按鈕
                                    opacity: 0.9    // 可選：稍微增加一點透明度讓它融合背景
                                }}
                            />
                            
                            {/* googlePlay容器 */}
                            <div style={{ height: "56px" }}>
                                <img 
                                src={pUrl+googlePlayDownload} 
                                alt="Google Play" 
                                className="DownloadIcon"
                                style={{ height: "100%", width: "auto", objectFit: "contain" ,cursor:"pointer"}} 
                                />
                            </div>
                            {/* App Store 容器 */}
                            <div style={{ height: "40px" }}>
                                <img 
                                src={pUrl+appleStoreDownload} 
                                className="DownloadIcon"
                                alt="App Store" 
                                style={{ height: "100%", width: "auto", objectFit: "contain" ,cursor:"pointer"}} 
                                />
                            </div>
                            


                            </div>
                        </div>

                        </div>
                    </div>
            

                    </div>
                </div>
            </div>
        </>
    );
};

export default Announce;