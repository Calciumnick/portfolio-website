import { useConfig } from "../context/LanguageProvider";
import "./styles/CallToAction.css";

const CallToAction = () => {
  const config = useConfig();
  return (
    <div className="cta-section">
      <div className="cta-buttons">
        <a
          href={config.contact.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn cta-btn-hire"
          data-cursor="disable"
        >
          {config.ui.hire} →
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
