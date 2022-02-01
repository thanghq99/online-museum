import HighlightLink from "../customComponents/HighlightLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

const SectionHeader = ({ sectionTitle, linkTitle, linkUrl }) => {
  return (
    <div className="flex justify-between py-8 text-white">
      <div className="text-5xl">{sectionTitle}</div>
      {linkTitle && linkUrl && (
        <div className="flex justify-between items-center">
          <HighlightLink title={linkTitle} url={linkUrl}/>
          <FontAwesomeIcon className="ml-2" icon={faChevronCircleRight} />
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
