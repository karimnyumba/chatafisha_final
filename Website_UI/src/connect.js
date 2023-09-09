import Web3 from 'web3'
import abi from './contracts/abi.json'
import address from './contracts/address'
const connectWallet = async (setWeb3, setAccounts, setContractInstance, setConnectError) => {
  if (window.ethereum) {
    const web3Instance = new Web3(window.ethereum)
    try {
      await window.ethereum.enable()
      setWeb3(web3Instance)
      console.log('successful connected to your wallet')
      try {
        const accounts = await web3Instance.eth.getAccounts()
        setAccounts(accounts)
      } catch (error) {
       setConnectError('Error! Please connect to MetaMask.')
        console.error('Error fetching accounts:', error)
      }
      try {
        const contractInstance = new web3Instance.eth.Contract(abi, address)
        setContractInstance(contractInstance)
      } catch (error) {
        console.log('Failed to interact with smart contract', error)
      }
    } catch (error) {
      console.error('Error connecting to wallet:', error)
    }
  } else {
    console.error('Web3 provider not available.')
  }
}

export default connectWallet
