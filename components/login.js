import React from "react";
import {useWallet} from "@solana/wallet-adapter-react"
import {WalletMultiButton} from "@solana/wallet-adapter-react-ui"

const styles = {
    loginPage:"w-screen h-screen flex justify-center items-center flex-col bg-black",
    text:"text-white text-20xl mb-10"
}

function login() {

  const wallet = useWallet()

  if(wallet.connected) return <Payment>
      
  </Payment>
  return (<div className={styles.loginPage}>
    <p className={styles.text}>Tunes.sol</p>

    <WalletMultiButton />
 
   
  </div>);
}

export default login;
