import { Link } from "react-router-dom";

const error = () => {
    return (
        <main>
            <section className="flex flex-col justify-center text-center py-10">
                <i class="fas fa-exclamation-triangle text-[25rem] text-first-300"></i>
                <Link to={`/`} className="bg-first-300 rounded text-white w-40 px-5 py-5 mx-auto">메인으로 가기</Link>
            </section>
        </main>
    );
}

export default error;