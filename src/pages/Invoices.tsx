import { useInvoice } from "../contexts/InvoiceContext";
import { Link } from "react-router-dom";

export default function Invoices() {
  const { invoices } = useInvoice();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {invoices.map((invoice) => {
        return (
          <div key={invoice.id} style={{ border: "2px solid red" }}>
            <h2>Client: {invoice.client}</h2>
            {invoice.items.map((item, index) => {
              return (
                <div key={item.description}>
                  <h3 style={{ textDecoration: "underline" }}>
                    Item N{index + 1}
                  </h3>
                  <h4>Description: {item.description}</h4>
                  <h4>Quantity: {item.quantity}</h4>
                  <h4>Price: {item.price}</h4>
                </div>
              );
            })}
            <Link to={`/invoices/${invoice.id}`}>See more...</Link>
          </div>
        );
      })}
    </div>
  );
}
