const Nav = () => {
    const menuItems = [
        {name: "학업성취도 평가대비 교재 소개", link: "https://brand_achievement.chunjae.co.kr/achievement/index.html"},
        {name: "밀크T아이", link: "https://i.milkt.co.kr/Main/frm_Main.aspx"},
        {name: "밀크T초등", link: "http://www.milkt.co.kr/Main/Main_new"},
        {name: "밀크T중학", link: "http://mid.milkt.co.kr/Main/frm_Main.aspx"},
        {name: "밀크T고등", link: "https://high.milkt.co.kr/Main/frm_Main.aspx"},
    ];
    
    return (
        <nav className="bg-primary-100 flex h-10 text-white">
            <div className="Container py-2 text-[14px]">
                <ul className="font-medium flex whitespace-nowrap">
                    {menuItems.map((menuItem, index) => (
                        <li key={index}>
                            <a className={`${ index >= 1 ? "pl-3" : " "} ${index < menuItems.length - 1 ? 'after:content-["|"] after:pl-3 after:leading-[1.1rem] after:align-top' : ''}`}
                                href={menuItem.link} target="_blank" rel="noreferrer">
                                {menuItem.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Nav;