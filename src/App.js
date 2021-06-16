// import logo from './logo.svg';
// import './App.css';
import React,{ useEffect , useState } from 'react'
import UnlockAccount from './api/web3'
function App() {
  const [account, setaccount] = useState("")
  const [Balance, setBalance] = useState("")
  const [Trans, setTrans] = useState(0)
  const [Work, setWork] = useState(0)
useEffect(() => {
 
   const loadBlockchainData = async ()  =>  {
    let { web3 , accounts } = await UnlockAccount() 
    console.log("aaccc", accounts);
    
    // const Balnce = await web3.eth.getBalance(account , (error , result) => {
    // if(error){
    //   console.log("error", error);
    // }
    // else {
    //   console.log("result " , result );
    // }
    // })

    // const NumCountReq = await web3.eth.getTransactionCount(account)
    const netId = await web3.eth.net.getId();

    // for (let i = 1; i <= 10; i++) {
    //   const txIndex = NumCountReq - i;
    //   if (txIndex < 0) {
    //     break;
    //   }
    // const tx = await web3.eth.getTransaction(txIndex);
    // const isConfirmed = await web3.eth.isConfirmed(txIndex, account);
    // console.log("txt first" , tx);
    // console.log("txt" , isConfirmed);
    
    // }
        // console.log("data",NumCountReq);
        console.log("data",netId);


        
    // setBalance( Balnce )
    setaccount( accounts )
    // setTrans(NumCountReq)
    setWork(netId)
  }
  loadBlockchainData()
  
}, [])


function getNetwork(netId) {
  switch (netId) {
    case 1:
      return "Mainnet";
    case 2:
      return "Morden test network";
    case 3:
      return "Ropsten network";
    case 4:
      return "Rinkeby test network";
    case 42:
      return "Kovan test network";
    default:
      return "Unkown network";
  }
}
  return (
    <div className="App">
      NetWork : { getNetwork(Work)}
      <br/>
      Account : { account}
      <br/>
      {/* Balance : { Balance } */}
       
      <br/>
      {/* Transection : { Trans } */}
    </div>
  );
}

export default App;
