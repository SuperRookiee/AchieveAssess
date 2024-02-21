import video01 from "@assets/image/exam/동영상및소리테스트.mp4";

const MediaTest = ({setMediaTest}) => {
    return (
        <div>
            <div className="text-center text-3xl font-semibold pb-5"><em className="text-blue-500 not-italic">동영상</em> 및 <em className="text-blue-500 not-italic">소리</em> 테스트</div>
            <p className="text-center text-lg pb-14 text-gray-500">동영상 테스트를 실시하여 주시기 바랍니다.<br />
                이상이 없으면 <em className="not-italic">[이상 없습니다]  버튼을 클릭</em>하여 주시기 바랍니다.
            </p>
            <div className="w-full h-auto p-12 border border-gray-300 rounded-3xl">
                <p className="text-center text-lg pb-14 text-gray-500">아래의 동영상을 플레이하여 <em className="text-yellow-300 not-italic">영상 및 소리가 정상적으로 나오는지 확인</em>해 주십시오.</p>
                <div className="flex justify-center items-center" >
                    <video controls width="620" height="380"> 
                        <source src={video01} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="flex justify-center items-center mt-16">
                <button className="w-auto bg-primary-100 rounded-full text-xl font-bold text-white py-3 px-11" onClick={() => setMediaTest(true)}>이상 없습니다</button>
            </div>
        </div>
    )
}

export default MediaTest;
