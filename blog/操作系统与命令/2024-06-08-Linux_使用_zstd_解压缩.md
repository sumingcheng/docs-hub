# Linux 使用 zstd 解压缩



 **Link:** [https://zhuanlan.zhihu.com/p/702258726]



`zstd`（Zstandard）是一个由 Facebook 开发的高效压缩算法和工具。

### 基本用法  

**安装 `zstd`** 在大多数 Linux 发行版中，可以通过包管理器安装 `zstd`

```
sudo apt install zstd      # Debian/Ubuntu
sudo yum install zstd      # CentOS
sudo dnf install zstd      # Fedora
```

**压缩文件** 使用 `zstd` 压缩文件，命令格式如下

```
zstd [文件名]
```

例如，压缩一个名为 `example.txt` 的文件

```
zstd example.txt
```

这会创建一个压缩后的文件 `example.txt.zst`。

**解压文件** 使用 `zstd` 解压文件，命令格式如下

```
zstd -d [压缩文件名]
```

或者使用长参数 `--decompress`

```
zstd --decompress example.txt.zst
```

**调整压缩等级** `zstd` 允许你指定压缩等级（1-19），默认为 3。等级越高，压缩比越好，但需要更多的处理时间

```
zstd -[等级] example.txt
```

例如，使用压缩等级 5 压缩文件

```
zstd -5 example.txt
```
### 使用注意事项  

**内存使用**，高压缩等级可能会显著增加内存使用。在资源受限的环境中，应避免使用过高的压缩等级。

**文件覆盖**，默认情况下，`zstd` 在压缩或解压时不会覆盖现有文件。如果需要覆盖，可以添加 `-f`（或 `--force`）参数。

**批量处理**，可以使用通配符一次压缩或解压多个文件

```
zstd *.txt           # 压缩当前目录下所有 .txt 文件
zstd -d *.zst        # 解压当前目录下所有 .zst 文件
```
