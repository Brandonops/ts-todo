import React from "react";
import { BsChatSquareDots } from 'react-icons/bs';
interface ToggleTooltipButtonProps {
  setToggleTooltip: any;
  toggleTooltip: boolean;
}

export const ToggleTooltipButton: React.FC<ToggleTooltipButtonProps> = ({ setToggleTooltip, toggleTooltip }) => {
  return (
    <div className="tooltip-button-container" onClick={() => setToggleTooltip(!toggleTooltip)}>
      <BsChatSquareDots className="toggle-tooltip-icon"></BsChatSquareDots>
      <div className="btn-text">Turn <span>{toggleTooltip ? 'ON ' : 'OFF'}</span> Tooltips</div>
    </div>
  );
};
