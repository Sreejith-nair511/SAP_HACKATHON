
# 🏥 Hospital Blockchain DApp

A decentralized healthcare platform to securely manage and access patient records using blockchain and IPFS. Designed for hospitals, doctors, and patients to ensure **privacy**, **integrity**, and **transparency** of medical data.

---

## 🚀 Features

- 🔒 **Secure Patient Data** – AES + RSA encryption.
- 🏗️ **Blockchain Storage** – Ethereum/Polygon smart contracts manage metadata and access control.
- 🌐 **Decentralized File Storage** – Encrypted files stored on IPFS / Filecoin.
- 🧑‍⚕️ **Role-based Dashboard** – Separate views for patients, doctors, and admins.
- 📝 **Audit Logging** – All accesses are logged immutably on-chain.
- 📄 **Smart Contract Integration** – Seamless connection with Web3 wallets like MetaMask.
- 📊 **Responsive UI** – Built with Tailwind CSS and Next.js App Router.

---

## 🧱 Tech Stack

| Layer             | Tech                     | Purpose                               |
|------------------|--------------------------|----------------------------------------|
| **Frontend**     | Next.js + TypeScript     | Modern SSR React framework             |
| **Styling**      | Tailwind CSS             | Utility-first CSS                      |
| **Smart Contract** | Solidity + Hardhat     | Ethereum smart contract logic          |
| **Blockchain**   | Ethereum / Polygon       | Decentralized backend                  |
| **Storage**      | IPFS / Crust / Filecoin  | Store encrypted medical files          |
| **Encryption**   | AES-256 + RSA            | Secure patient data before upload      |

---

## 📦 Getting Started

### Prerequisites

- Node.js >= 18.x
- pnpm (`npm install -g pnpm`)
- MetaMask (browser extension)
- IPFS node (optional: Infura or Web3.Storage)

- THE FIGMA  UI DESGIN AND IDEATION

![Screenshot 2025-07-04 153816](https://github.com/user-attachments/assets/1951eec4-bd75-4080-88c2-5906ba3341fa)
![Screenshot 2025-07-04 153833](https://github.com/user-attachments/assets/7ca2b489-01f6-4eef-bfae-a051120e3e48)
![Screenshot 2025-07-04 153849](https://github.com/user-attachments/assets/511ddfd6-74a1-4119-8fbd-7de65f0a229d)
![Screenshot 2025-07-04 153904](https://github.com/user-attachments/assets/1215a59e-ddce-4567-9003-7fc9e0b56207)


### 🛠️ Installation

```bash
git clone https://github.com/yourusername/hospital-blockchain-dapp.git
cd hospital-blockchain-dapp
pnpm install
🧪 Development

pnpm dev
Navigate to http://localhost:3000 to see the app running.

🔗 Smart Contract Deployment (optional)

cd contracts
pnpm install
npx hardhat compile
npx hardhat deploy --network <network_name>
Configure .env for private key, Infura/Alchemy RPC, etc.

🖼️ Folder Structure

/app                → Next.js app router pages
<br>
/components         → Reusable React UI components
<br>
/contracts          → Solidity smart contracts
<br>
/public             → Static assets
<br>
/styles             → Global styles (Tailwind)
📜 License
MIT © 2025 KDEBUGGER

Demo prototype
https://hospital-blockchain-dashboard.vercel.app/dashboard

🤝 Acknowledgements

IPFS / Filecoin Community

Ethereum Foundation

Tailwind UI

ShadCN/UI Components



