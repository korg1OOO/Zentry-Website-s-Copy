import { FaDiscord, FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/korg1OOO", icon: <FaGithub /> },
  { href: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqWhHJRJZWVpZQCKvxvNDbfGDGtdmJdKxbkLbbnbZCFxnWhZzzgTBFJnvzGlWQfNwXKtWg", icon: <FaEnvelope /> },
  { href: "https://www.linkedin.com/in/enzomichel/", icon: <FaLinkedin /> },
  { href: "https://discord.com/users/529868970493214730", icon: <FaDiscord /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Nova 2024. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
