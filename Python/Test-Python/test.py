#Unkomment

print("Hello World!")

print("unko")

print("BigUnko!!")

#演算
print(1+1)
print(1-1)
print(8*9)
print(10/2)
print(5%3)

#変数
unko = "l_size"
unko_length = 11
unko_times = 132.5

# print(type(unko))
# print(type(unko_length))
# print(type(unko_times))

# boolean
# unko_shitai = False

# print(type(unko_shitai))

# 条件演算子 < > == != | if elif else
# if unko == "l_size":
#   print("でっかちゃんだよ")

# if unko == "s_size":
#   print("でっかちゃんだよ")

# if unko != "s_size":
#   print("違うよ")

# if unko_length < 300:
#   print("すくない")

# if unko_length < 10:
#   print("if")
# elif unko_length == 0:
#   print("ねぇ")
# else:
#   print("ちょっちゅね")

# 関数
# 構文
# def 関数名():
#   条件
#   条件式
#     処理
# 
#     引数なし
# def unko_funbaru():
#   unko_status = 5

#   if (unko_status < 10):
#     return "まだだいじょぶ"
#   else:
#     return "やばい"

# print(unko_funbaru())

# 引数あり
def unko_funbaru(i):
  unko_status = i

  if (unko_status < 10):
    return "まだだいじょぶ"
  else:
    return "やばい"

# print(unko_funbaru(5))

# list
unko_list = ["unko","tinko","anko"]
# print(unko_list[1])

# for文 構文
# for x in xrange(1,10):
#   pass

# 基本的な使い方
# for unko_list in range(5):
#   print(unko_funbaru(5))

# # カウント変数を見る
# for x in range(10):
#   print(x) 

# # 応用
# for index in range(11):
#   print(unko_funbaru(index))

# # 応用_変数に代入 listと組み合わせる
# for item in unko_list:
#   print(item)


# with
# open() 開いたファイルに追記や解析を施すことができる
# 大体セットで用いられる
# open関数・・・第一引数（読ませたいファイル）第二引数（モード）

with open("./unko.txt", "r") as file:
  print(file)
  print(file.name)
  print(file.mode)
  print(file.read())
# 処理の流れ
# ①with open でファイルを指定
# ②モードでr:読み取り w：書取り
# ③as 変数名　で変数に格納
# ④print で出力