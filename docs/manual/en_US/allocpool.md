# Allocpool

In bfdev allocpool is a mempool optimized for allocation, the struct is defined as follows:

```c
struct bfdev_allocpool {
    void *block;
    size_t size;
    uintptr_t last;
    unsigned long count;
};
```

The memory of the allocpool are available in the `block` field. The `last` field holds the current offset of memory. The `count` field holds the number of allocation.

Use the `BFDEV_DEFINE_ALLOCPOOL(name, memory, size)` macro to define an allocpool, and the `bfdev_allocpool_init(allocpool, memory, size)` call to initialize an allocpool object that has already been allocated.

```c
/* define an int allocpool named foo using static array */
static char block[4096];
BFDEV_DEFINE_ALLOCPOOL(foo, block, sizeof(block));

/* initialize int allocpool named bar using malloc */
struct bfdev_allocpool *bar;
void *block;

block = malloc(4096);
bar = bfdev_allocpool_init(&bar, block, 4096);
```

Use the following functions to alloc and free in an allocpool:

- bfdev_allocpool_alloc(allocpool, size, align) allocate an aligned memory block
- bfdev_allocpool_free(allocpool, block) release any block of memory

The space occupied by the allocation pool grows linearly, free function will only release a reference count. When there are zero references, the space will be released uniformly.

```c
int *foo;

foo = bfdev_allocpool_alloc(allocpool, 4, 0);
bfdev_allocpool_free(allocpool, foo);

```
