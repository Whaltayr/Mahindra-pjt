# import hashlib

# text1 = "password"
# text2 = "password123"

# hash1 = hashlib.sha256(text1.encode()).hexdigest()
# hash2 = hashlib.sha256(text2.encode()).hexdigest()

# print("\nhash1# ", hash1)
# print("\nhash2# ",hash2)

# if(hash1 == hash2): print("true")
# else: print("\nfalse")

# import base64

# text1 = "password"
# text2 = "password123"

# base1 = base64.b64encode(text1.encode()).decode()
# base1decode = base64.b64decode(base1.encode()).decode()

# if text1 == base1decode:
#     print("true")

import socket

target = "192.168.0.150"
ports = [22, 80,443]
