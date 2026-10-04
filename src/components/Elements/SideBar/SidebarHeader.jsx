import React, { useState, useEffect, memo } from "react";
import { RiInformation2Line, RiMenuFoldLine, RiMenuUnfoldLine, RiFileListLine, RiUserSmileLine, 
  RiQuestionLine, RiShieldKeyholeLine, RiMailSendLine, RiSettings4Line} from "react-icons/ri";

const SidebarHeader = memo(({ collapsed, keys }) => {
  return (
    <div className="sidebar-left-header">
      <RiInformation2Line />

      {!collapsed && (
        <h1>{keys?.header || "Info-Center"}</h1>
      )}

      <button className="collapse-btn" />
    </div>
  );
});

export default SidebarHeader;