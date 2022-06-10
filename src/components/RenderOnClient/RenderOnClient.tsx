import { ReactElement, useEffect, useState } from "react";

interface RenderOnClientProps {
  children?: ReactElement;
}

export const RenderOnClient: React.FC<RenderOnClientProps> = ({
  children = null,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return children;
};
