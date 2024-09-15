`Text-to-Speech React App using AWS Polly`

This is a simple React application that converts text into speech using Amazon Web Services (AWS) Polly. The user can input text, and AWS Polly will synthesize speech and return an audio file (in MP3 format), which is played through an audio player in the app.

Features
Input text in a form and convert it to speech using AWS Polly.
Plays the generated speech audio using a custom audio player component.
Utilizes AWS SDK to interact with Polly for text-to-speech conversion.
Prerequisites
To run this project, you need the following:

Node.js and npm: Ensure you have Node.js installed on your machine. You can download it from here.
AWS Account: You need an AWS account and credentials to access AWS Polly.
AWS IAM User: Create an IAM user with the following permissions:
AmazonPollyReadOnlyAccess
(Optional) Other permissions as needed based on your usage.
