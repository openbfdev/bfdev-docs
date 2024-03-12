# First project

Let's create the first bfdev based project:

```c
#include <bfdev.h>

int main(int argc, const char *argv[])
{
    bfdev_log_info("helloworld\n");
    return 0;
}
```

If bfdev is installed on user's local, we first need to set the environment variables, you can also add it to bashrc:

```shell
export C_INCLUDE_PATH=$C_INCLUDE_PATH:$HOME/.local/include
export CPLUS_INCLUDE_PATH=$CPLUS_INCLUDE_PATH:$HOME/.local/include
export LIBRARY_PATH=$LIBRARY_PATH:$HOME/.local/lib:$HOME/.local/lib64
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$HOME/.local/lib:$HOME/.local/lib64
```

Then we compile and run it:

```
# gcc -lbfdev -o helloworld helloworld.c
# ./helloworld
[info] helloworld
```
