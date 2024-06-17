import {
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";

/* create social media buttons in footer */
export function FooterSocialMedia(): JSX.Element {
  return (
    <div className="flex justify-between sm:w-[300px] pt-4 text-2xl cursor-pointer">
      <a href="https://twitter.com/your_twitter_handle" target="_blank" rel="noopener noreferrer">
      <FaTwitter color="white"/>
      </a>
      <a href="https://twitter.com/your_twitter_handle" target="_blank" rel="noopener noreferrer">
      <FaLinkedin color="white" /></a>
    </div>
  );
}
