*)for Admin Login:
             Email : guru382001 @gmail.com
             password : guru

*)if u want to change the admin login email and password go to this part of the code in main.py

@app.route('/adminhome', methods=["POST", "GET"])
def adminl():
    if request.method == "POST":
        email = request.form["email"]
        password = request.form["password"]
        if (email == "guru382001@ gmail.com" and password == "guru"):
            return render_template("adminhome.html")
        msg = 'Invalid Admin name and password'
        return render_template("admin.html", msg=msg)

    # For GET requests or if the credentials are not correct
    return render_template("admin.html", msg='')

*)Here in 6th line change the email and password as your wish.


Nandri _/\_ Vanakkam _/\_
