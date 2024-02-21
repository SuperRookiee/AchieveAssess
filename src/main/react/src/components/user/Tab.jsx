const Tab = ({ handleTab, currentTab, rounded }) => {
    const buttons = [
        { label: "CBT 대표유형", tab: "cbt" },
        { label: "실전시험Ⅰ", tab: `exam/round1` },
        { label: "실전시험Ⅱ", tab: `exam/round2` },
        { label: "Report", tab: "report" },
    ];

    return (
        <section className="h-20 shadow-[0_1px_5px_rgb(204,204,204)]">
            <div className="Container flex justify-between text-center h-full w-full">
                {buttons.map((btn) => (
                    <button key={btn.tab} onClick={() => handleTab(btn.tab)}
                        className={`w-full text-xl font-bold tracking-[-0.8px] hover:bg-primary-100 hover:text-white 
                            ${(currentTab === btn.tab || (currentTab === "exam" && `exam/${rounded}` === btn.tab)) ? "bg-primary-100 text-white" : ""}`}
                    >
                        {btn.label}
                    </button>
                ))}
            </div>
        </section>
    );
}

export default Tab;