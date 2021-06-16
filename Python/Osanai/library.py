import os
import pathlib

# if not os.path.exists("sample_dir")
# os.mkdir("sample_dir")

p = pathlib.Path("sample_dir/sample.txt")
p.touch()

print(p)
print(type(p))
# os.rmdir("sample_dir")
