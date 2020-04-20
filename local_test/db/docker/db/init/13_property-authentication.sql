DROP TABLE IF EXISTS property_authentication;

CREATE TABLE property_authentication(
    property TEXT NOT NULL,
    metrics TEXT NOT NULL,
    block_number INT NOT NULL,
    market TEXT NOT NULL,
    authentication_id TEXT NOT NULL,
    PRIMARY KEY(property, metrics)
);


CREATE INDEX ON property_authentication(
	property
);
