import React from "react";
import Link from "next/link";

const Layout = (props) => {
  return (
    <div>
      <ul>
        <Link href="/">Home</Link>
        <Link href="/about">about</Link>
        <Link href="/blog">Blog</Link>
      </ul>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
