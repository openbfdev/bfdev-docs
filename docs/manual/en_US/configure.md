# Building bfdev from Sources

The project built based on cmake, the build is configured using the configure command. It defines various aspects of the system, including the methods bfdev is allowed to use for connection processing. At the end it creates a Makefile.

The configure command supports the following parameters:

- BFDEV_DEVEL

    the default developer option template enhances the compiler's error checking capabilities and may reduce performance, which automatically turns on the following options:

    - BFDEV_EXAMPLES
    - BFDEV_ASAN
    - BFDEV_UBSAN

- BFDEV_EXAMPLES

    compile built-in development and test cases, which may help you understand bfdev's capabilities and performance.

- BFDEV_STRICT

    convert all warnings into errors (enabled by default).

- BFDEV_ASAN

    enable address sanitizer.

- BFDEV_UBSAN

    enable undefined behaviour Sanitizer.

- BFDEV_DBGLIST

    enable dynamic monitoring of list data (enabled by default).

- BFDEV_DBGSLIST

    enable dynamic monitoring of single list structure (enabled by default).

- BFDEV_DBGHLIST

    enable dynamic monitoring of hash list structure (enabled by default).

- BFDEV_DBGILIST

    enable dynamic monitoring of index list structure (enabled by default).

- BFDEV_DBGRBTREE

    enable dynamic monitoring of RB-tree structure (enabled by default).

- BFDEV_DBGHEAP

    enable dynamic monitoring of heap structure (enabled by default).

- BFDEV_DBGREFCNT

    enable dynamic monitoring of reference count (enabled by default).

Example of parameters usage (all of this needs to be typed in one line):

```
cmake -Bbuild
    -DBFDEV_DEVEL=ON
    -DBFDEV_DBGLIST=OFF
```

After configuration, bfdev is compiled and installed using make:

```
cd build
make $(nproc)
make install
```
