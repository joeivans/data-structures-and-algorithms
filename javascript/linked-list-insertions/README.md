# LinkedList Insertions

Adding various insertion functionality

## Strategy

### Operations

- `+ insert(T) : void // O(1)`

### Properties

- `+ value : T`
- `+ next : node`

### Insert Algorithm O(1)

- construct new node(value)
- new node.next = head
- head = new node

## Whiteboards

Insert after n is 1
![Insert after n is 1](docs/images/Linked-list-insert-after-n-is-1.png)

Insert after n is large
![Insert after n is large](docs/images/Linked-list-insert-after-n-is-large.png)

## Tests

``` bash
cd javascript
npm run 'test:code-challenge-class-06'
```
