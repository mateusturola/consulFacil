import * as React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <button type="button">
          <Link to="/">Home</Link>
        </button>
        <button type="button">
          <Link to="/invoices">Invoices</Link>
        </button>
      </ul>
    </nav>
  );
}

