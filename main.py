import random
import os

from email.mime.text import MIMEText
import smtplib
from flask import *
import DBclass
from DBclass import *


app = Flask(__name__)
app.secret_key="Siva@123"

def send_email(subject, body, sender, recipients, password):
    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = sender
    msg['To'] = ', '.join(recipients)
    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp_server:
       smtp_server.login(sender, password)
       smtp_server.sendmail(sender, recipients, msg.as_string())
    print("Message sent!")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/register")
def reg():
    return render_template("register.html")

@app.route('/adminhome', methods=["POST", "GET"])
def adminl():
    if request.method == "POST":
        email = request.form["email"]
        password = request.form["password"]
        if (email == "guru382001@gmail.com" and password == "guru"):
            return render_template("adminhome.html")
        msg = 'Invalid Admin name and password'
        return render_template("admin.html", msg=msg)

    # For GET requests or if the credentials are not correct
    return render_template("admin.html", msg='')

# @app.route("/home")
# def index1():
#     return render_template("home.html")

@app.route("/postajob")
def postajob():
    return render_template("Post a job.html")


@app.route("/admin")
def admin():
    return render_template("admin.html")

@app.route("/adminhome")
def adminhome():
    return render_template("adminhome.html")

@app.route("/login")
def login():
     return render_template("login.html")

@app.route("/searchResults")
def search():
    return render_template("searchResults.html")

@app.route("/profile",methods=["POST","GET"])
def profile():

    return render_template("profile.html")

@app.route("/about")
def about():
    return render_template("about.html")



# @app.route("/deletestudent")
# def deletestudent():
#     Rno = request.args.get('Rno')
#
#     if Rno is None or not Rno:
#         return "Invalid request. Please provide a valid 'Rno' parameter."
#
#     sql = "Delete from guru where Rno = %s" % Rno
#     executeUpdate(sql)
#     return redirect(url_for("deletepage"))

# @app.route("/updatepage")
# def updatepage():
#     return render_template("updatepage.html")



@app.route("/newstudent", methods=["POST","GET"])
def newstudent():
    if request.method == "POST":
            userid = session['id']
            name = request.form.get('name')
            email = request.form.get('email')
            phno = request.form.get('phno')
            sslc= request.form.get('sslc')
            hsc= request.form.get('hsc')
            cgpa = request.form.get('cgpa')
            school= request.form.get('school')
            college=request.form.get('college')
            gender = request.form.get('gender')
            skills=request.form.get('skills')
            address=request.form.get('address')
            sql="Insert into appliedjobs(name,email,phno,sslc,hsc,cgpa,school,college,gender,skills, address,id) " \
            "values('%s', '%s', '%s', '%s', '%s','%s', '%s', '%s', '%s', '%s', '%s','%s')" % \
            ( name,email,phno,sslc,hsc,cgpa,school,college,gender,skills, address,userid)
            executeUpdate(sql)
            msg="Job Applied Successfully"

            return render_template("profile.html",msg = msg)


@app.route('/register',methods=["POST","GET"])
def register():

    try:
        if(request.method=="POST"):
            email = request.form['email']
            phno = request.form['phno']
            uname = request.form['uname']
            password = request.form['password']
            sql = "INSERT INTO register(email,phno,uname,password) VALUES ('%s','%s','%s','%s')"% (email,phno,uname,password)
            print(sql)
            DBclass.executeUpdate(sql)
            msg="registered"

    except Exception as e:
        return render_template("register.html",msg=e)

    return render_template("register.html",msg=msg)

@app.route('/login1',methods=["POST","GET"])
def log():
    try:
        email= request.form['email']
        password = request.form['password']
        sql = "Select * from register  where email like '%s' and password like '%s'" % (email, password)
        print("Sql : ", sql)
        conn = getConn()
        cursor = conn.cursor()
        cursor.execute(sql)
        row = cursor.fetchone()

        if (row):
            # flash("Login Successfully on" + str(email))
            # msg = 'Login Success'
            # session['uname'] = uname
            # session['fname'] = row[1]
            # session['lname'] = row[2]
            # session['fullname'] = row[1] + " " + row[2]
            session['id'] = row[4]
            session['uname'] = row[2]
            session['email'] = row[0]
            # fullname = row[1] + " " + row[2]
            # print("Full Name : ", fullname)
            return redirect(url_for("index2"))
        else:
            flash("Login Not Success")
            msg = 'Invalid UserName/Password'
            return render_template("login.html", msg=msg)
    except Exception as e:
        return render_template("login.html", msg=e)




@app.route("/newjob", methods=["POST","GET"])
def newjob():
    if request.method == "POST":
            jobrole = request.form.get('jobrole')
            companyname = request.form.get('companyname')
            experience = request.form.get('experience')
            salary= request.form.get('salary')
            location= request.form.get('location')
            conditions = request.form.get('conditions')
            ldate = request.form.get('ldate')


    sql="Insert into newjob(jobrole,companyname,experience,salary,location,conditions,ldate) " \
        "values('%s', '%s', '%s', '%s', '%s','%s','%s')" % \
        (jobrole,companyname,experience,salary,location,conditions,ldate)

    executeUpdate(sql)
    msg="Job Posted Successfully"

    return render_template("post a job.html",msg = msg)

@app.route("/home")
def index2():
    sql="Select * from newjob"
    data = fetchAll(sql)
    return render_template("home.html",data=data)

@app.route("/forgot")
def forgot():
    return render_template("forgot.html")

@app.route("/checkemail", methods=["POST", "GET"])
def checkemail():
    try:
        email = request.form['email']
        sql = "Select * from  register where email like '%s'" % (email)
        print("Sql : ", sql)
        conn = getConn()
        cursor = conn.cursor()
        cursor.execute(sql)
        row = cursor.fetchone()
        if (row):
            session['email'] = email
            subject = "OTP to reset the password"
            otp = random.randint(1000, 9999)
            session['otp'] = otp
            body = "Thank you for changing the Password, your OTP is : " + str(otp)
            sender = "guru382001@gmail.com"
            recipients = [email]
            password = "ioljomiayoizhiyk"

            send_email(subject, body, sender, recipients, password)

            return render_template("forgot1.html", email=email)
        else:
            flash("Login Not Success")
            msg = 'Invalid EmailId'
            return render_template("forgot.html", msg=msg)
    except Exception as e:
        return render_template("login.html", msg=e)







@app.route("/checkotp", methods=["POST", "GET"])
def checkotp():
    try:
        sentotp = request.form['otp']
        savedotp = session['otp']
        email = session['email']
        print("Saved Otp : ", savedotp, " Sent Otp : ", sentotp)
        if (int(sentotp) == int(savedotp)):
            return render_template("forgot2.html", email=email)
        else:
            return render_template("forgot1.html", email=email, msg='Incorrect OTP')
    except Exception as e:
        return render_template("login.html", msg=e)


@app.route("/pwd", methods=["POST","GET"])
def changepwd():
    try:
        password = request.form['password']
        email=session['email']
        sql="Update register set password = '%s' where email = '%s'" % (password, email)
        print("Sql : ", sql)
        conn = getConn()
        cursor = conn.cursor()
        cursor.execute(sql)
        conn.commit()
        msg="Password Changes Success"
        return render_template("login.html", msg=msg)
    except Exception as e:
        return render_template("login.html",msg=e)


@app.route("/appliedJob")
def displaypage():
    id=session['id']
    sql=("Select * from appliedjobs where id=")+str(id);
    data = fetchAll(sql)
    return render_template("appliedJob.html",data=data)

@app.route("/review",methods=["POST","GET"])
def review():
    msg=""
    if request.method == "POST":
        userid = session['id']
        uname = session['uname']
        result = request.form['result']
        sql = "insert into review(name,result,userid)values('%s','%s','%s')"%(uname,result,userid)
        DBclass.executeUpdate(sql)
        print("sql=",sql)
        msg="review added"
    return render_template("review.html",msg=msg)

@app.route("/rd")
def rd():
    sql="Select * from review;"
    data = fetchAll(sql)
    return render_template("rd.html",data=data)




if __name__ == '__main__':
    app.run(debug=True)
