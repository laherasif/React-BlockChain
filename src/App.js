// import logo from './logo.svg';
// import './App.css';
import Web3 from 'web3'
import React,{ useEffect , useState } from 'react'
function App() {
  const [account, setaccount] = useState("")
  const [Balance, setBalance] = useState("")
  const [Trans, setTrans] = useState(0)
useEffect(() => {
 
   const loadBlockchainData = async ()  =>  {

    const { ethereum } = window;
    if (!ethereum) {
      throw new Error("Web3 not found");
    }
    const web3 = new Web3(ethereum);
    await ethereum.enable();
  
    const accounts = await web3.eth.getAccounts();
    const Balnce = await web3.eth.getBalance(account , (error , result) => {
    if(error){
      console.log("error", error);
    }
    else {
      console.log("result " , result );
    }
    })

    const NumCountReq = await web3.eth.getTransactionCount(account)
    const netId = await web3.eth.net.getId();

    for (let i = 1; i <= 10; i++) {
      const txIndex = NumCountReq - i;
      if (txIndex < 0) {
        break;
      }
    const tx = await web3.eth.getTransaction(txIndex);
    const isConfirmed = await web3.eth.isConfirmed(txIndex, account);
    console.log("txt first" , tx);
    console.log("txt" , isConfirmed);
    
    }
        console.log("data",accounts);
        console.log("data",Balnce);
        console.log("data",NumCountReq);
        console.log("data",netId);


        
    setaccount( accounts[0] )
    setBalance( Balnce )
    setTrans(NumCountReq)
  }
  loadBlockchainData()
  
}, [])
  return (
    <div className="App">
      Account : { account}
      <br/>
      Balance : { Balance }
       
      <br/>
      Transection : { Trans }
    </div>
  );
}

export default App;
