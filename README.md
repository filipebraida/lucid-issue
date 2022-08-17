# Lucid Issue

## Problem One
I have a User model and it has a Profile collection. However, I need to know what the most current profile is and I created a BelongsTo/HasOne relationship. HasOne can't be used because it expects fk to be in the profile and that's not the case. BelongsTo has a problem. It works when I load profile on the user, but when I preload the query it doesn't come loaded.

```ts
import UserService from 'App/Services/UserService'

await UserService.createUser(BigInt(1))

await UserService.createProfile(BigInt(1))

await UserService.createProfile(BigInt(1))

await UserService.allUsers()
```

## Problem Two

Trying to use BigInt in the query gives typescript`s error: "Argument of type 'BigInt' is not assignable to parameter of type 'ChainableContract | StrictValues'.\n  Type 'BigInt' is missing the following properties from type 'Buffer': write, toJSON, equals, compare, and 96 more."

```ts
await UserService.findProfile(BigInt(1))
```


