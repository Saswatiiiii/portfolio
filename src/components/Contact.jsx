import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto py-24 px-6 text-center"
    >
      <h2 className="text-4xl font-bold mb-10">
        Contact Me
      </h2>

      <div className="mb-8 space-y-4 text-lg">
        <p className="flex justify-center items-center gap-3">
          <FaEnvelope className="text-cyan-400" />

          <a href="mailto:saswatic006@gmail.com">
            saswatic006@gmail.com
          </a>
        </p>

        <p className="flex justify-center items-center gap-3">
          <FaPhone className="text-cyan-400" />

          <a href="tel:+917980987522">
            +91 7980987522
          </a>
        </p>
      </div>

      <div className="flex justify-center gap-8 text-4xl">
        <a
          href="https://github.com/Saswatiiiii"
          target="_blank"
          rel="noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/saswatii"
          target="_blank"
          rel="noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.instagram.com/sasswatii___"
          target="_blank"
          rel="noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}