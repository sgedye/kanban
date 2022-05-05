import { Helmet } from "react-helmet";
import { Footer, Header, Sidebar } from "./components";
import { TaskColumn } from "./components/TaskColumn";

const boards = ["Backlog", "In progress", "Done"];

export const App = (): JSX.Element => {
  return (
    <div className="layout-wrapper">
      <Helmet titleTemplate="%s | Kanban Board">
        <meta property="og:title" content="Kanban Board" />
        <meta
          name="description"
          content="This Kanban Board was created in 2022, by me."
        />
        <meta
          property="og:description"
          content="This Kanban Board was created in 2022, by me."
        />
        <meta property="og:site_name" content="Kanban Board" />
        <meta property="og:type" content="website" />
        {/*
        <meta property="og:image" content={Routes.BaseURL + OgImgUrl} />
        <link rel="canonical" href={Routes.BaseURL} />
        <meta property="og:url" content={Routes.BaseURL} />
        */}
        <meta property="og:locale" content="en_AU" />
      </Helmet>
      <Header />
      <main className="d-flex">
        <Sidebar />
        {/* Main Content */}
        <div id="main" className="container" style={{ minWidth: 800 }}>
          <div className="row">
            {boards.map((n, idx) => (
              <div key={idx} className="col-lg d-flex flex-column">
                <TaskColumn columnTitle={n} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
