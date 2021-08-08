import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import WebIcon from "@material-ui/icons/Web";
import "./index.css";

const SocialIcons = ({ links }) => {
  return (
    <>
      {links.twitter ? (
        <a
          target="_blank"
          href={links.twitter}
          className="social-media"
          rel="noreferrer"
        >
          <TwitterIcon />
        </a>
      ) : null}
      {links.github ? (
        <a
          target="_blank"
          href={links.github}
          className="social-media"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
      ) : null}
      {links.facebook ? (
        <a
          target="_blank"
          href={links.facebook}
          className="social-media"
          rel="noreferrer"
        >
          <FacebookIcon />
        </a>
      ) : null}
      {links.linkedin ? (
        <a
          target="_blank"
          href={links.linkedin}
          className="social-media"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      ) : null}
      {links.external ? (
        <a
          target="_blank"
          href={links.external}
          className="social-media"
          rel="noreferrer"
        >
          <WebIcon />
        </a>
      ) : null}
      {links.medium ? (
        <a
          target="_blank"
          href={links.medium}
          className="social-media"
          rel="noreferrer"
        >
          <ImportContactsIcon />
        </a>
      ) : null}
    </>
  );
};

export default SocialIcons;
