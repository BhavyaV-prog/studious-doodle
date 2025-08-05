from tkinter import *
import tkinter.messagebox as messagebox
import pymysql
from tkinter import simpledialog

# Database connection
def connect_database():
    try:
        con = pymysql.connect(host='localhost', user='root', password='Bhavya$soham$', database='users')
        return con
    except pymysql.Error as e:
        messagebox.showerror("Error", f"Database connection error: {e}")
        return None
    
root = Tk()
root.title("Sign In")
root.geometry('400x200')

# Function to sign in
def signin():
    username = username_signin.get()
    password = password_signin.get()

    if not all([username, password]):
        messagebox.showerror("Error", "Both username and password are required!")
        return

    con = connect_database()
    if con:
        try:
            with con.cursor() as cursor:
                cursor.execute("SELECT * FROM users WHERE username = %s AND password = %s", (username, password))
                user = cursor.fetchone()
                if user:
                    messagebox.showinfo("Success", "Login successful!")
                    root.destroy()
                    import Studentregistrationsystem
                else:
                    messagebox.showerror("Error", "Invalid username or password!")
        except pymysql.Error as e:
            messagebox.showerror("Error", f"Failed to sign in: {e}")
        finally:
            con.close()


# Function to handle forgot password
def forgot_password():
    email = email_forgot.get()
    root.destroy()
    import otpgmailproject

    if not email:
        messagebox.showerror("Error", "Please enter your email address!")
        return

    con = connect_database()
    if con:
        try:
            with con.cursor() as cursor:
                cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
                user = cursor.fetchone()
    
                
                if user:
                    # Prompt the user to enter a new password
                    new_password = simpledialog.askstring("New Password", "Enter your new password:", show='*')
                    if new_password:
                        # Update the password in the database
                        cursor.execute("UPDATE users SET password = %s WHERE email = %s", (new_password, email))
                        con.commit()
                        messagebox.showinfo("Success", "Password updated successfully!")
                else:
                    messagebox.showerror("Error", "Email address not found!")
        except pymysql.Error as e:
            messagebox.showerror("Error", f"Failed to update password: {e}")
        finally:
            con.close()


# Sign In Frame
signin_frame = Frame(root)
signin_frame.pack(pady=10)

Label(signin_frame, text="Username:",fg='black', bg='white').grid(row=0, column=0)
username_signin = Entry(signin_frame)
username_signin.grid(row=0, column=1)

Label(signin_frame, text="Password:",fg='black', bg='white').grid(row=1, column=0)
password_signin = Entry(signin_frame, show="*")
password_signin.grid(row=1, column=1)
Button(signin_frame, text="Sign In",  bg='white',fg='blue',command=signin).grid(row=2, columnspan=2)

    
# Forgot Password Frame
forgot_frame = Frame(root)
forgot_frame.pack(pady=10)

Label(forgot_frame, text="Email:",fg='black', bg='white').grid(row=0, column=0)
email_forgot = Entry(forgot_frame)
email_forgot.grid(row=0, column=1)

Button(forgot_frame, text="Forgot Password", bg='white',fg='blue', command=forgot_password).grid(row=1, columnspan=2)

root.mainloop()

