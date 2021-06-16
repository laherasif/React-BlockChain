
import Web3 from 'web3'


const UnlockAccount = async () => {
    const { ethereum } = window;
    if (!ethereum) {
        throw new Error("Web3 not found");
    }
    const web3 = new Web3(ethereum);
    await ethereum.enable();

    const accounts = await web3.eth.getAccounts();

    return { accounts , web3 }

}

export default UnlockAccount
