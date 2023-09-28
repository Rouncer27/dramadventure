const TemplatePages = (props) => {
  switch (props?.pageData?.template) {
    case "tmp-about-page.php":
      return <h1>{props.pageData.acf.page_title}</h1>;
    default:
      return <h1>{props.pageData.acf.page_title}</h1>;
  }
};

export const getServerSideProps = async (query) => {
  const response = await fetch(
    `https://dramadventure.swbdatabases2.ca/wp-json/wp/v2/pages`
  );
  const data = await response.json();
  const pageData = data.find((page) => {
    // Check to see if this is the home page. //
    if (query.resolvedUrl === "/" && page.slug === "home") {
      return true;
    }
    // If it is not the home page, then find what page is being requested via page slug. //
    if (`/${page.slug}` === query.resolvedUrl) {
      return true;
    }
  });

  return {
    props: { pageData: pageData ? pageData : null },
  };
};

export default TemplatePages;
