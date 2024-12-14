# Docker Compose 命令详解



 **Link:** [https://zhuanlan.zhihu.com/p/701891272]

### docker-compose up  

此命令用于创建、重建、启动和连接容器。在前台运行时，会显示所有服务的启动日志。

```
Creating network "myapp_default" with the default driver
Creating volume "myapp_dbdata" with default driver
Creating myapp_web_1 ... done
Creating myapp_db_1  ... done
Attaching to myapp_web_1, myapp_db_1
```
### docker-compose down  

默认情况下，`docker-compose down` **不会** 删除由 `docker-compose.yml` 文件中定义的卷（即那些通过 `volumes:` 部分指定的卷）。这些卷会保留以便将来重用，除非您手动删除它们。

```
Stopping myapp_web_1 ... done
Stopping myapp_db_1  ... done
Removing myapp_web_1 ... done
Removing myapp_db_1  ... done
Removing network myapp_default
```
### docker-compose build  

如果有 build 的配置会重新构建服务。

```
db uses an image, skipping
Building web
Step 1/3 : FROM node:10
 ---> 123abc
Step 2/3 : ADD . /code
 ---> Using cache
 ---> 456def
Step 3/3 : RUN npm install
 ---> Running in 789ghi
```
### docker-compose ps  

显示与配置中定义的服务相关的容器。

```
     Name                   Command              State           Ports         
---------------------------------------------------------------------------------
myapp_web_1   nginx -g daemon off;          Up      0.0.0.0:80->80/tcp,:::80->80/tcp
myapp_db_1    docker-entrypoint.sh postgres Up      5432/tcp                     
```
### docker-compose start  

启动一个或多个已停止的容器。

```
Starting db_1 ... done
Starting web_1 ... done
```
### docker-compose stop  

停止正在运行的容器。

```
Stopping myapp_web_1 ... done
Stopping myapp_db_1  ... done
```
### docker-compose restart  

重启服务。

```
Restarting myapp_web_1 ... done
Restarting myapp_db_1  ... done
```
### docker-compose logs  

查看服务的日志输出。

```
Attaching to myapp_web_1, myapp_db_1
web_1  | Example app listening at http://localhost:3000
db_1   | 2021-01-01 12:00:00.000 UTC [1] LOG:  database system is ready to accept connections
```
### docker-compose pull  

拉取服务依赖的镜像。

```
Pulling db (postgres:latest)...
latest: Pulling from library/postgres
Digest: sha256:abc123
Status: Downloaded newer image for postgres:latest
```
### docker-compose push  

将服务中涉及的镜像推送到 Docker Hub 或其他镜像仓库。

```
Pushing api (myregistry.com/myapp/api)...
The push refers to repository [docker.io/myapp/api]
5f70bf18a086: Pushed 
```
### docker-compose exec  

如果您的 `docker-compose.yml` 定义中某个服务配置为多个容器实例，执行 `docker-compose exec` 命令将默认选择由该服务创建的第一个容器。如果需要在特定的容器上执行命令，通常需要通过 Docker 的底层命令来处理

```
$ docker-compose exec db psql -U postgres
​
psql (12.2)
Type "help" for help.
​
postgres=#
```
### docker-compose run  

使用一个服务以一次性模式执行命令。

```
$ docker-compose run web env
​
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
HOSTNAME=8b1b53f6cfa9
```
### docker-compose rm  

删除所有（停止状态的）服务容器。

```
Going to remove myapp_web_1, myapp_db_1
Are you sure? [yN] y
Removing myapp_web_1 ... done
Removing myapp_db_1  ... done
```
### docker-compose config  

验证并查看配置。

```
services:
  db:
    image: postgres
    restart: always
  web:
    build: .
    ports:
     - "5000:5000"
version: '3.0'
```
### docker-compose kill  

`kill` 不会删除容器，也不会删除容器的网络配置或者挂载的卷。这意味着您可以使用 `docker-compose start` 命令再次启动这些容器，而其环境配置和数据将保持不变。这使得 `kill` 命令非常适用于需要快速停止服务而不希望丢失任何数据的场景

```
Killing myapp_web_1 ... done
Killing myapp_db_1  ... done
```
### docker-compose pause  

对容器使用 `pause` 命令时，Docker 会使用 Linux 内核的 cgroups 功能来暂停容器中所有的进程。这意味着这些进程会立即停止执行，所有的 CPU 操作将会被冻结，但是容器的内存状态保持不变。容器中的进程就像是被“冻结”在某个特定的时刻。

这个功能特别适用于需要临时释放系统资源（如 CPU 使用率）但又不想结束或重启容器的情况。例如，如果您运行的某个服务暂时不需要处理任务，但您希望保留其当前的状态，可以暂停该服务，之后再恢复其运行，恢复时容器会从暂停时的状态继续运行。

砸瓦鲁多~

```
Pausing myapp_web_1 ... done
Pausing myapp_db_1  ... done
```
### docker-compose unpause  

恢复服务中已暂停的容器。

```
Unpausing myapp_web_1 ... done
Unpausing myapp_db_1  ... done
```
### docker-compose port  

打印绑定的公开端口。

```
$ docker-compose port web 5000
0.0.0.0:49153
```
### docker-compose top  

显示运行的容器中的进程。

```
myapp_web_1
UID     PID     PPID    C   STIME   TTY     TIME     CMD
root    2618    2595    0   10:00   ?       00:00:02  nginx: master process nginx -g daemon off;
```
### 使用自定义配置文件  

如果您有一个不是标准命名（即非 `docker-compose.yml`）的配置文件，比如叫 `custom-compose.yaml`，您可以这样运行 `docker-compose` 命令：

```
docker-compose -f custom-compose.yaml up
```

  


**整理不易，求关注** 

