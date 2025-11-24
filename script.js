let canvas, ctx;
let array = [];
let arraySize = 20;
let speed = 5;
let currentAlgorithm = 'bubble';
let isAnimating = false;
let animationId = null;

let stats = {
    comparisons: 0,
    swaps: 0,
    startTime: 0,
    endTime: 0
};

const algorithmInfo = {
    bubble: {
        name: 'Bubble Sort',
        description: 'Bubble sort repeatedly compares adjacent elements and swaps them if they\'re in the wrong order.',
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(1)'
    },
    quick: {
        name: 'Quick Sort',
        description: 'Quick sort picks a pivot element and partitions the array around it, then recursively sorts the sub-arrays.',
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(log n)'
    },
    merge: {
        name: 'Merge Sort',
        description: 'Merge sort divides the array into halves, sorts them, and then merges them back together.',
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(n)'
    },
    insertion: {
        name: 'Insertion Sort',
        description: 'Insertion sort builds the final sorted array one item at a time by inserting each element into its proper position.',
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(1)'
    },
    selection: {
        name: 'Selection Sort',
        description: 'Selection sort finds the minimum element from the unsorted part and places it at the beginning.',
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(1)'
    },
    heap: {
        name: 'Heap Sort',
        description: 'Heap sort uses a binary heap data structure to sort elements by repeatedly extracting the maximum element.',
        timeComplexity: 'O(n log n)',
        spaceComplexity: 'O(1)'
    }
};

document.addEventListener('DOMContentLoaded', function() {
    initializeCanvas();
    setupEventListeners();
    generateArray();
    updateAlgorithmInfo();
    initializeNavigation();
    initializeCodeSection();
});

function initializeCanvas() {
    canvas = document.getElementById('visualization-canvas');
    ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        const container = document.getElementById('canvas-container');
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        drawArray();
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
}

function setupEventListeners() {
    document.getElementById('algorithm-select').addEventListener('change', function(e) {
        currentAlgorithm = e.target.value;
        updateAlgorithmInfo();
    });
    
    const arraySizeSlider = document.getElementById('array-size');
    const arraySizeValue = document.getElementById('array-size-value');
    
    arraySizeSlider.addEventListener('input', function(e) {
        arraySize = parseInt(e.target.value);
        arraySizeValue.textContent = arraySize;
        if (!isAnimating) {
            generateArray();
        }
    });
    
    const speedSlider = document.getElementById('speed');
    const speedValue = document.getElementById('speed-value');
    
    speedSlider.addEventListener('input', function(e) {
        speed = parseInt(e.target.value);
        speedValue.textContent = speed;
    });
    
    document.getElementById('generate-btn').addEventListener('click', generateArray);
    document.getElementById('start-btn').addEventListener('click', startSorting);
    document.getElementById('reset-btn').addEventListener('click', resetVisualization);
    
    document.getElementById('run-comparison').addEventListener('click', runComparison);
}

function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');
    
    navButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetSection = this.dataset.section;
            
            navButtons.forEach(navBtn => navBtn.classList.remove('active'));
            this.classList.add('active');
            
            sections.forEach(section => section.classList.remove('active'));
            document.getElementById(targetSection).classList.add('active');
        });
    });
}

function initializeCodeSection() {
    const codeButtons = document.querySelectorAll('.code-btn');
    const codeBlocks = document.querySelectorAll('.code-block');
    
    codeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetCode = this.dataset.code;
            
            codeButtons.forEach(codeBtn => codeBtn.classList.remove('active'));
            this.classList.add('active');
            
            codeBlocks.forEach(block => block.classList.remove('active'));
            document.getElementById(`code-${targetCode}`).classList.add('active');
        });
    });
}

function generateArray() {
    array = [];
    for (let i = 0; i < arraySize; i++) {
        array.push({
            value: Math.floor(Math.random() * 300) + 10,
            state: 'normal',
            x: 0,
            y: 0,
            z: 0
        });
    }
    resetStats();
    drawArray();
    updateControlsState(false);
}

function resetStats() {
    stats.comparisons = 0;
    stats.swaps = 0;
    stats.startTime = 0;
    stats.endTime = 0;
    updateStatsDisplay();
}

function updateStatsDisplay() {
    document.getElementById('comparisons').textContent = stats.comparisons;
    document.getElementById('swaps').textContent = stats.swaps;
    
    const elapsed = stats.endTime > 0 ? stats.endTime - stats.startTime : 
                   stats.startTime > 0 ? Date.now() - stats.startTime : 0;
    document.getElementById('time').textContent = elapsed + 'ms';
}

function updateAlgorithmInfo() {
    const info = algorithmInfo[currentAlgorithm];
    document.getElementById('current-algorithm').textContent = info.name;
    document.getElementById('algorithm-description').textContent = info.description;
    document.getElementById('time-complexity').textContent = info.timeComplexity;
    document.getElementById('space-complexity').textContent = info.spaceComplexity;
}

function drawArray() {
    if (!ctx || !canvas) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const padding = 20;
    const elementWidth = Math.max(10, (canvas.width - padding * 2) / arraySize - 2);
    const maxHeight = canvas.height - padding * 2;
    
    drawBackground();
    
    array.forEach((element, index) => {
        const x = padding + index * (elementWidth + 2);
        const height = (element.value / 300) * maxHeight;
        const y = canvas.height - padding - height;
        
        const depth = 20;
        const offsetX = depth * 0.5;
        const offsetY = depth * 0.3;
        
        drawElement3D(x, y, elementWidth, height, depth, element, index);
    });
    
    updateStatsDisplay();
}

function drawBackground() {
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.3;
    
    for (let i = 0; i <= 10; i++) {
        const x = (canvas.width / 10) * i;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    
    for (let i = 0; i <= 8; i++) {
        const y = (canvas.height / 8) * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
    
    ctx.globalAlpha = 1;
}

function drawElement3D(x, y, width, height, depth, element, index) {
    const offsetX = depth * 0.5;
    const offsetY = depth * 0.3;
    
    let frontColor, topColor, sideColor;
    
    switch (element.state) {
        case 'comparing':
            frontColor = '#e74c3c';
            topColor = '#c0392b';
            sideColor = '#a93226';
            break;
        case 'swapping':
            frontColor = '#f39c12';
            topColor = '#e67e22';
            sideColor = '#d35400';
            break;
        case 'sorted':
            frontColor = '#27ae60';
            topColor = '#2ecc71';
            sideColor = '#229954';
            break;
        default:
            frontColor = '#3498db';
            topColor = '#5dade2';
            sideColor = '#2980b9';
    }
    
    ctx.fillStyle = sideColor;
    ctx.fillRect(x + offsetX, y - offsetY, width, height);
    
    ctx.fillStyle = sideColor;
    ctx.beginPath();
    ctx.moveTo(x + width, y);
    ctx.lineTo(x + width + offsetX, y - offsetY);
    ctx.lineTo(x + width + offsetX, y + height - offsetY);
    ctx.lineTo(x + width, y + height);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = topColor;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + offsetX, y - offsetY);
    ctx.lineTo(x + width + offsetX, y - offsetY);
    ctx.lineTo(x + width, y);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = frontColor;
    ctx.fillRect(x, y, width, height);
    
    ctx.strokeStyle = '#2c3e50';
    ctx.lineWidth = 1;
    ctx.strokeRect(x, y, width, height);
    
    ctx.fillStyle = '#fff';
    ctx.font = `${Math.min(12, width * 0.6)}px Poppins`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    if (width > 15) {
        ctx.fillText(element.value, x + width / 2, y + height / 2);
    }
    
    ctx.fillStyle = '#666';
    ctx.font = '10px Poppins';
    ctx.fillText(index, x + width / 2, y + height + 15);
}

function updateControlsState(animating) {
    isAnimating = animating;
    document.getElementById('start-btn').disabled = animating;
    document.getElementById('generate-btn').disabled = animating;
    document.getElementById('array-size').disabled = animating;
    document.getElementById('algorithm-select').disabled = animating;
    
    if (animating) {
        document.getElementById('start-btn').innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sorting...';
    } else {
        document.getElementById('start-btn').innerHTML = '<i class="fas fa-play"></i> Start Sorting';
    }
}

async function startSorting() {
    if (isAnimating) return;
    
    updateControlsState(true);
    stats.startTime = Date.now();
    
    array.forEach(element => element.state = 'normal');
    
    try {
        switch (currentAlgorithm) {
            case 'bubble':
                await bubbleSortAnimated();
                break;
            case 'quick':
                await quickSortAnimated(0, array.length - 1);
                break;
            case 'merge':
                await mergeSortAnimated(0, array.length - 1);
                break;
            case 'insertion':
                await insertionSortAnimated();
                break;
            case 'selection':
                await selectionSortAnimated();
                break;
            case 'heap':
                await heapSortAnimated();
                break;
        }
        
        array.forEach(element => element.state = 'sorted');
        drawArray();
        
    } catch (error) {
        console.error('Sorting error:', error);
    }
    
    stats.endTime = Date.now();
    updateControlsState(false);
}

function resetVisualization() {
    if (animationId) {
        cancelAnimationFrame(animationId);
    }
    updateControlsState(false);
    generateArray();
}

async function bubbleSortAnimated() {
    const n = array.length;
    
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        
        for (let j = 0; j < n - i - 1; j++) {
            array[j].state = 'comparing';
            array[j + 1].state = 'comparing';
            stats.comparisons++;
            
            drawArray();
            await delay(101 - speed * 10);
            
            if (array[j].value > array[j + 1].value) {
                array[j].state = 'swapping';
                array[j + 1].state = 'swapping';
                
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                stats.swaps++;
                swapped = true;
                
                drawArray();
                await delay(101 - speed * 10);
            }
            
            array[j].state = 'normal';
            array[j + 1].state = 'normal';
        }
        
        array[n - i - 1].state = 'sorted';
        
        if (!swapped) break;
    }
    
    if (array.length > 0) {
        array[0].state = 'sorted';
    }
}

async function quickSortAnimated(low, high) {
    if (low < high) {
        const pivotIndex = await partitionAnimated(low, high);
        await quickSortAnimated(low, pivotIndex - 1);
        await quickSortAnimated(pivotIndex + 1, high);
    }
}

async function partitionAnimated(low, high) {
    const pivot = array[high].value;
    array[high].state = 'comparing';
    
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        array[j].state = 'comparing';
        stats.comparisons++;
        
        drawArray();
        await delay(101 - speed * 10);
        
        if (array[j].value <= pivot) {
            i++;
            if (i !== j) {
                array[i].state = 'swapping';
                array[j].state = 'swapping';
                
                [array[i], array[j]] = [array[j], array[i]];
                stats.swaps++;
                
                drawArray();
                await delay(101 - speed * 10);
            }
        }
        
        array[j].state = 'normal';
        if (i >= 0) array[i].state = 'normal';
    }
    
    if (i + 1 !== high) {
        array[i + 1].state = 'swapping';
        array[high].state = 'swapping';
        
        [array[i + 1], array[high]] = [array[high], array[i + 1]];
        stats.swaps++;
        
        drawArray();
        await delay(101 - speed * 10);
    }
    
    array[i + 1].state = 'sorted';
    array[high].state = 'normal';
    
    return i + 1;
}

async function mergeSortAnimated(left, right) {
    if (left >= right) return;
    
    const mid = Math.floor((left + right) / 2);
    
    await mergeSortAnimated(left, mid);
    await mergeSortAnimated(mid + 1, right);
    await mergeAnimated(left, mid, right);
}

async function mergeAnimated(left, mid, right) {
    const leftArray = array.slice(left, mid + 1);
    const rightArray = array.slice(mid + 1, right + 1);
    
    let i = 0, j = 0, k = left;
    
    while (i < leftArray.length && j < rightArray.length) {
        array[left + i].state = 'comparing';
        array[mid + 1 + j].state = 'comparing';
        stats.comparisons++;
        
        drawArray();
        await delay(101 - speed * 10);
        
        if (leftArray[i].value <= rightArray[j].value) {
            array[k] = leftArray[i];
            i++;
        } else {
            array[k] = rightArray[j];
            j++;
        }
        
        array[k].state = 'swapping';
        stats.swaps++;
        k++;
        
        drawArray();
        await delay(101 - speed * 10);
        
        array[k - 1].state = 'normal';
    }
    
    while (i < leftArray.length) {
        array[k] = leftArray[i];
        array[k].state = 'swapping';
        stats.swaps++;
        i++;
        k++;
        
        drawArray();
        await delay(101 - speed * 10);
        
        array[k - 1].state = 'normal';
    }
    
    while (j < rightArray.length) {
        array[k] = rightArray[j];
        array[k].state = 'swapping';
        stats.swaps++;
        j++;
        k++;
        
        drawArray();
        await delay(101 - speed * 10);
        
        array[k - 1].state = 'normal';
    }
}

async function insertionSortAnimated() {
    for (let i = 1; i < array.length; i++) {
        const key = array[i];
        let j = i - 1;
        
        array[i].state = 'comparing';
        
        while (j >= 0) {
            array[j].state = 'comparing';
            stats.comparisons++;
            
            drawArray();
            await delay(101 - speed * 10);
            
            if (array[j].value <= key.value) {
                array[j].state = 'normal';
                break;
            }
            
            array[j + 1] = array[j];
            array[j + 1].state = 'swapping';
            stats.swaps++;
            
            drawArray();
            await delay(101 - speed * 10);
            
            array[j].state = 'normal';
            array[j + 1].state = 'normal';
            j--;
        }
        
        array[j + 1] = key;
        array[j + 1].state = 'normal';
    }
}

async function selectionSortAnimated() {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        array[i].state = 'comparing';
        
        for (let j = i + 1; j < array.length; j++) {
            array[j].state = 'comparing';
            stats.comparisons++;
            
            drawArray();
            await delay(101 - speed * 10);
            
            if (array[j].value < array[minIndex].value) {
                if (minIndex !== i) array[minIndex].state = 'normal';
                minIndex = j;
                array[minIndex].state = 'comparing';
            } else {
                array[j].state = 'normal';
            }
        }
        
        if (minIndex !== i) {
            array[i].state = 'swapping';
            array[minIndex].state = 'swapping';
            
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
            stats.swaps++;
            
            drawArray();
            await delay(101 - speed * 10);
        }
        
        array[i].state = 'sorted';
        if (minIndex !== i) array[minIndex].state = 'normal';
    }
    
    if (array.length > 0) {
        array[array.length - 1].state = 'sorted';
    }
}

async function heapSortAnimated() {
    const n = array.length;
    
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapifyAnimated(n, i);
    }
    
    for (let i = n - 1; i > 0; i--) {
        array[0].state = 'swapping';
        array[i].state = 'swapping';
        
        [array[0], array[i]] = [array[i], array[0]];
        stats.swaps++;
        
        drawArray();
        await delay(101 - speed * 10);
        
        array[i].state = 'sorted';
        array[0].state = 'normal';
        
        await heapifyAnimated(i, 0);
    }
    
    if (array.length > 0) {
        array[0].state = 'sorted';
    }
}

async function heapifyAnimated(n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    
    array[i].state = 'comparing';
    
    if (left < n) {
        array[left].state = 'comparing';
        stats.comparisons++;
        
        drawArray();
        await delay(101 - speed * 10);
        
        if (array[left].value > array[largest].value) {
            largest = left;
        }
        
        array[left].state = 'normal';
    }
    
    if (right < n) {
        array[right].state = 'comparing';
        stats.comparisons++;
        
        drawArray();
        await delay(101 - speed * 10);
        
        if (array[right].value > array[largest].value) {
            largest = right;
        }
        
        array[right].state = 'normal';
    }
    
    if (largest !== i) {
        array[i].state = 'swapping';
        array[largest].state = 'swapping';
        
        [array[i], array[largest]] = [array[largest], array[i]];
        stats.swaps++;
        
        drawArray();
        await delay(101 - speed * 10);
        
        array[i].state = 'normal';
        array[largest].state = 'normal';
        
        await heapifyAnimated(n, largest);
    } else {
        array[i].state = 'normal';
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function runComparison() {
    const checkboxes = document.querySelectorAll('.algorithm-checkboxes input:checked');
    const selectedAlgorithms = Array.from(checkboxes).map(cb => cb.value);
    
    if (selectedAlgorithms.length < 2) {
        alert('Please select at least 2 algorithms to compare.');
        return;
    }
    
    const resultsContainer = document.getElementById('comparison-results');
    const tbody = document.getElementById('results-tbody');
    
    tbody.innerHTML = '';
    
    const testData = generateTestArray();
    const results = [];
    
    for (const algorithm of selectedAlgorithms) {
        const result = await runAlgorithmTest(algorithm, [...testData]);
        results.push({
            algorithm: algorithmInfo[algorithm].name,
            time: result.time,
            comparisons: result.comparisons,
            swaps: result.swaps,
            efficiency: calculateEfficiency(result)
        });
    }
    
    results.sort((a, b) => a.time - b.time);
    
    // Display results
    results.forEach((result, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${result.algorithm}</td>
            <td>${result.time}ms</td>
            <td>${result.comparisons}</td>
            <td>${result.swaps}</td>
            <td>${getEfficiencyBadge(index, results.length)}</td>
        `;
        tbody.appendChild(row);
    });
    
    resultsContainer.classList.add('active');
    
    createComparisonChart(results);
}

function generateTestArray() {
    const testArray = [];
    for (let i = 0; i < 30; i++) {
        testArray.push({
            value: Math.floor(Math.random() * 300) + 10,
            state: 'normal'
        });
    }
    return testArray;
}

async function runAlgorithmTest(algorithm, testArray) {
    const startTime = Date.now();
    let comparisons = 0;
    let swaps = 0;
    
    switch (algorithm) {
        case 'bubble':
            ({ comparisons, swaps } = bubbleSortTest(testArray));
            break;
        case 'quick':
            ({ comparisons, swaps } = quickSortTest(testArray));
            break;
        case 'merge':
            ({ comparisons, swaps } = mergeSortTest(testArray));
            break;
        case 'insertion':
            ({ comparisons, swaps } = insertionSortTest(testArray));
            break;
        case 'selection':
            ({ comparisons, swaps } = selectionSortTest(testArray));
            break;
        case 'heap':
            ({ comparisons, swaps } = heapSortTest(testArray));
            break;
    }
    
    const endTime = Date.now();
    
    return {
        time: endTime - startTime,
        comparisons,
        swaps
    };
}

function bubbleSortTest(arr) {
    let comparisons = 0;
    let swaps = 0;
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            comparisons++;
            if (arr[j].value > arr[j + 1].value) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swaps++;
            }
        }
    }
    
    return { comparisons, swaps };
}

function quickSortTest(arr) {
    let comparisons = 0;
    let swaps = 0;
    
    function quickSort(low, high) {
        if (low < high) {
            const pi = partition(low, high);
            quickSort(low, pi - 1);
            quickSort(pi + 1, high);
        }
    }
    
    function partition(low, high) {
        const pivot = arr[high].value;
        let i = low - 1;
        
        for (let j = low; j < high; j++) {
            comparisons++;
            if (arr[j].value <= pivot) {
                i++;
                if (i !== j) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    swaps++;
                }
            }
        }
        
        if (i + 1 !== high) {
            [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
            swaps++;
        }
        
        return i + 1;
    }
    
    quickSort(0, arr.length - 1);
    return { comparisons, swaps };
}

function mergeSortTest(arr) {
    let comparisons = 0;
    let swaps = 0;
    
    function mergeSort(left, right) {
        if (left >= right) return;
        
        const mid = Math.floor((left + right) / 2);
        mergeSort(left, mid);
        mergeSort(mid + 1, right);
        merge(left, mid, right);
    }
    
    function merge(left, mid, right) {
        const leftArray = arr.slice(left, mid + 1);
        const rightArray = arr.slice(mid + 1, right + 1);
        
        let i = 0, j = 0, k = left;
        
        while (i < leftArray.length && j < rightArray.length) {
            comparisons++;
            if (leftArray[i].value <= rightArray[j].value) {
                arr[k] = leftArray[i];
                i++;
            } else {
                arr[k] = rightArray[j];
                j++;
            }
            swaps++;
            k++;
        }
        
        while (i < leftArray.length) {
            arr[k] = leftArray[i];
            swaps++;
            i++;
            k++;
        }
        
        while (j < rightArray.length) {
            arr[k] = rightArray[j];
            swaps++;
            j++;
            k++;
        }
    }
    
    mergeSort(0, arr.length - 1);
    return { comparisons, swaps };
}

function insertionSortTest(arr) {
    let comparisons = 0;
    let swaps = 0;
    
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;
        
        while (j >= 0) {
            comparisons++;
            if (arr[j].value <= key.value) break;
            
            arr[j + 1] = arr[j];
            swaps++;
            j--;
        }
        
        arr[j + 1] = key;
    }
    
    return { comparisons, swaps };
}

function selectionSortTest(arr) {
    let comparisons = 0;
    let swaps = 0;
    
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < arr.length; j++) {
            comparisons++;
            if (arr[j].value < arr[minIndex].value) {
                minIndex = j;
            }
        }
        
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            swaps++;
        }
    }
    
    return { comparisons, swaps };
}

function heapSortTest(arr) {
    let comparisons = 0;
    let swaps = 0;
    const n = arr.length;
    
    function heapify(n, i) {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        
        if (left < n) {
            comparisons++;
            if (arr[left].value > arr[largest].value) {
                largest = left;
            }
        }
        
        if (right < n) {
            comparisons++;
            if (arr[right].value > arr[largest].value) {
                largest = right;
            }
        }
        
        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            swaps++;
            heapify(n, largest);
        }
    }

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(n, i);
    }
    
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        swaps++;
        heapify(i, 0);
    }
    
    return { comparisons, swaps };
}

function calculateEfficiency(result) {
    return Math.round(10000 / (result.time + result.comparisons * 0.1 + result.swaps * 0.2));
}

function getEfficiencyBadge(rank, total) {
    const percentage = ((total - rank) / total) * 100;
    
    if (percentage >= 80) return '<span class="badge badge-excellent">Excellent</span>';
    if (percentage >= 60) return '<span class="badge badge-good">Good</span>';
    if (percentage >= 40) return '<span class="badge badge-average">Average</span>';
    return '<span class="badge badge-poor">Poor</span>';
}

function createComparisonChart(results) {
    const canvas = document.getElementById('comparison-chart');
    const ctx = canvas.getContext('2d');
    
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    const padding = 40;
    const barWidth = (canvas.width - padding * 2) / results.length - 10;
    const maxTime = Math.max(...results.map(r => r.time));
    const barMaxHeight = canvas.height - padding * 2;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    results.forEach((result, index) => {
        const x = padding + index * (barWidth + 10);
        const height = (result.time / maxTime) * barMaxHeight;
        const y = canvas.height - padding - height;
        
        const gradient = ctx.createLinearGradient(0, y, 0, y + height);
        gradient.addColorStop(0, '#3498db');
        gradient.addColorStop(1, '#2980b9');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth, height);
        
        ctx.strokeStyle = '#2c3e50';
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, barWidth, height);
        
        ctx.fillStyle = '#2c3e50';
        ctx.font = '12px Poppins';
        ctx.textAlign = 'center';
        ctx.fillText(result.algorithm, x + barWidth / 2, canvas.height - 10);
        
        ctx.fillText(result.time + 'ms', x + barWidth / 2, y - 10);
    });
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'exclamation' : 'info'}-circle"></i>
        ${message}
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
}

const notificationStyles = `
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    transform: translateX(400px);
    transition: transform 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.notification.show {
    transform: translateX(0);
}

.notification-success { border-left: 4px solid #27ae60; }
.notification-error { border-left: 4px solid #e74c3c; }
.notification-info { border-left: 4px solid #3498db; }

.badge {
    padding: 0.2rem 0.5rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    color: white;
}

.badge-excellent { background: #27ae60; }
.badge-good { background: #f39c12; }
.badge-average { background: #e67e22; }
.badge-poor { background: #e74c3c; }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);