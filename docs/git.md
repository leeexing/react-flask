This is git problems

> 使用 ssh：git@github.com:leeexing/react-flask.git

## git pull 失败 [1]!

```js
$ git pull origin master
From github.com:leeexing/react-flask
 * branch            master     -> FETCH_HEAD
fatal: refusing to merge unrelated histories
```

因为他们是两个不同的项目，要把两个不同的项目合并，git需要添加一句代码，在git pull，这句代码是在git 2.9.2版本发生的，
最新的版本需要添加 `--allow-unrelated-histories`



```js
$ git pull origin master --allow-unrelated-histories
From github.com:leeexing/react-flask
 * branch            master     -> FETCH_HEAD
Already up to date!
Merge made by the 'recursive' strategy.
```

```js
$ git push -u origin master
Counting objects: 24, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (23/23), done.
Writing objects: 100% (24/24), 48.99 KiB | 97.00 KiB/s, done.
Total 24 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), done.
To github.com:leeexing/react-flask.git
   9a0a845..462c05f  master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
```

## git push

$ git push 如果当前分支与多个主机存在追踪关系，那么这个时候-u选项会指定一个默认主机，这样后面就可以不加任何参数使用git push。

$ git push -u origin master 上面命令将本地的master分支推送到origin主机，同时指定origin为默认主机，后面就可以不加任何参数使用git push了。

不带任何参数的git push，默认只推送当前分支，这叫做simple方式。此外，还有一种matching方式，会推送所有有对应的远程分支的本地分支。

Git 2.0版本之前，默认采用matching方法，现在改为默认采用simple方式。

## 参考

1. [git pull 失败](https://blog.csdn.net/lindexi_gd/article/details/52554159)