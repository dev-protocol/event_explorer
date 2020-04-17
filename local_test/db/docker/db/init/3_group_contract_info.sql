DROP TABLE IF EXISTS group_contract_info;

CREATE TABLE group_contract_info(
    name TEXT NOT NULL,
    abi TEXT NOT NULL,
    PRIMARY KEY(name)
);

INSERT INTO group_contract_info VALUES ('IMarket', '[{"constant":false,"inputs":[{"internalType":"address","name":"_prop","type":"address"},{"internalType":"string","name":"_args1","type":"string"},{"internalType":"string","name":"_args2","type":"string"},{"internalType":"string","name":"_args3","type":"string"},{"internalType":"string","name":"_args4","type":"string"},{"internalType":"string","name":"_args5","type":"string"}],"name":"authenticate","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_property","type":"address"},{"internalType":"bytes32","name":"_idHash","type":"bytes32"}],"name":"authenticatedCallback","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_metrics","type":"address"}],"name":"deauthenticate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_property","type":"address"},{"internalType":"bool","name":"_agree","type":"bool"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"schema","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"behavior","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}]');
INSERT INTO group_contract_info VALUES ('IMarketBehavior', '[{"constant":true,"inputs":[],"name":"schema","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_prop","type":"address"},{"internalType":"string","name":"_args1","type":"string"},{"internalType":"string","name":"_args2","type":"string"},{"internalType":"string","name":"_args3","type":"string"},{"internalType":"string","name":"_args4","type":"string"},{"internalType":"string","name":"_args5","type":"string"},{"internalType":"address","name":"market","type":"address"}],"name":"authenticate","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_metrics","type":"address"},{"internalType":"uint256","name":"_start","type":"uint256"},{"internalType":"uint256","name":"_end","type":"uint256"}],"name":"calculate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_metrics","type":"address"}],"name":"getId","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]');
INSERT INTO group_contract_info VALUES ('Metrics', '[{"inputs":[{"internalType":"address","name":"_market","type":"address"},{"internalType":"address","name":"_property","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[],"name":"market","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"property","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}]');
