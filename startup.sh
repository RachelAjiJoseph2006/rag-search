#!/bin/bash
echo "Starting Gunicorn server from startup.sh script..."
gunicorn --bind=0.0.0.0 --timeout 600 --workers 4 --worker-class uvicorn.workers.UvicornWorker --chdir backend main:app