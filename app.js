const {create}= require("ipfs-http-client"); //imports the create function from the ipfs-http-client

async function main() {
    const ipfs= await create();
}