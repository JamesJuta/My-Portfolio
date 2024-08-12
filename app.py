from flask import Flask, render_template, request, session, redirect, url_for, Response, jsonify
import mysql.connector


app = Flask(__name__)



# ======================================================================================================== #

# route for rendering the home page
@app.route('/home')
def home():
    return render_template('index.html')

# route for rendering the portfolio page
@app.route('/portfolio')
def portfolio():
    return render_template('Portfolio.html')

# route for rendering the services page
@app.route('/services')
def services():
    return render_template('services.html')

# route for rendering the abouts page
@app.route('/abouts')
def abouts():
    return render_template('abouts.html')

# route for rendering the abouts page
@app.route('/lets_talk')
def lets_talk():
    return render_template('lets_talk.html')


# ======================================================================================================== #

# Internal Server Error
@app.errorhandler(401)
def error_401(e):
    # play_sound("error_401.mp3")
    message= "Access to this resource is denied. Please contact system administrator."
    return render_template("401.html",message=message), 401

# Invalid URL
@app.errorhandler(404)
def error_404(e):
    # play_sound("error_404.mp3")
    message = "The page you are looking for might have been removed, had its name changed or is temporarily unavailable."   
    return render_template("404.html",message=message), 404

# Internal Server Error
@app.errorhandler(500)
def error_500(e):
    # play_sound("error_500.mp3")
    message = "Page Not Found- Please try again."
    return render_template("500.html", message=message), 500

# ======================================================================================================== #

# # logout route 
# @app.route('/logout', methods=['POST']) 
# def logout():
#     token = session.get('token')
#     # BLACKLISTED_TOKENS.add(token)
#     session.clear() # Clear all session variables
#     return redirect(DEV_E_GURO) # Redirect the user to the specified URL

# ======================================================================================================== #

if __name__ == "__main__":
    # play_sound("initializing.mp3")
    app.run(host='127.0.0.1', port=5000, debug=True)