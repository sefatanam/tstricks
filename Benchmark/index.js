const fs = require('fs');
const childProcess = require('child_process');

// Read the directory containing the JavaScript files
const directory = './topics';
const files = fs.readdirSync(directory);

// Iterate over the files in the directory
for (const file of files)
{
    // Check if the file is a JavaScript file
    if (file.endsWith('.js'))
    {
        // Run the JavaScript file using the `spawn` function
        const child = childProcess.spawn('node', [`${directory}/${file}`]);

        // Print the output of the child process to the console
        child.stdout.on('data', data => console.log(data.toString()));
        child.stderr.on('data', data => console.error(data.toString()));
    }
}
