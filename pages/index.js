import { BrowserProvider, Contract } from "ethers";

const Index = () => {
  const handleMintClick = async () => {
    try {
      console.log("mint!");
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      console.log("signer: ", signer);
      const contract = new Contract(
        "0xAc622Fa36174E7d638022deD88fa808aD53D7BFf",
        ["function mintFool() public payable"],
        signer
      );
      const tx = await contract.mintFool();
      console.log("tx: ", tx);
      const response = await tx.wait();
      console.log("response: ", response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={handleMintClick} style={{ marginTop: "200px" }}>
        Mint
      </button>
    </div>
  );
};

export default Index;
