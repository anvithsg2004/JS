class Counter {
    static count = 0;

    static increment() {
        this.count++;
        console.log(`Count is now ${this.count}`);
    }
}

Counter.increment(); // Count is now 1
Counter.increment(); // Count is now 2
