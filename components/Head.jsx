import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Check Out My Developer Profile - Would Love to Collaborate!"
      />
      <meta
        name="keywords"
        content="I can help you out with React JS, Next JS, Tailwind CSS or even Framer Motion and Three JS. Your complete Web Solution here!"
      />
      <meta property="og:title" content="Zain Ul Abideen" />
      <meta
        property="og:description"
        content="Front End Developer who always seeks new opportunities and learn new things."
      />
      <meta property="og:image" content="/" />
      <meta property="og:url" content="/" />
      <meta name="twitter:card" content="/" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Zain Ul Abideen',
};
