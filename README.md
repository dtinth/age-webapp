# Age Encryption Web App

A simple web application that allows users to encrypt messages using the [Age encryption tool](https://age-encryption.org/). This app runs entirely in the browser, utilizing WebAssembly to perform the encryption.

## Features

- Encrypt messages using Age encryption
- Support for multiple recipients
- GitHub integration: Encrypt messages for GitHub users using their SSH signing keys
- Copy encrypted messages to clipboard

## Usage

1. Enter recipient keys or GitHub usernames (prefixed with @) in the "Recipient Keys" textarea, one per line.
2. Type or paste the message you want to encrypt in the "Message to Encrypt" textarea.
3. Click the "Encrypt" button to generate the encrypted message.
4. The encrypted message will appear in the "Encrypted Message" textarea.
5. Use the "Copy to Clipboard" button to easily copy the encrypted message.

## Development

To run the app locally:

1. Clone the repository:

   ```
   git clone https://github.com/dtinth/age-webapp.git
   cd age-webapp
   ```

2. Install dependencies:

   ```
   pnpm install
   ```

3. Start the development server:

   ```
   pnpm run dev
   ```

4. Open your browser and navigate to `http://localhost:8080`

## Technologies Used

- HTML, CSS, JavaScript
- Bootstrap 5
- WebAssembly (Age encryption tool)
- GitHub API (for fetching SSH signing keys)
