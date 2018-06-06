This is git problems

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

## 参考

1. [git pull 失败](https://blog.csdn.net/lindexi_gd/article/details/52554159)