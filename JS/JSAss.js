/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const nftAccount=[];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_image,_animationUrl,_description) {
    const nft={
        "name":_name,
        "image":_image,
        "animationUrl":_animationUrl,
        "description":_description
    }
    nftAccount.push(nft);
    console.log(`Minted: ${nft.name}`);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<nftAccount.length;i++){
        console.log(`ID :${i+1}\nImage:${nftAccount[i].image}\nAnimationUrl:${nftAccount[i].animationUrl}\nDescription:${nftAccount[i].description}`);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log('\n'+nftAccount.length);
}

// call your functions below this line
mintNFT("monkeyType",'test1.jpg',"https://www.google.com/url?sa=i&url=https%3A%2F%2Fcloudinary.com%2Fblog%2Fevolution_of_img_gif_without_the_gif&psig=AOvVaw3m3Kk432eySRC_6A-g35tZ&ust=1709650193641000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIiJgLnt2oQDFQAAAAAdAAAAABAD","marioBros NFT");
listNFTs();
getTotalSupply();
