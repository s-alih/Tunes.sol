import React from "react";
import {WalletConnectButton} from "@solana/wallet-adapter-react-ui"

const styles = {
    loginPage:"b-screen h-screen flex justify-center items-center bg-black",
    text:"text-white text-4xl mb-10"
}

function login() {
  return <div className={styles.loginPage}>
    <p className={styles.text}>Login to access this page</p>
    <WalletConnectButton />
  </div>;
}

export default login;
