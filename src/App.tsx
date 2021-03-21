import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Router, RouteComponentProps, Link } from "@reach/router";

import "normalize.css";
import "sakura.css";
import "./App.css";

function Counter(props: RouteComponentProps) {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My React SEO - Counter</title>
        <link
          rel="canonical"
          href="https://react-seo-demo-dunghd.vercel.app/"
        />
        <meta
          name="description"
          content="Simple React SEO Application for counter"
        />
      </Helmet>
      <h3>Simple React SEO Demo - Counter page</h3>
      <header className="App-header">
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>Simple counter</p>
        <Link to="/">Back to homepage</Link>
      </header>
    </div>
  );
}

function Home(props: RouteComponentProps) {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My React SEO - Homepage</title>
        <link
          rel="canonical"
          href="https://react-seo-demo-dunghd.vercel.app/"
        />
        <meta name="description" content="Simple React SEO Application" />
      </Helmet>
      <h3>Simple React SEO Demo</h3>
      <header className="App-header">
        <Link to="/counter">Go to counter</Link>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Home path="/" />
      <Counter path="counter" />
    </Router>
  );
}

export default App;
