import { useState } from "react";
import { MdArrowOutward, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { useConfig } from "../context/LanguageProvider";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const config = useConfig();
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const isExternalLink = Boolean(props.link && !props.link.startsWith("/"));

  const media = props.image ? (
    <img src={props.image} alt={props.alt} loading="lazy" />
  ) : null;

  const clickHint = props.link && props.image ? (
    <div className="work-click-hint">
      {config.ui.clickHint} <MdKeyboardArrowDown />
    </div>
  ) : null;

  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  return (
    <div className="work-image">
      {props.link ? (
        isExternalLink ? (
          <a
            className="work-image-in"
            href={props.link}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsVideo(false)}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor={"disable"}
          >
            <div className="work-link">
              <MdArrowOutward />
            </div>
            {clickHint}
            {media}
            {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
          </a>
        ) : (
          <Link
            className="work-image-in"
            to={props.link}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsVideo(false)}
            data-cursor={"disable"}
          >
            <div className="work-link">
              <MdArrowOutward />
            </div>
            {clickHint}
            {media}
            {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
          </Link>
        )
      ) : (
        <div
          className="work-image-in"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setIsVideo(false)}
          data-cursor={"disable"}
        >
          {media}
          {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
        </div>
      )}
    </div>
  );
};

export default WorkImage;
