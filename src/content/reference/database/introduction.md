---
title: Introduction
module: Database
---

## Overview

Strontium is designed to make database access extremely transparent to the developer whilst also reducing the difficulty
of common database interactions. All of the query tools are designed to be helpful most of the time but immediately get
out of your way should you require more complexity in your application.

Strontium is designed to work with SQL Databases - primarily PostgreSQL.<br />
Some aspects of the data layer may work with other SQL databases such as MySQL but that is not something that we currently test for.

## Key Concepts

### SQLStore

The Strontium `SQLStore` provides the base interface for all database drivers. A `SQLStore` exposes a single method: `query`

How the underlying driver implements the query method is designed to be largely abstracted with the developer's main concern
being the input to the query function.

Strontium ships with an implementation of SQLStore for Postgres however it is possible to use third party adapters to implement
support for other datastore such as MySQL or Oracle.

It is rare that a developer needs to work directly with the SQLStore as most work can be done at a higher level of abstraction
however it's important to know it exists in case there is a desire to interact directly with the database.

### Queries

Strontium provides a powerful and intuitive typed Query builder that allows for relatively complex queries to be constructed
without leaving the TypeScript type system.  

The Query builder is used internally by most of the Framework's SQL helpers and is made available for cases when a greater level
of control over the query is needed or there is a desire to use a SQL feature such as `LOWER` or `LEVENSHTEIN`.

Although the Repository model can handle most workloads it is not uncommon to see at least a few queries in most Strontium projects
to handle particular performance or business logic concerns.  

### Repositories

Repositories provide the bread and butter of data access in Strontium. They are easy to use and support the most common 80% of data workloads.

Strontium also allows for Repositories to be extended which allows them to be combined with Queries in a way that supports
relatively sophisticated data access patterns.

### Filters

Strontium Filters are simply typed objects that allow for MongoDB style conditions to be constructed in TypeScript. 

Both Queries and Repositories make use of Filters to build the "WHERE" clauses that are sent to the final database.

It's important to remember that Filters are POJOs (Plain Old Javascript Objects) - and are simply a structured way of representing
the query condition. This opens up some interesting additional use cases for Filters such as using them over a network to power
complex data selectors on API endpoints. 
