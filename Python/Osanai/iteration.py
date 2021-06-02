# for i in range(10):
#     print(i)
# 引数の数だけループ
# 0
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9

# for i in range(2, 8):
#     print(i)
# 数字を指定
# 2
# 3
# 4
# 5
# 6
# 7

# for i in range(1, 14, 2):
#     print(i)
# 1から始まり2づつ進み、14までカウントする
# 1
# 3
# 5
# 7
# 9
# 11
# 13
# 言うなれば、
# for i in range(10):
#     print(i)
# は
# for i in range(1, 10, 1):
#     print(i)
# と同じ

scores = [10, 35, 84, 23, 2]

for i in range(len(scores)):
    print(scores[i])
# また、省略として
for i in scores:
    print(i)
# のようにも書ける

# for if 組み合わせ
