class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return index * 2 + 1;
    }

    getRightChildIndex(index) {
        return index * 2 + 2;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return minValue;
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        while (currentIndex > 0) {
            const parentIndex = this.getParentIndex(currentIndex);
            if (this.heap[currentIndex] >= this.heap[parentIndex]) break;
            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
        }
    }

    heapifyDown() {
        let currentIndex = 0;
        while (this.getLeftChildIndex(currentIndex) < this.heap.length) {
            const leftChildIndex = this.getLeftChildIndex(currentIndex);
            const rightChildIndex = this.getRightChildIndex(currentIndex);
            const smallerChildIndex = rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[leftChildIndex] ? rightChildIndex : leftChildIndex;
            if (this.heap[currentIndex] <= this.heap[smallerChildIndex]) break;
            this.swap(currentIndex, smallerChildIndex);
            currentIndex = smallerChildIndex;
        }
    }
}

function solution(scoville, K) {
    const heap = new MinHeap();
    scoville.forEach(value => heap.push(value));
    let count = 0;

    while (heap.heap.length > 1 && heap.heap[0] < K) {
        const first = heap.pop();
        const second = heap.pop();
        const mixed = first + second * 2;
        heap.push(mixed);
        count++;
    }

    return heap.heap[0] >= K ? count : -1;
}
