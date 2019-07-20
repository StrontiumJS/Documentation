---
title: Helpers
module: Validation
---

## Introduction

Validation helpers are designed to assist with composing and extending other validators in useful ways.

## combineValidators

Often you will want to perform multiple validations in sequence. 
For example you might want to validate that a value is both a number and less than a given value.   

The combine validator function allows you to chain validators in series to create more complex validations.

```typescript
const combinedValidator = combineValidators(
  isNumber,
  isLessThan(50)
)
``` 

In this case the resulting `combinedValidator` would validate that it's input was first a number then also less than 50.

T