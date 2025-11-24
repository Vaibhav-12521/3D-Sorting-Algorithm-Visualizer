# Sorting Algorithm Visualizer

![Views](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fsorting-visualizer&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=views&edge_flat=false)
![GitHub stars](https://img.shields.io/github/stars/yourusername/sorting-visualizer?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/sorting-visualizer?style=social)

A web-based interactive tool for visualizing sorting algorithms with 3D animations and real-time performance metrics.

---

### Connect with Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourprofile)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/yourhandle)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourusername)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=todoist&logoColor=white)](https://yourwebsite.com)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:your.email@example.com)

---

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

## License

This project is licensed under the MIT License.

## Acknowledgments

Built for educational purposes to help students and developers understand sorting algorithms through visual learning.

---

## Support

If you found this project helpful, please consider:
- ⭐ Starring the repository
- 🔄 Sharing it with others
- 🐛 Reporting bugs or suggesting features

## Stay Connected

Follow for more projects and updates:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourprofile)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/yourhandle)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourusername)

---

<p align="center">Made with ❤️ for the coding community</p>
<p align="center">© 2025 Sorting Algorithm Visualizer</p>
