import { pUrl } from "../../utils/constants";
const Person1 = '/homePagePicture/recommand/陳先生.jpg';
const Person2 = '/homePagePicture/recommand/漫漫姊.jpg';
const Person3 = '/homePagePicture/recommand/主委.jpg';
// 1. 樣式提取：保持組件內部清爽
const avatarStyle = {
    width: '120px',
    height: '120px',
    flexShrink: 0, 
    borderRadius: '50%',
    backgroundColor: '#fef5e7',
    marginTop: '-60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden' // 確保頭像圖片不會超出圓框
};





const FeedbackSection = () => {
    // 2. 資料陣列：之後想加新的回饋，只要在這裡加一筆資料就好
    const feedbacks = [
        {
            id: 1,
            name: "優質房仲陳先生",
            content: `這個平台試​著用​心將​大多數​的​屋件​資訊給​透明化，​幫助​房客​能​夠​掃雷、​排除​有​問題​的​屋件​以，​​也​能​夠​快速​的​將屋​主與​符合其​設定​條件​的​房客​快速​進行​媒合。${<br/>}
            ​這種​精神​一直​以來​都​是​我​們​超級​房仲學院​所​推崇​的​誠信​精神。如果​你​感到​迷惘​的​話，​不​彷​可以​使用​安心窩，​​幫助​你​快速​找到​好​房子。`,
            avatar: Person1,
            isYT:true
        },
        {
            id: 2,
            name: "漫漫姊",
            content: `在安心窩能夠快速找到自己喜歡的物件，也能夠從中快速篩選到心儀的租屋處。我發現他們真的很敢，敢把屋件狀況、房東情形都能記錄下來。
            總之，我很感謝安心窩，讓我能夠快速掃雷，找到心儀的租屋處。`,
            avatar: Person2 ,// 之後可以換成真實頭像路徑
            isYT:false
        },
        
        {
            id: 3,
            name: "主委​加碼啦",
            content: `擁​有​十幾​棟​房產​的​我，​每​次​為了找新​的​租客​上​苦苦思索，​與許​多​租客​​聊天​，但​都​不​一定​會媒合​成功。​${<br/>}
            在​這裡，​我​可以​根據​租客​的​個人​基本​資料​以及租客​需求來​快速剔​除​掉許多​不​符合​我​條件​的​租客，​從而​快速​找到​符合​自己​理想​的​租客。​我​推薦​每​個​房東​都​可以​試試看。​`,
            avatar: Person3,
            isYT:false
        }
    ];

    return (
        <section className="container py-5 mt-5">
            {/* 標題區 */}
            <div className="text-center mb-5">
                <h1 className="fw-bold mb-4" style={{ letterSpacing: "2px", fontSize: "40px" }}>真實使用回饋</h1>
                <div className="d-flex justify-content-center">
                    <div style={{ width: '80px', height: "3px", backgroundColor: "black", opacity: 0.5 }}></div>
                </div>
            </div>

            {/* 卡片區塊 */}
            <div className="row justify-content-center gy-5 mt-5">
                {feedbacks.map((item) => (
                    <div className="col-md-6 col-lg-4 px-3" key={item.id}>
                        <div className="card border-0 shadow rounded-4 position-relative h-100" style={{ marginTop: "60px" }}>
                            
                            {/* 圓形頭像區 */}
                            <div className="mx-auto rounded-circle shadow-sm bg-white border border-2 border-white" style={avatarStyle}>
                                <img 
                                    src={pUrl+item.avatar} 
                                    alt={item.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                    onError={(e) => { e.target.src = "https://via.placeholder.com/120"; }} // 沒圖片時顯示預設圖
                                />
                            </div>

                            {/* 文字內容區 */}
                            <div className="card-body text-center d-flex flex-column" style={{ paddingTop: "70px", paddingBottom: "30px" }}>
                                <h5 className="fw-bold mb-2 d-flex align-items-center justify-content-center">{item.name} 
                                    {item.isYT && <i className="bi bi-play-btn-fill ms-2 custom-yt-icon"></i>}
                                </h5>
                                
                                <i className="bi bi-quote mb-2" style={{ fontSize: '3rem', color: '#F2E1C2', lineHeight: 1 }}></i>
                                
                                <p className="text-muted lh-lg px-2 flex-grow-1">
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* 查看更多按鈕 */}
            <div className="text-center" style={{marginTop:"100px"}}>
                <button type="button" className="top-button" style={{ width: "181px", height: "52px" }}>
                    查看更多客戶分享
                </button>
            </div>
        </section>
    );
};

export default FeedbackSection;