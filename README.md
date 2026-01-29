
-----

# 🎓 GPA Calculator

A simple, dynamic web-based application built with Vanilla JavaScript to help students calculate their Grade Point Average (GPA) on a **5.0 scale**.

## 📖 About The Project

This tool allows students to input the number of courses they are taking, dynamically generates input fields for grades and credit units, and computes the weighted GPA. It includes input validation to ensure accurate calculations.

## 📸 Screenshots
![Platform Preview](screenshots/gpaCalculator1.png)
![Inputting Individual Subject Grades](screenshots/gpaCalculator2.png)
![Calculated GPA](screenshots/gpaCalculator3.png) 

## ✨ Features

  * **Dynamic Interface:** Users can specify any number of courses, and the form adjusts automatically.
  * **Input Validation:**
      * Prevents empty fields.
      * Ensures credit units are positive numbers.
      * Validates that grades are letters (A-F).
  * **5.0 Grading Scale:** accurately calculates GPA based on the standard 5-point system.
  * **Responsive Design:** Works on desktop and mobile browsers.

## 🧮 How It Works

The calculator uses the following point system for grades:

| Grade | Point Value |
| :---: | :---: |
| **A** | 5 |
| **B** | 4 |
| **C** | 3 |
| **D** | 2 |
| **E** | 1 |
| **F** | 0 |

**Formula:**
$$GPA = \frac{\sum (Grade Point \times Credit Unit)}{\sum Total Credit Units}$$

## 🛠️ Technologies Used

  * **HTML5:** Structure and layout.
  * **CSS3:** Styling.
  * **JavaScript (ES6):** DOM manipulation and calculation logic.

## 🚀 Getting Started

To run this project locally on your machine:

1.  **Clone the repository**

    ```bash
    git clone https://github.com/Otormin/GPAcalculator.git
    ```

2.  **Navigate to the project directory**

    ```bash
    cd GPAcalculator
    ```

3.  **Open the project**
    Simply open the `index.html` file in your preferred web browser.

-----