### 🛩️ Aircraft Information App

<img src="https://github.com/AaronTomThomas/flight-details-tracker/blob/master/screenshots/s1.png" alt="Screenshot 1" width="200" style="max-height: 400px;">
<img src="https://github.com/AaronTomThomas/flight-details-tracker/blob/master/screenshots/s2.png" alt="Screenshot 2" width="200" style="max-height: 400px;">
<img src="https://github.com/AaronTomThomas/flight-details-tracker/blob/master/screenshots/s3.png" alt="Screenshot 3" width="200" style="max-height: 400px;">
<img src="https://github.com/AaronTomThomas/flight-details-tracker/blob/master/screenshots/s4.png" alt="Screenshot 4" width="200" style="max-height: 400px;">
<img src="https://github.com/AaronTomThomas/flight-details-tracker/blob/master/screenshots/s5.png" alt="Screenshot 5" width="200" style="max-height: 400px;">
<img src="https://github.com/AaronTomThomas/flight-details-tracker/blob/master/screenshots/s6.png" alt="Screenshot 6" width="200" style="max-height: 400px;">
<img src="https://github.com/AaronTomThomas/flight-details-tracker/blob/master/screenshots/s7.png" alt="Screenshot 7" width="200" style="max-height: 400px;">

## Introduction

This Aircraft Information App is a mobile application built with React Native and Expo that provides users with detailed information about airlines and aircraft. It leverages the power of the RAPIDAPI platform to access external APIs for retrieving data. Users can search for airlines by name and explore detailed aircraft information using airline ICAO codes.

## Features

Search Airlines: 🔍 Search for airlines by name to access detailed information, including IATA and ICAO codes, country, and more.

Search Aircraft: ✈️ Search for aircraft using an airline's ICAO code. Retrieve data about all aircraft associated with a specific airline.

Aircraft Details: 📄 View comprehensive information about each aircraft, including its model, registration, age, country, and images.

## Technologies Used

React Native: ⚛️ The app is developed using React Native, enabling cross-platform compatibility and native-like performance.

Expo: 📱 Expo is used for development, making it easy to build and deploy the app across various platforms.

RAPIDAPI: 🚀 External APIs from RAPIDAPI are utilized to fetch comprehensive data about airlines and aircraft.

JavaScript: 🧙‍♂️ The app's logic and functionality are implemented using JavaScript.

## Usage

Search Aircraft: Enter the ICAO code of an airline in the search bar and tap "Search." The app will show a list of aircraft associated with the airline.

Search Airlines: Enter the name of an airline in the search bar and tap the "Search" button. The app will fetch and display information about the airline.

View Aircraft Details: Tap on an aircraft to view detailed information, including its model, registration, age, current journey and more.

## Getting Started

🚀 Follow these steps to set up and run the Aircraft Information App on your local machine.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js:** Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

- **Expo CLI:** You'll need Expo CLI to run the app. Install it globally using npm:

  ```bash
  npm install -g expo-cli
  ```

- **RapidAPI Account:** This app uses the RapidAPI platform to fetch aircraft and airline information. You'll need to create an account on [RapidAPI](https://rapidapi.com/) and obtain an API key.

### Installation

1. **Clone the Repository:**

   Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/your-username/aircraft-information-app.git
   ```

   Replace `your-username` with your GitHub username.

2. **Navigate to the Project Directory:**

   Change your working directory to the project folder:

   ```bash
   cd aircraft-information-app
   ```

3. **Install Dependencies:**

   Use npm or yarn to install the project dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. **Set Up RapidAPI Key:**

   Open the project in your preferred code editor. Create a `.env` file in the project's root directory and add your RapidAPI key like this:

   ```bash
   RAPIDAPI_KEY=your-rapidapi-key
   ```

   Replace `your-rapidapi-key` with your actual API key.

5. **Run the App:**

   Start the Expo development server:

   ```bash
   expo start
   ```

   This command will open a web interface in your default browser. You can use this interface to run the app on an emulator or a physical device.

6. **Access the App:**

   Follow the instructions from the Expo interface to open the app on your Android or iOS emulator, or scan the QR code with the Expo Go app on your physical device.

### Usage

Once the app is running, you can use it to:

- Search for aircraft by entering the ICAO code of an airline in the search bar and tapping "Search."

- Search for airlines by entering the name of an airline in the search bar and tapping the "Search" button.

- View detailed information about an aircraft by tapping on it in the search results.

### Acknowledgments

🙏 This project draws inspiration from the concept of a job search application by JSMastery ([GitHub Repository](https://github.com/adrianhajdin/project_react_native_jobs/tree/main/app)).
