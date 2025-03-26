a = str(input())  
ans = ""

for i in range(len(a)):
    if a[i].islower():
        ans += a[i].upper()
    elif a[i].isupper():
        ans += a[i].lower()   
print(ans)