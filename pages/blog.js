import Link from "next/link";
import React from "react";

const blog = () => {
  return (
    <div>
      <h1>Hello Blog World! of</h1>
    </div>
  );
};

// export async function getStaticPaths() {
//   return {
//     fallback: false,
//     paths: [
//       {
//         params: {
//           meetupId: "m1",
//         },
//       },
//       {
//         params: {
//           meetupId: "m2",
//         },
//       },
//     ],
//   };
// }

// generates the page everytime on request.
// export async function getServerSideProps(context) {
//   console.log(context.req);
//   return {
//     props: {},
//   };
// }

// generates the page on build time (just like Gatsby).
// export function getStaticProps() {
//   return {
//     props: {
//       meetups: [{ title: "Hello world!" }],
//     },
//     revalidate: 3600,
//   };
// }

export default blog;
