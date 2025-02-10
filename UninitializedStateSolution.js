The solution uses the `useEffect` hook to perform calculations depending on the state only after the state is initialized.

```javascript
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [doubledCount, setDoubledCount] = useState(0);

  useEffect(() => {
    setDoubledCount(count * 2);
  }, [count]);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Text>Doubled count: {doubledCount}</Text>
    </View>
  );
}

export default MyComponent;
```
Alternatively, conditional rendering can be used:
```javascript
import React, { useState } from 'react';
import { Text, View } from 'react-native';

function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Count: {count}</Text>
      {count !== undefined && <Text>Doubled count: {count * 2}</Text>}
    </View>
  );
}
export default MyComponent;
```