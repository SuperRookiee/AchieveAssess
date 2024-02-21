const Box = ({ children }) => {
    return (
        <section className="my-[100px]">
            <div className="border-first-200 border-[3px] rounded-[30px] p-[60px]">
                {children}
            </div>
        </section>
    );
}

export default Box;