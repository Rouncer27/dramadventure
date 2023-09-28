import Link from "next/link";
import React from "react";

const Index = () => {
  return (
    <div>
      <h1>Hello Next World!</h1>
      <Link href="/blog">Blog</Link>
    </div>
  );
};

export default Index;
