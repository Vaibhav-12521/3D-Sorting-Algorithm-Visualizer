# Sorting Algorithm Visualizer

A web-based interactive tool for visualizing sorting algorithms with 3D animations and real-time performance metrics.

## Overview

This application provides an educational platform to understand and compare various sorting algorithms through visual representation. Users can observe how different algorithms process data, track their performance metrics, and analyze their efficiency.

## Features

- Interactive 3D visualization of sorting processes
- Real-time tracking of comparisons, swaps, and execution time
- Six sorting algorithms: Bubble Sort, Quick Sort, Merge Sort, Insertion Sort, Selection Sort, and Heap Sort
- Adjustable array size (5-50 elements) and animation speed (1-10)
- Side-by-side algorithm comparison with performance metrics
- Detailed algorithm information including time and space complexity
- Code implementation examples for each algorithm
- Responsive design for desktop and mobile devices

## Getting Started

### Requirements

- Modern web browser (Chrome, Firefox, Safari, or Edge recommended)
- No additional dependencies or installations required

### Installation

1. Download or clone the repository
2. Open `index.html` in your web browser

Alternatively, run a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server
```

Then navigate to `http://localhost:8000`

## Usage

### Visualizer

1. Select an algorithm from the dropdown menu
2. Adjust array size and animation speed using the sliders
3. Click "Generate Array" to create a new random array
4. Click "Start Sorting" to begin visualization
5. View statistics and algorithm details in side panels

### Algorithm Comparison

1. Navigate to the "Compare" tab
2. Select multiple algorithms using checkboxes
3. Click "Run Comparison"
4. Review performance metrics in the results table and chart

## Project Structure

```
├── index.html          # Application structure
├── styles.css          # Styling and animations
├── script.js           # Core logic and algorithms
└── README.md          # Documentation
```

## Technologies

- HTML5 Canvas for rendering visualizations
- CSS3 for styling and 3D transforms
- Vanilla JavaScript (ES6+)
- Font Awesome for icons
- Google Fonts (Poppins)

## Algorithms Included

| Algorithm | Time Complexity (Avg) | Space Complexity | Stable |
|-----------|----------------------|------------------|--------|
| Bubble Sort | O(n²) | O(1) | Yes |
| Quick Sort | O(n log n) | O(log n) | No |
| Merge Sort | O(n log n) | O(n) | Yes |
| Insertion Sort | O(n²) | O(1) | Yes |
| Selection Sort | O(n²) | O(1) | No |
| Heap Sort | O(n log n) | O(1) | No |

## Color Legend

- **Blue**: Unsorted elements
- **Red**: Elements being compared
- **Orange**: Elements being swapped
- **Green**: Sorted elements

## 🔗 Connect with me 

<a href="https://leetcode.com/u/vaibhav125s/" target="_blank"> 
  <img src="https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black" alt="LeetCode Profile"/> 
</a> 
&nbsp;
<a href="https://www.linkedin.com/in/vaibhavsingh125/" target="_blank"> 
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Profile"/> 
</a>
&nbsp;
<a href="https://github.com/Vaibhav-12521" target="_blank"> 
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Profile"/> 
</a>



---

Feel free to star ⭐ the repo if you find it helpful!

<p align="center">
  <img src="https://visitor-badge.laobi.icu/badge?page_id=second-largest-problem" alt="visitor badge"/>
</p>

