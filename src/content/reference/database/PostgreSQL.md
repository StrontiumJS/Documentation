---
title: PostgreSQL
module: Database
---

PostgreSQL is the default database driver that Strontium uses and is the best supported way of using the framework.

Out of the box Strontium includes full support for PostgreSQL connection pooling, SSL and some additional advanced functionality.

## PGStore

**Extends** [Runtime](/reference/framework/runtime)
**Implements** [SQLStore](/reference/database/core#SQLStore)

The PGStore object is a Strontium `Process` that implements SQLStore and provides access to Postgres.

As PGStore is itself a `Process` it's important to register the object in the Runtime. 

### constructor(poolParameters)

The first argument to PGStore is the connection options which are passed directly to [node-postgres](https://node-postgres.com/api/pool).
Some common and useful configuration settings are illustrated below.

N.B Creating a `PGStore` instance does not automatically open a connection. 

No connections will be opened until `.startup` is called.
Attempting to use a store that has not had startup called will result in an error. 

```typescript
new PGStore({
     host: "127.0.0.1", // The hostname of the Postgres Server
     port: 1234, // The port that the Postgres Server is available on 
     user: "strontium", // The username to authenticate to Postgres with
     password: "SuperSecret", // The password to authenticate to Postgres with
     database: "strontium", // The database to connect to in Postgres
     min: 5, // The minimum number of open connections to Postgres that should be in the Pool
     max: 30, // The maximum number of open connection to Postgres that should be in the Pool 
 })
 ```
 
### query<R>(queryString, parameters): Promise<Array<R>>

The `query` method is used to send queries to the SQL server.

The first argument is the text to be sent to PostgreSQL. This text will not be escaped and care should be taken to avoid
passing values which could be used for SQL injection into this parameter.

The second argument is the parameters to pass with the query into PostgreSQL. More information about using parametrized queries
can be found in the [PostgresQL documentation](https://www.postgresql.org/docs/9.5/xfunc-sql.html#XFUNC-SQL-FUNCTION-ARGUMENTS).

The generic parameter allows the developer to pass in the expected format of the response from PostgreSQL so that the response of the function has this type.

The response is an array of objects from the datastore that fulfill the query.

### createTransaction(isolationLevel?): Promise<PGTransaction>

The `createTransaction` method is used to open a new SQL Transaction and return an object that represents it.

The first argument is an option `PGIsolationLevel` enum that allows the developer to select the [transaction serialization](https://www.postgresql.org/docs/9.1/transaction-iso.html)
level they would like to use. The default value is `PGIsolationLevel.READ_COMMITED` and is appropriate for most use cases.

The response is a `PGTransaction` object that represents the newly opened transaction.

## PGTransaction

The `PGTransaction` object represents a SQL transaction in PostgreSQL.

### constructor(connection, logger?)

The first argument to `PGTransaction` is the underlying node-pg connection that it is to operate on.
It is the responsibility of the instantiating component to ensure that the connection is properly established as a transaction
in PostgreSQL and that the connection is not shared with another object.

The second argument is an optional logger instance to which the transaction will log lifecycle events such as being opened and closed alongside it's unique transaction ID. 
This can be helpful for debugging issues where transactions are not released. 

### query<R>(queryString, parameters): Promise<Array<R>>

The `query` method is used to send queries to the PostgreSQL server over the transaction. 

It's use is identical to that of the PGStore itself - documentation for which can be found above.

### commit(): Promise<void>

The `commit` method is used to commit the changes that have been performed in the transaction to the PostgreSQL database.

This method also returns the connection to the pool meaning that it is not safe to continue using the PGTransaction after `commit` has been called.

N.B Attempting to use rollback on a transaction where `rollback` or `commit` has already been called will return an error.

### rollback(): Promise<void>

The `rollback` method is used to rollback the changes that have been performed in the transaction to the PostgreSQL database.

This method also returns the connection to the pool meaning that it is not safe to continue using the PGTransaction after `rollback` has been called.

N.B Attempting to use rollback on a transaction where `rollback` or `commit` has already been called will return an error.
