import React, { PropsWithChildren } from "react";

interface FooterHyperlinkProps {
  path: string;
}

export const PageFooterHyperlink: React.FC<
  PropsWithChildren<FooterHyperlinkProps>
> = ({ children, path }) => {
  return (
    <a
      className="page-footer__hyperlink"
      href={path}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
