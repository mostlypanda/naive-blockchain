const crypto=require('crypto');
const transaction=require('./transaction');

class block{
    constructor(index,prevhash,prevproof,transactions){
        this.index=index;
        this.proof=prevproof;
        this.prevhash=prevhash;
        this.transactions=transactions;
        this.timestamp=Date.now();
    }

    hashvalue(){
        const {index,proof,transactions,timestamp}=this;
        const blockString=`${index}-${proof}-${JSON.stringify(transactions)}-${timestamp}`;
        const hashfunction=crypto.createHash('sha256');
        hashfunction.update(blockString);
        return hashfunction.digest('hex')''
    }

    setproof(proof){
        this.proof=proof;
    }

    getproof(){
        return this.proof;
    }

    getindex(){
        return this.index;
    }

    getprevhash(){
        return this.prevhash; 
    }
}

module.exports=block;