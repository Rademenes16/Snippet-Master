import os
import subprocess

# Run code coverage analysis on the working directory
subprocess.run(['npm', 'run', 'test:coverage'])

# Parse the generated code coverage report
coverage_report_file = os.path.join('coverage', 'lcov-report', 'index.html')
with open(coverage_report_file, 'r') as f:
    coverage_report = f.read()

# Extract code coverage percentage from the report
coverage_percentage = coverage_report.split('<span class="strong">')[1].split('</span>')[0]

print(f'Code coverage percentage: {coverage_percentage}%')
