import useAxios from "Hooks/useAxios";
import InvoicesContext from "Context/InvoicesContext";
import { useContext, useEffect } from "react";
import InvoiceList from "Components/InvoiceList";
import { Title } from "Components/generic/Title";
import { styled } from "../../stitches.config";
import { SummaryInvoices } from "Components/SummaryInvoices";
import InvoicesNav from "Components/InvoiceNav";
import Loading from "Components/generic/Loading";
import UserContext from "Context/UserContext";
import { Link } from "react-router-dom";
import IsLoginMessage from "Page/IsLoginMessage";

const Main = styled("main", {
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  margin: "0 auto",
  maxWidth: "1080px",
});

const Col = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  width: "100%",
  margin: "0 auto",

  "@bp2": {
    width: "50%",
  },
});

const Row = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  width: "100%",
  margin: "0 auto",

  '@bp2': {
    flexDirection: "row",
  },
});

export default function Invoices() {
  const { setInvoices, setLoading, invoices } = useContext(InvoicesContext);
  const { token, isLogin } = useContext(UserContext);

  const { response, loading, sendData, error } = useAxios({
    method: "get",
    url: "/invoice",
    headers: {
      accept: "*/*",
      Authorization: token,
    },
  });

  useEffect(() => {
    sendData();
  }, [])

  useEffect(() => {
    setInvoices(response?.data);
    setLoading(loading);
  }, [loading]);

  console.log(invoices);

  if (!isLogin) {
    return <IsLoginMessage />;
  } else {
    return (
      <>
        <Main>
        <Title>Faturas Pendente</Title>
          {!isLogin && loading && invoices !== undefined ? (
            <Loading />
          ) : (
            <Row>
              <Col>
                <InvoicesNav />
                <SummaryInvoices />
              </Col>
              <Col>
                <InvoiceList />
              </Col>
            </Row>
          )}
        </Main>
      </>
    );
  }
}

