const OMR = ({ OMRList, currentNumber, setCurrentNumber, swiper, gradeLevel }) => {
    const goToPage = (pageNumber) => {
        if (swiper) {
            swiper.slideTo(pageNumber);
            setCurrentNumber(pageNumber);
        }
    };

    return (
        <article id="OMR" className="bg-third-100 h-[calc(100vh-4rem)] overflow-y-scroll hiddenScroll">
            <div className="flex flex-col w-[6.5rem] px-[0.2rem] py-[-2px]">
                    {OMRList.map((name, index) => (
                        <button key={index} onClick={() => goToPage(index)} className={`bg-third-200 text-white mb-[2px] box-border border-2 border-third-200 rounded w-full h-9 ${index === currentNumber ? 'border-white' : ''}`}>
                            {name}
                        </button>
                    ))}
            </div>
        </article>
    );
}

export default OMR;