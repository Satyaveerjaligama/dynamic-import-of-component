"use client";
import { useState } from "react";
import HiddenComponent from "../components/HiddenComponent";
import TestComponent from "../components/TestComponent";

export default function WithoutDynamicImport() {
  const [displayHiddenComponent, setDisplayHiddenComponent] = useState(false);

  return (
    <div>
      <h3>Without Dynamic Import</h3>
      <p>
        All components (Button, Test Component, and Hidden Component) are
        imported statically, meaning they are bundled and loaded upfront when
        the page is accessed.
      </p>
      <ul>
        <li>
          <b>Button, Test Component:</b> Rendered immediately as expected.
        </li>
        <li>
          <b>Hidden Component:</b> Not visible at first, but already loaded with
          the page - just hidden in the UI.
        </li>
      </ul>
      <p>
        This adds all components to the initial bundle, even those the user may
        never interact with
      </p>
      <hr></hr>
      <button
        onClick={() => setDisplayHiddenComponent(!displayHiddenComponent)}
      >
        Show Hidden Component
      </button>
      <TestComponent />
      {displayHiddenComponent && <HiddenComponent />}
    </div>
  );
}
