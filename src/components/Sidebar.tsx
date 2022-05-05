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
    <aside
      id="sidebar"
      className={cx(
        "d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
        // There is some issue with the linaria css transformer
        // css`
        //   height: 100%;
        //   width: 300px;
        // `
      )}
      style={{
        width: 250,
        // transform: "translateX(-180px)"
      }}
    >
      <a href="/" className="ms-auto pe-3">
        <span className="visually-hidden">Boostrap Sidebar</span>
        <CustomIcon
          icon="bootstrap"
          iconType="bootstrapIcons"
          aria-hidden
          width="30"
          height="24"
          className="filter-invert"
        />
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {SIDEBAR_LINKS.map(({ name, icon, path }) => (
          <li key={name} className="nav-item">
            {/* update active based on path.url */}
            <a
              href={path}
              className={cx(
                "nav-link d-flex justify-content-between align-items-center",
                name === "Home" ? "active" : "text-white"
              )}
              aria-current="page"
            >
              {name}
              <CustomIcon
                icon={icon}
                iconType="bootstrapIcons"
                aria-hidden
                width="20"
                height="20"
                className="filter-invert"
              />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
