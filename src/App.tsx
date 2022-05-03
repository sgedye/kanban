import { Footer, Header, Sidebar } from "./components";

export const App = (): JSX.Element => {
  return (
    <div className="layout-wrapper">
      <Header />
      <main>
        <Sidebar />
        {/* Main Content */}
      </main>
      <Footer />
    </div>
  );
};
