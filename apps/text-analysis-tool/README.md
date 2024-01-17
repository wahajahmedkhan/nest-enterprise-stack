# Text Analysis Tool

## Description

Text Analysis Tool is a Node.js application designed to analyze text files and report on the most frequently occurring words. It scans through a directory of text files and produces a report highlighting the top N most frequent words across all files, excluding common English words and non-alphabetic characters.

## Features

- Analyzes all text files within a specified directory.
- Reports the most frequently occurring words.
- Ignores common English words and non-alphabetic characters for more accurate analysis.
- Allows specification of the number of top words to report.

## Solution Highlights

### Readability and Maintainability

- **Modular Design**: The application is structured with a focus on modular design. Each functionality, from file reading to data analysis, is broken down into small, manageable libraries. This approach enhances readability and makes it easier to maintain and update individual parts of the application without affecting others.

### Robustness

- **Comprehensive Error Handling**: Robust error handling mechanisms are in place to ensure the application gracefully handles and recovers from unexpected situations. This includes handling file access issues, data processing errors, and database interaction anomalies.

### Efficiency

- **Stream-Based File Reading**: The application utilizes Node.js streams for reading text files. This method is highly efficient, particularly for large files, as it doesn't require loading the entire file content into memory.
- **SQLite Database**: Data storage and retrieval are managed using SQLite, a lightweight yet powerful database solution. SQLite provides a balance of efficiency and simplicity for data management, contributing to the overall performance of the application.

## Prerequisites

- Node.js must be installed on your system.

## Installation

To set up the Text Analysis Tool on your local machine, follow these steps:

1. **Clone the Repository**

   Clone the repository from GitHub:

   ```bash
   git clone https://github.com/wahajahmedkhan/nest-enterprise-stack.git
   ```

2. **Install Dependencies**

   Navigate to the project directory and install the necessary dependencies:

   ```bash
   cd nest-enterprise-stack
   npm install
   ```

3. **Build the Application**

   Compile the application for production use:

   ```bash
   npm run build-analyze-text-prod
   ```

4. **Navigate to Build Directory**

   Navigate to the build directory:

   ```bash
   cd dist/apps/text-analysis-tool
   ```

5. **Run the Application**

   Execute the compiled application with the following command:

   ```bash
   node analyze.js <directory> <number>
   ```

   Replace `<directory>` with the path to the directory containing the text files to be analyzed, and `<number>` with the number of top frequent words to report in the analysis.

   For example:

   ```bash
   node analyze.js ./data 10
   ```

   This command will analyze text files in the `./data` directory and report the top 10 most frequent words.
