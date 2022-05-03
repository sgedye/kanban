import { css, cx } from "@linaria/core";

import { CustomIcon } from ".";

const SIDEBAR_LINKS = [
  { name: "Home", icon: "home", path: "/" },
  { name: "Dashboard", icon: "speedometer2", path: "/" },
  { name: "Orders", icon: "table", path: "/" },
  { name: "Products", icon: "grid", path: "/" },
  { name: "Customers", icon: "people-circle", path: "/" },
];

export const Sidebar = (): JSX.Element => {
  return (
    <div
      id="sidebar"
      className={cx(
        "d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
        // There is some issue with the linaria css transformer
        // css`
        //   height: 100%;
        //   width: 300px;
        // `
      )}
      style={{ height: "100%", width: 300 }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi me-2" width="40" height="32">
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {SIDEBAR_LINKS.map(({ name, icon, path }) => (
          <li key={name} className="nav-item">
            {/* update active based on path.url */}
            <a
              href={path}
              className={cx(
                "nav-link",
                name === "Home" ? "active" : "text-white"
              )}
              aria-current="page"
            >
              <CustomIcon
                icon={icon}
                aria-hidden
                width="16"
                height="16"
                className="filter-invert"
              />{" "}
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
