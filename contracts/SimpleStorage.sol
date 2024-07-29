pragma solidity 0.8.19; // SPDX-License-Identifier: UNLICENSED

contract SimpleStorage {
    uint256 favoriteNumber;

    struct People {
        string name;
        uint256 favoriteNumber;
    }

    People[] public people;

    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }

    function addPerson(string calldata _name, uint256 _favoriteNumber) public {
        people.push(People(_name, _favoriteNumber));
    }

    function retrieve() public view returns(uint256) {
       return favoriteNumber;
    }

    
}