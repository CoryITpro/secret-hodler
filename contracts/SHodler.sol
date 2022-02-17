// SPDX-License-Identifier: MIT

pragma solidity 0.8.12;

/**
 *         ███████╗   ██╗  ██╗ ██████╗ ██████╗ ██╗             
 *         ██╔════╝   ██║  ██║██╔═══██╗██╔══██╗██║             
 *         ███████╗   ███████║██║   ██║██║  ██║██║             
 *         ╚════██║   ██╔══██║██║   ██║██║  ██║██║             
 * ███████╗███████║██╗██║  ██║╚██████╔╝██████╔╝███████╗███████╗
 * ╚══════╝╚══════╝╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝╚══════╝
 */

import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SHodler is Ownable {
  using Address for address;

  constructor () {}

  function getBalance() public view returns (uint256) {
    return address(this).balance;
  }

  function withdrawBaseCoin(address _address, uint256 _amount) public onlyOwner {
    uint256 totalBalance = address(this).balance;
    require(totalBalance > 0, "HODLER_Withdraw: No balance in contract!");
    require(totalBalance > _amount, "HODLER_Withdraw: Insufficient amount remained!");

    withdraw(_address, _amount);
  }

  function withdraw(address _address, uint256 _amount) internal {
    (bool success, ) = _address.call{value: _amount}("");
    require(success, "HODLER_Withdraw: Transfer failed.");
  }

  receive() external payable {}
}