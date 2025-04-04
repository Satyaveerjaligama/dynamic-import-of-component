"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

const HiddenComponent = dynamic(() => import("../components/HiddenComponent"), {
  ssr: false,
});

const TestComponent = dynamic(() => import("../components/TestComponent"), {
  ssr: false,
});

export default function WithDynamicImport() {
  const [displayHiddenComponent, setDisplayHiddenComponent] = useState(false);

  return (
    <div>
      <h3>With Dynamic Import</h3>
      <p>
        Components are imported using next/dynamic, allowing them to be loaded
        only when needed
      </p>
      <ul>
        <li>
          <b>Button:</b> Statically imported and rendered immediately.
        </li>
        <li>
          <b>Test Component:</b> Dynamically loaded after the initial page
          render - this can be observed with a separate network request.
        </li>
        <li>
          <b>Hidden Component:</b> Not just hidden visually - it&apos;s not
          loaded at all until the button is clicked. Only then is it fetched and
          rendered.
        </li>
      </ul>
      <p>
        This approach reduces the initial bundle size and improves performance.
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
