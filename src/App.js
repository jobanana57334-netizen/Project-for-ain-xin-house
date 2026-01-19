
import './assets/App.css';
// 廣告區圖片
import adImage from './homePagePicture/AD/廣告區圖片.png';

// 安心窩APP圖示
import anxinwoLogo from './homePagePicture/new/anxinwo_app.png';
// GOOLE PLAY下載圖示
import googlePlayDownload from './homePagePicture/new/google_play_download.png';
// APPLE STORE下載圖示
import appleStoreDownload from './homePagePicture/new/apple_store_download.png';


const iconContainerStyle = {
  // 強制固定寬高
  width: '120px',
  height: '120px',
  // 防止在 Flex 容器中被擠壓
  flexShrink: 0, 
  // 保持正圓形
  borderRadius: '50%',
  // 背景與邊框（依圖示顏色調整）
  backgroundColor: '#fef5e7',
  border: '2px solid #e2c08d',
  // 向上位移（圓形高度的一半）
  marginTop: '-60px',
  // 讓內部的 Icon 居中
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // 加上輕微陰影
  boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
};

const recommandStyle={
    // 強制固定寬高
    width: '120px',
    height: '120px',
    // 防止在 Flex 容器中被擠壓
    flexShrink: 0, 
    // 保持正圓形
    borderRadius: '50%',
    // 背景與邊框（依圖示顏色調整）
    backgroundColor: '#fef5e7',
    // 向上位移（圓形高度的一半）
    marginTop: '-60px',
    // 讓內部的 Icon 居中
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

};

const Nav=()=>{
  return (
    <>
      <nav className="navbar navbar-light bg-light" style={{position:"fixed" ,width:"100%",height:"8%",zIndex:"10",top:"0",right:"0"}} >
        <div className="container-fluid">
          
          <span className="navbar-brand ms-5">
            <i className="bi bi-house-heart"></i> 安心窩
          </span>
          <form className="d-flex">
            <button className="btn btn-outline-success top-button" type="submit">
              Search
            </button>
            <button className="navbar-toggler custom-toggler ms-3 me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="toggler-bar"></span>
              <span className="toggler-bar"></span>
              <span className="toggler-bar"></span>
            </button>
          </form>
        </div>
      </nav>
    </>
  )
};

const ImgBar=()=>{

  return (
    <div id="heroCarousel"
          className="carousel slide rounded-4 overflow-hidden shadow"
          data-bs-ride="carousel"
          >
            {/*指示圓點*/}
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true"></button>
              <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
            </div>

            {/*輪播內容*/}
            <div className='carousel-inner position-relative'>
              <div className="carousel-item active " style={{width:"1840px",height: '720px'}}>
                {/* 背景圖片：使用 object-fit 確保填滿 */}
                <img 
                  src={adImage}
                  className="carousel-img d-block w-100 h-100" 
                  style={{ objectFit: 'cover',zIndex:"-1" }} 
                  alt="安心找到好房東"/>
                  {/* 2. 文字與按鈕遮罩層 */}
                  <div className="carousel-caption h-100 position-absolute" style={{left: "10%", textAlign: "left", top:"50%"}}>
                    <div className='text-start'>
                    <h2 className="display-5 fw-bold text-white mb-4" style={{ letterSpacing: '2px' }}>
                      安心找到好房東，也為好租客把關
                    </h2>
                    <button className="top-button px-4 py-2" style={{left: '50%'}}>
                      了解安心租賃流程 <span className="ms-2">→</span>
                    </button>
                    </div>
                  </div>
              </div>
            </div>
            {/* 左右控制按鈕 (可選) */}
            <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>

        </div>
  )
};

const Card=()=>{
  return (
    <>
    {/*卡片區塊*/}
    <div className="mt-5 col-md-6 col-lg-3 ms-3'">
      <div className="card h-100 custom-card">
        <img 
          src="your-image-1.jpg" 
          className="card-img-top border border-dark" 
          alt="房屋圖片" 
          style={{width:"306px",height:"230px"}}/>
        <div className="card-body px-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className="card-title fw-bold mb-0">六角大樓商宅</h5>
            <i className="bi bi-heart-fill text-warning" style={{cursor: 'pointer'}}></i>
          </div>
          <p className="card-text text-muted small mb-1">高雄市前鎮區中華五路 789 號 9 樓之 3</p>
          <p className="card-text text-muted small">住宅大樓 | 12年 | 坪數20.85</p>
          <p className="card-text fw-bold text-dark fs-5 mt-3">$22,000 / 月租</p>
        </div>
      </div>
    </div>
    </>
  )
};

const MainCard=()=>{
  return(
    <>
      {/*主題小卡*/}
      <div className='mt-5 col-md-6 col-lg-3 ms-3'>
        <div className="col">
          <div className="card h-100 bg-transparent border-0" style={{width:'306px' ,height: "310px"}}>
            <img 
              src="your-image-1.jpg" 
              className="card-img-top border border-dark" 
              alt="主題圖片" 
              style={{
                width:"306px",
                height:"230px",
                borderRadius:"16px",
                objectFit:"cover"}}/>
                
            <div className="card-body px-0 d-flex justify-content-between align-items-center">
              <div>
                <div className='text-secondary small mb-1 '
                style={{ letterSpacing:"1px"}}>
                  School Area
                </div>
                <h5 className="fw-bold mb-0">學院熱門租屋處</h5>
              </div>
              {/*右側小按鈕*/}
              <div className="d-flex ms-auto gap-2">
                <button type="button" className="btn btn-outline-custom rounded-circle btn-icon">
                  <i className="bi bi-arrow-right" style={{WebkitTextStroke: "1px currentColor"}}></i>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
};

const ReasonForCard=()=>{
  return(
    <>
    {/* 單張卡片開始：利用 col-lg-4 達成三等份 */}
      <div className="col-md-6 col-lg-4">
        <div className="card border-0 shadow rounded-4 h-100 text-center px-4 pb-4">
          
          {/* 上方圓形圖示 */}
          <div className="mx-auto rounded-circle shadow-sm bg-white" style={iconContainerStyle}>
            <img 
              src="path-to-your-icon.svg" 
              alt="icon"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }} 
            />
          </div>

          {/* 卡片內容：使用 flex 讓文字垂直置中 */}
          <div className="card-body d-flex flex-column justify-content-center" style={{ minHeight: '240px' }}>
            <h4 className="card-title fw-bold mb-3" style={{ color: '#444' }}>
              線上租屋媒合平台
            </h4>
            <p className="card-text text-muted lh-lg mb-0">
              每個用戶都能夠藉由該平台來快速篩選出自己想要的房屋類型、地點、以及了解房東情形如何以外。
              房東也可以在這個平台上上傳自己想要租出去的租屋處。
            </p>
          </div>

        </div>
      </div>
    {/* 單張卡片結束 */}
    </>
  )
};


const RecommandCard=()=>{
  return (
    <>
    {/* 2. 卡片本體設定為 position-relative */}
      <div className="card border-0 shadow rounded-4 position-relative" style={{ marginTop: "60px" }}>
        
        {/* 3. 只有「圓形圖示」使用絕對定位，壓在邊界上 */}
        <div className="mx-auto rounded-circle shadow-sm bg-white" style={recommandStyle}>
            <img 
              src="path-to-your-icon.svg" 
              alt="icon"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }} 
            />
        </div>

        {/* 4. 卡片內容保持在正常文檔流 (不要包在絕對定位裡) */}
        <div className="card-body text-center" style={{ paddingTop: "70px", paddingBottom: "30px" }}>
          <h5 className="fw-bold mb-3">漫漫姊</h5>
            <i 
              className="bi bi-quote" 
              style={{ 
                fontSize: '4rem',   /* 控制大小，數值越大圖示越大 */
                color: '#F2E1C2',   /* 控制顏色，這是接近您圖片的淺米/橘色 */
                lineHeight: 1       /* 避免行高撐開多餘空間 */
              }}
            ></i>
          <p className="text-muted lh-lg px-2">
            在安心窩能夠快速找到自己喜歡的物件，也能夠從中快速篩選到心儀的租屋處。
            我發現他們真的很敢，敢把屋件狀況、房東情形都能記錄下來。
            <br/>
            <br/>
            ​總之，​我​很​感謝​安心窩，​讓​我​能​夠​快速​掃雷，​找到​心儀​的​租屋​處。
          
          </p>
          
        </div>

      </div>
    </>

  )
}



function App() {

  return (
    <>
      <div className='container my-5 d-grid gap-5 justify-content-center' style={{width:"100%",height:"100%"}}>
        {/*橫版功能區*/}
        <div >
          <Nav/>
        </div>
        
        {/*廣告區*/}
        <div className="container-fluid my-5 p-0 mt-5 " style={{width:"100%", height:"100%" }}>
          <ImgBar/>
        </div>

        {/*熱門租屋處*/}
        <div className='container-fluid my-5 mt-5 ' style={{width:"100%" , height:"100%"}}>
          <div 
            id="select1"
            className="select1 slide rounded-4 overflow-hidden "
            data-bs-ride="select1-bar">
              <h1 >熱門首選</h1>
              <div className="d-flex align-items-center">
                <span className="text-muted">你不可錯過的精選租屋處</span>
                <hr className="ms-3 flex-grow-1" style={{border: "1px solid #9cb7c4", opacity: "1", maxWidth: "120px"}} />
                {/*左右按鈕*/}
                <div className="d-flex ms-auto gap-2">
                  <button type="button" className="btn btn-outline-custom rounded-circle btn-icon">
                    <i className="bi bi-arrow-left" style={{WebkitTextStroke: "1px currentColor"}}></i>
                  </button>
                  <button type="button" className="btn btn-outline-custom rounded-circle btn-icon">
                    <i className="bi bi-arrow-right" style={{WebkitTextStroke: "1px currentColor"}}></i>
                  </button>
                </div>
              </div>
              {/*卡片區*/}
              <div className='container' style={{marginTop:"50px"}}>
                <div className='row justify-content-center gy-5'>
                  <Card/>
                </div>
              </div>
              
          </div>
        </div>

        {/*主題找屋*/}
        {/* 1. 將外層 container 改為 container-fluid 以達到 100% 寬度 */}
        <div className="container-fluid my-5 bg-customer mt-5 px-0" style={{width:"100%",minHeight: "100%" }}>
          
          <div
            id="select2" 
            className="select2 slide rounded-4 overflow-hidden p-4 p-md-5" // 增加內距讓文字不貼邊
            data-bs-ride="select2-bar">
            
            <h1 className='mt-5'>主題找屋</h1>
            
            <div className="d-flex align-items-center mb-4">
                <span className="text-muted">根據主題快速找屋</span>
                <hr className="ms-3 flex-grow-1" style={{ border: "1px solid #9cb7c4", opacity: "1", maxWidth: "120px" }} />
            </div>

            {/* 2. 移除內層的 container，改用 w-100 或直接用 row */}
            <div className="w-100" style={{ marginTop: '50px' }}>
              <div className="row g-4"> {/* g-4 處理卡片之間的間距 */}
                {/* 確保 MainCard 內部是用 col-xx 定義寬度 */}
                <MainCard /> 
              </div>
            </div>

          </div>
        </div>

        {/*為甚麼選擇安心窩?*/}
        <div className="container-fiuld my-5 mt-5 reason-for" style={{width:"100%" , height:"100%"}}>
          <div className="text-area text-center mt-5">
            <h1 className='fw-bold mb-4' style={{letterSpacing:"2px", fontSize:"40px"}}>為甚麼選擇安心窩?</h1>
            {/* 副標題區塊：使用 flex 置中並對齊橫線 */}
            <div className="d-flex justify-content-center align-items-center text-center">
              <span className="text-secondary fw-bold " style={{ fontSize: '16px' }}>
                不是只找房，是幫你把關人
              </span>
              {/* 橫線部分：設定固定寬度、顏色與邊框粗細 */}
              <div 
                className="ms-3 border-top text-center" 
                style={{ 
                  width: '80px',            /* 控制線條長度 */
                  borderTopWidth: '1px',     /* 線條粗細 */
                  height:"3px",
                  backgroundColor:"black",
                  opacity: 0.5,
                  alignSelf: 'center' /*確保線條置中*/            
                }}
              ></div>
            </div>
          </div>
          {/*卡片區塊*/}
          <div className="container" style={{ marginTop: '100px' }}>
            {/* 使用 row 建立橫向排版，gy-5 處理手機版垂直間距 */}
            <div className="row justify-content-center gy-5">
                <ReasonForCard/>
            </div>
          </div>
          {/*卡片區塊結束*/}
        </div>

        {/*推薦*/}
        {/* 1. 增加外距 mt-5 (或 style marginTop) */}
        <div className="container-fiuld mt-5 py-5 recommand" style={{width:"100%",height:"100%" }}>
          
          <div className="text-area text-center mb-5">
            <h1 className='fw-bold mb-4' style={{ letterSpacing: "2px", fontSize: "40px" }}>真實使用回饋</h1>
            <div className="d-flex justify-content-center">
              <div style={{ width: '80px', height: "3px", backgroundColor: "black", opacity: 0.5 }}></div>
            </div>
          </div>

          {/* 卡片區塊 */}
          <div className="row justify-content-center gy-5 mt-5">
            {/* col-lg-4 讓它在電腦版呈現三列 */}
            <div className="col-md-12 col-lg-3 px-3">
              <RecommandCard/>
            </div>
          </div>

          {/*按鈕區塊*/}
          <div className='text-center mt-5'>
            <button type="button" className="top-button" style={{width:"181px",height:"52px"}}>
              查看更多客戶分享
            </button>
          </div>
        </div>

        {/*公告&安心窩app演示*/}
        <div className="container-fluid mt-5 news-app-section py-5" 
          style={{width:"100%",height:"100%"}}>
          <div className="custom-container p-4 p-md-5">
            <div className="row g-4 position-relative">

              {/* 左側：消息公告 */}
              <div className="col-md-6">
                <div className="info-card h-100 p-4 shadow-sm">
                  <h2 className="fw-bold mb-4">消息公告</h2>
                  <ul className="list-unstyled">
                    <li className="mb-3 border-bottom pb-2">
                      <span className="badge bg-warning text-dark me-2">最新</span>
                      安心窩推出AI自助式服務功能...
                    </li>
                    <li className="mb-3 border-bottom pb-2">
                      賀！安心窩已成功於2025年榮獲...
                    </li>
                    <li className="mb-3">
                      下載安心窩APP，獲取最新消息...
                    </li>
                  </ul>
                  <div className="text-end mt-auto">
                    <p className="text-decoration-none text-secondary">更多內容 →</p>
                  </div>
                </div>
              </div>

             {/* 右側：APP 下載 */}
              <div className="col-md-6">
                {/* 1. 確保卡片有 position-relative 且 overflow-hidden */}
                <div className="info-card h-100 p-4 shadow-sm d-flex flex-column position-relative overflow-hidden">
                  
                  {/* 2. 背景圖片：移到最上方，使用絕對定位 */}
                  <img 
                    src={anxinwoLogo} 
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
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <h3 className="fw-bold h4">想要快速找屋 / 找到租客？</h3>
                    <p className="text-muted">歡迎使用 「安心窩」 APP</p>
                    <div className="d-flex align-items-center gap-3 mb-4">
                      <div style={{ height: "56px" }}>
                        <img 
                          src={googlePlayDownload} 
                          alt="Google Play" 
                          style={{ height: "100%", width: "auto", objectFit: "contain" ,cursor:"pointer"}} 
                        />
                      </div>
                      {/* App Store 容器 */}
                      <div style={{ height: "40px" }}>
                        <img 
                          src={appleStoreDownload} 
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

        {/*footer*/}
        <footer className="footer mt-5">
          <div className="container">
            <div className="row">
              
              {/* 左側：品牌資訊與聯繫方式 */}
              <div className="col-lg-5 mb-5 mb-lg-0">
                <div className="footer-logo">
                  {/* 這裡可以使用你的安心窩 Logo */}
                  <i className="bi bi-house-heart"></i>
                  <span>安心窩</span>
                </div>
                
                <div className="contact-info">
                  <p className="fw-bold mb-4">直營店(總部-雙北營業區)</p>
                  <p><i className="bi bi-telephone-fill"></i> 0800-092-000</p>
                  <p><i className="bi bi-envelope-fill"></i> anixinwo@gmail.com</p>
                  <p><i className="bi bi-clock-fill"></i> 09:00~18:00(週一至週五)</p>
                </div>

                <div className="social-icons">
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-line"></i>
                  <i className="bi bi-instagram"></i>
                </div>
              </div>

              {/* 右側：導覽連結 */}
              <div className="col-lg-7 footer-nav">
                <div className="row">
                  
                  <div className="col-12 nav-section">
                    <h5>合作夥伴</h5>
                    <div className="nav-links">
                      <span>永慶房屋</span><span>中信房屋</span><span>北揚房屋</span>
                      <span>Zuyou租寓</span><span>怡居房屋</span>
                    </div>
                  </div>

                  <div className="col-12 nav-section">
                    <h5>安心窩服務</h5>
                    <div className="nav-links">
                      <span>智能ai服務器</span><span>安心窩慈善基金會</span><span>安心窩居家服務</span>
                    </div>
                  </div>

                  <div className="col-12 nav-section">
                    <h5>人才招募</h5>
                    <div className="nav-links">
                      <span>房仲招募</span><span>數位人才招募</span><span>經紀人員招募</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
      </footer>

    </div>
      
    </>
  );
}

export default App;
