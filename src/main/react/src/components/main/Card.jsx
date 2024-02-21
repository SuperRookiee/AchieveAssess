import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ url, title, content, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const linksData = [
        { gradeLevel: '초등' },
        { gradeLevel: '중등' },
        { gradeLevel: '고등' },
    ];

    return (
        <div id={`card_${index}`} className="card w-[265px] h-[440px] border border-[#ccc]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <Link to={url} className="absolute h-full w-full z-10">
                <div className="pt-16 px-4 flex flex-col">
                    <span className="font-['SCoreDream'] font-semibold text-[1.65rem] mb-7 tracking-tight">{title}</span>
                    <span className="text-xl leading-normal">{content}</span>
                </div>
            </Link>
            {isHovered && index === 1 && (
                <div id="overlay" className="flex flex-col justify-center align-middle absolute h-full w-full z-20 bg-black/70 text-white px-2">
                    <div className="text-center flex justify-between">
                        {linksData.map((link, index) => (
                            <Link key={index} className="py-2 px-[1.45rem] bg-first-100 rounded-md whitespace-pre text-lg"  to={`/user/cbt/${link.gradeLevel}`}>
                                {link.gradeLevel}
                            </Link>
                        ))}
                    </div>
                    <span className="text-end mt-3 text-sm">* 로그인 하지 않아도 확인 가능합니다.</span>
                </div>
            )}
        </div>
    );
}

export default Card;