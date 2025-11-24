# 3D Sorting Algorithm Visualizer

An interactive web application that provides stunning 3D visualizations of popular sorting algorithms. Watch algorithms come to life with real-time animations, statistics, and performance comparisons.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🌟 Features

### Interactive Visualization
- **3D Animated Arrays**: Watch sorting algorithms in action with beautiful 3D bar representations
- **Real-time Statistics**: Track comparisons, swaps, and execution time
- **Adjustable Speed**: Control animation speed from 1-10
- **Dynamic Array Size**: Visualize arrays from 5 to 50 elements

### Supported Algorithms
- **Bubble Sort** - O(n²) time complexity
- **Quick Sort** - O(n log n) average time complexity
- **Merge Sort** - O(n log n) time complexity
- **Insertion Sort** - O(n²) time complexity
- **Selection Sort** - O(n²) time complexity
- **Heap Sort** - O(n log n) time complexity

### Educational Content
- **Algorithm Information**: Detailed descriptions and complexity analysis
- **Code Examples**: View JavaScript implementations for each algorithm
- **Performance Comparison**: Compare multiple algorithms side-by-side
- **Complexity Badges**: Quick reference for time and space complexity

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No server setup required - runs entirely in the browser

### Installation

1. **Clone or Download the Repository**
   ```bash
   git clone <repository-url>
   cd sorting-visualizer
   ```

2. **Open in Browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     
     # Node.js (with http-server)
     npx http-server
     ```

3. **Start Visualizing!**
   - Navigate to `http://localhost:8000` if using a local server
   - Or directly open the `index.html` file

## 📖 How to Use

### Visualizer Tab
1. Select an algorithm from the dropdown menu
2. Adjust the array size (5-50 elements)
3. Set your preferred animation speed
4. Click "Generate Array" to create a random array
5. Press "Start Sorting" to begin the visualization
6. Monitor real-time statistics on the left panel
7. View algorithm details on the right panel

### Algorithms Tab
- Browse through detailed information cards for each algorithm
- Learn about best, average, and worst-case scenarios
- Understand space complexity and stability properties

### Code Tab
- View clean JavaScript implementations
- Study the logic behind each sorting algorithm
- Copy code snippets for your own projects

### Compare Tab
1. Select 2 or more algorithms to compare
2. Click "Run Comparison"
3. View results in a detailed table
4. Analyze performance with the visual chart

## 🎨 Visual Elements

### Color Coding
- **Blue**: Normal state (unsorted elements)
- **Red**: Comparing elements
- **Orange**: Swapping elements
- **Green**: Sorted elements

### 3D Effects
- Perspective transforms for depth perception
- Hover effects on panels and cards
- Smooth transitions and animations
- Gradient backgrounds and shadows

## 📁 Project Structure

```
sorting-visualizer/
│
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Core JavaScript logic
└── README.md          # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and Canvas API
- **CSS3**: Advanced styling, animations, and 3D transforms
- **JavaScript (ES6+)**: Async/await, arrow functions, modern syntax
- **Canvas API**: 3D bar rendering and animations
- **Font Awesome**: Icon library
- **Google Fonts**: Poppins font family

## 🎯 Key Features Explained

### Adaptive Performance
- Automatically adjusts visualization speed
- Handles arrays of varying sizes efficiently
- Smooth animations without blocking the UI

### Responsive Design
- Works on desktop, tablet, and mobile devices
- Adaptive layouts for different screen sizes
- Touch-friendly controls

### Educational Focus
- Clear complexity notations (Big O)
- Best/average/worst case explanations
- Stability indicators
- Real-world use cases

## 🔧 Customization

### Modify Colors
Edit the color schemes in `styles.css`:
```css
.array-element.comparing {
    background: linear-gradient(135deg, #e74c3c, #c0392b);
}
```

### Add New Algorithms
1. Add algorithm info to `algorithmInfo` object in `script.js`
2. Implement the animated version (e.g., `newAlgorithmAnimated()`)
3. Add test version for comparisons (e.g., `newAlgorithmTest()`)
4. Update HTML with new option and code block

### Adjust Animation Speed
Modify delay calculation in `script.js`:
```javascript
await delay(101 - speed * 10);
```

## 📊 Performance Comparison

The comparison feature allows you to:
- Test algorithms with identical random arrays
- Measure execution time in milliseconds
- Count comparisons and swaps
- Generate efficiency ratings
- Visualize results in a bar chart

## 🐛 Known Issues

- Very large arrays (>50 elements) may cause performance degradation
- Mobile devices may experience slower animations
- Canvas rendering may vary across browsers

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Sorting algorithm concepts from computer science fundamentals
- Design inspiration from modern web applications
- Font Awesome for icons
- Google Fonts for typography

## 📧 Contact

For questions, suggestions, or feedback, please open an issue on the repository.

---

**Happy Sorting! 🎉**

*Learn, visualize, and master sorting algorithms with interactive 3D animations.*
