import { Phone } from 'lucide-react';
import '../styles/topbar.css';

const TopBar = () => {
  return (
    <div className="topbar" id="topbar">
      <div className="topbar__content">
        <Phone size={14} className="topbar__icon" />
        <span className="topbar__text">Cuidado profesional para tus pies</span>
        <span className="topbar__separator" />
        <a href="tel:3336169230" className="topbar__cta">
          Agenda tu cita: 33 3616 9230
        </a>
      </div>
    </div>
  );
};

export default TopBar;
