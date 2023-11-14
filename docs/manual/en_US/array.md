# Array

The bfdev array struct is defined as follows:

```
struct bfdev_array {
    const struct bfdev_alloc *alloc;
    unsigned int capacity;
    unsigned int index;
    size_t cells;
    void *data;
};
```

The elements of the array are available in the `data` field. The `index` field holds the number of elements. The `cells` field holds the size of a single element and is set when the array is initialized.

Use the `BFDEV_DEFINE_ARRAY(name, alloc, cells)` macro to define an array in a pool, and the `bfdev_array_init(array, alloc, cells)` call to initialize an array object that has already been allocated.

```
/* define an int array named foo using null allocator */
BFDEV_DEFINE_ARRAY(foo, NULL, sizeof(int));

/* initialize int array using null allocator */
struct bfdev_array bar;
bfdev_array_init(&bar, NULL, sizeof(int));
```

Use the following functions to additions and deletions elements to an array:

- bfdev_array_push(array, num) pushes n tail elements and returns pointer to the first one
- bfdev_array_pop(array, num) pops n tail elements and returns pointer to the first one

If the currently allocated amount of memory is not large enough to accommodate the new elements, a new block of memory is allocated and the existing elements are copied to it. The new memory block is normally twice as large as the existing one.

```
int *foo, *bar;

foo = bfdev_array_push(array, 3);
bar = bfdev_array_pop(array, 3);
```
