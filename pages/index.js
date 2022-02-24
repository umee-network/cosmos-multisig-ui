import React from "react";

import FindMultisigForm from "../components/forms/FindMultisigForm";
import Page from "../components/layout/Page";
import StackableContainer from "../components/layout/StackableContainer";
import { useAppContext } from "../context/AppContext";
import stores from "@keplr-wallet/stores";
window.storez = stores;

const MultiPage = () => {
  const { state } = useAppContext();
  return (
    <Page>
      <StackableContainer base>
        <StackableContainer lessPadding>
          <h1 className="title">
            <span>{state.chain.chainDisplayName}</span> Multisig Manager
          </h1>
        </StackableContainer>
        <FindMultisigForm />
      </StackableContainer>
    </Page>
  );
};

export default MultiPage;
