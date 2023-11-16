from flask_app.controllers import user_controller
from flask_app.controllers import attempt_controller

from flask_app import app

import os
print( os.environ.get("FLASK_APP_API_KEY") )

if __name__ == "__main__":
    app.run(debug=True)