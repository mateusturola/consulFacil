import InvoicesContext from "../Context/InvoicesContext";
import { useContext } from "react";
import { formatDate } from "../Helpers";


export default function InvoiceList() {
  const { invoices, loading } = useContext(InvoicesContext);
  var options = { year: 'numeric', month: 'numeric', day: 'numeric', timeZone: 'UTC', hour: false };
  return (
    <section className="invoice-list">
        {loading && <p>Loading...</p>}
        { invoices && invoices.map(invoice => (
              <div key={invoice.id}>
                <p>{invoice.id}</p>
                <p>{invoice.patient.name}</p>
                <p>{invoice.amount}</p>
                <p>{formatDate(new Date(invoice.date))}</p>
              </div>
            )
            )

      }

    </section>
  );
}

