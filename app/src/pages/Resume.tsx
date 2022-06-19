import React, { useEffect } from "react";

export default function Resume() {
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    if (loading) {
      setLoading(false);
    }
  });
  return <div>R</div>;
}
