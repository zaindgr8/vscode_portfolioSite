const AboutPage = () => {
  return (
    <>
      <h3>
        <p className="text-blue-500">Greentings & my Education!</p>
        Greetings and thank you for reviewing my profile and expressing interest
        in my services. I hold a 4-year university experience in Software
        Engineering, complemented by one year of active participation in the
        President of Pakistan's special Web 3.0 Program at piaic.com. Currently,
        I am continuing my enrollment in the program, further enhancing my
        skills.
        <br />
        <p className="text-blue-500">Market Experience</p>
        With over three years of experience in the market, I specialize in React
        JS and Next JS frameworks, along with proficiency in JavaScript. I am
        well-versed in Tailwind CSS for styling and have expertise in animated
        libraries such as Framer-Motion and the 3D library Three JS.
        Additionally,I possess a moderate level of experience in backend
        development using Node JS, Express JS, and Mongoose Database.
        <br />
        <p className="text-blue-500">My Work Portfolio</p>
        My professional journey includes dedicated contributions to both local
        and international companies. Notably, in Dubai, I've served as an IT
        Consultant for Hedone Access (Private Concierge) and as an IT Developer
        for Wissam Serdoun (Perfume E-Commerce) since March 23 to the present.
        <br /> For online work in the USA, I've contributed to Seniorisers, a
        platform connecting old homes and real estate agents as a Web Developer.{" "}
        <br /> In the Netherlands, I've been involved in the startup
        Cleaninginaclik.nl, a cleaning company based in Amsterdam.
        <br /> In Pakistan, my job portfolio includes roles such as Web
        Developer at We International Digital Marketing (2019-2021), Digital Solutions at Fifteen International Developers (2021-2022), Web Developer
        at Geek Genix (2022-2023), and my current role as a Web Developer at
        Panaverse (2023-present). <br />
        <p className="text-blue-500">Why Me?</p>I have a strong desire for
        continuous learning and am eager to bring value to your company. Please
        feel free to reach out, and I look forward to the opportunity to
        contribute to your team.
      </h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
