import {
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";

/* create social media buttons in footer */
export function FooterSocialMedia(): JSX.Element {
  return (
    <div className="flex sm:w-[300px] pt-4 text-2xl cursor-pointer justify-center">
      <a href="https://twitter.com/your_twitter_handle" target="_blank" className="px-4" rel="noopener noreferrer">
      <FaTwitter color="white" size= "60"/>
      </a>
      <a href="https://twitter.com/your_twitter_handle" target="_blank" rel="noopener noreferrer">
      <FaLinkedin color="white" size = "60"/></a>
    </div>
  );
}
