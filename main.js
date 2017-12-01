const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(index, timestamp, data, previousHash = '') { // 1 - datax - dado - previousHash = ' '
    this.index = index;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
    this.hash = this.calculateHash();
  }

  calculateHash() {
      return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
}


class Blockchain{
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, "01/01/2017", "Genesis block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1]; // PRIMEIRA HASH
    }

    addBlock(newBlock) {
        //       ' '          =       CROPTOGRAFIA COM A TRANSACAO ANTERIOR
        newBlock.previousHash = this.getLatestBlock().hash; // PREVIOUS HASH DO BLOCO CRIADO = HASH DO BLOCO ANTERIOR
        newBlock.hash = newBlock.calculateHash(); // HASH DO NOVO BLOCO = 1 + ` HASH DO BLOCO ANTERIOR` + ' DIA' + DADO
        this.chain.push(newBlock); // ADICIONAR A CHAIN O NOVO BLOCO
        // CHAIN (1, `HASH DO BLOCO ANTERIOR` + "20/07/2017" + {AMOUNT : 4})
        // CHAIN (2, 'HASH DO BLOCO 1' + "20/07/2017" + {AMOUNT : 4})

    }
}

let riallisCoin = new Blockchain();
riallisCoin.addBlock(new Block(1, "20/07/2017", { amount: 4 })); // HASH
riallisCoin.addBlock(new Block(2, "20/07/2017", { amount: 4 })); // HASH
// riallisCoin.addBlock(CRIPTOGRAFIA COM A TRANSACAO ANTERIOR); // HASH


console.log(JSON.stringify(riallisCoin, null , 4))