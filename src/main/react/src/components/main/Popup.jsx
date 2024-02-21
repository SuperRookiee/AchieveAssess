import CommingSoonImage from '../../assets/image/comming_soon.png';

const Popup = () => {
    return(
        <div className="fixed inset-0 w-screen h-screen z-10">
            <div className="absolute inset-0 w-full h-full bg-white opacity-70" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <img src={CommingSoonImage} alt='commingsoon' />
                <p>서비스 이용은 학업성취도 평가 실시 4주 전 오픈 예정입니다. (8/10 오픈)</p>
            </div>
        </div>
    );
}

export default Popup;