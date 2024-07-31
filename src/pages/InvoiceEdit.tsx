import useGetInvoice from "../customHooks/useGetInvoice";
import { useInvoice } from "../contexts/InvoiceContext";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function InvoiceEdit() {
  const { setInvoices } = useInvoice();
  const invoice = useGetInvoice();
  const navigate = useNavigate();
  const clientInput = useRef<HTMLInputElement>(null);

  const handleEdit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (clientInput.current && clientInput.current.value) {
      const updatedClientValue = clientInput.current.value;

      if (invoice) {
        setInvoices((prevInvoices) =>
          prevInvoices.map((invoiceObj) =>
            invoiceObj.id === invoice.id
              ? { ...invoiceObj, client: updatedClientValue }
              : invoiceObj
          )
        );
        navigate(`/invoices/${invoice.id}`);
      }
    }
  };

  return (
    <form onSubmit={handleEdit}>
      <input
        type="text"
        defaultValue={invoice?.client || ""}
        ref={clientInput}
      />
      {invoice?.items.map((item, index) => (
        <div key={item.description}>
          Item N{index + 1}
          <input type="text" defaultValue={item.description} readOnly />
          <input type="number" defaultValue={item.quantity} readOnly />
          <input type="number" defaultValue={item.price} readOnly />
        </div>
      ))}
      <button type="submit">Edit</button>
    </form>
  );
}
