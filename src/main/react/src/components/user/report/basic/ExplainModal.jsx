import {CanvasStyle} from './ExplainModal.style'

const ExplainModal = ({ modal, setModal, erratum, examExplain }) => {
    const isShow = modal ? true : false;

    return (
        <section className="bg-black/50 fixed top-0 left-0 right-0 z-50 w-full h-screen flex items-center justify-center">
            <div
                id="defaultModal"
                tabIndex="-1"
                aria-hidden={isShow}
                className="relative w-2/3 h-3/4 max-w-full max-h-full bg-white rounded-lg shadow dark:bg-gray-700 overflow-scroll"
            >
                {/* Modal header */}
                <div className="flex items-start p-4 border-black rounded-t dark:border-gray-600">
                    <div className="flex justify-between w-full">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white ml-5">
                            Q.{erratum.questionOrderName}
                        </h2>
                        <h3 className="mr-6 text-xl font-semibold text-gray-900 dark:text-white ml-auto">
                            정답여부 : {erratum.correctResult}
                        </h3>
                    </div>
                    <div className="ml-auto">
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover-text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark-hover-bg-gray-600 dark-hover-text-white"
                            data-modal-hide="defaultModal"
                            onClick={() => setModal(false)}
                        >
                            <svg className="w-3 h-3" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                </div>

                {/* Modal body */}
                <div className="p-6 space-y-6">
                    <div className="text-xl leading-relaxed text-gray-500 rounded dark:text-gray-400">
                        {
                            examExplain &&
                            <CanvasStyle>
                                <div dangerouslySetInnerHTML={{ __html: examExplain.itemContents }} className="mb-5"></div>
                                <div>입력 : <span className='text-blue-500'>{examExplain.answer}</span></div>
                                <div>정답 : <span className="text-red-500">{examExplain.correctAnswer}</span></div>
                                <div className='mt-4'>해설 : <span className='text-yellow-400'>{examExplain.itemExplainText}</span></div>
                            </CanvasStyle>
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ExplainModal;