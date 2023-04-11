import os
import subprocess
import urllib.request

# Create a new directory for the environment
os.mkdir('nodejs')
os.chdir('nodejs')

# Download Node.js installer
url = 'https://nodejs.org/dist/v16.13.0/node-v16.13.0-linux-x64.tar.xz'  # Replace with desired Node.js version and platform
filename = 'node.tar.xz'
urllib.request.urlretrieve(url, filename)

# Extract Node.js installer
subprocess.run(['tar', '-xJf', filename])

# Navigate to the extracted Node.js directory
node_dir = os.path.splitext(filename)[0]
os.chdir(node_dir)

# Add Node.js bin directory to PATH
node_bin_dir = os.path.join(os.getcwd(), 'bin')
os.environ['PATH'] = node_bin_dir + ':' + os.environ['PATH']

print('Node.js has been installed successfully in the "nodejs" directory.')
