import math

# A = 1250
# Q = 450
# time = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10]

# def ejercicio1(q,a,t):
#     res = []
#     for n in t: 
#         res.append( 3*(q/a)*math.sin(n)**2 - (q/a) )
#     return res

# y = ejercicio1(Q,A,time) 
# print(y)

# plt.plot( y, time, label )
# plt.xlabel('time')
# plt.ylabel('y')
# plt.legend()
# plt.show()


def aGrados(n): return n*3.1416/180
def angulo(w,k,q): return (k*math.tan(aGrados(q))) - (k*math.sin(aGrados(q))) - w

w = 12
k = 300
toler = 1e-4



def getAltura(w,k):
    i = 0
    while i < 360:
        i += 0.1
        otro = angulo(w,k,i)
        if otro >= toler: 
            ang = i
            break
    h = 1 * math.tan(aGrados(ang))
    return h

print(getAltura(w,k))



def getGrafica(w,k):
    res = []
    i = 1
    while i < 360:
        i += 1
        res.append(angulo(w,k,i))
    return res

print(getGrafica(w,k))

