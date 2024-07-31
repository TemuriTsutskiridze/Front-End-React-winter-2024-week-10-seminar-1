import { Link } from "react-router-dom";
import useGetInvoice from "../customHooks/useGetInvoice";
import { useInvoice } from "../contexts/InvoiceContext";
import { useNavigate } from "react-router-dom";

export default function Invoice() {
  const { setInvoices } = useInvoice();
  const invoice = useGetInvoice();

  const navigate = useNavigate();

  const handleDelete = () => {
    setInvoices((prevInvoices) =>
      prevInvoices.filter((invoiceObj) => invoiceObj.id !== invoice?.id)
    );
    navigate("/invoices");
  };

  return (
    <div>
      <h2>Client: {invoice?.client}</h2>
      {invoice?.items.map((item, index) => {
        return (
          <div key={item.description}>
            <h3 style={{ textDecoration: "underline" }}>Item N{index + 1}</h3>
            <h4>Description: {item.description}</h4>
            <h4>Quantity: {item.quantity}</h4>
            <h4>Price: {item.price}</h4>
          </div>
        );
      })}
      <Link to={`/invoices/${invoice?.id}/edit`}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
