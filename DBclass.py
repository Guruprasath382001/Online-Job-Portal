import mysql.connector
def getConn():
    conn = mysql.connector.connect\
        (host="localhost", username="root",
         password="", database="jobportal",
         port=3306)
    return conn

def fetchAll(sql):
    conn = getConn()
    cursor = conn.cursor()
    cursor.execute(sql)
    data=cursor.fetchall()
    return data

def executeUpdate(sql):
    conn = getConn()
    cursor = conn.cursor()
    cursor.execute(sql)
    conn.commit()
    return True