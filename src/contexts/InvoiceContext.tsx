import { createContext, ReactNode, useContext, useState } from "react";
import data from "../data/invoices.json";

interface IInvoiceContext {
  invoices: TInvoices;
  setInvoices: React.Dispatch<React.SetStateAction<TInvoices>>;
}

const InvoiceContext = createContext<IInvoiceContext>({
  invoices: [],
  setInvoices: () => {},
});

export default function InvoiceProvider({ children }: { children: ReactNode }) {
  const [invoices, setInvoices] = useState<TInvoices>(data);
  return (
    <InvoiceContext.Provider value={{ invoices, setInvoices }}>
      {children}
    </InvoiceContext.Provider>
  );
}

export const useInvoice = () => {
  const context = useContext(InvoiceContext);
  if (!context) {
    throw new Error("useInvoice must be within an InvoiceProvider");
  }
  return context;
};
