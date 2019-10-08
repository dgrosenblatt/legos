# Legos: A New Musical

A library heavily influenced by FactoryBot for setting up JS objects as test data.

Legos works with Knex.js to reduce the amount of code required to create database records in your test suite.


```javascript
import { create } from 'legos'

create('user')
create('user', { name: 'Lemon' })
```

✨✨✨
