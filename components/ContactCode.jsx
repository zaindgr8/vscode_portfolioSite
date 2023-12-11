import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: "website",
    link: "Zain Ul Abideen",
    href: "https://www.zaniulabideen.vercel.com",
  },
  {
    social: "email",
    link: "zainulabideen@proton.me",
    href: "mailto:zainulabideenbaloch@proton.me",
  },
  {
    social: "github",
    link: "My Code Contributions",
    href: "https://github.com/zaindgr8",
  },
  {
    social: "linkedin",
    link: "My Developer Profile",
    href: "https://www.linkedin.com/in/zain-ul-abideen-baloch/",
  },
  {
    social: "instagram",
    link: "Insta Connect",
    href: "https://www.instagram.com/zainulabideen0007/",
  },
  {
    social: "facebook",
    link: "Facebook Connect",
    href: "https://web.facebook.com/zaindgr8/",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
