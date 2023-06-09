import React, { useEffect, useState } from "react";
import { backendUrl, checkBackendConnection } from "../clients/apiClient";

export const BackendConnectionChecker: React.FC = () => {
  // check connection to backend
  // note: initially undefined, meaning we haven't confirmed either way
  const [canConnect, setCanConnect] = useState<boolean>();
  
  useEffect(() => {
    checkBackendConnection().then(setCanConnect);
  }, []);
  
  const checkAgain = () => {
    setCanConnect(undefined);
    checkBackendConnection().then(setCanConnect);
  }
  
  if (!backendUrl) {
    return <p>Backend URL not provided. Is the environment variable <code>VITE_BACKEND_URL</code> set?</p>
  }
  
  if (canConnect === undefined) {
    return <p>Checking connection to backend...</p>
  }
  
  if (canConnect) {
    return <p>Connection to backend established at <code>{backendUrl}</code>!</p>
  }
  
  return <>
    <p>
      <strong>Unable to connect to backend</strong> (tried connecting to <code>{backendUrl}</code>).
      Is it definitely running?
    </p>
    <button onClick={checkAgain}>Check again</button>
  </>
}
