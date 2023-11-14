# Bloom Filter

A bloom filter is a probabilistic data structure that is based on hashing. It is extremely space efficient and is used to add elements to a set and test if an element is in a set, the struct is defined as follows:

```c
struct bfdev_bloom {
    const struct bfdev_alloc *alloc;
    bfdev_bloom_hash_t hash;
    unsigned int funcs;
    void *pdata;

    unsigned int capacity;
    unsigned long bitmap[];
};
```

The hashmap of the bloom are available in the `bitmap` field. The `capacity` field holds the number of bits in bitmap. The `hash` field holds the callback of the hash functions.

Use the `bfdev_bloom_create(alloc, capacity, hash, funcs, pdata)` call to create a bloom-filter in a pool, and the `bfdev_bloom_destory(bloom)` call to destory an bloom-filter object that has already been create.

```c
struct bfdev_bloom *bloom;

/* create a bloom-filter named foo using hash function */
bloom = bfdev_bloom_create(foo, NULL, hash, 3, NULL);

/* destory a bloom-filter */
bfdev_bloom_destory(bloom);
```

Use the following functions to get data from and additions data to the bloom filter:

- bfdev_bloom_peek(bloom, key) test the key in the bloom-filter
- bfdev_bloom_push(bloom, key) addition the key to the bloom-filter

When testing if an element is in the bloom filter, false positives are possible. It will either say that an element is definitely not in the set or that it is possible the element is in the set.

A bloom filter is very much like a hash table in that it will use a hash function to map a key to a bucket. However, it will not store that key in that bucket, it will simply mark it as filled. So, many keys might map to same filled bucket, creating false positives.

```c
char *foo = "bar";
bool possible;

bfdev_bloom_push(bloom, foo);
possible = bfdev_bloom_peek(array, foo);
```
