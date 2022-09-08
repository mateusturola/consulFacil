export interface IPatient {
  name: string;
}

export interface IInvoice {
  id: number;
  patient: IPatient;
  amount: number;
  date: string;
  paid: boolean;
}

export type InvoiceContextType = {
  invoices: IInvoice[],
  setInvoices: (invoices: IInvoice[]) => void,
  loading: boolean,
  setLoading: (loading: boolean) => void,
  errorMessage: string,
  setErrorMessage: (errorMessage: string) => void,
  disableClearFilter: boolean,
  setDisableClearFilter: (disableClearFilter: boolean) => void,
  sumInvoices: number,
  setSumInvoices: (sumInvoices: number) => void,

};
