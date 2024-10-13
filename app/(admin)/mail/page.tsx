import React from "react";
import { accounts, mails } from "./data";
import { cookies } from "next/headers";
import { Mail } from "./components/mail";

export default function page() {
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");

  const defaultLayout = layout && layout.value ? JSON.parse(layout.value) : undefined;
  let defaultCollapsed;

  try {
    defaultCollapsed = collapsed && collapsed.value ? JSON.parse(collapsed.value) : undefined;
  } catch (error) {
    console.error("Error parsing collapsed value:", error);
    defaultCollapsed = undefined; // Fallback value if JSON is invalid or undefined
  }
  return (
    <div>
      <div className="hidden flex-col md:flex">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </div>
  );
}
