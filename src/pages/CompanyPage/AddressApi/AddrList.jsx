import React, { memo } from "react";

const listStyle = {
    paddingLeft: "50px",
    margin: "15px 0 15px 0"
};

const AddrList = memo(({ list, toggle, setPost, setDetail }) => {
    const displayAddr = addr => {
        const post = addr.substring(0, 5) + " ";
        const detail = addr.substring(6, addr.length) + " ";

        setPost(post);
        setDetail(detail);
        localStorage.setItem("post", post);
        localStorage.setItem("detail", detail);
        toggle(false);
    };

    return (
        <>
            {list.map((d, i) => (
                <li style={listStyle} key={i} onClick={() => displayAddr(d)}>
                    {d}
                </li>
            ))}
        </>
    );
});

export default AddrList;