// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract InfinityNFT is ERC721, Ownable {
    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint256 public maxPerWallet;
    bool public isPublicMintEnabled;
    string internal baseTokenUri;

    address payable withdrawWallet;
    mapping(address => uint256) public walletMints;

    constructor(
        address payable _owner
    ) ERC721("InfinityNFT", "INW") Ownable(_owner) {
        mintPrice = 0.08 ether;
        totalSupply = 0;
        maxSupply = 1000;
        maxPerWallet = 10;
        withdrawWallet = _owner;
    }

    function setBaseTokenUri(string calldata _baseTokenUri) external onlyOwner {
        baseTokenUri = _baseTokenUri;
    }

    function setPrice(uint256 _mintPrice) external onlyOwner {
        mintPrice = _mintPrice;
    }

    function setIsPublicMintEnabled(bool _isMintEnabled) external onlyOwner {
        isPublicMintEnabled = _isMintEnabled;
    }

    function withdraw() external payable onlyOwner {
        (bool success, ) = withdrawWallet.call{value: msg.value}("");
        require(success, "Withdrawal failed");
    }

    function mint(uint256 _quantity) public payable {
        require(isPublicMintEnabled, "Minting not enabled");
        require(
            _quantity * mintPrice <= msg.value,
            "Insufficient funds. You need more MATIC!."
        );
        require(totalSupply + _quantity <= maxSupply, "Sold out");
        require(
            walletMints[msg.sender] + _quantity <= maxPerWallet,
            "Exceeded max nfts per wallet. You can only mint 10nfts per wallet"
        );

        walletMints[msg.sender] += _quantity;
        totalSupply += _quantity;
        for (uint256 i = 0; i < _quantity; i++) {
            uint256 newTokenId = totalSupply + 1;

            _safeMint(msg.sender, newTokenId);
        }
    }

    function tokenURI(
        uint256 _tokenId
    ) public view override returns (string memory) {
        require(
            _ownerOf(_tokenId) != address(0),
            "ERC721Metadata: URI query for nonexistent token"
        );
        string memory currentBaseTokenURI = _baseURI();
        return
            bytes(currentBaseTokenURI).length > 0
                ? string(
                    abi.encodePacked(
                        currentBaseTokenURI,
                        Strings.toString(_tokenId),
                        ".json"
                    )
                )
                : "";
    }

    function _baseURI() internal view override returns (string memory) {
        return baseTokenUri;
    }
}
