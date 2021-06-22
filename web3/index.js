
   const HDWalletProvider=require('@truffle/hdwallet-provider')
   require('dotenv').config()
const run = async () => {
    // Get web3
 
  
    const Web3 = require('web3')
   //  const provider = new Web3.providers.HttpProvider(
   //    'https://rinkeby.infura.io/v3/1ec6558c6dba4a9db1ab5f5b647d9a60'
   //  );

    const provider = new HDWalletProvider(process.env.MNENOMIC, "https://rinkeby.infura.io/v3/" + process.env.INFURA_API_KEY);

   const web3 = new Web3(provider);
   const abi=require('./abi.json');
   const address='0xd086b2eb0b1973E7068a25a587F7D2bF4eb96446';
   // Get address
   // const accounts = await web3.eth.getAccounts()
  //  console.dir(accounts)
   const contract =  new web3.eth.Contract(
	abi.abi,address);

try{
   const fund= await contract.methods.setFundSource('0x0Db723d5863A9B33AD83aA349B27F8136b6d5360').send({
       from: '0x0Db723d5863A9B33AD83aA349B27F8136b6d5360'
     
   })
  console.log('try')
}catch (error) {
    console.error(error);
}
console.log('try2')
   const owned=await contract.methods.poolLength().call()
   console.log(owned);
    // get balance
    // const balance = await web3.eth.getBalance(accounts[0])
    // console.log(`balance : ${balance}`)

//     var our_contract_address = "0xd0A1E359811322d97991E03f863a0C30C2cF029C";
//  const balance =  await web3.eth.getBalance(our_contract_address)
//         console.log(`Balance of ${our_contract_address}: ${balance}`);
//         var etherscan_url = `https://kovan.etherscan.io/api?module=contract&action=getabi&address=${our_contract_address}`
   }

   run();