export const LogoutButton = () => {
  return (
    // Route handler, not a page: needs a full navigation so Auth0 can redirect.
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a className="button__logout" href="/api/auth/logout">
      Log Out
    </a>
  );
};
