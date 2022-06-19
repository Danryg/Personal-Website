import React, { useEffect } from "react";
import PageTransitionOut from "../components/PageTransitionOut";

export default function Projects() {
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    if (loading) {
      setLoading(false);
    }
  });

  return (
    <div>
      P
      <PageTransitionOut enter={loading} />
    </div>
  );
}
